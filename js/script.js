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
        } else if (userAge === 'over65') {
            totCost = userCost - Math.floor(userCost * 40) / 100;
        } else {
            totCost = userCost;
        }
        document.getElementById('name').innerHTML = `${userName}`;
        document.getElementById('price-ticket').innerHTML = `${totCost}`;


});
