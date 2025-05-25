import { useState } from "react";

function ItemAdder() {
    const [list, setList] = useState([])
    return (
        <div className="listing">
            <h3 id="listing">list: {list.toString()}</h3>
            <input type="text" id="list-input"/>
            <button onClick={() => 
                setList((prevList) => ([
                    ...prevList,
                    "+1"
             ]))
            }>Add to the list</button>
        </div>
    )
}

export default ItemAdder