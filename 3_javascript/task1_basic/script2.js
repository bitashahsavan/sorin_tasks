//!question76========================
console.log("====***it is script 2 *****====");
console.log("=======it is question76 ======");
function get_first_last(arr){
    if(arr.length >= 1){
        let first =arr[0]
        let last = arr[arr.length-1];
        let result = [];
        let res = result.push(first,last);
        console.log(`it is our array${arr}`);
        return result;
    }
}
const Arr76 = [2,4,5];
console.log(get_first_last(Arr76));

//!question77========================
console.log("=======it is question77 ======");
function check_1_3(arr){
    console.log(`it is our array${arr}`);
    let one= arr.includes(1);
    let three = arr.includes(3);
    let res = (one || three) ?  
              "there is 1 or 3" : "there is not 1 or 3";
    return res;
}
console.log(check_1_3(Arr76));

//!question78========================
console.log("=======it is question78 ======");
function checked_1_3(arr){
    console.log(`it is our array${arr}`);
    let one= arr.includes(1);
    let three = arr.includes(3);
    let res = !(one || three) ?  
              "there isnot 1 or 3" : "there is 1 or 3";
    return res;
}
console.log(checked_1_3(Arr76));

//!question79========================
console.log("=======it is question79 ======");
const myarr = [40,40];
function check_30_40(arr){
    if(arr.length < 3){
        let x = arr.filter(e =>{
            return (e === 30 || e === 40)
        }).length;
        if(x == 2){
            return "there is 2 to 30 or 40";  
        }else{
            return "there isnot 30 or 40 in array"
        }
    } 
}
console.log(check_30_40(myarr));

//!question80========================
console.log("=======it is question80 ======");
const arr80 = [1,2,3,4]
console.log(`it is orginal array${arr80}`);
function swap_F_L(arr){
    if(arr.length >= 1){
        let first = arr.splice(0,1);
        let last = arr.splice(arr.length-1,1);
        arr.push(first[0]);
        arr.unshift(last[0]);
        return `it is aswaped array ${arr}`; 
    }
}
console.log(swap_F_L(arr80));

//!question81========================
console.log("=======it is question81 ======");
function sum(x){
    if(x > 0){
        let a = Math.floor(x / 10);
        let b = x % 10;
        return `the sum of ${x} is ${a+b}`;
    }
}
console.log(sum(65));

//!question82========================
console.log("=======it is question82 ======");
function sum_without_carry(num1,num2){
    x1 = num1.toString().split("");
    x2 = num2.toString().split("");
    let finall1 = [];
    let finall2 = [];
    x1.map((e,i) =>{
        let f1 = x1[i];
        finall1.push(f1);
    })
    x2.map((x,j) =>{
        let f2 = x2[j];
        finall2.push(f2); 
    })
    let finall = finall1.map((e,i) => {
        let num = Number(e + finall2[i]);
        let a = Math.floor(num/ 10);
        let b = num % 10;
        let sum = a + b;
        let num_final = sum % 10;
        let final_str = num_final;
        return  final_str;
    })
    console.log(num1);
    console.log(num2);
    console.log(finall);    
}
sum_without_carry(1975,1847)

//!question83========================
console.log("=======it is question83 ======");
function check_longest(arr){
  let longest = arr.reduce((r,s) => r.length > s.length ? r : s);
  return `${longest} is a longest string `;
}
console.log(check_longest(["bita" ,"ali" ,"barana"]));

//!question84========================
console.log("=======it is question84======");
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                  "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                  "s", "t", "u", "v", "w", "x", "y", "z"];
function change_alphabet(Text){
   let myText = Text.split("");
   myText.map((a ,j) =>{
    let finall = [];
    alphabet.map((e,i) =>{
        if(a == e ){
            let arr1=[];
            if( (a && e)=== "z"){
                let arr =arr1.push(alphabet[0]);   
            }
            let arr =arr1.concat(alphabet[i+1]);
            finall = arr.join(""); 
        }
    })
    return console.log(finall);
   })
}
change_alphabet("bzitaz");

