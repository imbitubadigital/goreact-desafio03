import React from 'react';
import PropTypes from 'prop-types';
import { BoxModal } from './style';

const Modal = props => (
  <BoxModal>
    <form className="modalForm" onSubmit={props.addUser}>
      <h1>Adicionar novo usuário</h1>
      {!!props.error && <p>{props.error}</p>}

      <input
        autoFocus
        onChange={e => props.setInput(e.target.value)}
        type="text"
        value={props.inputText}
      />
      <div>
        <button onClick={props.closeModal} type="button">
          Cancelar
        </button>
        <button className="submit" type="submit">
          Salvar
          {' '}
          {props.loading ? <i className="fa fa-spinner fa-pulse" /> : ''}
        </button>
      </div>
    </form>
  </BoxModal>
);

Modal.defaultProps = {
  inputText: undefined,
  error: null,
};

Modal.propTypes = {
  addUser: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
  inputText: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Modal;
