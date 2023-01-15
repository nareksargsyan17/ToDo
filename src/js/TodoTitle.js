export default function TodoTitle () {
	const elem = document.createElement("h1");
	elem.style = "color: #FFEB3B; font-size: 24px; margin-bottom: 24px; text-align:center;"
	elem.textContent = "ToDo Application"
	return elem;
}