//!task2_array========================
//!question 1=========================
console.log("======question 1=======");
const iSArray = (arr) => {
    return Array.isArray(arr);
}
console.log(iSArray([1,2]));
console.log(iSArray("bita"));

//!question 2=========================
console.log("======question 2=======");
const clone = (arr) => {
   let arr2 = [...arr];
   return arr2;
}
console.log([1,2,[4,0]]);

//!question 3=========================
console.log("======question 3=======");
const first = (arr , n) => {
    if(!n){
        let res = arr.slice(0 , 1);
        return res;
    }else{
        let res = arr.slice(0 , n);
        return res;
    }  
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));

//!question 4=========================
console.log("======question 4=======");
const last = (arr , n) => {
    if(!n){
        let res = arr.splice(-1, 2);
        return res;
    }else{
        let res = arr.slice(-n);
        return res;
    }  
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

//!question 5=========================
console.log("======question 5=======");
const ToString = (arr) => {
    let str = arr.join(",");
    return str;
}
console.log(ToString(["Red", "Green", "White", "Black"]));

//!question 6=========================
console.log("======question 6=======");
const dash_even = (num) => {
    let strArr = num.split('');
    let numArr = strArr.map(Number);
    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i - 1] % 2 === 0 && numArr[i] % 2 === 0){
          numArr.splice(i , 0 , "-")
        }
    }
    return numArr.join("");
}
console.log(dash_even("025468"));

//!question 7=========================
console.log("======question 7=======");
const sortArr = (arr) => {
    let res = arr.sort((a , b) => a-b);
    return res;
}
console.log(sortArr([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));

//!question 8=========================
console.log("======question 8=======");
let count = 1;
let max = 0 ;
let ele ;
const find_max_repetition = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(arr[i] == arr[j]) max++ ;
            if(count < max){
                count = max ;
                ele = arr[i]
            }  
        }
        max = 0; 
    }
    console.log(ele + " ( " + count + " times ) ");  
}
console.log(find_max_repetition([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

//!question 9=========================
console.log("======question 9=======");
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

//!question 10=========================
console.log("======question 10=======");
const print_subArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log("row " + i);
        for (let j = 0; j < arr[i].length; j++) {
            console.log(" " + arr[i][j]);  
        }
    }
}
print_subArr([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);

//!question 11=========================
console.log("======question 11=======");
const squares_sum = (num) => {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i)
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + Math.pow(arr[i] , 2);
    }
    return sum;
}
console.log(squares_sum(4));

//!question 12=========================
console.log("======question 12=======");
const func = (arr) => {
    console.log(arr);
    let sum = arr.reduce((a , c) => a + c);
    let mul = arr.reduce((a , c) => a * c);
    return `the sum is${sum} and the product is${mul}`;
}
console.log(func([1,2,3,4]));

//!question 13=========================
console.log("======question 13=======");
const show_arr = (str) => {
    let arr = str.split(" ");
    let result = [] ;
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result.join(" ");
}
console.log(show_arr("add elements in an blank array"));

//!question 14=========================
console.log("======question 14=======");
const remove_duplicate = (arr) => {
    let res = new Set([...arr])
    return res;
}
console.log(remove_duplicate([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

//!question 15=========================
console.log("======question 15=======");
const position = (arr) => {
    let pos = ["th","st","nd","rd"];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < pos.length; j++) {
            let res = []
            if(arr[0]){
                res.push(`${1}${pos[1]} choice is ${arr[0]}`)
            }
            if (arr[1]) {
                res.push(`${2}${pos[2]} choice is ${arr[1]}`)
            }
            if (arr[2]) {
                res.push(`${3}${pos[3]} choice is ${arr[2]}`)
            }
            for (let i = 3; i < arr.length; i++) {
                res.push(`${i}${pos[0]} choice is ${arr[i]}`);
            }
            return res;
        }  
    }
}
console.log(position(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]));

//!question 16=========================
console.log("======question 16=======");
function leapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
function isLeapYear(arr){
    arr.map(e => {
        if(leapYear(e)){
            console.log(`Yes ${e} is a leap year`);
        }else{
            console.log(`No ${e} isn't a leap year`);
        }
    }) 
}
console.log(isLeapYear([1345,1384,1392,1403,1404]));

//!question 17=========================
console.log("======question 17=======");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = array.sort((a, b) => .5 - Math.random());
console.log(shuffled);

