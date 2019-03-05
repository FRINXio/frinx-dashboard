# Frinx Dashboard
## Running the project
### 1. Using Docker
You can test the frontend using only Docker by executing the following command:
```shell
sudo docker run -v "$PWD":/usr/src/app -w /usr/src/app node:10.15.2 npm start
```
This will download the necessary image, create a server and serve the frontend on [localhost:3000](http://localhost:3000).
### 2. Using npm
[Node.js](https://nodejs.org/en/) and [Node Package Manager](https://www.npmjs.com/) are required in order to run the frontend natively. If you have both of these installed, run the following script to open a test server:
```shell
npm start
```
