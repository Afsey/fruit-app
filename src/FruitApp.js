import { useState } from "react";


function FruitApp() {
  const [items, setItems] = useState(["Apple 🍎", "watermelon 🍉", "strawberry 🍓"])
  const [itemNo, setItemNo] = useState(0);
  const [itemInput, setItemInput] = useState('');
  const currentFruit = items[itemNo];

  const handleNextclick = () => {
    setItemNo(itemNo + 1);
  }
  const handleResetClick = () => {
    setItemNo(0);
  }

  const handleInput = (event) => {
    setItemInput(event.target.value);
  }
  const handleAddClick = () => {
    if (!itemInput) return;
    setItems([...items, itemInput], handlePrevClick)
  }
  const handlePrevClick = () => {
    setItemNo(0);
  }
  const handleAddClick =()=>{
    if(!itemInput) return;
    setItems([...items,itemInput],handlePrevClick)
  }


  return (
    <div className="app">
      <div className="app__container">
        <div className="app__heading">
          FruitApp
        </div>
        <div className="app__carousel">
          {currentFruit ? (<span className="display--item">
            {currentFruit}
          
          </span>)
          :
          <span className="display--add">
          <span>END OF THE LIST</span>
            <input type="text" onchange={handleInput} className="app__carousel--input" />
          </span>
}
        </div>
        <div className="app__next">
          {currentFruit ?
            <button onClick={handleNextclick} className="btn btn--primary">Next</button>
            : <button onClick={handleResetClick} className="btn btn--primary">Go to start</button>
          }</div>

        <div className="app__add">
          <button onClick={handleAddClick} className="btn btn--secondary">Add</button>
        </div>
      </div>
      <div className="footer">
        &copy; 2022 Hack with react.desined by AFSEY
      </div>
    </div>
  );
}

export default FruitApp;
