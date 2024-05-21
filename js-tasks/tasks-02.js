//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//v1 - Ivan
function stringToArray(string){
	return string.split(' ');
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//v1 - Ivan
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//v1 - Ivan
function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
  return Math.max(...arr);
}



//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//v1 - Ivan
function min(arr, returnType) {
  let minValue = Math.min(...arr);
  if (returnType == 'value') {
      return minValue;
  } else if (returnType == 'index') {
      let minIndex = arr.indexOf(minValue);
      return minIndex;
  } else {
      return "Please provide 'value' or 'index'.";
  }
}