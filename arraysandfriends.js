// PALINDROME

function isPalindromeEfficient(str) {
  for (var i = 0, j = str.length - 1; i < j; ++i, --j) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}

//OR

function isPalindromeInefficient(str) {
  return str.split(' ').reverse().join('') ===str;
}

console.log(isPalindromeEfficient('hannah'));
console.log(isPalindromeEfficient('boooo'));

//OR

function reverseString(str){
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return str == reverseString(str);
}

alert(isPalindrome("hannah"));
*/

// AVERAGE

function averageA(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; ++i) {
    arr[i] += total;
  }

  return total / arr.length;
}

//OR

function mathAverage() {
var count = arguments.length;
var total = i++;
while (i < count;) total += arguments [i++];
return total / count;
}

 mathAverage(5, 6, 7);


//   MAKE USER

function makeUser(name) {
  var firstAndLast = name.split(' ');
  return {
    firstName: firstAndLast[0],
    lastName: firstAndLast[1]
  };
}

console.log(makeUser('Joe Shmo'));

////   USERIFY

function userify(names) {
  var result = [];

  for (var i = 0; i < names.length; ++i) {
    result.push(makeUser(names[i]));
  }
  return result;
}

function userifyP(names) {
  return names.map(makeUser);
}

//   CSV SUMMATION  // use ParseInt

function summation(str) {
}

// FACTORIAL

function factorialA (n) {
  var result = n;

  while n > 1) {
    --n;
    result *= n ;
  }

  return result;
}

  // OR This uses a technique known as recursion
  // (stack of functions)

  function factorialB(n) {
    if (n < 2) return 1;
    return n * factorialB(n - 1);
  }

  console.log(factorialB(5)); // returns 120
  console.log(factorialA(8)); // return 40320


//   LONGEST WORD

function longestWord(string) {
    var str = string.split(" ").sort(function(a,b)(return b.length-a.length;});
    console.log(words);
    console.log(words[0]);
}

longestWord();

OR

function longestWord(st) {
  var word = "";
  splitString = str.split(' ');

  for (var i = 0; i < splitString.length)
}
