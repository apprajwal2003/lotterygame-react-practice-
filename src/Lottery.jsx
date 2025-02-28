import { useState } from 'react'
import { genTicket, sum } from './helper.js'
import Ticket from './Ticket.jsx'

export default function Lottery ({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n))

  let isWinning = winCondition(ticket)

  let buyTicket = () => {
    setTicket(genTicket(n))
  }

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <h3>{isWinning && 'Congratulations YOU WON!'}</h3>
      <button onClick={buyTicket}>Generat Ticket!</button>
    </div>
  )
}
