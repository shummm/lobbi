"use strict";

const port = process. argv [2];

const app = require ("express") ();
const serveStatic = require ("serve-static");


const checkPort = port => {

  if (/^[0-9]{1,}$/. test (port)  ==  false) {
    return 3000;
  }

  return Number (port);

};



const pathValid = path => {

  return path. replace (/\//, "");

};



app. set ("view engine", "pug");

app. use (serveStatic ("./static"));



app. get ("/*", (req, res) => {

  res. render ( pathValid (req. path) );

});



app. listen ( checkPort (port), () => {

  console. log ("Server start running on port " + checkPort (port));

});
