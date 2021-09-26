import React, { Component } from "react";
import { concertFetch, concertUnload } from "../actions/actions";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import Concert from "./Concert";

const mapStateToProps = (state) => ({
  ...state.Concert,
});

const mapDispatchToProps = {
  concertFetch,
  concertUnload,
};

class ConcertContainer extends Component {
  componentDidMount() {
    this.props.concertFetch(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.concertUnload();
  }
  render() {
    const { fetching, concert } = this.props;

    if (fetching) {
      return <Spinner></Spinner>;
    }
    return (
      <div>
        <Concert fetching={fetching} concert={concert} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertContainer);
