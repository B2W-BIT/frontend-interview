# B2W Challenge

O projeto principal foi feito em VanillaJS, por preferir mostrar o meu código puro. Mas também fiz uma versão com ReactJS e uma com AngularJS, por saber que esse tipo de projeto precisa de um desses recursos e para mostrar um pouco do meu código utilizando os mesmos. Documentações e testes(TDD e BDD para a versão VanillaJS..e básicos para as outras versões), se encontram nos links abaixo.

## Install, running and documentation

```bash
npm install
```
Access `http://localhost:3000/`

- VanillaJS: `http://localhost:3000/`
- ReactJS: `http://localhost:3000/react`
- AngularJS: `http://localhost:3000/angular`

- SCSS Documentation: `http://localhost:3000/doc-scss` 
- JS Documentation: `http://localhost:3000/doc-js`

## Running

```bash
npm start
```
Access `http://localhost:3000/`

- VanillaJS: `http://localhost:3000/`
- ReactJS: `http://localhost:3000/react`
- AngularJS: `http://localhost:3000/angular`

## Documentation

```bash
npm run doc
```
- JS documentation: `http://localhost:3000/doc-js`
- SCSS documentation: `http://localhost:3000/doc-scss`

## Tests

```bash
npm test
```

### Mission

Develop a Twitter's clone timeline following the image attached. Your solution must be responsive ([RWD](http://alistapart.com/article/responsive-web-design) and [MF](http://www.lukew.com/ff/entry.asp?933)) and work in IE9+.

##### 3 Points

Use the Twitter api to create your timeline. Your timeline must include a list of recent @americanascom's tweets (main content), cover photo and profile photo. 

##### 1 Point

Add profile description, joined data, site and location.

##### 2 Points

Call the Flickr api and get the first image based on the #hashtag you may find in a tweet and improve your timeline with images :).

##### 2 Points

Add others informations like count of tweets, followers, following and likes. Develop the infinite pagination.

##### 2 Points

Add followers box, photos & videos box and trends box.

### Hint 

Try to clone this layout:
![Timeline](/resources/timeline.png)

You may use our tests accounts to authorize your requests. 

The Base64 encoded bearer token credential for Twitter api is ```bWVjaTllbUI3MjA1Ymo0VzQ0eFFDQVRVNjowR0RKWWFUeDg1bkRwbm9pOHp3R2EwVDdNU1FJT1J0OVJkS3Y2aEFmRFNSb0QzUjRGUA==```.

The apiKey for Flickr api is ```3de470a3de4c9510ec040b59100b4cf2```.


### What you will be assessed

Keep your solution as simple as possible. "Done Is Better Than Perfect". We love tests at B2W, try to test all of your application. Performance impress! As a developer we are lazy too... automate your application to install & run with a single command. You don't need to beat it (10 points), we will enjoy to check your proposed solution.

### How to send the results

* Work locally in a custom branch ```git checkout -b my-solutions``` then send us a pull request with your code.
