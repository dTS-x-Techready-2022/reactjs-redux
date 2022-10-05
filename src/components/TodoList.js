import { CloseButton, Col, ListGroup, ListGroupItem, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux";


const TodoList = () => {
    const store = useSelector((state) => state.todos);
    const dispatch = useDispatch();    
    
    const handleRemove = (i) => {
        dispatch({ type: "REMOVE", payload: i})
    }

    return (
        <>
        <Row className="mt-3 text-start">
            <Col>
                
            {(store.todolist.length) ? 
                <ListGroup>
                        {
                            store.todolist.map((val, i) => {
                                return (
                                    <ListGroupItem key={i} className="d-flex justify-content-between" >
                                        <span>{val}</span>
                                        <CloseButton onClick={() => handleRemove(i)}/>
                                    </ListGroupItem>
                                )
                            })
                            
                            
                        }
                </ListGroup>
                : <h4>Not Found</h4>
            }
            </Col>
        </Row>
        </>
    )
}

export default TodoList