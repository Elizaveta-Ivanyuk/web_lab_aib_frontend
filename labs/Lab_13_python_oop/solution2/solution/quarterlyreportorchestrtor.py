from typing import List, Type
import blockwriter as BlockWriter
import xlsxwriter
from datetime import datetime

class QuarterlyReportOrchestrator:
    def __init__(self, block_writers: List[Type[BlockWriter.BlockWriter]]):
        self.block_writers = block_writers

    def generate_report(self, clients, payments):
        date_string = datetime.now().strftime("%Y_%m_%d")
        output_file = f'my_payments_analytics_{date_string}.xlsx'
        workbook = xlsxwriter.Workbook(output_file)
        sheet = workbook.add_worksheet()

        for block_writer_cls in self.block_writers:
            block_writer = block_writer_cls()
            block_writer.write_block(sheet, clients, payments)

        workbook.close()
