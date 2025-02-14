function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++){
		int cnt = 0;
		for (let j = i+1; j < str.length; j++){
			if (str[i] == str[j]){
				cnt++;
			}
		}
		if (cnt == 1)return;
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
