'''
Comentario
multilinea
'''
#comentario de linea

nombre = "Maria" #variable
print("Hola",nombre,end="!") #llamada a la consola
print("Hola"+nombre)
print(f'Hola {nombre}')

#tipos de datos
numericos = 10
string = "cadenas"
booleano = True
floats = 1.34

#cuadro de dialogo -> input
'''
buscarNombre = input("Cual es tu nombre?")
print("Hola",buscarNombre)
# str() -> int() -> float() -> bool() 
cargarNumero = int(input("insertar numero"))
print(cargarNumero * 20)
'''

#comparaciones

num1 = 4
num2 = 4.0

resultado = num1 == num2
#print(int(num1) + num2)
#print(num1,num2)

#funciones
'''
def nombre(argumentos):
   scope o instrucciones 
'''

def saludo(user):
    return f'Hola {user}'


#condicionales
if(True==False):
    print(saludo("Guido"))
else:
    print("no hay 'saludo'...")




