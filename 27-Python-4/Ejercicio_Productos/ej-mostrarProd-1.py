import modFunciones

# Preguntar al usuario cuántos productos desea cargar
num_productos = int(input("¿Cuántos productos desea cargar? "))
lista_productos = []

# Solicitar y agregar los productos a la lista
for i in range(1, num_productos + 1):
    modFunciones.agregar_producto(lista_productos, i)

# Mostrar la lista de productos
modFunciones.mostrar_productos(lista_productos)
