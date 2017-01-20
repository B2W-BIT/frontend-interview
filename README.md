# Felipe Rodrigues Nascimento
**B2W: Coding challenge**

## Install


Install dependencies
    
    npm install
    bower install

Run the command bellow in a terminal (bash)
    
    npm start

With command above you run gulp task runner, gulp will transpile ES6 to ES5 and generate the build (compile sass to css, minfied and concat files). 
After run gulp (I did this way because I built a middleware app with node.js in the same domain that app).

To see in production acessing:

    https://developers-mad.herokuapp.com/


## Notes

I added an express server running on top of node.js to run the application because I needed a middleware to access the twitter api, for this reason I created a "proxy"
To forward client application calls and after my api call twitter api with my own secret pass (yes, I did not use the tolkien that you gave). 

I can't build a test suite for this app, unfortunately, I wrote some tests but wasn't good case tests.

For app in production for any reason that I can't identify suggestion component doesn't load information, locally work well.

