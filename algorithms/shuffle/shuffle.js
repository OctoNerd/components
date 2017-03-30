//the purpose of this algorithm is to iterate through an array and shuffle the contents unbiasly
//create an array
//iterate through the array starting at the end and working back
//with each iteration, get a random number between 0 and the length of the array
//swap the contents at the random array position with the contents of the iteration position
var i, j, temp;
var arr = [A,B,C,D,E,F,G,H];
while(--i > 0) {
    //random number between 0 and is
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//display array to screen
