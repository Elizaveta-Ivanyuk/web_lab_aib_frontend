import json
import xlsxwriter
import client as Client
import payment as Payment
from datetime import datetime

def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

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

def generate_report(clients, payments):
    date_string = datetime.now().strftime("%Y_%m_%d")
    output_file = f'my_payments_analytics_{date_string}.xlsx'
    workbook = xlsxwriter.Workbook(output_file)
    sheet = workbook.add_worksheet()

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
            payment for payment, client in zip(data['payments'], data['clients']) if client == client_id), reverse=True)[:10]

        sheet.write(start_position, 0, f"Топ 10 клиентов с самым большим балансом в квартале {quarter}")

        for i, client_id in enumerate(top_clients_by_balance, start=1):
            client = next((client for client in clients if client.id == client_id), None)
            if client:
                sheet.write(start_position + i, 0, f"{i}. {client.fio} ({client.email}) - {sum(payment for payment, c_id in zip(data['payments'], data['clients']) if c_id == client_id)}")

    city_count = {}
    for client in clients:
        city_count[client.city] = city_count.get(client.city, 0) + 1

    top_cities = sorted(city_count.items(), key=lambda x: x[1], reverse=True)[:10]

    city_position = 0
    sheet.write(city_position, 10, "Топ 10 городов по количеству клиентов")

    for i, (city, count) in enumerate(top_cities, start=1):
        sheet.write(city_position + i, 10, f"{i}. {city} - {count} клиентов")

    workbook.close()

if __name__ == '__main__':
    clients_data = read_json('clients.json')
    payments_data = read_json('payments.json')

    clients = [Client.Client.from_dict(client) for client in clients_data['clients']]
    payments = [Payment.Payment.from_dict(payment) for payment in payments_data['payments']]

    generate_report(clients, payments)

