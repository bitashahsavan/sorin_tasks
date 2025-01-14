//!question 1=========================
console.log("======question 1_quick sort=======");
const Quick_sort = (arr) => {
    if(arr.length <= 1){return arr} ;
    let pivot = arr[0];
    let left_part = [];
    let right_part = [];
    let res = []
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            left_part.push(arr[i])  
        }else {
            right_part.push(arr[i])
        }
    }
    res.push(Quick_sort(left_part));
    res.push(pivot);
    res.push(Quick_sort(right_part));
    return res.flat();
}
console.log(Quick_sort([5,6,8,2,1,7,8]));

//!question 2=========================
console.log("======question 2_merge sort=======");
const merge_sort = (arr) => {
    if(arr.length < 2){return arr} ;
    let mid_ele = Math.floor(arr.length / 2);
    let left_part = merge_sort(arr.slice(0,mid_ele));
    let rigth_part = merge_sort(arr.slice(mid_ele));
    return merge(left_part , rigth_part);
}
const merge = (a , b) => {
    let res = []
    while (a.length > 0 && b.length > 0) {
      if(a[0] < b[0]){
        res.push(a[0]);
        a.shift();
      } else {
        res.push(b[0]);
        b.shift();
      }
    }
    if(a.length){
       return res.concat(a);
    }else{
        return res.concat(b);
    }
}
console.log(merge_sort([5,6,8,2,1,7]));

//!question 3=========================
console.log("======question 3_heap sort=======");
//this function make binery tree
arr = [ 7, 12, 9, 11, 3 ,5,6]
const heapify = (arr , arr_length , parentIndex) => { 
    let largest = parentIndex; 
    let left_child = 2 * parentIndex + 1;
    let rigth_child = 2 * parentIndex + 2;
    
    if (left_child < arr_length && arr[left_child] > arr[largest]) largest = left_child;
    if (rigth_child < arr_length && arr[rigth_child] > arr[largest]) largest = rigth_child;
  
    if(largest !== parentIndex){
    [arr[parentIndex] , arr[largest]] = [arr[largest] , arr[parentIndex]]
    heapify(arr , arr_length ,largest)
    }
    return arr;
}
const heap_sort = (arr) =>  {
    let arr_length = arr.length;
    let lastParentNode = Math.floor(arr_length/ 2 -1);
    let lastchild = arr_length - 1;
    while (lastParentNode >= 0) {
        console.log(lastParentNode);
       heapify(arr , arr_length , lastParentNode);
       lastParentNode-- ;
    }
    while (lastchild >= 0) {
        [arr[0] ,arr[lastchild]] = [arr[lastchild] , arr[0]];
        heapify(arr , lastchild , 0);
        lastchild-- ; 
    }
    return arr;
}
console.log(heap_sort(arr));

//!question 7=========================
console.log("======question 7_Bubble sort=======");
const Bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            console.log("i:"+i,"j:"+j);
            if(arr[j] > arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]; 
            } 
        }
    }
    return arr;
}
console.log(Bubble_sort([ 7, 12, 9, 11, 3 ,12]));


  