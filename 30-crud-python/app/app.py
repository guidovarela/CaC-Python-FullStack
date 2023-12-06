from flask import Flask, render_template, request, redirect, flash
import controlador_juegos
from data_personas import data

app = Flask(__name__)

@app.route("/")
@app.route("/juegos")
def juegos():
    title = "Productos"
    juegos = controlador_juegos.obtener_juegos()
    return render_template("juegos.html", juegos=juegos, title=title)

@app.route("/agregar_juego")
def formulario_agregar_juego():
    return render_template("agregar_juego.html")

# recepcion de datos del formulario
@app.route("/guardar_juego", methods=["POST"])
def guardar_juego():
    nombre = request.form["nombre"]
    descripcion = request.form["descripcion"]
    precio = request.form["precio"]
    controlador_juegos.insertar_juego(nombre, descripcion, precio)
    # De cualquier modo, y si todo fue bien, redireccionar
    return redirect("/")

@app.route("/eliminar_juego", methods=["POST"])
def eliminar_juego():
    controlador_juegos.eliminar_juego(request.form["id"])
    return redirect("/juegos")

# Edit -> Update
@app.route("/formulario_editar_juego/<int:id>")
def editar_juego(id):
    # Obtener el juego por ID
    juego = controlador_juegos.obtener_juego_por_id(id)
    return render_template("editar_juego.html", juego=juego)


@app.route("/actualizar_juego", methods=["POST"])
def actualizar_juego():
    id = request.form["id"]
    nombre = request.form["nombre"]
    descripcion = request.form["descripcion"]
    precio = request.form["precio"]
    controlador_juegos.actualizar_juego(nombre, descripcion, precio, id)
    return redirect("/juegos")

# Nosotros

@app.route('/personas')
def personasAll():
    return render_template('personas.html', data=data, title="Personas")

# rutas dinamicas
@app.route('/personas/<int:id>')
def persona(id):
    print(data[id])
    return render_template('persona.html', data=data[id], title="Personas")

# Iniciar el servidor
if __name__ == "__main__":
    app.run(debug=True)
