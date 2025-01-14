//!question_1===============================
const Q1Day = document.getElementById('Q1_day'),
      Q1Time = document.getElementById('Q1_time');
const days = [
"Sunday" , "Monday" , 
"Tuesday","wednesday" ,
"Thrsday","Friday" ,
"Saturday"
]
//set name day of week
let Q1_date = new Date();
let Q1_day = days[Q1_date.getDay()];
Q1Day.innerHTML =`Today is : ${Q1_day}`;
//set 12houres time
function ChangeTimeFormat(){
  let hours = Q1_date.getHours();
  let minutes = Q1_date.getMinutes();
  let seconds = Q1_date.getSeconds();
  //change the hours to am and pm
  hours = hours % 12 ; 
  let newFormat = hours >= 12 ? 'PM' : 'AM';
  Q1Time.innerHTML =
  `current time is : 
  ${hours+" "+newFormat+ ":" +" "+ minutes+ ":" +" " +seconds}`  
}
ChangeTimeFormat();

//!question_2=============================
const Q2_btn = document.getElementById('Q2_btn');
Q2_btn.addEventListener('click' , ()=>{
    window.print();
})

//!question_3=============================
const Q3_date = document.getElementById('Q3_date');
let Q3_newdate = new Date();
let fullYear = Q3_newdate.toLocaleDateString();
Q3_date.innerHTML =fullYear ; 

//!question_4=============================
console.log("=======it is question 4======");
// A =sqrts(s-a)(s-b)(s-c);
// s=a+b+c/2
function area(){
    let side1 = 5;
    let side2 = 6;
    let side3 = 7;
    let s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s-side3)));
    return area;
}
console.log(area());

//!question_5=============================
const Q5_string = document.getElementById("Q5_string");
function reverseString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
Q5_string.innerHTML = reverseString("w3resource"); 

//!question_6============================
const Q6_text = document.getElementById('Q6');
function leapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
function isLeapYear(e){
    if(leapYear(e)){
        return `Yes ${e} is a leap year`;
    }else{
        return `No ${e} isn't a leap year`;
    }
}
function ShowLeapYear(){
    const input = document. getElementById("myInput").value; 
    Q6_text.innerHTML = isLeapYear(input);
}

//!question_7============================
console.log("=======it is question 7======");
//loop from2014 to 2050
for(let year=2014 ; year<=2050 ; year++){
    const Q7_date = new Date(year, 0 , 1);
    if(Q7_date.getDay() === 0){
        console.log(`1st January is being a Sunday  ${year}`);
    }
}

//!question_8============================
function get_guess(){
    const Q8_text = document.getElementById('Q8_text');
    const user_guess = document.getElementById('user_guess').value;
    const user_guess_num = Number(user_guess );
    let random_num = Math.floor(Math.random() * 11);
    console.log(user_guess_num ,random_num );
    
    if(user_guess == random_num ){
        Q8_text.innerHTML = random_num +"Good Work";
    }else{
        Q8_text.innerHTML = random_num + "Not matched";
    }
}

//!question_9============================
const Q9_text = document.getElementById('Q9_text');
let today = new Date();
let crismas = today.getFullYear();
//is the current date pass the 25th of 11th month???
if(today.getMonth() == 11 && today.getDate() > 25){
    crismas = crismas + 1;
}
let crismas_date = new Date(crismas, 11, 25); 
//how many millisecone left to crismas
let numOfDays = 1000 * 60 * 60 *24;
//calucate date of crismas from today
let crismasDate = Math.ceil(
    (crismas_date.getTime() - today.getTime()) / (numOfDays));  
Q9_text.innerText = `There are ${crismasDate}days remaining until next Christmas.`

//!question_10============================
function count_multi(){
    const Q10_num_1 = document.getElementById('Q10_num_1').value;
    const Q10_num_2 = document.getElementById('Q10_num_2').value;
    let result = Q10_num_1 * Q10_num_2;
    document.getElementById("Q10_result").innerText = 
    `result : ${Q10_num_1} × ${Q10_num_2} = ${result}` ;
   //console.log('it is *');  
}
function count_div(){
    const Q10_num_1 = document.getElementById('Q10_num_1').value;
    const Q10_num_2 = document.getElementById('Q10_num_2').value;
    let result = Q10_num_1 / Q10_num_2;
    document.getElementById("Q10_result").innerText = 
    `result :${Q10_num_1} ÷ ${Q10_num_2} = ${result}` ;
    //console.log('it is /');
}

