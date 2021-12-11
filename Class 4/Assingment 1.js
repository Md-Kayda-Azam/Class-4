


function agecal(name, age){
if( age >= 1 && age <= 5 ) 
    return`Hi ${name} you are a baby.`

 else if( age >= 6 && age <= 17 ) 
    return`Hi ${name} you are a teenager.`

else if( age >= 18 && age <= 40 ) 
    return`Hi ${name} you are a young man.`

else if( age >= 41 && age <= 60 ) 
    return`Hi ${name} you are a an old man.`
}



let name = prompt('Please your name?');
let age = Number(prompt('Birthday, year'))

console.log(agecal(name, age));