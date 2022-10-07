import { Button, Col,  Input, Row } from "reactstrap"
import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoAddButton = () => {
    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos);

    const [todo, setTodo] = useState('')

   

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const ManipulateTodo = (e) => {
        // console.log(e)
        switch (e.target.id) {
            case 'add-todo':
                dispatch({ type: "ADD", payload: todo});
                break;
            case 'reset-all':
                dispatch({ type: "RESETALL", payload: todo});
                    break;
            default:
                break;
        }
        setTodo('')
        document.getElementById("txt-todo").value=''
        // console.log(todos)
    }
    return (
        <>
            <Row >
                <Col>
                {/* <Col md={{offset: 3, size: 12}}> */}
                    <Row className="row-cols-lg-auto align-items-center">
                        <Col>
                            <Input type="text" id="txt-todo" onChange={handleChange}/>
                        </Col>
                        <Col>
                            <Button id="add-todo" type="button" onClick={ManipulateTodo}>Add</Button>
                        </Col>
                        <Col>
                            <Button id="reset-all" type="button" onClick={ManipulateTodo}>RESET</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default TodoAddButton