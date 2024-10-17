var fruitsMap: Array<string> = ['Apple', 'Orange', 'Banana']; 
fruitsMap.sort(); 
console.log(fruitsMap); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruitsMap.pop()); //output: Orange

fruitsMap.push('Papaya'); 
console.log(fruitsMap); //output: ['Apple', 'Banana', 'Papaya']

fruitsMap = fruitsMap.concat(['Fig', 'Mango']); 
console.log(fruitsMap); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 

console.log(fruitsMap.indexOf('Papaya'));//output: 2