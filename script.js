const byteSize = (str) => {
  // write your code here
	let l = new TextEncoder().encode(str).length;
	// let l = str.length
	return l;
};

// // Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));      
