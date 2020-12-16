function handleSignIn(){

    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    alert(email);
    const fs = require('fs');
    const customer = {
        name: "asddsadasdsdas",
        order_count: 0,
        address: "sasssssssssss",
    }
    data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
    var obj = {
        table: []
    };
    obj.table.push({id: 1, square:2});
    alert("asdadadsadsa");
    const jsonString = JSON.stringify(obj)
    fs.writeFile('./newCustomer.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })


}

