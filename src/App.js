import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');

  const randomNum = Math.floor(Math.random() * 100);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.artic.edu/api/v1/artworks?page=1&limit=100'
      );
      const newData = await response.json();
      // console.log(newData.data);
      await setData(
        `https://www.artic.edu/iiif/2/${newData.data[randomNum].image_id}/full/843,/0/default.jpg`
      );
      await setTitle(newData.data[randomNum].title);
      await setDate(newData.data[randomNum].date_display);
      await setArtist(newData.data[randomNum].artist_display);
      await setLink(newData.data[randomNum].id);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <a href={data} target={'_blank'}>
        <img
          src={data}
          alt={title}
          style={{ width: '75vw', padding: '25px' }}
        />
      </a>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <h2>{artist}</h2>
      <a href={`https://www.artic.edu/artworks/${link}`} target={'_blank'}>
        more info...
      </a>
    </div>
  );
}

export default App;
