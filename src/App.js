import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import { getMonth } from './util'
import CalenderHeader from './components/CalenderHeader';
import Siderbar from './components/Siderbar';
import Month from './components/Month';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)


  useEffect(() => {
    const EXPIRE_TIME = "";
    setTimeout(function () {
      localStorage.clear();
    }, EXPIRE_TIME);

  }, []);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <Siderbar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
