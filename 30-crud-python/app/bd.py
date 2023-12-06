import pymysql

# Datos de conexion local
def obtener_conexion():
    return pymysql.connect(host='localhost',user='root',password='',db='juegos')
