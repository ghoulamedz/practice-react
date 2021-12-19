rows = int(input('input rows :'))
columns = int(input('input columns :'))

for i in range(rows) :
    for j in range(columns-1) :
        print('*',end='')
    print("*")
