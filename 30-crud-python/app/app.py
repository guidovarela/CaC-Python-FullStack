from flask import Flask
from flask import render_template, jsonify
from flask_mysqldb import MySQL


# importar logica de un arch externo
from data_usuarios import data

app = Flask(__name__)


@app.route("/")
def index():
    saludar = "Estamos usando Flask!" 
    title="Inicio"
    return render_template("index.html",data=saludar,title=title)

@app.route('/contacto')
def contacto():
    title2="Contacto"
    return render_template('contacto.html',title=title2)

@app.route('/personas')
def personasAll():
    return render_template('personas.html', data=data, title="Personas")

# rutas dinamicas
@app.route('/personas/<int:id>')
def persona(id):
    print(data[id])
    return render_template('persona.html', data=data[id], title="Personas")


# MySQL

host="localhost"

# conexion
app.config['MYSQL_HOST']=host
app.config['MYSQL_USER']="root"
app.config['MYSQL_PASSWORD']=""
app.config['MYSQL_DB']="curso-python"

conexion = MySQL(app)

@app.route('/usuarios')
def cargar_usuarios():
    title="Usuarios"

    # consulta datos
    # objeto vacio
    data = {}
    try:
        # cursor
        cursor = conexion.connection.cursor()
        # consulta
        sql = "SELECT * FROM usuarios ORDER BY id ASC"
        # ejecutar consulta
        cursor.execute(sql)
        usuarios = cursor.fetchall()
        print(usuarios)
        data['usuarios'] = usuarios
        # data['mensaje'] = 'Exito'
    except Exception as ex:
        data['mensaje'] = 'Error...'

    # return jsonify(data)
    result = jsonify(data)
    return render_template("usuarios.html",users=data,title=title)
    # return render_template("usuarios.html",data=data)




if __name__=="__main__":
    # debug y port, para etapa de desarrollo o testing
    app.run(debug=True, port=5001)