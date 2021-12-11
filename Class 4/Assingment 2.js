

function area(type, lenght, width){
    if( type == 's'){
    return lenght * lenght;
    }else if( type == 'r' ){
        return lenght * width;
    }else if( type == 't'){
        return .5 * lenght * width;
    }

}

let type =(prompt('Type'));
let land =parseInt(prompt('land'));
let height =parseInt(prompt('height'));

console.log(`

          land         =${ land }
          Height       =${ height }
    ----------------------------
    Area of a triangle = ${ area (type, land, height)}




`);