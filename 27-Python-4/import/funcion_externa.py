import random

# import random
# Craer una función que genere una lista de n elementos
# indicado por parámetros
# los números de los elementos deben estar entre 1 y 10

def crear_lista(cantidad):
    """ Recibe un número que representa 
    la cantidad de elementos que tendrá 
    la lista """

    lista = []
    for i in range(cantidad):
        lista.append(random.randint(1,10))
    
    return lista
