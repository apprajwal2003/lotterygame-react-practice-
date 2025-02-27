import { useState } from 'react'
import './Lottery.css'
import { genTicket } from './helper.js'

export default function Lottery () {
  let [Ticket, setTicket] = useState(genTicket(3))
  return (
    <div>
      <h1>Lottery Game</h1>
      <div className='Ticket'>
        <span>{Ticket[0]}</span>
        <span>{Ticket[1]}</span>
        <span>{Ticket[2]}</span>
      </div>
    </div>
  )
}
