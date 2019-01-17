import React from "react";
import ReactDOM from "react-dom";
import Card from "./cards/card.js";
import Index from "./cards/cards.js";

var cards = [
	{
		title: "React",
		content: "Get to building a react app",
		status: 1,
	},
	{
		title: "Express",
		content: "Create express to SSR your app",
		status: 1,
	},
	{
		title: "Babel",
		content: "Write in JSX and latest syntax, run anywhere",
		status: 1,
	},
	{
		title: "Webpack",
		content: "Webpack should build your react files, and express files",
		status: 0,
	},
	{
		title: "Package.json",
		content: "Should be as simple as 'npm run start'. Starts server, builds react on change",
		status: 0,
	},
	{
		title: "MongoDB",
		content: "App should store data in MongoDB, whatever that means",
		status: 0,
	},
	{
		title: "ESLint",
		content: "Code should be checked against AirBnB's JavaScript rules",
		status: 0,
	},
	{
		title: "Learn Objects",
		content: "Some area for improvement: Recursion, looping over array vs looping through an object, for loop structure, what array methods are available, and callback syntax",
		status: 0,
	},
	{
		title: "Objects, loops, and methods",
		content: "For, for... in, while, do...while, object.create(), object.keys(), object.values(), object.entries(), object.assign(), object.freeze(), object.seal(), object.getPrototypeOf()",
		status: 0,
	},
	{
		title: "Named import for default import",
		content: "See answer here: https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281",
		status: 0,
	},
	{
		title: "Iterators",
		content: "String, Array, TypedArray, Map and Set are all built-in iterables, because their prototype objects all have a Symbol.iterator method. For details, see also: Iteration protocols, for...of ,function* and Generator, yield and yield*",
		status: 0,
	}
];


ReactDOM.hydrate(<Index cards={cards} />, document.getElementById("index"));
