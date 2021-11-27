from flask import Flask, redirect, url_for, render_template, request, make_response, Response, abort
import requests

app=Flask(__name__)

@app.route("/")
def home():
	return render_template('/index.html')

@app.route("/google")
def google():
	if request.cookies.get('secret'):
		return render_template('/google.html',contact='static/contact.html')
	else:
		resp = make_response(render_template('/google.html',contact='static/contact.html'))
		resp.set_cookie('secret','grand')
		return resp

@app.route('/secret')
def secret():
	if request.cookies.get('secret') == 'grand':
		return render_template('/secret.html')
	else:
		return render_template('/google.html')

@app.route('/verify',methods=['GET','POST'])
def verify():
	if request.method == "POST":
		pas = request.form['pass']
		if pas == 'nomoresecret':
			return render_template('/admin_log.html')
		else:
			return render_template('/secret.html')
	else:
		return Response(render_template('/master.html'))

@app.route('/verif',methods=['GET','POST'])
def verif():
	if request.method == 'POST':
		user = request.form['user']
		psw = request.form['psw']
		if user == "admin@ctfweb" and psw == "hacktheadmin":
			return render_template('/contact.html',flaghere="WBCOECTF{P3N8GA_y48a_N22K4LAm}")
		else:
			return render_template('/master.html',agin="checkagin")
	else:
		return render_template('/index.html')
						
@app.route('/forensis')
def function():
	return render_template('/master.html')
if __name__ == '__main__':
	app.run(host="0.0.0.0",port="5009")