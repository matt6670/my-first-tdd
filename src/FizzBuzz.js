function fizzbuzz(n){

    if(!(typeof(n) === ("number"))){
        return "don't input a string"
    }
    

    if(n % 15 === 0){
        return "fizzbuzz";
    }
    else if(n % 5 === 0){
        return "buzz";
    }
    else if(n % 3 === 0){
        return "fizz";
    }
    return n;
    
}