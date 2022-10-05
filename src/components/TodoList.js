import { Col, ListGroup, ListGroupItem, Row } from "reactstrap"
import { useSelector } from "react-redux";


const TodoList = () => {
    const store = useSelector((state) => state.todos);
    
    const renderList = () => {
        return store.todolist.map((val, i) => {
            return (
                
                <ListGroupItem key={i}>
                    {val}
                </ListGroupItem>
            )
        })
        
        
    }
    return (
        <>
        <Row className="mt-3 text-start">
            <Col>
                
            {(store.todolist.length) ? 
                <ListGroup>
                        {renderList()}
                </ListGroup>
                : <h4>Not Found</h4>
            }
            </Col>
        </Row>
        </>
    )
}

export default TodoList