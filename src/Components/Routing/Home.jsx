import React, { Component } from 'react';
import count from './FilmRequest'
class Home extends Component {
    render() {
        return (
            <>
                <h1>Movie Finder! </h1>
                <h1> {localStorage.getItem("count")} movie searches made.</h1>
                <p> ^Spent ages on this function, so no bootstrap styling unfortunately...^</p>
            </>
        )
    }
}
export default Home;