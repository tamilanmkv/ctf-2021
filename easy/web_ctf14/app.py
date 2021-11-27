from flask import Flask, redirect, url_for, render_template, request, make_response, Response, abort
import requests

app = Flask(__name__)

@app.route("/")
def home():
	return render_template('/index.html')


@app.route("/break")
def access():
	if request.headers.get('X-Forwarded-For'):
		rep = Response("WBCOECTF{B46K0n_A34n_A4c8s_C00nt6l}")
		rep.set_cookie('permission','nonono_we_not allow to read this file')
		return rep
	else:
		rep =render_template('/index.html')
		rep.set_cookie('permission','',expires=0)
		return rep


if __name__ == '__main__':
	app.run(host="0.0.0.0",port=4004)