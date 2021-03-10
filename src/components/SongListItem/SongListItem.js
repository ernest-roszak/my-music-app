import React from 'react';
import { ListItem } from './SongListItem.style';

const SongListItem = ({ song, isCurrent, onSelect }) => {
  const background = isCurrent ? 'darkslategrey' : 'none';
  const style = { background };
  const handleSelectSong = () => {
    onSelect(song);
  };
  return (
    <ListItem style={style} onClick={handleSelectSong}>
      {song.title} by {song.artist}
    </ListItem>
  );
};

export default SongListItem;
