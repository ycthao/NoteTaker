// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const fs = require('fs');
const path = require('path');


// Setting up port and app
const app = express();
const PORT = 3000;

// Set up express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

