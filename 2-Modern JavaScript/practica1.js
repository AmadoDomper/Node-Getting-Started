const theOneFunc = t => {
	console.log('Hello after ' + t + ' seconds');
};

setTimeout(theOneFunc, 2 * 1000, '4');
setTimeout(theOneFunc, 8 * 1000, '8');