//!question_11============================
//according to : c/5 = (f-32)/9 
//f = c*9/5+32
function CelToFahr(c){
   const Q11_text1 = document.getElementById('Q11_text1');
   let Celsius = c;
   let celTofahr = Celsius *9 / 5 + 32 ;
   Q11_text1.innerText =
    `convert  Celsius to Fahrenheit : ${Celsius} °C is ${celTofahr}°F.`;
} 
//c=(f-32)*5/9
function FahrToCel(f){
    const Q11_text2 = document.getElementById('Q11_text2');
    let Fahrenhei = f;
    let fahrTocel =  (Fahrenhei - 32) * 5 / 9 ;
    Q11_text2.innerText =
    `convert  Fahrenheit to Celsius : ${Fahrenhei} °F is ${fahrTocel}°C.`;
} 
CelToFahr(40);
FahrToCel(40);

//!question_12============================
const Q12_text = document.getElementById('Q12_text').innerHTML =
'the address of current page is: '+window.location.href;

//!question_13===========================
console.log("=======it is question 13======");
let var_user = ""; 
let var_value = "ali"; 
this[var_user] = var_value; 
console.log(var_value ); 
console.log(this[var_user]);

//!question_14===========================
console.log("=======it is question 14======");
function getFileExe(FN){
    let fileName = FN;
    let Exe = fileName.split(".").pop();
    console.log("the extension of bita.png is"+" "+Exe);
}
getFileExe('bita.png');

//!question_15===========================
console.log("=======it is question 15======");
function difference_num_13(x){
    if(x <= 13){
        return (13 - x);
    }else{
        return ( x-13) *2;
    }
}
console.log(difference_num_13(15));

//!question16==========================
console.log("=======it is question 16======");
function countSum(a,b){

    if(a == b){
        return 3*(a + b);
    }else{
        return (a + b)
    }
}
console.log(countSum(10,10));

//!question17========================
console.log("=======it is question 17======");
function difference_num(x){
    if(x <= 19){
        return (19 - x);
    }else{
        return ( x-19) *3;
    }
}
console.log(difference_num(12));

//!question18========================
console.log("=======it is question 18======");
function check_with_50(a,b){
    if(a==50 || b==50 || a + b ==50){
        return true;
    }else{
        return false
    }
}
console.log(check_with_50(30,20));

//!question19========================
console.log("=======it is question 19======");
function check_num(x){
    if((x > 20 && x < 100) || (x > 20 && x < 400)){
        return true;
    }else{
        return false;
    }
}
console.log(check_num(550));

//!question20========================
console.log("=======it is question 20======");
function check_integer(a,b){
    if((a > 0 && b < 0 )|| (b > 0 && a < 0 )){
        return true;
    }else{
        return false;
    }
}
console.log(check_integer(-5,5));

//!question21========================
console.log("=======it is question 21======");
function get_string(a){
    let text1 = "PY";
    let text2 = a;
    let text3 = text1 .concat( text2);
    return text3;
}
console.log(get_string("bita"));

//!question22========================
console.log("=======it is question 22======");
function remove_charecter(x){
    let text1 = x;
    let text2 = text1.slice(5 , text1.length);
    return text2;
}
console.log(remove_charecter("bita shahsavan"));

//!question23========================
console.log("=======it is question 23======");
function change_char(str){
    if(str.length <= 1){
        return str;
    }
    let mid_str =str.substring(1 , str.length-1);
    return (str.charAt(str.length - 1)) + mid_str + str.charAt(0); 
}
console.log(change_char("bita"));

//!question24========================
console.log("=======it is question 24======");
function change_str(x){
    let text1 = x;
    let text2 = text1.charAt(0) + text1 + text1.charAt(0);
    return(text2)
}
console.log(change_str("$Bita"));

//!question25========================
console.log("=======it is question 25======");
function check_multiple_3_7(x){
    let num = x;
    if(x % 3 == 0 || x % 7 ==0){
        return num + " is multiple of 3 or 7"
    }else{
        return num + " isn't  multiple of 3 or 7"
    }
}
console.log(check_multiple_3_7(21));

