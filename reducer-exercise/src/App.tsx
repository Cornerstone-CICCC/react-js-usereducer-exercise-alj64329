import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface State {
  isDark: boolean,
  fSize: number
}

type Action={
  type:"increment_fSize"|"decrement_fSize"|"toggle_darkMode"
}

const reducer = (state:State, action:Action):State=>{
  switch(action.type){
    case "increment_fSize":
      return ({
        isDark:state.isDark,
        fSize:state.fSize+1
      });
    case "decrement_fSize":
      return ({
        isDark:state.isDark,
        fSize:state.fSize-1});
    case "toggle_darkMode":
      return ({
        isDark:!state.isDark,
        fSize:state.fSize
      });
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer,{
    isDark:false,
    fSize:16
  })

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-8'>
      <div
      style={{fontSize:state.fSize}}
      className={`${state.isDark&&"bg-black text-white"} w-[80%]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit est facere voluptate dolore alias a placeat veritatis, dicta assumenda itaque ipsum accusamus aliquid, excepturi necessitatibus ratione repellat. Accusamus, cupiditate ipsum.
      </div>
      <div className='flex gap-6'>
        <button
        onClick={()=>dispatch({type:"toggle_darkMode"})}
        >Toggle Dark Mode</button>
        <button
        onClick={()=>dispatch({type:"increment_fSize"})}>
          Increase Font Size</button>
        <button
        onClick={()=>dispatch({type:"decrement_fSize"})}>
          Decrease Font Size</button>
        </div>
    </div>
  )
}

export default App
