def median_sum(N, sequence):
    import heapq

    left_half = []  # Макс-куча для левой половины элементов
    right_half = []  # Мин-куча для правой половины элементов
    medians_sum = 0  # Сумма медианных значений

    for i in range(N):
        # Добавляем элемент в соответствующую кучу
        if not left_half or sequence[i] < -left_half[0]:
            heapq.heappush(left_half, -sequence[i])
        else:
            heapq.heappush(right_half, sequence[i])

        # Балансируем кучи
        if len(left_half) > len(right_half) + 1:
            heapq.heappush(right_half, -heapq.heappop(left_half))
        elif len(right_half) > len(left_half):
            heapq.heappush(left_half, -heapq.heappop(right_half))

        # Вычисляем медиану
        if i % 2 == 0:
            medians_sum += -left_half[0]
        else:
            medians_sum += min(-left_half[0], right_half[0])

    return medians_sum

# Чтение входных данных из файла input.txt
with open('input.txt', 'r') as file:
    N = int(file.readline())
    sequence = list(map(int, file.readline().split()))

# Вызов функции для вычисления суммы медианных значений
result = median_sum(N, sequence)

# Запись результата в файл output.txt
with open('output.txt', 'w') as file:
    file.write(str(result))
