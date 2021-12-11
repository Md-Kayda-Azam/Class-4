
function agecal(currency, amount){
    if( currency == "doller"){
        return(` ${currency} ${amount} = ${amount *83} Taka`);
    }
    else if( currency == "pound"){
      return(` ${currency} ${amount} = ${amount *90} Taka`);
    }
    else if( currency == "rupe"){
      return(` ${currency} ${amount} = ${amount *80} Taka`);
    }
    else if( currency == "real"){
      return(` ${currency} ${amount} = ${amount *22.60} Taka`);
    }
}

let currency = prompt("Currency Name");
let amount = prompt(" Amount");

console.log(agecal(currency, amount));