//!question26========================
console.log("=======it is question 26======");
function slpit_char(x){
  if( x.length >= 3){
    let text1 = x.substring(x.length - 3);
    let text2 = text1 + x + text1;
    return text2;
  }else{
    return x +" is less than 3 charecter"
  }
}
console.log(slpit_char("bita"));

//!question27========================
console.log("=======it is question 27======");
function check_java(x){
   let text = x.startsWith("java");
   return text;
}
console.log(check_java("javascript"));

//!question28========================
console.log("=======it is question 28======");
function check_rang(a,b){
    if((a >= 50 && a <= 99) || (b >= 50 && b <= 99)){
        return true;
    }else{
        return false;
    }
}
console.log(check_rang(50 , 100));

//!question29========================
console.log("=======it is question 29======");
function check_rang_3(a,b,c){
    if((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)){
        return true;
    }else{
        return false;
    }
}
console.log(check_rang_3(50 ,55 , 110));

//!question30========================
console.log("=======it is question 30======");
function check_script(x){
    let text1 = x;
    if(text1.includes("script" , 4)){
        let text2 = text1.replace("script" , "");
        return text2
    }else{
        return text1;
    }
}
console.log(check_script("javascript bita shahsavan"));

//!question31========================
console.log("=======it is question 31======");
function check_largest(a,b,c){
    if(a > b && a > c){
        return a+" "+"is largest number";

    }else if(b > a && b > c){
        return b+" "+"is largest number";

    }else if(c > a && c > b){
        return c+" "+"is largest number";
    }
}
console.log(check_largest( 100 ,400 ,500));

//!question32========================
console.log("=======it is question 32======");
function check_nearTo100(a,b){
    if(a != b){
        let a1 = Math.abs(100 - a);
        let b1 = Math.abs(100 - b);
        if(a1 < b1){
            return a +"is nearest to 100"
        }else if(a1 > b1){
            return b +"is nearest to 100"
        }
    }
    return false;
}
console.log(check_nearTo100(98 ,99));

//!question33========================
console.log("=======it is question 33======");
function check_2number(a,b){
    if ((a,b>40 && a,b<60) || (a,b>70 && a,b<100)) {
        return true;
    }else{
        return false;
    }
}
console.log(check_2number(300,99));

//!question34========================
console.log("=======it is question 34======");
function check_rang_40_60(a,b){
    if((a>40 && a<60) && (b>40 && b<60)){
        if(a > b){
            return a + "is larger than" + b;
        }else if(b > a){
            return b + "is larger than" + a;
        }
    }else{
        return "numbers are out of range";
    }
}
console.log(check_rang_40_60(50,58));

//!question35?????????????????========================
console.log("=======it is question 35======");
function check_str(str1,char){
  let ctr = 0;
  for(let i=0; i<str1.length; i++){
    if((str1.charAt(i) == char) && (i >= 1 && i <= 3)){
        ctr = 1;
        break;
    }
  }
  if(ctr == 1)return true;
  return false;  
}
console.log(check_str("bitashahsavan", "i"));


//!question36========================
console.log("=======it is question 36======");
function last_digit(a,b,c){
    if(a>0 && b>0 && c>0){
        return  a % 10 == b % 10 &&
                a % 10 == c % 10 &&
                b % 10 == c % 10;
    }else{
        return false;
    }
}
console.log(last_digit(150,250,350));

//!question37========================
console.log("=======it is question 37======");
function change_case(str){
    if(str.length < 3){
        let upper_case = str.toUpperCase();
        return upper_case;
    }else if(str.length >= 3){
        let sub_str = str.substring(0,3)
        let lower_case = sub_str.toLowerCase()+str.substring(3);
        return lower_case;
    }
}
console.log(change_case("ab"));
console.log(change_case("BITA SHAHSAVAN"));

//!question38========================
console.log("=======it is question 38======");
function student_grade(grade,F_exam){
        if(F_exam){
            return grade >= 90;
        }
        return grade > 89 && grade < 100;
}
console.log(student_grade(90));

//!question39===========================
console.log("=======it is question 39======");
function compute_sum(a,b){
    let sum = a + b;
    if(sum > 50 && sum <80){
        return 65;
    }else{
        return 80;
    }
}
console.log(compute_sum(29,29));

