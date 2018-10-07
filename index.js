#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2))._;

class User {
    constructor(args) {
        this.args = args;
    }

    path() {
        switch (this.args[0]) {
            case "hello":
                console.log("Hello!")
                break;
            case "goodbye":
                console.log("Goodbye!");
                break;
            default:
                console.log("Please type something!")
        }
    }
}

let user = new User(args);
user.path() 



