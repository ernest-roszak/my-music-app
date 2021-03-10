import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SongPlayer from 'components/SongPlayer/SongPlayer';
import SongsList from 'data/SongList';
import Heading from 'components/Heading';
import SongListItem from 'components/SongListItem/SongListItem';
import { List, Wrapper } from './Root.styles';

const Root = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = SongsList[currentSongIndex];
  const handleSelectSong = (selectedSong) => {
    const audioIndex = SongsList.findIndex((song) => song.audioUrl === selectedSong.audioUrl);
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/">
            <SongPlayer song={currentSong} />
            <Wrapper>
              <Heading title="Songs" />
              <List>
                {SongsList.map((song) => (
                  <SongListItem key={song.audioUrl} song={song} isCurrent={currentSong.audioUrl === song.audioUrl} onSelect={handleSelectSong} />
                ))}
              </List>
            </Wrapper>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
