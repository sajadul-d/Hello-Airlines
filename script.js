
//AirTicket Handling function generate
function AirTicketHandling(ticket,isIncrease){
    
    let ticketClass = ticketInput(ticket)
    let newTicketClass = ticketClass
    if(isIncrease==true){
         newTicketClass = ticketClass + 1
    }
    
   if(isIncrease == false && ticketClass>0){
        newTicketClass = ticketClass - 1
    }
    document.getElementById(ticket +'-class-value').value = newTicketClass
    // console.log(newTicketClass);
    // let total = 0
    // if(ticket == 'fist'){
    //     total = newTicketClass * 150
    // }
    // if(ticket == 'economy'){
    //     total = newTicketClass * 150
    // }
    

    //calling totalCalculate function
    calculateTotal()

}

//totalCalculate function generate

function calculateTotal(){
    let fistClass = ticketInput('fist')
    let economyClass = ticketInput('economy')
    let subtotal = (fistClass * 150) + (economyClass * 100)
    document.getElementById("sub-total").innerText ="$"+subtotal
    let vat = subtotal * 0.1
    document.getElementById("vat").innerText ="$" + vat
    let total = subtotal + vat
    document.getElementById("total").innerText ="$" + total


    //this is for ticket details
    let noOfTotalTicket=fistClass+economyClass
    console.log(noOfTotalTicket);
     
    document.getElementById('noOfTicket').innerText =noOfTotalTicket
    document.getElementById('noOfFirstClass').innerText =fistClass
    document.getElementById('noOfEconoClass').innerText =economyClass
    document.getElementById('totalTicketPrice').innerText=total
    document.getElementById('vatTicketPrice').innerText= vat 
}


//getting input value function generate
function ticketInput(ticket){
    let ticketC = document.getElementById(ticket +'-class-value')
    let ticketClass = parseInt(ticketC.value)
    return ticketClass
}


//display ticket details
function ticketDetails(){
    var ticketDetails=  document.getElementById('display').style.display='block';
    return ticketDetails;
  }


//display close    
function displayClose(){
     var cancelDisplay=  document.getElementById('display').style.display='none';
    return cancelDisplay;
 }

 



