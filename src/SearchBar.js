import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'

function SearchBar() {
    return (
        <div>
            <input type="checkbox" id="check" />
            <div className="box">
                <input type="text" placeholder="Search Here" />
                <label for="check"><FontAwesomeIcon icon={faSearch}/></label>
            </div>
        </div>
    )
}

export default SearchBar
