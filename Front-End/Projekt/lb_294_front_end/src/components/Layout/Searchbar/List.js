import { React} from 'react'
import data from "./ListBook.json"
import { useNavigate } from 'react-router-dom';

function List(props) {
    const navigate = useNavigate();
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }

        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul>
            {filteredData.map((item) => (
                <li alt="#" onClick={() => navigate(`/books/${item.id}`)} key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List
