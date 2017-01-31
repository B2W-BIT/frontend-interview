# React Twitter Timeline and Stream App
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Getting Started 
This app is a viewer of the twitter stream according a few words to track the twitter timeline **it doesn't allow twitter posts** and show the timeline of the selected twitter page.

## Table of Contents
- [Installation](#Installation)
- [Installing Mongo](#MongoDB)
- [Creating a MongoDB database](#Database)
- [Roadmap](#Roadmap)
- [Tests](#Test)
- [Credits](#Credits)
- [License](#License)

## Installation

The installation of the development environment you have to use *yarn*. I've adopted the [yarn](https://github.com/yarnpkg/yarn) due to his performance and to avoid depracated dependencies that sometimes not work using npm.

1. Install Yarn (npm install yarn -g) and run `yarn install` on the repo folder.
2. Create local MongoDB database called react-tweets (Next Section Explains better).
3. Replace in the component **content** the prop user by your desired twitter user `<TwitterTimeline user="HERE" chrome="noheader" className="twitter-timeline" />`
4. `npm run start`
5. Go to `localhost:3000`

## MongoDB

If you are a windows user you gonna suffer in your developer life, but here's a few tips in how to do it for you and other OS:

1.[windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
2.[Mac OS X](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
3.[Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

Extra-tip for windows users: https://www.youtube.com/watch?v=sBdaRlgb4N8&feature=youtu.be&t=120

## Database
http://theholmesoffice.com/how-to-create-a-mongodb-database/

## Roadmap

**Release 0.0.1** (current) - First release of the app

**Release 0.0.2** - Improvements in the responsive, create a loader for sass in webpack and configure.

**Release 0.0.3** - Use Mocha + chai to insert Unit Tests

**Release 0.0.4** - 

**Release 0.0.5** - 

## Tests
Not yet

## Credits

Yuri Ramos 

## License

MIT


Questions? Issues? Pull Request? e-mail me at yuri.pramos@gmail.com