import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SongPlayer from 'components/SongPlayer';
import SongsList from 'data/SongList';

const Root = () => {
  const currentSong = SongsList[0];
  console.log('currentSongs', currentSong);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/">
            <SongPlayer song={currentSong} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
