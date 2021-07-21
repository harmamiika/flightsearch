// countin saa response headerista

import React from 'react'
import fetchFlights from '../services/flightsData'

const SearchForm = () => {

    const onFormSubmit = async (event) => {
        event.preventDefault()

        const flightsData = await fetchFlights();
        console.log(flightsData, 'flightsData')
    }

    return (
        <div>
            <h1>Search for flights!</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" />
                <button>Search!</button>
            </form>
        </div>
    )
}

export default SearchForm