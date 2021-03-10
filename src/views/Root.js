import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SongPlayer from 'components/SongPlayer/SongPlayer';
import SongsList from 'data/SongList';
import SongList from 'components/SongList/SongList';

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
            <SongList handleSelectSong={handleSelectSong} currentSong={currentSong} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
