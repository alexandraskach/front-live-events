import React, { Component } from "react";
import { connect } from "react-redux";
import { concertListFetch } from "../actions/actions.js";
import ConcertList from "./ConcertList.jsx";

const mapStateToProps = (state) => ({
  ...state.ConcertList,
});

const mapDispatchToProps = {
  concertListFetch,
};

class ConcertListContainer extends Component {
  componentDidMount() {
    this.props.concertListFetch();
  }
  render() {
    const { concerts, fetching } = this.props;
    return <ConcertList concerts={concerts} fetching={fetching} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertListContainer);
