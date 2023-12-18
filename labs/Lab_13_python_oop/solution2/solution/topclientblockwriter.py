import blockwriter as BlockWriter
from datetime import datetime

def get_quarter(date):
    month = datetime.strptime(date, "%Y-%m-%dT%H:%M:%S.%fZ").month
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    else:
        return 4

class TopClientsBlockWriter(BlockWriter.BlockWriter):
    def write_block(self, sheet, clients, payments):
        quarterly_data = {}

        for payment in payments:
            quarter = get_quarter(payment.created_at)
            if quarter not in quarterly_data:
                quarterly_data[quarter] = {'clients': [], 'payments': []}
            quarterly_data[quarter]['clients'].append(payment.client_id)
            quarterly_data[quarter]['payments'].append(payment.amount)

        for quarter, data in quarterly_data.items():
            start_position = (quarter - 1) * 12
            top_clients_by_balance = sorted(set(data['clients']), key=lambda client_id: sum(
                payment for payment, client in zip(data['payments'], data['clients']) if client == client_id),
                                            reverse=True)[:10]

            sheet.write(start_position, 0, f"Топ 10 клиентов с самым большим балансом в квартале {quarter}")

            for i, client_id in enumerate(top_clients_by_balance, start=1):
                client = next((client for client in clients if client.id == client_id), None)
                if client:
                    sheet.write(start_position + i, 0,
                                f"{i}. {client.fio} ({client.email}) - {sum(payment for payment, c_id in zip(data['payments'], data['clients']) if c_id == client_id)}")