//!question40===========================
console.log("=======it is question 40======");
function check_8(a,b){
    if((a == 8 || b == 8) || (a + b == 8) || (a - b == 8)){
        return true;
    }else{
        return false;
    }
}
console.log(check_8(20,12));

//!question41===========================
console.log("=======it is question 41======");
function check_3number(a,b,c){
    if(a == b && b == c){
        return 30;
    }
    if(a == b || a == c || b == c){
        return 40;
    }
    return 20;
}
console.log(check_3number(10,10,10));

//!question42===========================
console.log("=======it is question 42======");
function number_increasing(a,b,c){
    if(b > a && c > b){
        return "strict mode"
    }else if(c > b){
        return" soft mode"
    }
}
console.log(number_increasing(10,15,31));
console.log(number_increasing(24,22,31));

//!question43========================
console.log("=======it is question43======");
function last_digit2(a,b,c){
    if(a>0 && b>0 && c>0){
        return  a % 10 == b % 10 ||
                a % 10 == c % 10 ||
                b % 10 == c % 10;
    }else{
        return false;
    }
}
console.log(last_digit2(155,255,350));

//!question44========================
console.log("=======it is question44======");
function check_20(a,b,c){
    if((a || b || c) >= 20){
        if((a<b || a<c) || (b<a || b<c ) || (c<a || c<b)){
            return true;
        }
    }else{
        return false;
    }
}
console.log(check_20(40,30,20));

//!question45========================
console.log("=======it is question45======");
function check_15(a,b){
    if(a>0 && b>0){
        if( ((a || b) == 15) || 
            ((a + b ) == 15) || 
            ((a - b ) == 15)){
                return true;
        }else{
                return false;
        }
    }else{
        return false;
    }
}
console.log(check_15(-25,10));
console.log(check_15(15,10));
console.log(check_15(5,10));
console.log(check_15(25,10));

//!question46========================
console.log("=======it is question46======");
function check_multiple_7_11(a,b){
    if(a>0 && b>0){
        if( (a % 7 == 0 || a % 11 == 0) ||
            (b % 7 == 0 || b % 11 == 0) ){
            return true;
        }else{
            return false;
        }
    }else{
        return "it is negative";
    }
}
console.log(check_multiple_7_11(8,22));

//!question47========================
console.log("=======it is question47======");
function check_range_40(x){
    if(x >= 40 && x <= 10000){
        return "it is within 40_10000"
    }else{
        return "it isn't within 40_10000"
    }
}
console.log(check_range_40(5000));

//!question48========================
console.log("=======it is question48======");
function reverse_str(str){
    let split_str = str.split("");
    let reverse_str = split_str.reverse();
    let join_str = reverse_str.join("");
    return join_str;
}
console.log(reverse_str("bita"));

//!question49========================
console.log("=======it is question49======");
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                  "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                  "s", "t", "u", "v", "w", "x", "y", "z"]
function change_alphabet(Text,j){
   let myText = Text.split("");
   myText.map((a ,j) =>{
    let finall;
    alphabet.map((e,i) =>{
        if(a == e){
            let arr1=[];
            let arr =arr1.concat(alphabet[i+1])
            finall = arr.join(""); 
        } 
    })
    return console.log(finall);
   })
}
change_alphabet("bita");
//!question50========================
console.log("=======it is question50 ======");
function change_to_uppercase(text){
    const words = text.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const joinWords = words.join(" ");
    return joinWords;
}
console.log(change_to_uppercase("bita shahsavan is a frontend developer"));

//!question51========================
console.log("=======it is question51 ======");
function count_hour_min(x){
    let hours = Number.parseInt(x / 60);
    let minutes = Number.parseInt(x % 60);
    return `${x} is ${hours}:${minutes}`;
}
console.log(count_hour_min(1000));

//!question52========================
console.log("=======it is question52 ======");
function sort_array(text){
    let to_string = text.split("");
    let sort_str = to_string.sort();
    return sort_str.join("");
}
console.log(sort_array("bita"));

//!question53========================
console.log("=======it is question53 ======");
function check_char(str){
    let strToArr = str.split("");
    let indexOfa = strToArr.indexOf("a");
    let indexOfb = strToArr.indexOf("b");
    let difference = indexOfb - indexOfa;
    if(difference>= 3){
        return console.log(true);
    }else{
        return console.log(false);
    }
}
check_char("urasobsab");
check_char("urabsab");

