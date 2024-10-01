function isPalindrome (x){
    let xs = x.toString();
    let rev = xs.split('').reverse().join('');
    let result
    if((Number(rev)) === x){
        result = true;
    }
    else if(rev.endsWith('-')){
        result = false;
    }
    else{
        result = false;
    }
    console.log(result);
    return result;
}
isPalindrome(121);

