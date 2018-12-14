import styled from 'styled-components';

export const BoxModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: sans-serif;
  animation-name: modalFade;
  animation-duration: 0.8s;

  @keyframes modalFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes modalFormFade {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .modalForm {
    animation-name: modalFormFade;
    animation-duration: 0.4s;
  }

  form {
    background: #fff;
    border-radius: 8px;
    padding: 10px;
    width: 350px;
    h1 {
      text-align: center;
      font-size: 17px;
      margin: 0;
    }
    p {
      border-radius: 8px;
      padding: 10px;
      background: #ffa500;
      color: #fff;
      font-size: 13px;
      margin: 10px 0;
      animation-name: modalFade;
      animation-duration: 0.5s;
    }
    input {
      border-radius: 5px;
      padding: 8px;
      font-size: 16px;
      width: 100%;
      border: 1px solid #999;
      margin-bottom: 15px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        border: 0;
        flex-basis: 48%;
        background: #999;
        border-radius: 5px;
        padding: 12px;
        color: #fff;
        transition: all 0.3s;
        &:hover {
          background: #777;
        }
      }
      button.submit {
        background: #32cd32;
        &:hover {
          background: #008000;
        }
        i {
          margin-left: 10px;
        }
      }
    }
  }
`;
