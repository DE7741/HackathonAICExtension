import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.artic.edu/api/v1/artworks?page=1&limit=100'
      );
      const newData = await response.json();
      const randomNum = await Math.floor(Math.random() * 100);
      // console.log(newData.data);
      setData(
        `https://www.artic.edu/iiif/2/${newData.data[randomNum].image_id}/full/843,/0/default.jpg`
      );
      setTitle(newData.data[randomNum].title);
      setDate(newData.data[randomNum].date_display);
      setArtist(newData.data[randomNum].artist_display);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <img src={data} />
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <h3>{date}</h3>
      <div>hello</div>
    </div>
  );
}

export default App;
