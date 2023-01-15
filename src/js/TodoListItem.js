import App from './../index';
export default function TodoListItem (obj) {
	const elem = document.createElement("div");

	elem.innerHTML = `
		<div style="
			display:flex;
			justify-content:space-between;
			align-items:center;
			margin-bottom: 12px;
		">
			<label
				style="
					display: block;
					color: #fff;
					cursor: pointer;
				"
			>
				<input type="checkbox">
				<span>${obj.name}</span>
			</label>
			<button
				style="
					background: #3F51B5;
					color: #fff;
					border: none;
					padding: 7px;
					border-radius: 7px;
					font-size: 12px;
					cursor: pointer;
				"
				data-rm
			>
				Remove
			</button>
		</div>
	`;

	elem.querySelectorAll("input").forEach((item) => {
		item.addEventListener("change", () => {
				fetch(`http://localhost:7000/data/${obj.id}`, {
					method: "PATCH",
					headers: {
						"content-type" : "application/json"
					},
					body: JSON.stringify({
						isComplete: item.checked
					})
				})
				App()
		});
	});
	elem.querySelectorAll("[data-rm]").forEach((item) => {
		item.addEventListener("click", () => {
			fetch("http://localhost:7000/data/")
			.then(data => data.json())
			.then(data => {
				let index = data.findIndex(val => item.previousElementSibling.lastElementChild.textContent==val.name)
				item.parentElement.remove();
				fetch(`http://localhost:7000/data/${data[index].id}`, {
					method: "DELETE"
				})
				console.log(data);
				App()
			})
		});
	});

	return elem;
}