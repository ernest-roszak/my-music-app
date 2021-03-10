import Heading from 'components/Heading';
import SongListItem from 'components/SongListItem/SongListItem';
import SongsList from 'data/SongList';
import React from 'react';
import { List, Wrapper } from './SongList.style';

const SongList = ({ currentSong, handleSelectSong }) => {
  return (
    <Wrapper>
      <Heading title="Songs" />
      <List>
        {SongsList.map((song) => (
          <SongListItem key={song.audioUrl} song={song} isCurrent={currentSong.audioUrl === song.audioUrl} onSelect={handleSelectSong} />
        ))}
      </List>
    </Wrapper>
  );
};

export default SongList;
