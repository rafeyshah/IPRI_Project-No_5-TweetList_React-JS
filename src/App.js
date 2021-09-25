import './App.css';
import SearchBar from './SearchBar';
import Slider from './Slider';
import { useState, useEffect } from 'react';
import Papa, { parse } from "papaparse";
// import * as d3 from 'd3';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import RecentTweets from './RecentTweets';

function App() {

  // HASHTAG Initiator 
  let hashtag, Usertweets, tTweets, tRetweets, tLikes, PwithHnoTweets
  function HashagInitiator() {
    hashtag = (rows[rows.length - 2].username);  // -1 for Header && -1 for null
  }

  // Count Unique
  function countUnique(iterable) {
    return new Set(iterable).size; //Distinct Tweets
  }

  // Count Distinct Tweets
  function countUsersTweets() {
    Usertweets = countUnique(rows.map(row => row.username)) //Distinct Tweets
  }

  // Count Tweets
  function countTtweets() {
    tTweets = rows.length -2;  // -1 for Header && -1 for null
  }


  // Total Retweets Count
  function tRetweetsCount() {
    tRetweets = rows.reduce(function (r, a) {
      if (typeof a.retweets_count === 'undefined')
        return r
      else
        return r + parseInt(a.retweets_count);


      //    ^^^ use the last result without property
    }, 0); //Reduce method to add all string values
  }

  // Total Likes Count 
  function tLikesCount() {
    tLikes = rows.reduce(function (r, a) {
      if (typeof a.likes_count === 'undefined')
        return r
      else
        return r + parseInt(a.likes_count);


      //    ^^^ use the last result without property
    }, 0); //Reduce method to add all string values
  }


  // Person With Highest No of Tweets
  function PwHnoTweets(array) {
    if (array.length === 0)
      return null;
    var modeMap = {};
    var maxEl = array[0].username, maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i].username;
      if (modeMap[el] == null)
        modeMap[el] = 1;
      else
        modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  }
  /************************MAIN PROGRAM ***********************/
  const [search, setsearch] = useState([])
  const [rows, setRows] = useState(null);
  useEffect(() => {
    Papa.parse(`../files/${search}.csv`, {
      download: true,
      header: true,
      complete: data => {
        setRows(data.data);
      }
    });
  }, [search]);

  if (rows !== null) {
    HashagInitiator()
    countUsersTweets()
    countTtweets()
    tRetweetsCount()
    tLikesCount()
    PwithHnoTweets = PwHnoTweets(rows)
  }/******************************************************************/



  /******************** Slides Data *************************/
  const slideData = [
    {
      index: 0,
      headline: 'Hashtag Initiators',
      button: `@${hashtag}`,
      src: "https:images.pexels.com/photos/9558678/pexels-photo-9558678.png"
    },
    {
      index: 1,
      headline: 'Total Users Tweeting',
      button: `@${Usertweets}`,
      src: 'https:images.pexels.com/photos/9558679/pexels-photo-9558679.png'
    },
    {
      index: 2,
      headline: 'Total Tweets',
      button: `@${tTweets}`,
      src: 'https:images.pexels.com/photos/9558680/pexels-photo-9558680.png'
    },
    {
      index: 3,
      headline: 'Retweets',
      button: `@${tRetweets}`,
      src: 'https:images.pexels.com/photos/9558681/pexels-photo-9558681.png'
    },
    {
      index: 4,
      headline: 'Likes',
      button: `@${tLikes}`,
      src: 'https:images.pexels.com/photos/9558682/pexels-photo-9558682.png'
    },
    {
      index: 5,
      headline: 'Person with highest tweets',
      button: `@${PwithHnoTweets}`,
      src: 'https:images.pexels.com/photos/9558683/pexels-photo-9558683.png'
    }
  ]

  return (

    <>
      <Router>
        <Link to="/RecentTweets"><h1>Recent Tweets</h1></Link>
        <Link to="/"></Link>
        <Switch>
          <Route path="/RecentTweets">
            <RecentTweets rows={rows} />
          </Route>
          <Route path="/">
            <div
              className="drop"
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();

                Array.from(e.dataTransfer.files)
                  .forEach(async (file) => {
                    const text = await file.text();
                    const result = parse(text, { header: true });
                    setRows(result.data);
                  })
              }}
            >
              <SearchBar changeData={search => setsearch(search)} />
              <Slider heading="Example Slider" slides={slideData} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
