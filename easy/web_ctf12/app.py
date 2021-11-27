from flask import Flask, redirect, url_for, render_template, request, make_response, Response, abort
import requests
import re


app = Flask('__name__')


@app.route("/")
def home():
	return render_template('/home.html')

@app.route("/xss", methods=["GET", "POST"])
def xss():
	ks=request.form["search"]
	if request.method == "POST" or request.method == "GET":
		if not(re.search(r'<script|<img|onerror|onload|<svg',ks)):
			if re.search('document.cookie',ks):
				cok = Response(render_template('/home.html',search=ks))
				cok.set_cookie('flag','WBCOECTF{{XsS_No_M04r3_La2Z5_mAde}')
				return cok
			else:
				cok = make_response(render_template('/home.html',search="Not found "+ks))
				cok.set_cookie('flag', '', expires=0)
				return cok
		else:
			return render_template('/home.html',search="tags blocked")
	else:
		return render_template('/home.html',search="not found")

if __name__ == '__main__':
	app.run(host="0.0.0.0",port=4002)