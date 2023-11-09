""" saludo = "Hola!"

def saludar():
    print(saludo) """

def imprimir_mensaje_arg(cant = 5):
   for i in range(cant):
       print("Este es el mensaje " + str(i))

imprimir_mensaje_arg()

def imprimir_mensaje():
   """Definir la cantidad"""
   cant = int(input("Cuantas veces?"))
   """Documentacion de la accion posterior -> DocString"""
   for i in range(cant):
       print("Este es el mensaje " + str(i))

# Invocación de la función

def imprimir_mensaje_N_veces(n, m):
   for i in range(n):
       print(m)

# mensaje = input("Mensaje: ")
# veces = int(input("Nro. de veces que desea imprimir: "))
# imprimir_mensaje_N_veces(veces, mensaje)

# Devolucion de valores -> return

# variables de ambito global


def restar(num1,num2):
    # variables de ambito local
   resta= num1-num2
   return resta # Retorna un valor

# Programa principal
# resultado = restar(10,6)
# print(f'El Resultado es: {resultado}')


""" Funciones de tablas de multiplicar """

# 1- Genera la tabla del "n"
def calcular(n = 1):
   tabla = []
   for i in range(0,11):
       tabla.append(f"{n}x{i}={n*i}")
   return tabla

# 2- Muestra en terminal la tabla elegida
def calcular_tabla(i):
    print(f"Tabla del {i}:")
    tabla = calcular(i)
    for j in tabla:
        print(j)
    print("-"*10)

# 3- Muestra en terminal todas las tablas
def calcular_todas():
   for i in range(0,11):
       print(f"Tabla del {i}:")
       tabla = calcular(i)
       for j in tabla:
           print(j)
       print("-"*10)

# calcular_todas()
calcular_tabla(int(input("De que numero queres ver la tabla?")))

