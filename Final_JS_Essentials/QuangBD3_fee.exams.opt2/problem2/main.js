const addBtns = document.querySelectorAll(".add");
const subBtns = document.querySelectorAll(".sub");
const closeBtns = document.querySelectorAll(".close");
const amounts = document.querySelectorAll(".amount")
const items = document.querySelectorAll(".item")


const prices = document.querySelectorAll(".price")
const discounts = document.querySelectorAll(".discount")
const taxs = document.querySelectorAll(".tax")
const totals = document.querySelectorAll(".total")

const totalPrice = document.querySelector(".totalPrice")
const totalDiscount = document.querySelector(".totalDiscount")
const totalTax = document.querySelector(".totalTax")

console.log(totalPrice, totalDiscount, totalTax);


// Click subBtn giam so luong item

for (let  i = 0; i < subBtns.length; i++){
    subBtns[i].addEventListener("click", function(){
        var x = parseInt(amounts[i].innerHTML);

        if(x > 1){
            x--;
            amounts[i].innerHTML = x;
            getTaxTotal()
            totalItem()
        }
    })
}



// Click add item
for (let  i = 0; i < addBtns.length; i++){
    addBtns[i].addEventListener("click", function(){
        var x = parseInt(amounts[i].innerHTML);

        if(x){
            x++;
            amounts[i].innerHTML = x;
            getTaxTotal()
            totalItem()
        }
    })
}



function getTaxTotal(){
    for( let i = 0; i< taxs.length; i++ ){

        var amount = parseInt(amounts[i].innerHTML)
        var tax = parseInt(taxs[i].innerHTML);
        var discount = parseInt(discounts[i].innerHTML);
        var price = parseInt(prices[i].innerHTML);


        taxs[i].innerHTML = (amount*price*0.125).toFixed(1);

        if(!discount){
            discount = 0;
        }
        totals[i].innerHTML = (amount*price - discount + parseFloat(taxs[i].innerHTML)).toFixed(2);

    }
}

function totalItem(){
    var totalsPrice = 0;
    var totalsDiscount = 0;
    var totalsTax = 0;

    for(i = 0 ; i < totals.length; i++){
        var discount = parseInt(discounts[i].innerHTML);
        if(!discount){
            discount = 0;
        }


        totalsPrice += parseFloat(totals[i].innerHTML);
        totalsDiscount += discount;
        totalsTax += parseFloat(taxs[i].innerHTML);

    }

    totalPrice.innerHTML = totalsPrice;
    totalDiscount.innerHTML = totalsDiscount;
    totalTax.innerHTML = totalsTax;

}







// Click closeBtn xoa item
for (let i = 0 ; i < closeBtns.length ; i++){
    closeBtns[i].addEventListener('click', () =>{
        items[i].remove();
    })
}


