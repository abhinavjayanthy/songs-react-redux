import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return <div>Song list</div>;
  }
}
export default connect()(SongList);
