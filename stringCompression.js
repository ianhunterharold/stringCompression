// string compression 
// uppercase and lowercase letters only 
// if the original string is shorter than the compressed contructed string, return the original string
//example st = 'aabbccddeeeff' => a2b2c2d2e3f2
// return compressed a2b2c2d2e3f2

// example st abcd  => a1b1c1d1 
// return abcd 

// talking about it in my mother tongue
// go through the string, start at the start 
// count for every repition of that character, 
// return the total number of that string 

// move onto the next char, count the number, 
// if the next one is a different character, 
// then return the count of that string and move onto //the next one 

// count variable 
// new string 
// iterate over string
// char variable
// if char !== i + 1
//new string = string.concat(count)
// char = i + 1;
// else 
//count++

const compressionIsNow = function(str){
  let char = str[0];
  let nwStr = '';
  let counter = 0;

  for (let i=0; i< str.length; i++){
    if (str[i] === str[i + 1]){
      counter++;
    } else if (str[i] !== str[i + 1]){
      counter++;
      nwStr = nwStr.concat(char);
      nwStr = nwStr.concat(counter);

      // early kick out to original string 
        if (counter === 1 ){
          return str;
        }
        //reset counter, reset char location
      counter = 0;
      char = str[i + 1]; 
    };
  };
  return nwStr;
};

const str1 = 'aabbcc'
compressionIsNow(str1)