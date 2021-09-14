import './App.css';
import SearchBar from './SearchBar';
import Slider from './Slider';

import one from './images/1.svg';
const slideData = [
  {
    index: 0,
    headline: 'Hashtag Initiators',
    button: '@ImranKhan PTI',
    src: "https://images.pexels.com/photos/9558678/pexels-photo-9558678.png"
  },
  {
    index: 1,
    headline: 'Total Users Tweeting',
    button: '@1185',
    src: 'https://images.pexels.com/photos/9558679/pexels-photo-9558679.png'
  },
  {
    index: 2,
    headline: 'Total Tweets',
    button: '@20000',
    src: 'https://images.pexels.com/photos/9558680/pexels-photo-9558680.png'
  },
  {
    index: 3,
    headline: 'Retweets',
    button: '@1359',
    src: 'https://images.pexels.com/photos/9558681/pexels-photo-9558681.png'
  },
  {
    index: 4,
    headline: 'Likes',
    button: '@874',
    src: 'https://images.pexels.com/photos/9558682/pexels-photo-9558682.png'
  },
  {
    index: 5,
    headline: 'Person with highest tweets',
    button: '@Zulfiqar',
    src: 'https://images.pexels.com/photos/9558683/pexels-photo-9558683.png'
  }
]

function App() {
  return (
    <>
      <SearchBar />
      <Slider heading="Example Slider" slides={slideData} />
    </>
  );
}

export default App;
