import json
import client as Client
import payment as Payment
import topclientblockwriter as TopClientsBlockWriter
import topcitiesblockwriter as TopCitiesBlockWriter
import  quarterlyreportorchestrtor as QuarterlyReportOrchestrator

def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

if __name__ == '__main__':
    clients_data = read_json('clients.json')
    payments_data = read_json('payments.json')

    clients = [Client.Client.from_dict(client) for client in clients_data['clients']]
    payments = [Payment.Payment.from_dict(payment) for payment in payments_data['payments']]

    block_writers = [TopClientsBlockWriter.TopClientsBlockWriter, TopCitiesBlockWriter.TopCitiesBlockWriter]
    orchestrator = QuarterlyReportOrchestrator.QuarterlyReportOrchestrator(block_writers)
    orchestrator.generate_report(clients, payments)

