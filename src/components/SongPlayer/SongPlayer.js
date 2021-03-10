import React, { useRef } from 'react';
import Heading from '../Heading';
import { Button, Cover, Wrapper } from './SongPlayer.style';

const SongPlayer = ({ song }) => {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
  return (
    <Wrapper>
      <Heading title="Music Player" />
      <Cover width="250px" height="250" src={coverUrl} alt="Song cover" />
      <audio ref={audioRef} key={audioUrl}>
        <source src={audioUrl} />
      </audio>
      <div className="">
        <Button onClick={() => audioRef.current.play()}>Play</Button>
        <Button onClick={() => audioRef.current.pause()}>Pause</Button>
      </div>
    </Wrapper>
  );
};

export default SongPlayer;