//!question85========================
console.log("=======it is question85======");
function sum_two_arr(arr){
    let first_part_arr = [];
    let second_part_arr = [];
    let final_result = [];
    arr.map((e,i) =>{
        if(i % 2 == 0){
            let first_part = e;
            first_part_arr.push(first_part);   
        }
        if(i % 2 == 1){
            let first_part = e;
            second_part_arr.push(first_part);   
        }
    })
    let sum_first = first_part_arr.reduce((t,v) => t+v);
    let sum_second = second_part_arr.reduce((t,v) => t+v);
    final_result.push(sum_first);
    final_result.push(sum_second)
    console.log(first_part_arr);
    console.log(second_part_arr);
    return final_result;
}
    
console.log(sum_two_arr([1,2,3,4,5]));

//!question86========================
console.log("=======it is question86======");
function type_of_angle(angle){
    if(angle > 0 && angle < 90){
        return "it is Acute angle"
    }else if(angle == 90){
        return "it is Right angle"
    }else if(angle > 90 && angle < 180){
        return "it is Obtuse angle"
    }else if(angle == 180){
        return "it is Straight angle"
    }
}
console.log(type_of_angle(170));

//!question87========================
console.log("=======it is question87======");
let array1 = [11, 22, 33];
let array2 = [21, 22, 23];
let array3 = [11, 22, 33]

function check_similar (arr1, arr2){
    if(arr1.length === arr2.length){
       let res = arr1.every((e, i) => e === arr2[i]);
       return res;
    } 
}
  console.log(check_similar(array1, array2)); 
  console.log(check_similar(array1, array3));
  
//!question88========================
console.log("=======it is question88======");
function find_largest_divisor(x1,x2){
    let divisors_x1 = [];
    let divisors_x2 = [];
    let common_divisor = [];
    for(let i=1 ; i <= x1 ; i++){
        if(x1 % i == 0){
            divisors_x1.push(i); 
        }
    }
    for(let j=1 ; j <= x2 ; j++){
        if(x2 % j == 0){
            divisors_x2.push(j); 
        }
    }
    common_divisor = divisors_x1.filter((e) => divisors_x2.includes(e));
    let largest_common_divisior = common_divisor.slice(common_divisor.length-1);
        console.log(divisors_x1);
        console.log(divisors_x2);
        console.log(common_divisor);
        return `${largest_common_divisior} is largest divisor between ${x1} and ${x2}`       
}
console.log(find_largest_divisor(24 ,36));

//!question89========================
console.log("=======it is question89======");
function replace$(str , ope){
    let OPE = ope;
   let res =str.replace("$" , OPE);
   return res;
}
console.log(replace$("x$y=z", "+"));

//!question90========================
console.log("=======it is question90 ======");
function check_longest_index(arr){
      let longest_index = arr.reduce((r,s,i) => r.length > s.length ? r : s );
      let index = arr.indexOf(longest_index);
      return `the longest item is in ${index} 
      index and that is ${longest_index }`;
}
console.log(check_longest_index(["barana","bita","ali"]));

//!question91========================
console.log("=======it is question91 ======");
function find_greatest_sum_n(arr,n){
    console.log(arr);
    let couple_arr = [];
    for(let i =0 ; i< arr.length-1 ; i++){
        if(i+2 <= arr.length){
            let couple = arr.slice(i,i+n);
            couple_arr.push(couple);
        }else{
            let couple = arr.slice((i,i+n).concat(arr.slice(0,(i+n) % arr.length)));
                couple_arr.push(couple)
        }
    }
    console.log(couple_arr);
    let sum_adj_arr = [];
    couple_arr.map((e,i) =>{  
        let sum_adj = e.reduce((a,c) => a+c);
        sum_adj_arr.push(sum_adj);
        return console.log(sum_adj);
    })
    let S_sum_adj_arr = sum_adj_arr.sort((a,b) => a-b);
    let maximum = S_sum_adj_arr.slice(S_sum_adj_arr.length-1)
    return `it is maximal difference ${maximum }`;
}
console.log(find_greatest_sum_n([9,6,4],3));

//!question92========================
console.log("=======it is question92 ======");
function find_greatest_sum(arr){
    console.log(arr);
    let couple_arr = [];
    for(let i = 0 ; i < arr.length-1 ; i++){
        if(i+2 <= arr.length){
            let couple = arr.slice(i,i+2);
            couple_arr.push(couple)
        }else{
            let couple = arr.slice((i,i+2).concat(arr.slice(0,(i+2) % arr.length)));
                couple_arr.push(couple)
        }
    }
    console.log(couple_arr);
    let sum_adj_arr = [];
    couple_arr.map((e,i) =>{  
        let sum_adj = e.reduce((a,c) => a-c);
        sum_adj_arr.push(sum_adj);
        return sum_adj_arr;
    })
    let S_sum_adj_arr = sum_adj_arr.sort((a,b) => a-b);
    let maximum = S_sum_adj_arr.slice(S_sum_adj_arr.length-1)
    return `it is maximal difference ${maximum }`;
}
console.log(find_greatest_sum([9,6,4,1,2,10,11]));


