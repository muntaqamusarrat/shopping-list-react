import React from "react"

//receives 2 props
//item = text
//onRemoveItem = function to remove the item
export default function Item({onRemoveItem, item}) {
    return (
        <li>
            {/*renders individual items in the list*/}
            {item}
            {/*delete button, when clicked calls the onRemoveItem function*/}
            {/*this function passes the item text as an arg to remove it from the list*/} 
            <button className='delete' onClick={() => onRemoveItem(item)}>x</button>
        </li>
    )
}