//!question 18=========================
console.log("======question 18=======");
const binary_Search = (arr , ele) =>{
        let pos = arr.indexOf(ele)
        return `the position of ${ele} is ${pos}`;    
}
console.log(binary_Search([1, 2, 3, 4, 5, 7, 8, 9] ,8));

//!question 19=========================
console.log("======question 19=======");
const sum_individual_index = (arr1 , arr2) => {
    let lgth = Math.max(arr1.length , arr2.length);
    let result = [];
    for (let i = 0; i < lgth; i++) {
        result.push((arr1[i] || 0) + (arr2[i] || 0)); 
    }
    return result;
}
console.log(sum_individual_index([1,0,2,3,4],[3,5,6,7,8,13]));

//!question 20=========================
console.log("======question 20=======");
const del_equal = (arr) =>{
    let res = [];
    for(let i = 0; i < arr.length-1 ; i++){
        if(arr[i+1] === arr[i]){
            res.push(arr[i]);
        }
    }
    console.log(res);
}
console.log(del_equal([4,4,1,1,2,3,3]));

//!question 21=========================
console.log("======question 21=======");
const flat_arr = (arr) => {
    let res = arr.flat();
    return res;
}
console.log(flat_arr([1, [2], [3, [[4]]],[5,6]]));

//!question 22=========================
console.log("======question 22=======");
const union_arrays = (arr1 , arr2) => {
    let res = arr1.concat(arr2);
    let result = new Set([...res]);
    let sortArr =  [...result].sort((a,b) => a-b)
    return sortArr; 
}
console.log(union_arrays([1, 2, 3], [100, 2, 1, 10]));

//!question 23=========================
console.log("======question 23=======");
const diff_items = (arr1 , arr2) => {
    arr1 = flat_arr(arr1);
    arr2 = flat_arr(arr2);
    let repetitive_char = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                repetitive_char[i] = arr1[i] ,arr2[j];
            }  
        }  
    }
    let result1 = arr1.filter(e => !repetitive_char.includes(e))
    let result2 = arr2.filter(e => !repetitive_char.includes(e))
    return result1.concat(result2); 
}
console.log(diff_items([1, 2, 3], [100, 2, 1, 10]));
console.log(diff_items([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

//!question 24=========================
console.log("======question 24=======");
const Del = (arr) => { 
    for (var i = arr.length - 1; i >= 0; i--){
        if (isNaN(arr[i]) || arr[i] == 0 || arr[i] == "" 
            || arr[i] == undefined || arr[i] == null){
            arr.splice(i , 1);
        }
    }
  console.log(arr); 
}
console.log(Del([NaN, 0, 15, false, -22, '',undefined, 47, null]));

//!question 25=========================
console.log("======question 25=======");
const sort_obj = (arr) => {
  let res = arr.sort((a , b) => a.title.localeCompare(b.title));
  console.log(res); 
}
sort_obj([ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ]
)

//!question 26=========================
console.log("======question 26=======");
const sum_target = (arr , n) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(arr[i] + arr[j] == n){
                console.log(arr[i] , arr[j]);
            }
        }
    }
}
sum_target([10,30,20,40,50,60,70] , 50);

//!question 27=========================
console.log("======question 27=======");
const retrieve = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if((arr[i] != 0) && (typeof(arr[i]) == "number") && !isNaN(arr[i])){
            res.push(arr[i])
        } 
    }
    return res;
}
console.log(retrieve([NaN, 0, 15, false, -22, '',undefined, 47, null]));
 

//!question 28=========================
console.log("======question 28=======");
const longest_common_starting_substring = (str1 , str2) => {
    let longest = "";
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let subString = "";
            let a = i;
            let b = j;
            while (a < str1.length && b < str2.length && str1[a] === str2[b]) {
                subString = subString + str1[a];
                a++ ;
                b++ ;
            }
            if(subString.length > longest.length){
                longest = subString;
            }
        } 
    }
    return longest;
}
console.log(longest_common_starting_substring('go', 'google'));

//!question 29=========================
console.log("======question 29=======");
const alphabet134 = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                     "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                     "s", "t", "u", "v", "w", "x", "y", "z"]
const write_A_B = (a , b , n) => {
    let res = [];
    res.push(a)
    if(typeof(a && b) === 'string'){
       for (let i = 0; i < alphabet134.length-2; i++) {
        res.push(alphabet134.splice(i+n , 1))
       } 
    }
    res.push(b)
    return res.flat();
}
console.log(write_A_B("a", "z" , 2));

