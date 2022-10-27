//s is an unencrypted string (cleartext- text fit for consumption that has never gone through encryption process)
//k is the number of letters to shift the alphabet by... aka if 3 then a becomes c. e becomes g.  

//output should be properly cncrypted text... only letters are altered so if/else only effects them. 

//faster to build encryption string or to encrypt each letter individually based on that number? 

//note that capital letters seem to remain capitalized? 
//so if letter matches a alphaLarge letter then remain? Seems inefficient 

//you can test for capitalization by using the .toUpperCase() method and comparing to self.. if match then uppercase

//let upTest = s[2].toUpperCase().. if (s[2]===upTest) {return true}

//this could be final layer after the letters are return properly, just uppercasing the correct positions? 

//charCodes (ASCII) for lowercase are 97-122... for uppercase 65-90

//most efficient upperCase test would just be say if s.charCodeAt(i) < 97 push index to upperArray 

//should convert whole string to lower or upper case before testing 

//how to handle strings going over z's position of 122? remember k could be up to 100 meaning it could go through 
//the alphabet 4 times 
//122 (z) + 100(k) = 222 .. qualifies for conditional..  c

//again lowercase letters are 97 - 122 
//122 + 2 means z becomes b... b is so 124 has to be converted to 98.. 
//theory is it's just minus 26 every time.. 

//a  b  c  d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z
//97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 

//122 + 26 = 148 - 26 = 122 

//120 + 5 = 125 = 99 


//a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
//1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
//27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52
//53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78
//79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100

let b = 'z'
//console.log(b.charCodeAt(0))

//console.log(String.fromCharCode(103))

//use touppercase to test that char is letter 

// function ceasarCipher(s, k) {
//   //convert k to smallest possibility 
//   //for instance shifting 'a' 97 is the same as shifting 19 since there are unncessary iterations through alphabet
//   if (k > 26) { k = k % 26 };
//   //console.log(k)
//   //stores all positions of upperCase letters based on charCodes
//   //convert after proper cyphering 
//   let upperArray = [];
//   //house lowercase encrypted string 
//   let encryptArray = [];

//   for (i = 0; i < s.length; i++) {
//     let charCode = s.charCodeAt(i);

//     //if char isn't letter this will be true and will push char to encryptArray unaltered 
//     //continue used to break iteration and move to next
//     if (s[i].toUpperCase() === s[i].toLowerCase()) {
//       encryptArray.push(s[i])
//       continue;
//     }

//     //handle upperCase.. push position to array for later 
//     if (charCode < 97) {
//       upperArray.push(i);
//       console.log(upperArray)
//       //convert to lowercase 
//       charCode += 32
//     }
//     //shift position 
//     charCode += k;
//     console.log(charCode)
//     //if shifting forces a loop back around alphabet 
//     if (charCode > 122) {
//       //this will convert it to a properly shifted charCode like 122(z) + 5 = 127 - 26 = 101 (e)
//       charCode -= 26
//       console.log(`charCode over z ${charCode}`)
//     }
//     //this code should convert back to uppercase 
//     if (upperArray.includes(i)) {
//       charCode -= 32;
//     }
//     encryptArray.push(String.fromCharCode(charCode))
//     console.log(`encryptArray ${encryptArray}`)
//   }

//   return newString = encryptArray.join('');
// }

console.log(ceasarCipher(' HelloZ there', 2));

function ceasarCipher(s, k) {
  if (k > 26) { k = k % 26 };
  let upperArray = [];
  let encryptArray = [];
  for (i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (s[i].toUpperCase() === s[i].toLowerCase()) {
      encryptArray.push(s[i])
      continue;
    }
    if (charCode < 97) {
      upperArray.push(i);
      charCode += 32
    }
    charCode += k;
    if (charCode > 122) {
      charCode -= 26
    }
    if (upperArray.includes(i)) {
      charCode -= 32;
    }
    encryptArray.push(String.fromCharCode(charCode))
  }
  return encryptArray.join('');
}