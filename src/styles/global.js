import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:none;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  .slide-enter{
    transform: translateX(-100%);
  }
  .slide-enter-active{
    animation: slide-in 300ms ease-out forwards;
  }
  .slide-leave{
    transform: translateX(0%);
  }
  .slide-leave-active{
    animation: slide-out 300ms ease-out forwards;
  }

  @keyframes slide-in{
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0%);
    }
  }
  @keyframes slide-out{
    from{
      transform: translateX(0%);
    }
    to{
      transform: translateX(100%);
    }
  }

  .flip-enter{
    transform: rotateY(180deg);
  }
  .flip-enter-active{
    animation: flip-in 300ms ease-out forwards;
  }
  .flip-leave{
    transform: rotateY(0deg);
  }
  .flip-leave-active{
    animation: flip-out 300ms ease-out forwards;
  }

  @keyframes flip-in{
    from{
      transform: rotateY(180deg);
    }
    to{
      transform: rotateY(0deg);
    }
  }
  @keyframes flip-out{
    from{
      transform: rotateY(0deg);
    }
    to{
      transform: rotateY(90deg);
    }
  }

 @keyframes imgFade {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

/*Efeito imagem*/
 @keyframes efectImg{
    0%{
      transform: translateY(-150%);
    }
    50%{
      transform: translateY(0);
      transform: rotateY(180deg);
    }
    100%{
      transform: rotateY(0deg);
    }
  }

  .img {
    animation-name: efectImg;
    animation-duration: 1.5s;
  }



`;

export default GlobalStyle;
