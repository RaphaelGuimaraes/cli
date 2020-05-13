#!/usr/bin/env node

const [,, ...args] = process.argv;
const pkg = require("./package");

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const commander = require("commander");

const files = require("./lib/files");

clear();

console.log(
	chalk.blueBright(figlet.textSync("CLI", { horizontalLayout: "default" }))
);

commander
	.version(pkg.version, "-v, --version")
	.description("output the current version")
	.parse(process.argv);