//!question93========================
console.log("=======it is question93 ======");
function find_pairs(arr){
   let pairs = [];
   for(let i = 0; i < arr.length; i++){
       for(let j = i+1; j < arr.length; j++){
          pairs.push(arr[i] , arr[j]);
        }
    }
    return find_greatest_sum(pairs); 
}
console.log(find_pairs([1,2,3]));

//!question94========================
console.log("=======it is question94 ======");
function find_repetitive_number(arr){
       let result = {};
       arr.map(e => result[e] = (result[e] || 0) + 1);
       result = Object.keys(result).map((key) => [result[key]]);
       let maximum = result.reduce((a,c) => {
          return Math.max(a,c);
       })
       return `the number item appears most is ${maximum}`;
}
console.log(find_repetitive_number([1,2,3,3,2,1,3,1,3]));

//!question95========================
console.log("=======it is question95======");
const replaceAll = (arr , n) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] = n)   
    }
    
    return `we want replace all item of our arry to ${n} 
            now it is result${result}`;
}
console.log(replaceAll([1,2,3] ,500));

//!question96========================
console.log("=======it is question96======");
function sum_absolute_differences(arr){
    let sum_arr = [];
    let result = [];
    for (let i = 0; i < arr.length-1; i++) {
            let sum = Math.abs(arr[i+1] - arr[i]);
            sum_arr.push(sum);
            result = sum_arr.reduce((a , c) => {return a+c;});        
    }
    return `the sum of absolute differences of consecutive numbers is ${result}`;
} 
console.log(sum_absolute_differences([1,2,-3]));

//!question97========================
console.log("=======it is question97======");
function isPalindrome(str){
    let rev = str.split("").reverse().join("");
    if(str == "" || str.length < 2){
        return `the shortest possible string which can create a string to make palindrome is ${str} `
    }else if( rev === str){
            return `${str} is palindrome`;
    }else{
        return `${str} isnot palindrome`
    }
}

console.log(isPalindrome(""));
console.log(isPalindrome("B"));
console.log(isPalindrome("BAB"));
console.log(isPalindrome("BABjdh"));

//!question98========================
console.log("=======it is question98======");
const alphaLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                        "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                        "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                        'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z']                        
function change_case(str){
    let str_arr = str.split("");
    let lowerCase = 0;
    let upperCase = 0;
    let arr_lower =[];
    let arr_upper =[];
    str_arr.map((e,i) => {
        alphaLowerCase.map((a,j) =>{
            if(str_arr[i] === alphaLowerCase[j]){
                arr_lower.push(str_arr[i]);  
            }
        })
    })
    str_arr.map((e,i) => {
        alphaUpperCase.map((a,j) =>{
            if(str_arr[i] === alphaUpperCase[j]){
                arr_upper.push(str_arr[i]);  
            }
        })
    })
    lowerCase = arr_lower.length;
    upperCase = arr_upper.length;
    str_arr = str_arr.join("");
    if(lowerCase > upperCase ){
        return str_arr.toLowerCase(); 
    }else if(upperCase > lowerCase){
        return str_arr.toUpperCase(); 
    }else{
        return str_arr.toUpperCase(); 
    }
}
console.log(change_case("Bita"));
console.log(change_case("BITa"));
console.log(change_case("BIta"));

//!question99========================
console.log("=======it is question99======");
//we wana change str1 to str2
function look_alike(str1 , str2){
    let str1_arr = str1.split("");
    let str2_arr = str2.split("");
    let result = [];
    if(str1_arr.length == str2_arr.length){
        str1_arr.map((e , i) => {
            if( str2_arr.includes(e) ){
              result.push(true);
            }    
        }) 
        if(str2_arr.length == result.length){
            return true;
        }else{
            return false;
        }
    }
}
console.log(look_alike("abc" , "cba"));
console.log(look_alike("scb" , "abc"));

