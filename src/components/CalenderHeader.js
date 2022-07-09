import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'
import bg from '../assets/bg.jpg';





export default function CalenderHeader() {

    const { setShowEventModal } = useContext(GlobalContext);

    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    function handlePreMonth() {
        setMonthIndex(monthIndex - 1)
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
    }
    function handleReset() {
        setMonthIndex(dayjs().month())
    }

    return (
        <div >
            <center><header>
                <img src={bg} />
                <h1>St.Mary's Basilica Church</h1>
            </header>
            </center>
            <center>Shivaji Nagar,Bangalore,560001</center>
            <header className="py-2 flex items-center" style={{ paddingLeft: '4%', backgroundColor: "#760f08" }}>
                {/* <h1 className="mr-10 text-xl text font-bold">MassBooking</h1> */}
                <button onClick={handlePreMonth}>
                    <span className="material-icons-outlined cursor-pointer text-white mx-2" >
                        chevron_left
                    </span>
                </button>
                <button onClick={handleNextMonth}>
                    <span className="material-icons-outlined cursor-pointer text-white mx-2">
                        chevron_right
                    </span>
                </button>
                <button className="border rounded py-2 px-4 mr-1 text-white" onClick={handleReset}>
                    Today
                </button>
                <h2 className='ml-4 text-xl text font-bold text-white' style={{ paddingLeft: '4%' }}>
                    {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
                </h2>
            </header>
        </div>
    )
}