//!question54========================
console.log("=======it is question54 ======");
const vowels_sound = ["a" , "e" , "i" , "o" ,"u"]
function check_vowels(text){
    let ourText = text.split("");
    let count = 0 ;
    ourText.map(e=>{
        vowels_sound.map(a=>{
            if(e == a){
             count ++ ; 
            }
           
        })
    })
    return console.log(`there is ${count} of vowels sound`);
}
check_vowels("bita");

//!question55========================
console.log("=======it is question55 ======");
function check_p_t(text){
    let textToArr = text.split("");
    let countP = 0;
    let countT = 0;
    textToArr.map(e => {
      if(e === "p"){
        countP++ ;
      }
      if(e === "t"){
        countT++ ;
      }
    })
    if(countP == countT){
        return console.log("number of p's and t's is equal");  
    }else{
        return console.log("number of p's and t's is not equal");
        
    }
}
check_p_t("pptt");
check_p_t("ppttdfdft");

//!question56========================
console.log("=======it is question56 ======");
function divide(a,b){
    if(a>0 && b>0){
        let res = Math.abs(a / b);
        res = (res + "").split(".");
        console.log(res[0] + "/" + res[1]);
        
    }
}
divide(121,5);

//!question57========================
console.log("=======it is question57 ======");
const ourStr ="-1,-2,3,4,5,6,-8";
console.log(ourStr );
function copyNum(e){
    let textToArr = e.split(",");
    textToArr.forEach((x) => {
        if(x >= 0){
            return console.log(x);
        }     
    })   
}


copyNum(ourStr);

//!question58========================
console.log("=======it is question58 ======");
function sliceStr(str){
    if(str.length >=3 ){
        let part = str.substring(str.length, str.length-4);
        return part;
    }else{
        return "your string sould be grater than 3"
    }
}
console.log(sliceStr("bitashahsavansara"));
console.log(sliceStr("bi"));

//!question59========================
console.log("=======it is question59 ======");
function check_even_str(str){
    if(str.length % 2 == 0){
        let halfPart = str.substring(0 , str.length / 2) ;
        return halfPart;
         
    }else{
        return "it is odd length";  
    }
}
console.log(check_even_str("bita"));

//!question60========================
console.log("=======it is question60 ======");
function slice_first_last(str){
    let toArr = str.split("");
    let first = toArr.shift();
    let last = toArr.pop();
    toArr = toArr.join("");  
    return toArr; 
}
console.log(slice_first_last("bita"));

//!question61========================
console.log("=======it is question61 ======");
function remove_char(str1,str2){
    let first_str1 = str1.split("");
    let first_str2 = str2.split("");
    let f_char_1 = first_str1.shift();
    let f_char_2 = first_str2.shift();
    let str_3 = first_str1.concat(first_str2);
    return str_3.join("");  
}
console.log(remove_char("bita","shahsavan"));

//!question62========================
console.log("=======it is question62 ======");
function remove_3char(text){
    if(text.length >= 3){
        console.log(`our text is ${text}`);
        let textToArr = text.split("");
        let del_3char = textToArr.splice(-3,3);
        let result = del_3char.concat(textToArr);
        return "after change our text is"+ " " + result.join(""); 
    }else{
        return "your text most be grater than 3"
    }
}
console.log(remove_3char("abcde"));

//!question63========================
console.log("=======it is question63 ======");
function check_odd_str(text){
    if(text.length >= 3){
      if(text.length % 2 == 1) {
        let textToArr = text.split("");
        let middle = Math.floor((textToArr.length)/2);
        let halfChar1 = textToArr.slice(middle-1,middle) ;
        let halfChar = textToArr.slice(middle,middle+2) ;
        let result = halfChar1.concat(halfChar );
        return console.log(result.join(""));
      }else{
        return console.log( "it is even length"); 
      }
    }else{
        return console.log( "your text most be grater than 3"); 
    }
}
check_odd_str("geabcdeec");