//!question100========================
console.log("=======it is question100======");
function check_n(arr1 , arr2){
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    let result = [];
    arr1.map((e , i) => {
        if(arr2.includes(e)){
            result.push(true)
        }
    })
    if(result.length == 1){
        return 'there is at least one Common element';
    }else if(result.length > 1){
        return 'there is some Common element';
    } 
}
console.log(check_n([1,2,3], [8,9,3,1]));
console.log(check_n([1,2,3], [8,9,3]));

//!question101========================
console.log("=======it is question101======");
function check_case(str){
    if(!!str.match(/^[a-z]*$/i)){
        for(let i = 0 ; i < str.length; i++){
            for( let j = i+1 ; j < str.length; j++){
                console.log(str[i] , str[j]);
                let upper =  /[A-Z]*$/;
                let lower = /[a-z]*$/;
                let x = str[i] && str[j];
                if(upper.test(x)){
                    return "two uppercase are in adjacent positions."
                }
                if(lower.test(x)){
                    return "two lowercase are in adjacent positions."
                }
                else{
                    return "no two uppercase and no two lowercase letters are in adjacent positions.";
                }
            }
        }
    }
}
console.log(check_case("bita"));
console.log(check_case("BITae"));
console.log(check_case("BeIeK"));

//!question102========================
console.log("=======it is question102======");
function find_inversions(arr){
        let count = 0 ;
        for(let i = 0 ; i < arr.length-1 ; i++){
            for(let j = i + 1 ; j < arr.length ; j++){
                if(arr[i] > arr[j]){
                    count++ ;
                }
            }
        }
        return `the number of inversions is ${count}`;    
}
console.log(find_inversions([4,3,2,1]));

//!question103========================
console.log("=======it is question103======");
function del_num_find_max(num){
    let num_arr = num.toString().split("");
    let filter;
    let result = [];
    num_arr.map((e , i) => {
        filter = num_arr.filter((value , index) => index !== i);
        result.push(filter.join(""))
    })
    let sort_result = result.sort();
    let maximum = sort_result.slice(-1 , sort_result.length);
    console.log(sort_result);

    return maximum; 
}
console.log(del_num_find_max(1245));

//!question104========================
console.log("=======it is question104======");
function check_max_difference(arr , n){
    for(let i = 0 ; i < arr.length-1 ; i++){
        let diff = Math.abs(arr[i] - arr[i+1]);
        console.log(diff);
        if(diff < n){
            return `the elemnts are ${arr[i]} and ${arr[i+1]}`;
        }else{
            return "there is any number with this condition";
        }
    }
}
console.log(check_max_difference([25,45,2,10] , 25));

//!question105========================
console.log("=======it is question105======");
    const convertToSingle = (num) =>{
        let arr_num = num.toString().split("");
        console.log(arr_num);
        var sum_func = (arr_num) => arr_num.reduce((a, c) => a + (+c), 0);
        var sumToSingle = (arr_num) => {
            while (arr_num.length != 1) {
                let sum = sum_func(arr_num);
                arr_num = String(sum).split("");
            }
            return arr_num[0];
        }
        return sumToSingle(arr_num); 
    }
console.log(convertToSingle(24569));

//!question106========================
console.log("=======it is question106======");
    const divied = (num , n) => {
        while (Number.isInteger(num / n)) {
            num = num / n
        }
        return num;
    }
   
console.log(divied(25, 5));

//!question107========================
console.log("=======it is question107======");
function find_cuople_divisible(arr){
    let pairs = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
           pairs.push(arr[i] , arr[j]);
         }
    }
    let couple_arr = [];
    for(let i =0 ; i< pairs.length-1 ; i++){
        if(i+2 <= pairs.length){
            let couple = pairs.slice(i,i+2);
            couple_arr.push(couple)
        }else{
            let couple = pairs.slice((i,i+2).concat(pairs.slice(0,(i+2) % pairs.length)));
            couple_arr.push(couple)
        }
    }
    console.log(couple_arr);
    couple_arr.map((e , i) => {
        //console.log(e,i);
        couple_arr[i].map((x , j) => {
            let result = [] ;
            //console.log(x,j);
            if(couple_arr[i][j+1] % couple_arr[i][j] === 0){
                result.push(couple_arr[i][j],couple_arr[i][j+1]);
                console.log(result);
                ;
            }  
        })
    })   
} 
find_cuople_divisible([2,4,6]);
find_cuople_divisible([2, 4, 16]);

