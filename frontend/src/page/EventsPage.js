import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
  {id: "e1", title: "Event A"},
  {id: "e2", title: "Event B"},
  {id: "e3", title: "Event C"},
]

const EventsPage = () => {
  return (
    <React.Fragment>
      <h1>EventsPage</h1>
      <ul>
        {(DUMMY_EVENTS || []).map((item) => (
          <li key={item.id}><Link to={item.id}>{item.title}</Link></li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default EventsPage