/*
Write a program to calculate the total price of your phone purchase. You will keep purchasing phones until you run out of money in your bank
account. You'll also buy accessories for each phone as long as your purcahse amount is below your mental spending threshold. */

//Establish constants and variables to be used later
$(".button").on('click', function () {

    var bankAccountBalance = Number(prompt("Please enter Bank Account balance, only numbers, IE: 300")),
        total = 0,
        count = 0,
        phoneCount = 0;
    const Tax_Rate = 0.08,
          Spending_Threshold = Number(prompt("Please enter spending threshold, only numbers, IE: 300")),
          Phone_Price = Number(prompt("Please enter phone price, only numbers, IE: 115")),
          Accessory_Price = 50.00;



    function calculateTax(total) {
        return total * Tax_Rate;
    } //End calcuateTax function

    function formattingPrice(total) {
        return "$" + total.toFixed(2);
    }//End formattingPrice function

    //Loop till we reach no money in bank account
    while (bankAccountBalance > total) {
        total = total + Phone_Price;

        if (total < Spending_Threshold) {
            count++;
            total = total + Accessory_Price;
            console.log("Purchased accessory " + count);
            $(".phoneAccessory").append("<p>Purchased accessory " + count + "</p>");
        }
        else if (total > Spending_Threshold) {
            $(".phoneAccessory").append("<p>Could not afford accessory</p>");
        }
        total = total + calculateTax(total);

        if (total < bankAccountBalance) {
            console.log("Your purchase price w/tax: " + formattingPrice(total));
            $(".phonePurcahse").append("<p>Purchased price w/tax " + formattingPrice(total) + "</p>");
        }
    } //End while loop


    if (total > bankAccountBalance) {
        console.log("You can't afford it.");
        $(".phonePurcahse").append("<p>Purchased price w/tax " + formattingPrice(total) + "</p>");
        $(".outPut").append("<p>You can't afford it.</p>");
    }

});