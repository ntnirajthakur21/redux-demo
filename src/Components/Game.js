import React from 'react'
import { useSelector } from 'react-redux'


const Game = () => {
    const data = useSelector(store=>store.game)
  return (
      <>
      <p>My favourite Game is <u>{data.gameName}</u></p>
      <p>My favourite player is <u>{data.playerName}</u></p>
      </>
  )
}

export default Game