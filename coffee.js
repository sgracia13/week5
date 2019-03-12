let btnDisplayAll = document.getElementById("btnDisplayAll")
let COFFEE_URL =  "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let fullCoffeeList = document.getElementById("fullCoffeeList")
btnDisplayAll.addEventListener('click', function(){

    //Regular Method
//     let parameters = {_id:"", coffee:"", email:""}
//     console.log(JSON.stringify(parameters))

//     fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/', {
//     method:'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(parameters)
// }).then(function(response) {
//     return response.json()
// }).then(function(json) {
//     console.log(json)
// })

//JSON Fetch
    fetch(COFFEE_URL).then(response => response.json()
    ).then((data) =>{
        let keys =  Object.keys(data)
        let orders = keys.map(function(key){
            let order = data[key]
            console.log(order)
            return `<li>
                <div class ="orderList">
                   <p> ${order.emailAddress}</p>
                   <p>${order.coffee}</p>
                   <button>DELETE</button>
                       </div>
                       </li>`
       })
       fullCoffeeList.innerHTML = orders.join("") 
    })
})






    

//Axios.get method

// const url = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/'
// axios.get(url)









