import blockwriter as BlockWriter

class TopCitiesBlockWriter(BlockWriter.BlockWriter):
    def write_block(self, sheet, clients, payments):
        city_count = {}
        for client in clients:
            city_count[client.city] = city_count.get(client.city, 0) + 1

        top_cities = sorted(city_count.items(), key=lambda x: x[1], reverse=True)[:10]

        city_position = 0
        sheet.write(city_position, 10, "Топ 10 городов по количеству клиентов")

        for i, (city, count) in enumerate(top_cities, start=1):
            sheet.write(city_position + i, 10, f"{i}. {city} - {count} клиентов")


