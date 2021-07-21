import React, { useState } from 'react'

import fetchFlightsData from '../services/flightsData'

const AirportSearch = () => {
    const [cityInput, setCityInput] = useState('')

    const onFormSubmit = async (event) => {
        event.preventDefault()

        const flightsData = await fetchFlightsData.fetchAirports(cityInput);
        console.log(flightsData, 'flightsData')
    }

    return (
        <div>
            <h1>Search for flights!</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" value={cityInput} onChange={({ target }) => setCityInput(target.value)} />
                <button>Search!</button>
            </form>
        </div>
    )
}

export default AirportSearch