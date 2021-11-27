from flask import Flask, redirect, url_for, render_template, request, make_response, Response, abort
import requests
import re

app = Flask('__name__')


@app.route("/")
def home():

	return render_template('/index.html')

@app.route('/login',methods=['GET','POST'])
def verify():
	name = request.form['user']
	if request.method == "POST":
		if name == "'or1=1--" or name == "' or 1=1 --" or name == "'or 1=1--" or name == "' or 1=1--":
			return Response("WBCOECTF{Sq1_pA8S_T4Hn8}")
		else:
			return render_template('/index.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0',port=4003)