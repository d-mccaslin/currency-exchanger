# David McCaslin

#### This application allows users to input a US dollar amount and receive a currency conversion for a chosen country based on current/live exchange rates.

#### By David McCaslin

## Description

This application returns converted currency amount based on exchange rates from the ExchangeRate-API. Users can input an amount in US dollars as well as a 3-digit currency code and will be shown a converted amount. If the application encounters errors with the user inputs or API call they user will be shown an appropriate error message.

## Setup & Installation Requirements

* Find repository on GitHub and clone/download the project
* Navigate to the project directory through a terminal
* Ensure that the package.json file is present in the root directory and that the latest version of <strong>npm</strong> is installed
* Run <strong>npm install</strong> to install dependencies
* Visit the ExchangeRate-API website to create an account and receive an API key
* In the root directly, create a <strong>.env</strong> file
* On the first line of you .env file, add <strong>API_KEY=</strong> and copy in your API key from the previous step, following this format: <strong>API_KEY=YourAPIKeyGoesHere</strong>
* Use <strong>npm run start</strong> to build, run, and launch the application on a live server

## Specs

* <strong>Spec: </strong>A user can input a numeric amount and 3-digit currency code and receive a converted amount based on the inputted currency.
    * <strong>Input: </strong>  100, GBP
    * <strong>Output: </strong> "The converted amount from 100 USD to GBP is 77.76."

## Known Bugs

There are no known bugs.

## Support and contact details

Contact: davidmccaslin94@gmail.com

## Technologies Used

* Languages: HTML, CSS, JavaScript
* Libraries: Bootstrap, jQuery, npm
* Development Tools: Visual Studio Code, Git, GitHub
* API: ExchangeRate-API

### License

MIT Open Source

Copyright (c) 2020 David McCaslin