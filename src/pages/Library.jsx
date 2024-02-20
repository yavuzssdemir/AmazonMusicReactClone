import React, { useEffect, useState } from 'react';

function Library() {
  const [savedSongs, setSavedSongs] = useState([]);

  useEffect(() => {
    const storedSongs = JSON.parse(localStorage.getItem('savedSongs')) || [];
    setSavedSongs(storedSongs);
  }, []);

  return (
      <div>
        {savedSongs.map((song) => (
          <div key={song.musicId}>
            <img src={song.thumbnail} alt={song.title} />
            <h3>{song.title}</h3>
            <p>
              Artist:{' '}
              {song.artist &&
                song.artist.map((element) => element.name).join(' & ')}
            </p>
          </div>
        ))}
      </div>
  );
}

export default Library;