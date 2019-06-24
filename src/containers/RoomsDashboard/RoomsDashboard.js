import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRooms } from "./../../store/rooms/rooms.actions";
import Room from "../../components/Rooms/Room";

import classes from "./RoomsDashboard.module.scss";

export class RoomsDashboard extends Component {
  static propTypes = {
    fetchRooms: PropTypes.func,
    rooms: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    return (
      <div className={classes.Row}>
        {Object.entries(this.props.rooms).map(roomData => (
          <div key={roomData[0]} className={classes.Column}>
            <Room
              id={roomData[0]}
              name={roomData[1].name}
              icon={roomData[1].icon}
              devicesCount={roomData[1].devicesCount}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.rooms
});

const mapDispatchToProps = {
  fetchRooms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomsDashboard);
