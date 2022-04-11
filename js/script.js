document.getElementById("gen").addEventListener("click",
    function () {

        // Prendo i dati inseriti dall'utente
        const userName = document.getElementById('userU').value;
        console.log(userName);

        const userKM= document.getElementById('userKm').value;
        console.log(userKM);

        const userAge= document.getElementById('userAGE').value;
        console.log(userAge);

        let kmPrice = 0.21;

        //CALCOLO COSTO VIAGGIO
        let userCost = userKM * kmPrice;

        let totCost;

        if (userAge === 'minorenne') {
            totCost = userCost - Math.floor(userCost * 20) / 100;
            document.getElementById('discount-offer').innerHTML =`Offer under18`;
        } else if (userAge === 'over65') {
            totCost = userCost - Math.floor(userCost * 40) / 100;
            document.getElementById('discount-offer').innerHTML =`Offer over65`;
        } else {
            totCost = userCost;
            document.getElementById('discount-offer').innerHTML =`Offer standard`;
        }
        document.getElementById('name-ticket').innerHTML = `${userName}`;
        document.getElementById('price-ticket').innerHTML = `${totCost}`;

        const carnumber = Math.floor(Math.random() * 5) + 1;
        console.log(carnumber);
        document.getElementById('car-number').innerHTML = `${carnumber}`;

        const codiceCP = Math.floor(Math.random() * 200) + 9000;
        console.log(codiceCP);
        document.getElementById('codice-CP').innerHTML = `${codiceCP}`;

});
//tasto annulla
 

document.getElementById("del").addEventListener("click", 
    function() {
    //Ripulsco i campi
        const userName = document.getElementById("userU");
        userName.value = "";

        const userKM = document.getElementById("userKm");
        userKM.value = "";

        const userAge = document.getElementById("userAGE")
        userAge.value = "";
    }
);