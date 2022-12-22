const getValue = (index) =>{

	let begin = 0
	let next = 1
	let final = index

	for (let i = 2; i <= index; i++){
		final = begin + next
		begin = next
		next = final
	}
	
	return final
}

const getFibonacciValue = () => {
	const index = 3
	return getValue(index)
}