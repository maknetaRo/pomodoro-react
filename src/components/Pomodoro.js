import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import moment from 'moment';



const Pomodoro = () => {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)

    let timeDisplay = moment().minute(minutes).second(seconds);
    console.log(timeDisplay)


    useEffect(() => {
        const interval = setInterval(() => {
            if ((minutes > 0) && (seconds > 0)) {
                setSeconds(seconds - 1)
            }
        }, 1000);
        return () => clearInterval(interval);

    }, []);

    return (
        <div>
            <h1>Pomodoro clock</h1>


            <div class="box">
                <div class="counters">
                    <button class="btn btn-plus" onClick={() => setMinutes(minutes + 1)}></button>
                    <button class="btn btn-minus" onClick={() => setMinutes(minutes - 1)}></button>
                </div>
                <div class="clock">
                    <div class="time">
                        <Moment date={timeDisplay} format="mm:ss" />
                    </div>
                </div>
                <div class="buttons">
                    <button class="btn btn-start" onClick={() => setSeconds(seconds - 1)}></button>
                    <button class="btn btn-pause"></button>
                    <button class="btn btn-stop" onClick={() => setMinutes(25)}></button>
                </div>
            </div>

        </div>
    )
}

export default Pomodoro
