install:
	pip install -r requirements.txt
	@echo 'levantando servers'
	python -m SimpleHTTPServer &
	python server-flask.py
