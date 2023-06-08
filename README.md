# 📈 Finance App 📊

A fullstack MERN app with finance dashboard for tracking various financial metrics of a company with a simple machine learning prediction

## Features

* Dashboard: displaying multiple charts that represent financial performance metrics, namely key performance indicators (KPIs), products, and transactions.
* Prediction: displaying forecast revenue for the upcoming year. It leverages historical data and applies linear regression algorithms to predict future trends. 

## Demo

Live demo of the app available here: https://finance-app-hj.vercel.app/

## Technologies used

* Frontend: Vite, React, Redux, Redux Toolkit, TypeScript, Material-UI, Recharts
* Backend: Node.js, Express.js, MongoDB
* Deployment: Vercel

## Running the app in your local machine
1. Clone the respository: 
```shell
git clone https://github.com/cocomarine/finance-app-ts.git
```
2. Navigate to the project directory and install dependancies:
```shell
npm install
```
3. Set up the environment variables:
* Create an .env.local file in the root of the client folder in the same format as the .evn.local.sample file. 
* Create an .env file in the root of the server folder in the same format as the .evn.sample file. 

4. Start the app by running the following command in the client and server folders, respectively: 
```shell
npm run dev
```
5. Open the app in the browser at http://localhost:5173/.

## Deployment in Vercel
The client and server were separately deployed in the following steps. 
1. Create a vercel.json file in the root of the server folder.
2. Connect the project repository to your Vercel account (https://vercel.com/).
3. Configure the deployment settings. Also make sure to add the environment variables stored in .env.local and .env files. 
4. Deploy the app to Vercel. 
5. You may need to repeat these steps to update the environmental variables with a new URL. 