## MATT CHAN'S SUBMISSION FOR FS1010

## INSTRUCTIONS

1) Start by opening the main folder and run `npm install` to install all required dependencies
2) Start the application by running `npm start` command from the folder where the `App.js` component is found
3) The React site should be running on localhost:3000, with the API running on localhost:4000 simultaneously.

## THINGS TO NOTE
Please note that the `npm start` command will open a second localhost on 4000 to run the API for form submission. This will update the form list in real time and you can see the information that was submitted when you log into the admin portion of the site.

## ADMIN LOGIN INFO

Username: MattDevAccount
Password: password

## CREATING DATABASE

Please create the database using the following commands on SQL

create database indieproject

use indieproject

create table if not exists `contacts`(
	`name` varchar(50) not null,
	`email` varchar(100) not null,
	`phoneNumber` varchar(100) not null,
	`content` varchar(250) not null,
    `id` varchar(250) not null,
	primary key(`email`)	
)