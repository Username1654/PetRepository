//age moves up a every minute simulating a year for your pet
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
