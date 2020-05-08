# Chinese poker game online with flask server

## Rule
1. Start with app with any numbers sets of cards (54 pieces)
2. Running on cloud
3. All users show access the web site with all show up cards removed from all users.
4. Each user has own site has own card, can see the card assigned from the server one by one during shuffle.  
5. Above page has order from user 1, 2 ... to get card one by one at the shuffle time.
6. Also each user should have all cards in hand show up on own page.
7. During game start playing time, user remove the card from own page.

## Design 
- Each player have hand of cards with order.

## File structure
   poker/index.html
        /poker.js
        /public/main.js
               /css/main.css
                   /card.png
         
## Setup
- Node need to be installed.
- Express for node as well
  npm install express --save
  npm install -g express

## Run
- node poker.js
