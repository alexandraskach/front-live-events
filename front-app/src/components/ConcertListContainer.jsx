import React, { Component } from "react";
import { connect } from "react-redux";
import {
  concertListFetch,
  concertListFetchByStyle,
} from "../actions/actions.js";
import ConcertList from "./ConcertList.jsx";

const mapStateToProps = (state) => ({
  ...state.ConcertList,
});

const mapDispatchToProps = {
  concertListFetch,
  concertListFetchByStyle,
};

class ConcertListContainer extends Component {
  componentDidMount() {
    this.props.concertListFetch();
    this.props.concertListFetchByStyle("rock");
  }
  render() {
    const { concerts, fetching, concertsByStyle } = this.props;
    return (
      <ConcertList
        concerts={concerts}
        fetching={fetching}
        concertsByStyle={concertsByStyle}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertListContainer);
