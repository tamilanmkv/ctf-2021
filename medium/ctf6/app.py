from flask import Flask, redirect, url_for, render_template, request, make_response, Response, abort
import requests


app= Flask(__name__)

@app.route("/")
def home():
	return make_response(render_template("home.html"))

@app.route("/login")
def login():
	return make_response(render_template('login.html'))

@app.route("/validation", methods=['POST','GET'])
def validation():
	if request.method == 'POST':
		username = request.form['username']
		password = request.form['password']
		if username == 'mark' and password == 'password':
			try:
				user = request.cookies.get('user')
				if str(user) == "100":
					return render_template('profile.html',pic='/static/img/kakasi.jpeg',Fname="mark")
				elif str(user) =="101":
					return render_template('profile.html',pic='/static/img/naruto.jpeg',Fname="naruto")
				elif str(user) =="102":
					return render_template('profile.html',pic='/static/img/demo1.jpeg',Fname="Flag man")
			except:
				pass
			resp = make_response(render_template('profile.html'))
			resp.set_cookie('user','100')
			return resp

		else:
			return render_template('login.html',info="Enter the vaild username and passwrd")
		#else:
		#	return render_template('login.html')
	else:
		return render_template('login.html')


if __name__ == '__main__':
	app.run(host='0.0.0.0',port=5006)