//!question108========================
console.log("=======it is question108======");
const sum_dot_product = (arr1 , arr2) => {
    let result_arr = [];
    arr1.map((e , i) => {
        let dot = e * arr2[i];
        result_arr.push(dot);
    });
    let result = result_arr.reduce((a , c) => a+c);
    return result; 
}
console.log(sum_dot_product([1,2,3],[1,2,3]));

//!question109========================
console.log("=======it is question109======");
function isPrime(num){
    for(let i = 2 ; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        } 
        return num > 1; 
    }
}
function prime_numbers(n){
    let result = [];
    for(let i = 2 ; i <= n; i++){
      if(isPrime(i)){
        result.push(i)
      }
    }
    return `these are prime numbers : ${result}`;
}
console.log(prime_numbers(17));

//!question110========================
console.log("=======it is question110======");
function isEven(num){
    if(num % 2 === 0){
        return num;
    }else{
        return false;
    }
}
function even_numbers(n){
    let result = [];
    for(let i = 2 ; i < n ; i++){
        if(isEven(i)){
            result.push(i)
        }
    }
    return `these are even numbers : ${result}`;
}
console.log(even_numbers(20));

//!question111========================
console.log("=======it is question111======");
const del_equal = (arr) =>{
    for(let i =0; i < arr.length ; i++){
        for (let j = i+1; j < arr.length; j++) {
            let res = [];
            if(arr[i] === arr[j]){
                res.push(arr[i] ,arr[j]);
                let result = arr.filter(e => !res.includes(e))
                return `${arr} the third item is ${result[0]}`;
            }else{
                return `${arr} there isnot any equal item`
            }   
        }
    }
}
console.log(del_equal([1,2,3]));
console.log(del_equal([1,1,3]));

//!question112========================
console.log("=======it is question112======");
const factorial = (n) => {
    if(n === 0 || n === 1)
     return 1;
    for(let i = n - 1; i >= 1; i--){
       n = n * i;
    }
    console.log(`the factorial is ${n}`);
    let fact = n;
    let count = 0;
    while (fact % 10 === 0) {
        count++ ;
        fact = fact / 10 ;
    }
    return `the number of trailing zeros is ${count}`;
} 
console.log(factorial(15));

//!question113========================
console.log("=======it is question113======");
const divied_even = (n) => {
    let i = 2 ;
    let even_i = i * 2 ;
    while (Number.isInteger(n / even_i)) {
      i = i * 2;
      n = n + (n / even_i)
    }
return n;
}
console.log(divied_even(100));

//!question114========================
console.log("=======it is question114======");
const check_sentence = (str) => {
   let str_arr = str.split("");
   let first_char = str_arr.splice(0 , 1);
   let last_char = str_arr.splice(-1 , 2);
   let upper =  /[A-Z]*$/;
   let res = [];
   if(upper.test(first_char)){
    res.push(true)
   }
    if(last_char == "."){
        res.push(true)
    }else{
       res.push(false);
    } 
    if((res[0] == true) && (res[1] == true)){
        console.log( "it is a correct sentence ");
    }else{
        console.log( "it isnot a correct sentence ");
    }
}
check_sentence("Hello world, welcome to the universe.");
check_sentence("hello world, welcome to the universe");

//!question115========================
console.log("=======it is question115======");
const diagonal_matrix = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if((i != j) && (matrix[i][j] != 0 )){
                return false;
            }  
        }
    } 
    return true;
}
console.log(diagonal_matrix([[1,0,0,0] , [0,2,0,0] , [0,0,3,0] , [0,0,0,4]]));
console.log(diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));

//!question116========================
console.log("=======it is question116======");
const replace_hash = (str) => {
    let finall_arr = [];
    let divesior_3 = []
    for (let i = 0; i <= 9; i++) {
        let num = str.replace("#" , i);
        let arr = num.split(" ");
        let integr = arr.map( e => Number(e));
        finall_arr.push(integr)
    }
    finall_arr.map(e => {
        if(e % 3 == 0){
            divesior_3.push(e)
        }
    })
    console.log(finall_arr);
    return divesior_3;   
}
console.log(replace_hash("2#0"));

