import React, { useState } from 'react'
import Moment from 'react-moment';
import moment from 'moment';



const Pomodoro = () => {

    const [minutes, setMinutes] = useState(25)

    let timeDisplay = moment().minute(minutes).second(0);
    console.log(timeDisplay)

    const [counter, setCounter] = useState(0)

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
                    <button class="btn btn-start"></button>
                    <button class="btn btn-pause"></button>
                    <button class="btn btn-stop" onClick={() => setMinutes(25)}></button>
                </div>
            </div>

        </div>
    )
}

export default Pomodoro