//!question64========================???????????
console.log("=======it is question64 ======");
function check_graeter(str1,str2){
    let str1Arr = str1.split("");
    let str2Arr = str2.split("");
    console.log(`the string 1 is ${str1Arr}`);
    console.log(`the string 1 is ${str2Arr}`);
    if(str1Arr.length > str2Arr.length){
        let differnce = (str1Arr.length) - (str2Arr.length);
        str1Arr.length = str1Arr.length - differnce; 
        let result = str1Arr.concat(str2Arr)
        console.log(result.join(""));     
    }else if(str2Arr.length > str1Arr.length){
        let differnce = (str2Arr.length) - (str1Arr.length);
        str2Arr.length = str2Arr.length - differnce; 
        let result2 = str1Arr.concat(str2Arr)
        console.log(result2.join(""));     
    }
}
check_graeter("bita","barana");

//!question65========================
console.log("=======it is question65 ======");
function check_end_str(text){
    if(text.length >= 6){
        let check = text.endsWith("script");
        return console.log(check);
         ;
    }else{
        return console.log( "your text most be grater than 6");
    }
}
check_end_str("scriptjava");
check_end_str("javascript");

//!question66========================
console.log("=======it is question66 ======");
function show_city_name(text){
    if(text.startsWith("Los")){
        console.log(text = "Los Angeles");  
    }else if(text.startsWith("New")){
        console.log(text = "New York");
    }else{
        console.log("");  
    }
}
show_city_name("Newdf");

//!question67========================
console.log("=======it is question67 ======");
function check_P(text){
    console.log(text);
    let textToArr = text.split("");
    if((textToArr[0] == "P") || (textToArr[textToArr.length - 1] == "P")){
        let first_char = textToArr.shift("P");
        let last_char = textToArr.pop("P");
        console.log(textToArr.join(""));  
    }else{
        return console.log(text);
        
    }
}
check_P("andaP");

//!question68========================
console.log("=======it is question68 ======");
function newString(str,n){
    let first = str.substring(0,n)
    console.log(first);
    let last = str.substring(str.length - n);
    console.log(last);
    let result = first + last ;
    return result;  
}
console.log(newString("bita shahsavan",3));

//!question69========================
console.log("=======it is question69 ======");
const Arr = [58 , 59 , 60]
function sum_arr(arr){
    let res = 0;
    arr.map((e) => {
     res += e;  
    })
    return console.log(`the some of items of array = ${res}`);
}
sum_arr(Arr);

//!question70========================
console.log("=======it is question70 ======");
const arr = [1 , 2 , 3 ];
console.log("it is main array " + arr);
function rotate_to_left(arr){
   let first = arr.splice(0,1);
   let result = arr.concat(first)
   console.log("it is rotated array " +result);  
}
rotate_to_left(arr);

//!question71========================
console.log("=======it is question71 ======");
const arr_int = [2,3,4,5,1];
console.log(arr_int);
function search_1(arr){
    if(arr.length >= 1){
        if((arr[0] == 1) || (arr[arr.length-1] == 1)){
            console.log("there is 1 in array"); 
        }else{
            console.log("there isnot 1 in array");
        }
    }
}
search_1(arr_int);

//!question72========================
console.log("=======it is question72 ======");
const myArr = [100 , 200 , 300];
const myArr1 = [100 , 200 , 100];
function check_first_last(arr){
  if(arr.length >= 1){
    if(arr[0] !== arr[arr.length-1]){
        return false;
      }else{
       return true;
    }
  }
}
console.log(check_first_last(myArr));
console.log(check_first_last(myArr1));

//!question73========================
console.log("=======it is question73 ======");
function reverse(arr){
    let newArr = arr.reverse();
    return newArr;
}
console.log(myArr);
console.log(reverse(myArr));


//!question74========================
console.log("=======it is question74 ======");
function change_with_greatest(arr){
    let max_item = Math.max(arr[0] , arr[arr.length-1]);
    arr.map((e,i) => {
        arr[i] = max_item;  
    })
    return console.log(arr); 
}
change_with_greatest(myArr);

//!question75========================
console.log("=======it is question75 ======");
const one = [28, 38 , 48];
const two = [58 , 68 , 78];
function newArr(arr1 ,arr2){
    let middle1 = Math.floor(arr1.length/2) ;
    let middle1_char = arr1.at(middle1);
    console.log(middle1_char);
    let middle2 = Math.floor(arr2.length/2);
    let middle2_char = arr2.at(middle2);
    console.log(middle2_char);
    let result = [];
    let res = result.push(middle1_char,middle2_char)
    return result;   
}
console.log(newArr(one ,two));
//Continue in script2.js