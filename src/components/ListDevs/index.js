import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from './style';
import { Creators as UserActions } from '../../store/ducks/usersGit';

class ListDevs extends Component {
  static propTypes = {
    removeUser: PropTypes.func.isRequired,
    questionDelUser: PropTypes.func.isRequired,
    cancelQuestionDelUser: PropTypes.func.isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          avatar_url: PropTypes.string,
          name: PropTypes.string,
          login: PropTypes.string,
          url: PropTypes.string,
          isDel: PropTypes.bool,
        }),
      ),
    }).isRequired,
  };

  delUser = (id) => {
    this.props.removeUser(id);
  };

  render() {
    return (
      <List>
        <ul>
          {this.props.users.data.map(user => (
            <li className="listEfect" key={user.id}>
              <img alt="fulano" src={user.avatar_url} />
              <p>
                {user.name}
                {' '}
                <span>{user.login}</span>
              </p>
              <div>
                <button
                  onClick={() => {
                    this.props.questionDelUser(user.id);
                  }}
                  type="button"
                >
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <a href={user.url} target="_blank" rel="noopener noreferrer" title="abrir">
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                </a>
              </div>
              {user.isDel && (
              <div className="del-user">
                <strong>Deseja deletar?</strong>
                <div>
                  <button
                    className="ok"
                    onClick={() => {
                      this.props.removeUser(user.id);
                    }}
                    type="button"
                  >
                    Sim
                  </button>
                  <button
                    className="no"
                    onClick={() => {
                      this.props.cancelQuestionDelUser(user.id);
                    }}
                    type="button"
                  >
                    Não
                  </button>
                </div>
              </div>
              )}
            </li>
          ))}
        </ul>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersGit,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDevs);
