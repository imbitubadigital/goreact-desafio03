import styled from 'styled-components';

export const List = styled.div`
  @keyframes listFade {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .listEfect {
    animation-name: listFade;
    animation-duration: 0.4s;
  }

  background: #fff;
  position: absolute;
  width: 340px;
  top: 20px;
  left: 20px;
  z-index: 10;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      border-bottom: 1px solid #ccc;
      &:hover {
        background: #f4f4f4;
      }
      &:last-child {
        border-bottom: 0;
      }

      img {
        border-radius: 50%;
        width: 60px;
        flex-basis: 10%;
      }
      p {
        flex-basis: 70%;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: bold;
        font-size: 16px;
        color: #666;
        span {
          font-weight: normal;
          font-size: 14px;
          color: #999;
        }
      }
      div {
        flex-basis: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          background: #ff0000;
          color: #fff;
          border: 0;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3;
          cursor: pointer;
          &:hover {
            background: #dc143c;
          }
        }
        a {
          text-decoration: none;
          font-size: 16px;
          color: #999;
        }
      }
      .del-user {
        background: rgba(215, 44, 44, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation-name: efectDel;
        animation-duration: 1s;

        strong {
          color: #fff;
          text-shadow: 1px 1px 2px #000;
        }
        div {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          button {
            width: 80px;
            height: 25px;
            margin: 0 10px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
          }
          button.ok {
            background: #32cd32;
            &:hover {
              background: #228b22;
            }
          }
          button.no {
            background: #a9a9a9;
            &:hover {
              background: #808080;
            }
          }
        }
      }

      .show-off {
        display: none;
      }
    }
  }

  /*Efeito Del*/
  @keyframes efectDel {
    from {
      transform: translateY(0);
      transform: rotateX(180deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }
`;
