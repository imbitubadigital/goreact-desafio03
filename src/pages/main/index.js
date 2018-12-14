import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import 'font-awesome/css/font-awesome.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapGL, { Marker } from 'react-map-gl';
import { Creators as userActions } from '../../store/ducks/usersGit';

import ListDevs from '../../components/ListDevs';
import Modal from '../../components/Modal';

class Map extends Component {
  static propTypes = {
    addUserGit: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    emptyError: PropTypes.func.isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }).isRequired,
      ).isRequired,
      name: PropTypes.string,
      naavatar_url: PropTypes.string,
    }).isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    latitude: 0,
    longitude: 0,
    inputText: '',
  };

  componentDidMount() {
    window.addEventListener('resize', this.rresize);
    this.rresize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rresize);
  }

  rresize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [latitude, longitude] = e.lngLat;
    this.setState({ latitude, longitude });
    this.props.openModal();
  };

  addUser = (e) => {
    e.preventDefault();

    const { latitude, longitude, inputText } = this.state;
    this.props.addUserGit({ latitude, longitude, inputText });
    // chama a função addUserGit do (ducks usersGit Creators )
  };

  closeModal = () => {
    this.setState({ inputText: '' });
    this.props.emptyError();
    this.props.closeModal();
  };

  setInput = (value) => {
    this.props.emptyError();
    this.setState({ inputText: value });
  };

  render() {
    return (
      <Fragment>
        {this.props.users.modalIsOpen && (
          <Modal
            loading={this.props.users.loading}
            error={this.props.users.error}
            setInput={this.setInput}
            addUser={this.addUser}
            closeModal={this.closeModal}
          />
        )}
        <ListDevs />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.users.data.map(user => (
            <Marker
              key={user.id}
              latitude={user.latitude}
              longitude={user.longitude}
              onClick={this.handleMapClick}
              captureClick
            >
              <img
                className="img"
                style={{ borderRadius: 100, width: 48, height: 48 }}
                alt={user.name}
                src={user.avatar_url}
              />
            </Marker>
          ))}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersGit,
});

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