//!question 30=========================
console.log("======question 30=======");
const merge = (arr1 , arr2) => {
    let res = new Set(arr1.concat(arr2))
    return res;
}
console.log(merge([1, 2, 3],[2, 30, 1]));

//!question 31=========================
console.log("======question 31=======");
const remove_array_element = (arr , x) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === x){
            arr.splice(i , 1)
            return arr;
        }
    }  
}
console.log(remove_array_element([2, 5, 9, 6], 5));

//!question 32=========================
console.log("======question 32=======");
const contains = (arr , x) => {
    let res = arr.includes(x);
    return res;
}
console.log(contains([2, 5, 9, 6],5));
console.log(contains([2, 5, 9, 6],12));

//!question 33=========================
console.log("======question 33=======");
const empty_array = (arr) => {
    let res = arr.toSpliced(0 , arr.length);
    console.log(arr,res);
}
empty_array([2, 5, 9, 6]);

//!question 34=========================
console.log("======question 34=======");
const nth_largest = (arr , n) => {
    let res = arr.sort((a , b) => b-a)
    let nth_large = res.at(n-1);
    return nth_large;
}
console.log(nth_largest([ 43, 56, 23, 89, 88, 90, 99, 652] , 4));

//!question 35=========================
console.log("======question 35=======");
const random_item = (arr) => {
    var randomItem = arr[Math.floor(Math.random() * arr.length)]
    return randomItem;
}
console.log(random_item([ 43, 56, 23, 89, 88, 90, 99, 652]));

//!question 36=========================
console.log("======question 36=======");
const  create_arr = (lgth , ele) => {
    let arr = [];
    for (let i = 0; i < lgth; i++) {
        arr.push(ele) 
    }
    return arr;
}
console.log(create_arr(6,0));
console.log(create_arr(4,11));

//!question 37=========================
console.log("======question 37=======");
const  array_filled = (lgth , ele) => {
    let arr = [];
    for (let i = 0; i < lgth; i++) {
        arr.push(ele) 
    }
    return arr;
}
console.log(array_filled(3,'default value'));
console.log(array_filled(4,'password'));

//!question 38=========================
console.log("======question 38=======");
const move = (arr , x , y) => {
    console.log(arr);
    let X = arr.splice(x, 1)
    let Y = arr.splice(y , 0 , X)
    return arr.flat();  
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));

//!question 39=========================
console.log("======question 39=======");
const filter_array_values = (arr) => {
    for (var i = arr.length - 1; i >= 0; i--){
        if (arr[i] == 0 || arr[i] == "" || arr[i] == false || arr[i] == null){
            arr.splice(i , 1);
        }
    }
    return arr;
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

//!question 40=========================
console.log("======question 40=======");
const array_range = (a , b) => {
    let arr = []
    arr.push(a)
    for (let i = 0; i < b-1; i++) {
        arr.push(arr[i] + 1)
    }
    return arr;
}
console.log(array_range(1,4));
console.log(array_range(-6,4));

//!question 41=========================
console.log("======question 41=======");
const rangeBetwee = (a  , b) => {
    let res  = [];
    for (let i = a; i <= b ; i++) {
        res.push(i)
    }
    return res;
}
console.log(rangeBetwee(4,7));
console.log(rangeBetwee(-6,4));

//!question 42=========================
console.log("======question 42=======");
const difference = (arr1 , arr2) => {
    arr1 = arr1.toString().split(",");
    arr2 = arr2.toString().split(",")
    let res = new Set(arr1.concat(arr2))
    return res;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//!question 43=========================
console.log("======question 43=======");
const unzip = (arr) => {
    let string = [];
    let boolean = [];
    let number = [];
    arr.map(e => {
       e.map(a => {
        if(typeof(a) === "string"){
            string.push(a)
        }else if (typeof(a) === "boolean") {
            boolean.push(a)
        }else if (typeof(a) === "number") {
            number.push(a)
        }
       })
    })
    let res = [];
    res.push(string,boolean,number);
    return res;
}
console.log(unzip([['a', 1, true], ['b', 2, false]]));

//!question 44=========================
console.log("======question 44=======");
const indexOn = (arr , x) => {
    arr.map(e => {
        if(e.id == x){
            const res = Object.create(e);
            res.first = e;
            console.log(res);
        }
    })
}
indexOn([{ id: 10, name: 'apple' },{ id: 20, name: 'orange' }] , 20);
