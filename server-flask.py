from flask import Flask,request, Response
from flask_cors import CORS, cross_origin
import os
import tweepy
import demjson
import datetime
import flickrapi
import json
import random

api_key = 'd7b2b136eaaf572b84068c71669d0737'
api_secret = '8925e8a6d59aefca'
f = flickrapi.FlickrAPI("d7b2b136eaaf572b84068c71669d0737", "8925e8a6d59aefca", format='json')

app = Flask(__name__)
CORS(app)

#inicia variaveis de acesso twitter
cons_key = "OvfdRuq1u3iMfuYwOmJvaauad"
cons_secret = "aMrb4y7gyDwiLzeFzgUSh3af5PgYBe6Wh2oasih2AhVRFsqG0s"
access_token = "1864929535-UjtQEsaEeY7LiNao48jHKpLPqQnSfjldc766G2A"
access_token_secret = "HgIpDHq3b1hvkFA0PojzrrY0y3KSQvST0qYurPiUuBZJw"

#cria objeto para manipular a api do twitter
auth = tweepy.OAuthHandler(cons_key, cons_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

#get tweets
@app.route('/tweets')
def tweets():
	tweets = api.user_timeline(id="americanascom",count=50,page=request.args.get('page'),exclude_replies=request.args.get('reply'),include_rts=False)
	json = []
	for t in tweets:
		imageTweet = ""
		if 'media' in t.entities:
			for image in  t.entities['media']:
				imageTweet = image['media_url']
		json.append({
			'text': t.text,
			'img': imageTweet,
			'imgProfile': t.user.profile_image_url,
			'name': t.user.name,
			'screen_name': "@"+t.user.screen_name,
			'replyTo': t.in_reply_to_screen_name,
			
		})
	
	tweet = demjson.encode(json)
	return Response(tweet,mimetype = 'application/json')

#get tweets with media
@app.route('/tweets-media')
def tweetsImage():
	tweets = api.user_timeline(id="americanascom",count=50,page=request.args.get('page'),exclude_replies=True,include_rts=False)

	json = []
	for t in tweets:
		if 'media' in t.entities:
			for image in  t.entities['media']:
				imageTweet = image['media_url']
				json.append({
					'text': t.text,
					'img': imageTweet,
					'imgProfile': t.user.profile_image_url,
					'name': t.user.name,
					'screen_name': "@"+t.user.screen_name,
					'replyTo': t.in_reply_to_screen_name,
				})
	tweet = demjson.encode(json)
	return Response(tweet,mimetype = 'application/json')

#get user infos
@app.route("/info-user")
def info():
	info = api.get_user(id="americanascom")
	json = {
		"name": info.name, 
		"description": info.description,
		"location": info.location,
		"followers_count": info.followers_count,
		"friends_count": info.friends_count,
		"likes": info.favourites_count,
		"month": info.created_at.strftime("%B"),
		"year": info.created_at.year,
		"tweets": info.statuses_count,
		"screen_name": "@"+info.screen_name,
		"img_background": info.profile_banner_url,
		"profile_image_url": info.profile_image_url
	}
	infoUser = demjson.encode(json)
	return Response(infoUser,mimetype = 'application/json')

#get trends
@app.route("/trends")
def trend():
	json = []
	trends = api.trends_place(455825)
	data = trends[0]
	trends = data['trends']
	print type(trends)
	for t in range(10):
		json.append({
			"name": trends[t]['name'],
			"tweet_count": trends[t]['tweet_volume'] 
		})

	infoTrends = demjson.encode(json)
	print type(infoTrends)
	return Response(infoTrends,mimetype = 'application/json')

@app.route("/flickr")
def flickr():
	data = f.photos.search(tags="olimpiadas",per_page=6)
	d = demjson.decode(data)
	json = []
	print d['photos']['total']
	for x in range(6):
		json.append({
			'id': d['photos']['photo'][x]['id'],
			'server': d['photos']['photo'][x]['server'],
			'farm': d['photos']['photo'][x]['farm'],
			'secret': d['photos']['photo'][x]['secret'],
		})
	data = {'images': json,'total':d['photos']['total']}
	infos = demjson.encode(data)
	return Response(infos,mimetype = 'application/json')

@app.route("/who-follow")
def follow():
	json =[]
	options = ['frontend','backend','devs','developer','javascript','angularjs','android developer','python']
	random.shuffle(options)
	option = random.sample(options,1)
	print option
	for x in range(4):
		user = api.search_users(q=option,page=x,count=10)
		for u in user:
			json.append({
				'name': u.name,
				'profile_image' : u.profile_image_url,
				'screen_name' : "@"+u.screen_name,
			})
	random.shuffle(json)

	data = demjson.encode(random.sample(json,3))
	return Response(data,mimetype = 'application/json')

app.run(threaded=True)