//!question117========================
console.log("=======it is question117======");
const identity_matrix = (matrix) => {
    if(diagonal_matrix(matrix)){
        for(let i = 0; i < matrix.length; i++){
            for (let j = 0; j < matrix.length; j++){
                if((i == j) && (matrix[i][j] == 1 )){
                    return true; 
                } 
            }   
        }
    }
    return false;
}

console.log(identity_matrix([[1, 0, 0] , [0, 1, 0] , [0, 0, 1]]));
console.log(identity_matrix([[1, 0, 0] , [0, 1, 0] , [1, 0, 1]]));

//!question118========================
console.log("=======it is question118======");
const check_range = (n) => {
    if(n > 0 && n < 100){
      return true;
    }else{
      return false;
    }
}
console.log(check_range(35));
console.log(check_range(110));

//!question119========================
console.log("=======it is question119======");
const  increasing_number = (n) => {
    let arr = n.toString().split("");
    console.log(arr);
    let count = 0 ;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] >= arr[i+1]){
            count++ ;
            if(count > 1){
                return false;
            }
        }
   }
   return true;
}
console.log(increasing_number(1234));
console.log(increasing_number(4163));

//!question120========================
console.log("=======it is question120======");
const circle_point = (x,y,a,b,r) => {
   let d = (x - a)*2 + (y - b)*2;
   console.log(`the instance point to center is ${d}`);
   if(d < r){
    return "a point lies strictly inside a given circle."
   }else if(d > r){
    return "a point lies strictly outside a given circle."
   }
}
console.log(circle_point(0,0,1,1,2));
console.log(circle_point(5,5,4,4,2));

//!question121========================
console.log("=======it is question121======");
const triangular_matrix = (matrix) => {
    console.log(matrix);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if((j > i) && (matrix[i][j] != 0)){
                return false; 
            }
        } 
    }
    return true;
}
console.log(triangular_matrix([[1,0,0] , [3,2,0] , [4,5,3]]));
console.log(triangular_matrix([[1,0,0,0] , [0,2,0,0] , [0,0,3,0] , [0,0,0,4]]));
console.log(triangular_matrix([[1,2,1] , [3,2,0] , [4,5,3]]));

//!question122========================
console.log("=======it is question122======");
const check_sequence = (num) => {
    let arr = num.toString().split("");
    let inc = 0;
    let dec = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= arr[i+1]){
            inc++ ;
            if(inc > 1) {
                return "it is decrasing";
            }
        }else if(arr[i+1] >= arr[i]){
            dec++ ;
            if (dec > 1) {
                return "it is inc"
            }
        }
        
    }
    return true;
}
  
console.log(check_sequence(1234));
console.log(check_sequence(4163));
console.log(check_sequence(4321));

//!question123========================
console.log("=======it is question123======");
const permutation = (arr , n) => {
    let diff = [];
    for (let i = 0; i <= n ; i++) {
        if (arr[i] != i+1) {
            diff.push(i+1)
        }
    }
    if (diff.length > 1) {
        return false;
            
    }else{
        return true;
    }
}
console.log(permutation([1,2,3,4] , 4));
console.log(permutation([1,2,5,4] , 4));
//!question124========================
console.log("=======it is question124======");
const NOR = (a , b) => {
    if(!(a || b)){
        return true;
    }
    return false;
    
}
console.log(NOR(false,false));
console.log(NOR(true,false));
console.log(NOR(false,true));

//!question125========================
console.log("=======it is question125======");
const find_longest_str = (arr) => {
    let lgth = 0;
    let longest;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
        lgth = arr[i].length;
        longest = arr[i];
        }
    }
    return `the longest string is ${longest}`;
}
console.log(find_longest_str(["ali" , "barana",'bita']));

//!question126========================
console.log("=======it is question126======");
const largest_even_numbers = (arr) => {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            evens.push(arr[i]);
        }
    }
    console.log(evens);
    let sort_evens = evens.sort((a , b) => a - b);
    let max_even = sort_evens.splice(-1,1);
    return `${max_even} is a largest even number`
}
console.log(largest_even_numbers([16,17,18,19,12,13,14,15]));

//!question127========================
console.log("=======it is question127======");
function ToBinary(num) {
    let binary = num.toString(2);
    let count = 0;
    while (binary % 10 === 0) {
        count++ ;
        binary = binary / 10 ;
    }
    let arr_binary = binary.toString().split("");
    let rev_binary = arr_binary.reverse();
    return rev_binary.join("");
}
console.log(ToBinary(56));
console.log(ToBinary(234));

