export default function TodoFooter () {
	const elem = document.createElement("div");
	fetch("http://localhost:7000/data/")
	.then(data => data.json())
	.then(data => {
	const filteredArr = data.filter(obj => obj.isComplete === true);
console.log(data);
	elem.innerHTML = `
		<span style="font-style: italic;color: #FFEB3B">${filteredArr.length} / ${data.length} Completed</span>
	`;

})
	return elem;
}
