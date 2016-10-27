function isEvenNumber(n){
  if(n % 2 == 0){
      return true;
  }else{
      return false;
  }
}

 
 function toEvenNumber(number){
    if(isEvenNumber(number)){
        return number;
    }
    return number + 1;
 }


function toOddNumber(num){
    if(isEvenNumber(num)){
        return num + 1;
    }
    return num;
}


function sumN(number){
    if(number >= 1){
        let result = 0
        return sum(number);
    }
    let result = 0;
    let i = number;
    while(i <= 1){
    result = result + i;
    i = i + 1;
  }
    return result;
}
