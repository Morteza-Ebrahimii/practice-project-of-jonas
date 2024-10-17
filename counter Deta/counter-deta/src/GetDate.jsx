import { useState } from "react";

export function GetDate({ currentDate, count }) {



    const daysOfWeek = Array.from({ length: 7 }, (_, i) => new Date(0, 0, i).toLocaleDateString('en-US', { weekday: 'long' }));

    const months = Array.from({ length: 12 }, (_, i) => new Date(0, i, 1).toLocaleDateString('en-US', { month: 'short' }));

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <div>
            <h3>{count === 0 ? (`Today is : ${dayOfWeek} ${month} ${day} ${year}`)
                : (count > 0 ? (`${count} days from today is ${dayOfWeek} ${month} ${day} ${year}`) 
                : (`${Math.abs(count)} days ago was ${dayOfWeek} ${month} ${day} ${year}`))}</h3>
        </div>
    )

}
