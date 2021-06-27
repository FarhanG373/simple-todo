import React, {useState} from 'react';
import Image from '../logo.svg';
import { FaRegPlusSquare, FaRegWindowClose } from 'react-icons/fa';
const Todo = () => {
    const [data, setData] = useState('');
    const [items, setItems] = useState([]);
    const addItem = () => {
        if(!data){
            alert('Please Insert data')
        } else {
            setItems([...items, data]);
            setData('')
        }
        
    }
    const DeleteItem = (id) => {
        const DeletedItem = items.filter((item, index)=>{
            return index !== id
        })
        setItems(DeletedItem)
    }
    const RemoveAll = () => {
        setItems([])
    }
    return (
        <>
        <div className="main_div">
            <div className="child_div">
                <img src={Image} alt="Logo"/>
                <p>Add your List here</p>
                <div className="add_items">
                    <input type="text" placeholder="Add items" value={data} onChange={(e)=> setData(e.target.value)}></input>
                    <button onClick={addItem}><FaRegPlusSquare/></button>
                </div>

                <div className="show_items">
                    {
                        items.map((item, index)=> {
                            return(
                                <div className="each_item" key={index}>
                                    <h3>{item}</h3>
                                    <button onClick={() => DeleteItem(index)}><FaRegWindowClose/></button>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <button className="checkList" onClick={()=> RemoveAll()}>Remove List</button>
            </div>
        </div>
            
        </>
    )
}

export default Todo
