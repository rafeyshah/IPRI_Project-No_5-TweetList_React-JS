import React from 'react'
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import RecentTweets from './RecentTweets';

function SearchBar(props) {
    // const [search, setsearch] = useState([])
    return (
        <div>
            {/* <Router>
                <Link to="/RecentTweets"><h1>Recent Tweets</h1></Link>
                <Switch>
                    <Route path="/RecentTweets">
                        <RecentTweets />
                    </Route>
                </Switch>
            </Router> */}
            <input type="checkbox" id="check" />
            <div className="box">
                <input type="text" placeholder="Search Here" onKeyDown={e => { if (e.key === 'Enter') { props.changeData(e.target.value) } }} />
                <label for="check"><FontAwesomeIcon icon={faSearch} /></label>
            </div>

        </div>
    )

}

export default SearchBar
