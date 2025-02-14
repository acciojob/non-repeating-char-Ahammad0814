function firstNonRepeatedChar(str) {
 // Write your code here
	const map = {};

	for (let i = 0; i < str.length; i++){
		map[str[i]] = (map[str[i]] || 0) + 1;
	}
	
	for (let j = 0; j < str.length; j++){
		if (map[str[j]] == 1){
			return str[j];
		}
	}

	return null;	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
