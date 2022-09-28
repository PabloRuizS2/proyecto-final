import React, {useState} from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function CountButton(props){
  return(
    <button className='count-btn' onClick={props.callback} >{props.children}</button>
  )

}


function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  function handleCount(sign, initial, stock, unit){
      switch (sign) {
      case 'increment':
        if(count >= initial && count <= stock - unit){
          setCount(count + unit)
        } 
        break;
      case 'decrement':
        if(count >= initial+unit ){
          setCount(count - unit) 
        } 
        break;
        default:
          break
    }
  
    
  }

  return (
    <div className='ic-container'>
        <div className='ic-title'>
            <h2>Cantidad</h2>
        </div>
        <div className='ic-body'>
          <div className='counter'>
            <CountButton  callback={() => handleCount('decrement', props.initial, props.stock, props.unit)} ><AiOutlineMinus /></CountButton>
            <span>{count}</span>
            <CountButton  callback={() => handleCount('increment', props.initial, props.stock, props.unit)}><AiOutlinePlus /> </CountButton>
          </div>
            <div className='add-to-cart'>
            <button onClick={() => props.onAdd(count)}>
              <span className="button_top">Añadir al carrito</span>
            </button>
            </div>
        </div>
        
    </div>
  )
}

export default ItemCount