import App from './../index';
export default function TodoHeader () {
	const elem = document.createElement("form");

	elem.style = "margin-bottom: 24px; display: flex"

	elem.innerHTML = `
		<input 
			type="text" 
			placeholder="Type here"
			style="
				display: block;
				padding: 7px;
				border: 1px solid #3F51B5;
				outline: 0;
				border-radius: 7px 0px 0px 7px;
				width: 100%;
			"
		>
		<button style="
			padding: 7px;
			border: 1px solid #3F51B5;
			outline: 0;
			border-radius: 0px 7px 7px 0px;
			background: #FFEB3B;
			color: #111;
			cursor: pointer;
			font-weight: bold;
		">
			ADD
		</button>
	`;

	elem.addEventListener("submit", (e) => {
		e.preventDefault();
		const val = elem.firstElementChild.value.trim();

		if (val !== "" && val !== undefined) {
			fetch("http://localhost:7000/data/")
			.then(data => data.json())
			.then(data => {
				fetch("http://localhost:7000/data/", {
					method: "POST",
					headers: {
						"content-type" : "application/json"
					},
					body: JSON.stringify({
						name: val,
						isComplete: false,
						id: data.length==0?1:data[data.length-1].id+1
					})
				})
				App()
			})
		}
		e.target.reset();
	});
	return elem;
}