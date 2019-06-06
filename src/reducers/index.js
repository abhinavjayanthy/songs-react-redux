import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    { title: "Backstreet boys", duration: "4:55" },
    { title: "Jai ho", duration: "4:55" },
    { title: "Numb", duration: "4:55" },
    { title: "Old Town Road", duration: "4:55" },
    { title: "Macarena", duration: "4:55" }
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: SelectedSongReducer
});