//!question128========================
console.log("=======it is question128======");
function rounded(number) {
    let round_down = Math.floor(number / 10) * 10;
    while (number % 10) {
        number++ ;
    }
    console.log(round_down , number);
    
    if(number > round_down){
        return `the rounded is ${number}`;
    }
} 
console.log(rounded(47));
console.log(rounded(592));

//!question129========================
console.log("=======it is question129======");
function prime_numbers129(n){
    let result = [];
    for(let i = n ; i <= n + 10 ; i++){
      if(isPrime(i)){
        result.push(i);
        break;
      }
    }
    return `the smallest prime number: ${result}`;
}
console.log(prime_numbers129(10));

//!question130========================
console.log("=======it is question130======");
const numbers_even = (num) =>{
    let arr = num.toString().split("");
    console.log(arr);
    let even = []
    arr.map((e , i) => {
        if(e % 2 === 0){
            even.push(e);
        }
    })
    let num_even = even.length;
    return `this number have  ${num_even}th even number`
}
console.log(numbers_even(548792));

//!question131========================
console.log("=======it is question131======");
const prefix_sums = (arr) => {
    console.log(arr);
    let res = arr.map((e , index) => {
        let prefixSums = 0;
        for (let i = 0; i < index + 1; i++) {
            prefixSums = prefixSums + arr[i]
        }
        return prefixSums;
    })
    return res;
} 
console.log(prefix_sums([1,2,3,4]));

//!question132========================
console.log("=======it is question132======");
function isPrime131(num) {
    for(var i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num;
}
const prime_factors = (n) => {
    let integers = [];
    let res = [];
    for (let i = 1; i <= n; i++) {
        if( n % i == 0){
            integers.push(i)
        }
    }
    console.log(integers);
    for (let i = 1; i < integers.length; i++) {
        if (isPrime131(i)) {
            res.push(integers[i])
        }
        
    }
    return res;
}
console.log(prime_factors(12));

//!question133========================
console.log("=======it is question133======");
const proper_fraction = (a , b) => {
    if(a > 0 && b > 0){
        if(b >= a){
            return `it is proper fraction`
        }
    }else{
        return `it isnot proper fraction`
    }
}
console.log(proper_fraction(1,2));

//!question134========================
console.log("=======it is question134======");
const alphabet134 = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                  "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                  "s", "t", "u", "v", "w", "x", "y", "z"]
const change_characters = (str) =>{
    console.log(str);
    let arr = str.split("");
    let arr1=[];
    arr.map((e , i) => {
        alphabet134.map((a , j) => {
            if (e == a) {       
                arr1.push(alphabet134[alphabet134.length-1 - j])            
            }
        })
    })
    return `${str} change to ${arr1.join("")}`;
}
console.log(change_characters("bita"));

//!question135========================
console.log("=======it is question135======");
const repetitive_char = (str) => {
    let arr = str.split("");
    let newarr = [... new Set(arr)];
    return newarr;
}
console.log(repetitive_char("bitashahsavan"));

//!question136========================
console.log("=======it is question136======");
const replace_$ = (str) =>{
    if (str.length >= 1) {
        let newStr = str.replace(str[0] , "$")
        return newStr;
    }
}
console.log(replace_$('bita'));

//!question137========================
console.log("=======it is question137======");
const fifteen = (num) => {
    if(num >= 15){
        return num;
    }else{
        return 15;
    }
}
console.log(fifteen(10));
console.log(fifteen(25));

//!question138========================
console.log("=======it is question138======");
const reverse_hex = (num) => {
    let Tohex = num.toString(16);
    console.log(`the hex ${num} is ${Tohex}`);
    let arr_hex = Tohex.toString().split("");
    let rev_hex = arr_hex.reverse();
    return rev_hex.join("") 
}
console.log(reverse_hex(1548));

//!question139========================
console.log("=======it is question139======");
const rigthMost = (num) => {
    let round = Math.floor(num / 10) * 10 ;
    let arr_round = round.toString().split("");
    let rigth_most = arr_round.length - 1;
    return `the position of a rightmost round number is ${rigth_most}`
}
console.log(rigthMost(5959));

//!question140========================
console.log("=======it is question140======");
const same_digit = (num) => {
    let arr_num = num.toString().split("");
    let count = 0 ;
    let lgth = arr_num.length;
    arr_num.map(e => {
        arr_num.every(a => {
            if(e == a){
                count++ ;
            }
        })
    })
    if(lgth == count){
        return `all the digits in a given number are the same `;
    }else{
        return false;
    } 
}
console.log(same_digit(534));
console.log(same_digit(555));

//!question141========================
console.log("=======it is question141======");
const numOfsame_ele = (arr1 , arr2) => {
    let same_ele = [];
    arr1.map((e , i) => {
        arr2.map((a , j) => {
            if(e === a){
                same_ele.push(e);
            }
        })
    })
    let numOfsame = same_ele.length;
    return `the number of elements which presents in both arr is ${numOfsame}`;
}
console.log(numOfsame_ele([1,2,3,4,7],[1,2,5,6,7]));

//!question142========================
console.log("=======it is question142======");
const simplify_path = (path) => {
    let arr =[];
    let arr_path = path.split("/")
    arr_path.map((e , i) => {
        if(e === ".."){
            if (arr.length > 0) {
                arr.pop();
            }
        }else if(e && e !== "."){
            arr.push(e)
        }
    })
    let finall = "/";
    if(arr.length > 0){
        finall = finall + arr.join("/")
    }
    return finall;
}
let link = '/a/./b/../../c/';
console.log(link);
console.log(simplify_path(link));

//!question143========================
console.log("=======it is question143======");
const sort_increasing = (arr) => {
    return arr.sort((a ,b) => a.length - b.length)
}
console.log(sort_increasing(["barana" , "bita" ,"gol" , "ali"]));

//!question144========================
console.log("=======it is question144======");
const break_url = (url) => {
    if(url.includes("://")){
        let first = url.split("/");
        first.map(e => {
            console.log(e);
        })
    }
}
let url = 'http://www.mymainsite.org/somepath/path2/path3/path4';
console.log(url);
break_url(url);

//!question145========================
console.log("=======it is question145======");
const maximum_integer = (num) => {
    let sum = 0 ;
    let i = 0;
    while (sum <= num) {
        sum = sum + i;
        i++ ;
    }
   return i - 1;
}
console.log(maximum_integer(15));

//!question146========================
console.log("=======it is question146======");
const cubes_sum = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    console.log(arr);
    let res = arr.reduce((a , c) => {
        return  Math.pow(a , 3) + Math.pow(c , 3);
    })
    return res;
}
console.log(cubes_sum(2));

