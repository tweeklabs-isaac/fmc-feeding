import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import './main.scss';

export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: 'Event Now', start: new Date() },
    ],
  };

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView='dayGridMonth'
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends,
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  };

  handleDateClick = (arg) => {
    
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      })
  }

}