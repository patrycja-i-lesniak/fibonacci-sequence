const input = document.querySelector('input');
const paragraph = document.getElementById('paragraph');

let valueFromInput = input.addEventListener('input', function() {
	let output = (document.getElementById('paragraph').textContent = `\n${fibonacciSequence(
		input.value
	).join(', \n')}`);

	console.log(output);
});

function fibonacciSequence(n) {
	let fibonacciArray = [];
if(n>100) {
	throw new Error('max 100');
	print('max 100')
}
	for (let i = 0; i < n; i++) {
		i == 0 || i == 1
			? (fibonacciArray[i] = i)
			: (fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2]);
	}
	return fibonacciArray;
}





// const fibonacciSequence = (n) =>
// 	Array(n).fill({length: n})
//     .reduce((acc, _, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);

//     const result = fibonacciSequence(10);
// console.log(result);

//---

// function fibonacciSequence (n){
//   return new Array(n).fill(1).reduce((arr, _ ,i) => {
//       arr.push((i <= 1) ? i : arr[i-2] + arr[i-1])
//       return arr
//   },[]) ;
// }
// console.log(fibonacciSequence (10))

//---

// function fibonacciSequence(length) {
// 	return Array.from({ length }, ((a, b) => (_) => ([ b, a ] = [ a + b, b, a ])[2])(0, 1));
// }

// console.log(fibonacciSequence(10));

// const fibonacciSequence = (n) => {
//     return new Array(n).fill(0).map((elem ,index, currentArray)=>{
//         if(index === 0){
//             currentArray[index] = 0;
//         }else if(index === 1){
//             currentArray[index] = 1;
//         }else{
//             currentArray[index] = currentArray[index-2]+currentArray[index-1];
//         }
//         return currentArray[index];
//     });
// }
//     console.log(fibonacciSequence(10))
