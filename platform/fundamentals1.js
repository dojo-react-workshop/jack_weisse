let x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
x.forEach(function(el) {
	console.log(el);
});

x.push(100);

x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

let sum = 0;
for(let i = 1; i <= 500; i++) {
	sum += i;
}
console.log(sum);

let arr = [1, 5, 90, 25, -3, 0];
let min = arr[0];
for(let i = 1; i < arr.length; i++) {
	if(arr[i] < min) {
		min = arr[i];
	}
}
console.log(min);

let avg = 0;
for(let i = 0; i < arr.length; i++) {
	avg += arr[i];
}
avg /= arr.length;
console.log(avg);

var newNinja = {
	name: "jack",
	profession: "coder",
	lang: "js",
	dojo: "nm"
}

for(let key in newNinja) {
	console.log(key,newNinja[key]);
}