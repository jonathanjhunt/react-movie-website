import React, { useState } from 'react';
import axios from 'axios';
import FilmRequest from './FilmRequest';
import Home from './Home';

const MasterCount = () => {

    let count = localStorage.getItem("count");
    if (count == null) {
        count = 1
    }
    if (count == NaN) {
        count = 1
    }

    const updateCount = () => {
        let count = localStorage.getItem("count");
        if (count == null) {
            count = 1
        }
        if (count == NaN) {
            count = 1
        }
        console.log(count)
        console.log("function fired")

        localStorage.setItem("count", parseInt(count) + 1);
    }

    return (
        <div>
            <FilmRequest
                count={count}
                updateCount={updateCount} />
            {/* <Home count={count} /> */}

        </div>
    )
}
export default MasterCount;