import TodoTitle from './js/TodoTitle';
import TodoHeader from './js/TodoHeader';
import TodoListItems from './js/TodoListItems';
import TodoFooter from './js/TodoFooter';
export default function App () {
const root = document.querySelector("#root");

document.body.style = "margin: 24px"

root.style = `
	max-width: 320px;
	margin: 50px auto;
	padding: 24px;
	border-radius: 7px;
	background: #303F9F;
	font-family: tahoma;
`;

	root.innerHTML = "";
	function refresh (arr, data) {
		arr.forEach((item, index) => {
			if (data[index].isComplete === true) {
				item.setAttribute("checked", "");
			}
		});
	}
	root.append(TodoTitle(), TodoHeader(), TodoListItems(), TodoFooter());
	fetch("http://localhost:7000/data/")
	.then(data => data.json())
	.then(data => {
		refresh(document.querySelectorAll("input[type='checkbox']"), data);
	})
}

App();