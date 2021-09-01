import React from 'react'

export default function Counter() {
    return (
        <div class="counter-container">
            <div class="buttons-container">
                <button class="start" onclick={() => handleClick}>start</button>
                <button class="stop" onclick={() => handleClick}>stop</button>
            </div>
            <p class="counter"></p>
        </div>
    )
}
