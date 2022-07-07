import { getEvents } from '@taghub/api';
import React, { useEffect, useState } from 'react';
import Event from './Event';


const Events = ({epc, uuid}) => {

	const [events, setEvents] = useState({});

	useEffect(() => {
		setEvents({});
	}, [uuid]);

	const getAllEvents = async() => {
		const event = await getEvents(uuid, epc);
		setEvents(event);
	}
	
	useEffect(() => {
		getAllEvents();
		console.log(events)
	},[epc])

  return (
    <>
			<div className="event-container">
				<div className="event-header">
					Events
				</div>
				{ events.length ? events.map((event, index) => {
					return (
						<Event key={index} event={event} />
					)
				}) : <div className='event-empty'>Select an ordinary project's (Not All Items) item to show it's events</div> }
			</div>
		</>
  )
}

export default Events