# Check List
- [JS](#JavaScript)
- [HTML](#HTML)
- [CSS](#CSS)

## JavaScript
1. **Variable Naming & Indentation**
``` 
let item1 = document.getElementById('i0')
let item2 = document.getElementById('i1')
let item3 = document.getElementById('i2')
let item4 = document.getElementById('i3')
let item5 = document.getElementById('i4')
```
2. **Function Naming & Modularity**
```
function names() { //saves name after it gets hatched
    let e = window.prompt("What do you want to name your pet?");
    if (e === null || e === "") {
        alert("Please enter a name for your pet.");
        names();
    } else {
        alert("Your pet's name is " + e + "!");
        console.log(e);
        localStorage.setItem("petName", e);
        localStorage.setItem("petType", chosenPet); // Save the image filename
        nam.innerHTML = `${e}`;
        start()
    }
```
The function name() allows you to  name your pet

3. **Arrays & Objects Usage**
```
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
```
An array of images

4. **Array Methods (map, filter, reduce, etc.)**

```
if (itemName.includes(searchTerm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
```
.includes to search through an array of itemName using searchTerm

5.  **Looping/Iteration through arrays/objects**
```
for(let i=1; i<=carrot; i++){
        inv.innerHTML += `<div class="item" id='carrot${i}' onclick='carro(${i})'>
    <h3>Carrot</h3> <br>
    <hr> <img src='images/carrots.jpg' width='50px'> 
    <p>-1 hunger</p>
    </div>`
    }
```
carrot is an object and you're just looping through it to create a bunch of divs 

6. **Web Storage (localStorage/sessionStorage)**
```
let steak = localStorage.getItem('steak')

localStorage.setItem('steak', steak)
```
LocalStorage is used for all if not most stuff in this code

7. **Saving/Retrieving User Data**
```
let age = parseFloat(localStorage.getItem('age'))||0
```
age is used to show how many minutes the user has spent in the game

8. **DOM Manipulation**
```
inv.innerHTML += `<div class="item" id='steak${steak}' onclick='stea(${steak})'>
    <h3>Steak</h3> <br>
    <hr> <img src='images/steak.jfif' width='50px'> 
    <p>-100 hunger</p>
     </div>`
    }
```
.innerHTML to add a div

9. **CSS Manipulation via JS**
```
item.style.display = 'block'
```
this affects how the item is displayed through CSS manipulation

10. **Theme Preference**
```
let ld = document.getElementById('ld');
let isLight = localStorage.getItem("isLight") === "true"; // get as boolean

ld.addEventListener('click', function () { //function for light/dark mode
    isLight = !isLight; // Flip the mode
    localStorage.setItem('isLight', isLight);
    document.getElementById('pet-status').classList.toggle('lightMode');
    document.getElementById('pet-status').classList.toggle('darkMode');

    document.getElementById('pet-actions').classList.toggle('lightMode');
    document.getElementById('pet-actions').classList.toggle('darkMode');

    document.getElementById('head').classList.toggle('lightMode');
    document.getElementById('head').classList.toggle('darkMode');

    document.getElementById('pet-image').classList.toggle('lMid');
    document.getElementById('pet-image').classList.toggle('dMid');
});


```
This changes all the divs(that need to be changed) to either light or dark mode

11. **Comments & Readablity**
```
let isLight = localStorage.getItem("isLight") === "true"; // get as boolean
```
Comments help figure out what stuff is doing

12.  **Error Handling**
```
function carro(e){
    //this is what happens when you click on the carrot from the inventory
    console.log('worked')
}
```
Console.log() to make sure that clicking on it works

13. **Timer**
```
let ageText = document.getElementById('age')
        let age = parseFloat(localStorage.getItem('age'))||0
        ageText.innerHTML = age
        setInterval(() => {
        
            if(localStorage.getItem('hatched') =="true"){
                 console.log("Hatched");
            age+=1
            console.log(age)
            ageText.innerHTML = age
            localStorage.setItem("age", age)
            if(age == 1){
                window.alert("Congrats on a year old pet (or one minute in the game)")
            }
            if(age == 5){
                window.alert("your pet has lived for 5 years!")
            }
        }
},60000)
```
every minute age increases by one

14. **Math, String, Random methods**
```
let chosenPet = pets[Math.floor(Math.random() * pets.length)];
```
Math.random to choose a random bet from an array

15. **Event Listeners & Keyboard Shortcuts**
```
document.addEventListener('keypress', function(e){
    if(pet.style.position === 'relative'){
    if(e.key ==="w"){
        if(t >= -35){
        t--
        p.style.top =`${t}%`
        console.log(t)
        }
   }
```
EventListener to move animal with certain keys as movement

16. **Real-time Search**

```
 searchbar2.addEventListener('input', function () {
    const searchTerm = searchbar2.value.toLowerCase()
    const items = document.querySelectorAll('#inv .item')

    items.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase()
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})
```
Everytime an input is in the search it activates and searches through json array

17. **Regex** 
```
 let Letterpattern =/[a-zA-Z]+/
function names() { //saves name after it gets hatched
    let e = window.prompt("What do you want to name your pet?");
    if (!Letterpattern.test(e)) {
        alert("Name must contain atleast one letter");
```

## HTML

1. **Meta Tags**
```
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
2. **Semantic Elements**
```
 <header id="head" class="lightMode">
            
            <h1 id="headText">Virtual Pet:</h1>
            <p id="name"></p>
          
            
        </header>
```
3. **Heading Hierarchy**
```
  <h1 id="headText">Virtual Pet:</h1>
  <h2>Shop!</h2>
  ```
4. **Proper Button/Input Elements**
```
    <button id="feed" onclick="feed()">Feed</button>        
    <button id="play" onclick="play()">Play</button>         
    <button id="sleep" onclick="sleep()">Sleep</button>
```
5. **Anchor Tags ( href with valid values)**
```
 <link rel="icon" href="download.jfif">
```

6. External CSS/JS link and script
```
 <script src="js/script.js"></script>
 <script src="js/age.js"></script>
 <script src="js/stats.js"></script>
 <script src="js/shop.js"></script>
 <script src="js/search.js"></script>
 <script src="js/movement.js"></script>
```

7. **Responsive Containers in Layout**
```
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
and 
```
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
```

8. **HTML Comments**

```
<!--stats about the pet--> //line 26
<!--Middle div, holds the egg and the pet image, pet image src is populated through js--> //line 51
 ```
 9. **Responsive media**
 ```
#pet-image img{
    width: 50%; 
    min-width: 150px;
    aspect-ratio: 1/1;
    border-radius: 15px;
}
 ```
 10. **Passes the w3c HTML validation**

 ## CSS
 1. **Global Reset**
 ```
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
 ```
2. **CSS Variables**
```
:root{
    --light:rgb(255, 236, 170);
    --dark:rgb(36, 17, 124);
}
```
3. **Responsive Design**
```
@media screen and (max-width: 768px) 
```
4. **Typography styling**
Kept it default, figured it would be easiest to read.
5. **Color Scheme**
```
#inventory, #shop{
    text-align: center;
    color: white; 
    display: block;
    grid-row: 2;
    grid-column: 2/4;
    background-color: #2c2c2c; 
    z-index: 999;
    }
```
Black background and white text, stuff with a darker background get white text
6. **Reusablity**
```
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
```
.item applies to all items

7. **CSS Transitions**
```
#hap, #hun, #ene {
    width: 30px;
    background-color: green;
    transition: height 0.3s;
}
```
Makes the height of all these move smoothly

8. **Hover effects**
```
.item:hover{
        padding: 10px;
        background-color: #d9d7d7;
    }
```
9. **Layout Containers**
```
#con{
     width: 100%;
    height: 100vh; 
    display: grid;
    background-color: #f0f8ff;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.1fr 1fr;
    z-index: 5;
}
```

10. **Z-index & Posistioning**
```
#head {
    grid-column: 1/4;
    grid-row: 1;
    display: flex;
    justify-content:flex-start;
    align-items: center;     
    overflow: hidden;
    padding: 20px;  
    z-index: 999; <--
}

  pet.style.position = 'relative'
```
11. **Theme Customization**
```
.lightMode{
    background-color: var(--light);
    color: #333333;
}

.darkMode{
    background-color: var(--dark);
    color: #f0f0f0;
}
```