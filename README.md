# Blockchain exampe project
### This project has been developed following the "Blockchain: Comprende Bitcoin y desarrolla tu Criptomoneda" training course at UDEMY from https://github.com/soyjavi

## How do I start

  	git clone git@github.com:dsalvat/blockchain-example.git
  
Use yarn to install dependencies

	cd blockchain-example

  	yarn install
  
Yarn start to start the service  

  	yarn start

Yarn start:2 to start the service of a second node

  	yarn start:2

## Generate a Public Key for your Wallet

  	POST: <host>:<port>/wallet

## Create new Transaction

  	POST: <host>:<port>/transaction
  
### params(json) :

    {
	    "recipient": "<public-key>",
	    "amount": <any-number>
    }
  
## See Transactions pending to be mined

  	GET: <host>:<port>/transactions

## Mine Transactions

  	GET: <host>:<port>/mine/transactions

## See Blocks on the Blockchain

  	GET: <host>:<port>/blocks
