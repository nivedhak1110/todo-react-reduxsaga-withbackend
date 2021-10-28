import TodoForm from "./components/todoForm/todoForm";
import TodoDisplay from "./components/todoDisplay/todoDisplay";
import { Layout, Menu } from "antd";
import "./App.css";
//import axios from "axios";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { addTodo, deleteTodo } from "./redux-todo/reducer";
import { useSelector, useDispatch } from "react-redux";
import actions from "./redux-todo/actions";

function App() {
  //Allows you to extract data from the Redux store state, using a selector function.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onFormSubmit = (todo) => {
    //addTodo(todo);
    console.log(todo);

    dispatch({
      type: actions.addSagaTodo,
      payload: { id: Math.random() * 1000, ...todo },
    });
  };

  //ondelete
  const onDeleteTodo = (todoId) => {
    console.log(todoId);
    dispatch({
      type: actions.deleteSagaTodo,
      payload: { id: todoId },
    });
  };

  //navbar
  const { Header, Content } = Layout;

  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            {/* <div className="title">Todo</div> */}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <NavLink to="/" className="link">
                  todoForm
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/display" className="link">
                  displayTodo
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>

          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <Switch>
              <Route exact path="/">
                <TodoForm onFormSubmit={onFormSubmit} />
              </Route>
              <Route path="/display">
                <TodoDisplay todos={todos} onDeleteTodo={onDeleteTodo} />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}
export default App;
