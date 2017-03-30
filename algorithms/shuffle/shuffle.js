//the purpose of this algorithm is to iterate through an array and shuffle the contents unbiasly
Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var result = arr.shuffle();

document.write(result);
