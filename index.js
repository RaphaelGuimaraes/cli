#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const files = require("./lib/files");

clear();

console.log(
	chalk.blueBright(
		figlet.textSync(
			"WoozaCLI", { horizontalLayout: "default" }))
);

if (files.directoryExists(".git")) {
	console.log(chalk.red("Already a Git repository!"));
	process.exit();
}
