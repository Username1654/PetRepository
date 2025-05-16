const searchBar = document.getElementById('inpu') //Shop search
let searchbar2 = document.getElementById('inpu2')//inventory search
let histor = document.getElementById('history')
let search1 = []
let search2 = []
let itemID=0
searchBar.addEventListener('input', searching)
function searching(){
    const searchTerm = searchBar.value.toLowerCase() //gets the search value then converts to lowcase
    const items = document.querySelectorAll('#ShopF .item') //gets all .item in #shopF 

    items.forEach(item => { //for each of the items in shopF it'll convert it to lowercase then check if it matches the searchterm
        const itemName = item.querySelector('h3').textContent.toLowerCase()
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
        if(searchTerm === itemName){
            itemID++
           search1.push(itemName)
           document.cookie += `SearchName:${itemName};`
           histor.innerHTML += `<li id='${itemID}' onclick='search(${itemID})'>${itemName}</li>`
        }
           })
        }

         function search(itemID){
            let a = document.getElementById(itemID).innerHTML
            console.log(a)
            searchBar.value = a
            searching(a)
        }
        document.querySelectorAll('#history li')
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