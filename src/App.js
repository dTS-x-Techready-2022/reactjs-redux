// import logo from "./logo.svg";
import { Card, CardBody, Col, Row } from "reactstrap";
import "./App.css";
import TodoAddButton from "./components/TodoAddButton";
// import { Counter } from "./components/Counter";
// import { SetCounter } from "./components/SetCounter";

import TodoList from "./components/TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App p-2">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <SetCounter />
      </header> */}
      <h1>
        Todo List
      </h1>
      <Row style={{padding: '2rem'}}>
        <Col xs={12} md={{offset: 3, size: 6}}>
          <Card>
            <CardBody>
              <TodoAddButton/>
              <TodoList/>
            </CardBody>  
          </Card>
        </Col>
      </Row>
      
      
    </div>


  );
}

export default App;
