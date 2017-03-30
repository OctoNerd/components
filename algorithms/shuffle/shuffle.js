//the purpose of this algorithm is to iterate through an array and shuffle the contents unbiasly


var arr = ['A','B','C','D','E','F','G','H']; //create an array
var i = arr.length, j, temp;

while(--i > 0) { //iterate through the array starting at the end and working back
    j = Math.floor(Math.random() * (i+1)); //with each iteration, get a random number between 0 and the length of the array
    temp = arr[i]; //swap the contents at the random array position with the contents of the iteration position
    arr[i] = arr[j];
    arr[j] = temp;
}

//display array to screen
document.write(arr);
