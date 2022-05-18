import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const GameControll = () => {

    const dispatch = useDispatch()
    const [game,setGame] = useState('')
    const [player,setPlayer] = useState('')

    const changeGame = () =>{
        dispatch({type: 'CHANGE_GAME_NAME', payload:game})
    }

    const changePlayer = () =>{
        dispatch({type: 'CHANGE_PLAYER_NAME', payload:player})
    }

  return (
      <>
        <hr/>
        <input type="text" placeholder='Game Name' onChange={e=>setGame(e.target.value)}  /> 
        <button onClick={changeGame}>Change Game Name</button>

        <br/>

        <input type="text" placeholder='Player Name' onChange={e=>setPlayer(e.target.value)}  /> 
        <button onClick={changePlayer}>Change Player Name</button>

      </>
  )
}

export default GameControll