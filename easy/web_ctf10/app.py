from flask import Flask, redirect, url_for, render_template, request, make_response, Response, abort
import requests

app = Flask(__name__)

@app.route("/")
def home():
	return render_template('/index.html')
@app.route('/reset',methods=['GET','POST'])
def reset():	
	mail = request.form['mail']
	if request.method == 'POST' and mail == 'crypto@ctf':
		return render_template('/index.html',token="/rest?token=I0WQG0IQIRM7I2IyF19wHayDqT9sDGEwH30X")

if __name__ == '__main__':
	app.run(host="0.0.0.0",port=4005)