//!question147========================
console.log("=======it is question147======");
const sum_digit = (str) => {
    let nums = str.match(/[1-9]/g);
    let ToNum = nums.map(e => Number(e));
    let result = ToNum.reduce((a , c) => a + c);
    console.log(str,nums);
    return result;
}
console.log(sum_digit('bita21ali5'));

//!question148========================
console.log("=======it is question148======");
const swap = (arr) => {
    let lgth = arr.length;
    let result = [];
    if(lgth % 2 === 0){
       let half_1 = arr.slice(0 , lgth/2);
       let half_2 = arr.slice(lgth/2 , lgth);
       result.push(half_2);
       result.push(half_1)
    }
    return result.join(",");
}
console.log(swap([1,2,3,4,5,6]));

//!question149========================
console.log("=======it is question149======");
const capitalization = (str) => {
    for (let i = 0; i < str.length; i++) {
        if(str[i].match(/[A-Z]/g)) {
            console.log(str[i].toString().toLowerCase());
        }
        if(str[i].match(/[a-z]/g)) {
            console.log(str[i].toString().toUpperCase());
        } 
    } 
}
capitalization("SHAHbitaSAVAN");

//!question150========================
console.log("=======it is question150======");
function swap_F_L(arr){
    if(arr.length >= 1){
        let first = arr.splice(0,1);
        let last = arr.splice(arr.length-1,1);
        arr.push(first[0]);
        arr.unshift(last[0]);
        return arr; 
    }
}
const swap_pairs = (num) => {
    let arr = num.toString().split("");
    if(arr.length % 2 === 0){
       for (let i = 0; i < arr.length; i++) {
        let pairs = arr.splice(0 , i+2);
       console.log(swap_F_L(pairs));
       }
    }
}
swap_pairs(1234)