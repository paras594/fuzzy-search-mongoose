# Fuzzy Search with Node.js & Mongoose

It's a simple project focused around implementing fuzzy search in nodejs, mongodb and mongoose. 

Fuzzy search is a search which is more lenient than the hard search algorithms. In fuzzy search, typos are allowed and similar words are searched instead of searching for the exact keyword. It may look for misspelled words, plurals or other similar terms. Thus it yields wider search results from which human user can pick to determine relevance in context.

![Fuzzy Search Preview](./fuzzy-search-preview.png)



### Requirements

- Node.js & NPM

- Mongodb
- Nodemon (`npm install nodemon -g`)



### Commands

```bash
# to add data to database use generateDbData.js 
node generateDbData.js

# install dependencies
npm install

# start project
npm start
```



### Technologies

- Node.js
- Mongodb & Mongoose
- Bootstrap