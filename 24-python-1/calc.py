''' Calculador '''

# definir las funciones de las operaciones + - / *
def sumar(a,b):
    return a + b
def restar(a,b):
    return a - b
def multi(a,b):
    return a * b
def divi(a,b):
    return a / b

def calculadora():
    # elegir operacion
    print("Escribir el numero la operacion a realizar:")
    print("1- Sumar")
    print("2- Restar")
    print("3- Mutiplicar")
    print("4- Dividir")
    opcion = int(input("Elegí la operacion a realizar: "))

    # insertar los numeros
    num1 = int(input("Numero 1"))
    num2 = int(input("Numero 2"))

    # comparar signo para realizar la operacion

    if(opcion == 1):
        print(f'{num1} + {num2} = {sumar(num1,num2)}')
    elif(opcion == 2):
        print(f'{num1} - {num2} = {restar(num1,num2)}') 
    elif(opcion == 3):
        print(f'{num1} * {num2} = {multi(num1,num2)}')
    else:
        if(num2==0 ):
            print("No es posible dividir por 0")
        else:
            print(f'{num1} / {num2} = {divi(num1,num2)}')

calculadora()