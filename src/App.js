
import './App.css';
import React from "react"
import Item from "./Item"

function App() {
  //useState Hook
  //items is the current item
  //setItems updates the array of items
  const [items, setItems] = React.useState([])

  //itemRemove: the item that needs to be removed
  function onRemoveItem(itemRemove) {
    const newItems = items.filter((item) => {
      return item!==itemRemove //only returns the items that doesnt match
    })
    setItems(newItems) //update the items state with the new array
  }

  function onSubmit(event) {
    //prevents the page from refreshing
    event.preventDefault()
    //form el and input el
    const form = event.target 
    const input = form.item
    const newItems = [...items, input.value] //input.value is the val entered in the input field
    setItems(newItems) //update the items state withe new array newItems
    form.reset() //clear the input field after adding the item
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to Buy</h2>
        {/*form element with a onsubmit event handler*/}
        <form onSubmit={onSubmit}>
          <input 
            type="text"
            name="item"
            placeholder='Add a new item'
            required
          />
          {/*when this button is clicked, it triggers the onSubmit function*/}
          <button>Add</button>
        </form>
        <ul>
          {/*ul creates a list, that maps the items array*/}
          {items.map((item, index) => (
            //Item component reps. each item in the list and has a del button that removes the items
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
