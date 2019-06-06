//Action creator

// While importing a named export we use {selectSong} while importing like import { selectSong } form './actions ( like in this case)
// If we use export defaults selectSong we use import selectSong from './actions'

export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
