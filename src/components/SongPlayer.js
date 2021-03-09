import React from 'react';
import Heading from './Heading';

const SongPlayer = ({ song }) => {
  const { audioUrl, coverUrl, title, artist } = song;
  //   console.log('song', require(`../${coverUrl}.jpg`));
  // assets / covers / Bob - Marley - Three - Little - Birds.jpg;
  return (
    <section>
      <Heading title="Music Player" />
      <Heading title={artist} />
      <Heading title={title} />
      <img width="250px" height="250" src={require(`../assets${coverUrl}.jpg`)} alt="Song cover" />
      <audio controls>
        <source src={audioUrl} />
      </audio>
    </section>
  );
};

export default SongPlayer;
