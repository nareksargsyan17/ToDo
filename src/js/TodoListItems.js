import TodoListItem from './TodoListItem';
export default function TodoListItems () {
	const elem = document.createElement("div");
	fetch("http://localhost:7000/data/")
	.then(data => data.json())
	.then(data => {
		data.forEach(obj => {
			elem.append(TodoListItem(obj));
		});
	})
	return elem;
}