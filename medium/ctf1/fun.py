from flask import Flask, request, render_template
from jinja2 import Environment

app = Flask(__name__)
Jinja2 = Environment()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/page")
def page():

    name = request.values.get('name')
    output = Jinja2.from_string('Hello ' + name + '!').render()

    return output

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)
