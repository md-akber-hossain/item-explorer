import React from 'react'

const Event = ({event}) => {
  return (
    <>
        <div className="event-item">
            <div className="event-title">
                {event.message}
            </div>

            <div className="event-info">
                <p><span>Service name:</span> {event.service.name}</p>
                <p><span>Value:</span> {event.value}</p>
                <p><span>User:</span> {event.user}</p>
                <p><span>Timestamp:</span> {event.userTimestamp}</p>
            </div>
        </div>
    </>
  )
}

export default Event