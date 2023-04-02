// importing libraries
import ReactDOM from "react-dom";
import UsersTable from "components/UsersTable.jsx";

//finding node
const node = document.getElementById('users')

//getting props
const props = JSON.parse(node.dataset.props)

//render users table
ReactDOM.render(
  <UsersTable {...props}/>,
  node
);
