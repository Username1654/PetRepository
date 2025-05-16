# Virtual Pet read me
## Table of Contents
- [HTML](#HTML)
  - [Heading](#heading)
  - [Body](#body)
- [CSS](#css)
# HTML Structure
## Heading 
``` javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virtual Pet</title>
    <link rel="stylesheet" href="style.css">
</head>
```
- meta helps it scale
- link to my css

## Body
``` javascript
<body>
    <div id="con">
        <header id="head" class="lightMode">
            
            <h1 id="headText">Virtual Pet:</h1>
            <p id="name"></p>
          
            
        </header>

        <div id="pet-status" class="lightMode">
            <br>
            <p>Coin: $<span id="coin"></span></p>
            <hr>
            <!--stats about the pet-->
            <div id="tex">
                <p id="pet-happiness">Happiness:</p>
                <p id="pet-hunger">Hunger: </p>
                <p id="pet-energy">Energy:</p>
            </div>
            <div id="stats">
            <div id="hap"></div>

            <div id="hun"></div>

            <div id="ene"></div>

            </div>

            <hr>
            <p>Age: <span id="age"></span></p>
            <hr>
            <br>
            <!--buttons for pet-->
            <div id="buttons">
            <button id="feed" onclick="feed()">Feed</button>
           
            <button id="play" onclick="play()">Play</button>
           
            <button id="sleep" onclick="sleep()">Sleep</button>
            </div>
        </div>

         <!--Middle div, holds the egg and the pet image, pet image src is populated through js-->
        <div id="pet-image" class="lMid">
            <img id="egg" src="images/Violet_Easter_Egg_PNG_Clipart.png" alt="egg" width="10%">
            <img id="pet" src="" alt="" alt="pet">
        </div>

        <!--Though it says "pet actions" its just regular actions-->
        <div id="pet-actions" class="lightMode">
            <img src="images/dark-theme.svg" alt=""  id="ld">
            <img src="images/shopping-bag.svg" alt=""  id="shopping">

        </div>


<!--Shop and inventory area, will show when certain buttons are clicked -->
        <div id="shop">
            <h2>Shop!</h2>
            <input type="text" id="inpu" placeholder="Search for items">
            <div id="ShopF">

            </div>
        </div>

        <div id="inventory">
            <h2>What will you feed your pet?</h2>
            <input type="text" id="inpu2" placeholder="Search for items">
            <div id="inv">

            </div>
        </div>

    </div>
    <!--Alot of script files to organize-->
    <script src="js/script.js"></script>
    <script src="js/age.js"></script>
    <script src="js/stats.js"></script>
     <script src="js/shop.js"></script>
     <script src="js/search.js"></script>
     <script src="js/movement.js"></script>
</body>

</html>
```
**Key Compotents**
- Multiple divs that help organize everything into catagories
- Header that shows name and name of the website
- pet-status div to show stats of the pets
- pet-image to show the pet
- pet-actions that include light/dark mode and the shop
- Script files at the end for organization

# CSS
``` JavaScript
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #000000;
}
#con{
     width: 100%;
    height: 100vh; 
    display: grid;
    background-color: #f0f8ff;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.1fr 1fr;
    z-index: 5;
}
#head {
    grid-column: 1/4;
    grid-row: 1;
    display: flex;
    justify-content:flex-start;
    align-items: center;     
    overflow: hidden;
    padding: 20px;  
    z-index: 999;
}

#name{
    font-size: 2em;
}
.shake{
    animation: shake 0.5s;
    animation-iteration-count: infinite;
}
#egg{
    transition: all 0.5s;
}
#pet{
    display: none;
    transition: all 1s;
    opacity: 0;
}
#pet-image{
    grid-row: 2;
    grid-column: 2/4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    height: 100%;
}
#pet-image img{
    width: 50%; 
    min-width: 150px;
    aspect-ratio: 1/1;
    border-radius: 15px;
}
#tex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#stats {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 150px;
    margin-top: 10px;
}

#hap, #hun, #ene {
    width: 30px;
    background-color: green;
    transition: height 0.3s;
}
#pet-actions{
    grid-row: 1/3;
     height: 100%; 
    display: flex;
    flex-flow: column;
    justify-content: center;
}
#pet-actions img{
    width: 100%; 
    max-width: 100px;
    margin: 10px;
    cursor: pointer;
}
#buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
@keyframes shake{
    0%{transform: translate(0, 0);}
    25%{transform: translate(-5px, 0);}
    50%{transform: translate(5px, 0);}
    75%{transform: translate(-5px, 0);}
    100%{transform: translate(0, 0);}
}
.lightMode{
    background-color: rgb(255, 236, 170);
    color: #333333;
}

.darkMode{
    background-color: rgb(36, 17, 124);
    color: #f0f0f0;
}

.lMid{
    background-color: #f0f8ff;
}
.dMid{
    background-color: #2c2c2c;
}
#ld{
    cursor: pointer;
}

#shopping{
    cursor: pointer;
}

.item{
    grid-row: 2;
    text-align: center;
    background-color: white;
    width: 10%;
    min-width: 100px;
    height: fit-content;
    margin: 10px;
    color: black;
}
#inv, #ShopF{
    color: black;
    display: flex;
    justify-content: center;
   display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;
    }
#inventory, #shop{
    text-align: center;
    color: white;
    display: block;
    grid-row: 2;
    grid-column: 2/4;
    background-color: #2c2c2c;
    z-index: 999;
    }
.item:hover{
        padding: 10px;
        background-color: #d9d7d7;
    }
    button{
        font-size: 2em;
        margin: 10px;
    }
@media screen and (max-width: 768px) {
    #con {
        grid-template-columns: 1fr; 
        grid-template-rows: auto;
        margin-top: 2%;
        width: 80vw;
        margin: 0 auto;
    }

    #pet-actions img {
        width: 70%; 
        margin-right: 5%;
    }
    #pet-image img {
        width: 80%; 
        max-width: 300px;
    }
    #head{
        grid-row: 1;
        grid-column: 1;
    }
     #pet-image {
        grid-row: 2;
        grid-column: 1;
    }
    #pet-status{
         grid-row: 3;
        grid-column: 1;
    }
    #inventory, #shop{
        grid-row: 2;
        grid-column: 1;
    }
    #pet-actions{
        grid-row: 4;
        grid-column: 1;
        display: flex;
        flex-direction: row;
    }
     button{
        font-size: 1em;
        margin: 10px;
    }
}

```
**Key Compotents**
1.  **\*** Sets default margins, paddings, and box-sizing for all elements
2. **\#con**  makes sure all things fall in line
3. **@keyframes shake** adds a haking affect to whatever you add it too 
4. **@media screen and (max-width: 768px)** When screens width goes below 768px it activates all the css styling below it

# JavaScript
``` javascript
    <script src="js/script.js"></script>
    <script src="js/age.js"></script>
    <script src="js/stats.js"></script>
    <script src="js/shop.js"></script>
    <script src="js/search.js"></script>
    <script src="js/movement.js"></script>
```
This is how the JS is ordered in the html file

## script.js
``` javascript
let egg = document.getElementById("egg");
let pet = document.getElementById("pet");
let i = 0;
let goal = Math.floor(Math.random() * 10) + 1;
let hatched = localStorage.getItem("hatched")||false;
let nam = document.getElementById("name");
let pets = [
    "images/Porcupine-fish-Diodon-hystox.webp",
    "images/bat.jfif",
    "images/beetle.jfif",
    "images/cat.jfif",
    "images/crab.jpg",
    "images/man.jpg",
    "images/racoon.jfif",
    "images/walrus.jfif"
];
//randomly chooses a pet then saves the pet to local storage
let chosenPet = pets[Math.floor(Math.random() * pets.length)];
```