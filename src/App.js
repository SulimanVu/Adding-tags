import { useState } from 'react';
import './index.css';

function App() {

  const [text, setText] = useState('')
  const [tag, setTag] = useState([])
  const [error, setError] = useState('')

  let newArr = tag
  function hendleChange(e){
      setText(e.target.value)
      setError('')
      e.target.style.boxShadow='none'
  }
  function hendleSend(){
      setTag([...tag, text])
      setText('')
  }

  function hendleOnBlur(e){
    if(!e.target.value){
      setError('Поле ввода не должно быть пустым')
      e.target.style.boxShadow = '2px 8px 15px -6px red'
    }
  }

  function hendleDelete(i){
    setTag(
    tag.filter((item,index)=>{
      if(index !== i){
        return true
      }
      return false
      
    }))
  }
  return (
    <>
    <div className='app'>
      <div className="form">
          <input type='text' value={text} onChange={hendleChange} onBlur={hendleOnBlur} />
          <button disabled={text.length < 1 ? true : false} className={text.length < 1 ? 'off': 'on'} onClick={hendleSend}>Отправить</button>
      </div>
      <div className='error'>{error}</div>
      <div className='tags-block'>

        {newArr.map((item,index)=>{
          return(
          <div key={index}>{newArr[index]}<button onClick={()=>hendleDelete(index)}>x</button></div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App;
