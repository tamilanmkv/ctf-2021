from flask import Flask, redirect, url_for, render_template, request, make_response, Response, abort
import requests


app = Flask(__name__)

@app.route("/")
def home():
	return render_template('/index.html')

@app.route("/server_stats/")
def access():
	if request.headers.get('X-Forwarded-For'):
		return render_template('/access.html')
	else:
		return '''
		<title>403 Forbidden</title>
		<h1>Forbidden</h1>
		<p>You don't have the permission to access the requested resource. Only one time is access is given to the users</p>
		'''
@app.route("/login", methods=["GET", "POST"])
def login():
	return render_template('/login.html')


@app.route('/verify',methods=["GET", "POST"])
def verify():
	if request.method == "POST":
		user = request.form['username']
		pas	 = request.form['password']
		if user == "access@ctf.com" and pas == "neverbruteforcehere":
			return render_template('/index.html',flag='WBCOECTF{N454_B4r8_f06C3}')
		else:
			return render_template('/login.html',log="username or password wrong")
	else:
		return render_template('/login.html')

if __name__ == '__main__':
	app.run(host="0.0.0.0",port=5007)

