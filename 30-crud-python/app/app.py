from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    saludar = "Estamos usando Flask!" 
    title="Inicio"

    """  user = {
        "nombre":"Guido",
        "edad":42,
        "mascotas":False
    } """
    user = ["Guido","Marcela","Pepe","Maria","Dario"]

    usuarios= [
        {
        "nombre":"Guido",
        "edad":42,
        "mascotas":False
        },
        {
        "nombre":"Federico",
        "edad":23,
        "mascotas":["Neron","rambo"]
        },
        {
        "nombre":"Analia",
        "edad":35,
        "mascotas":["Toby"]
        },
    ]

    return render_template("index.html",data=saludar,title=title, user=usuarios)

@app.route('/contacto')
def contacto():
    title2="Contacto"
    return render_template('contacto.html',title=title2)


if __name__=="__main__":
    # debug y port, para etapa de desarrollo o testing
    app.run(debug=True, port=5001)