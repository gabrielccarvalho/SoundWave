import styled from 'styled-components'


export const Background = styled.div`
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.4;
    background-size: 20px 20px;
    background-image: linear-gradient(to right,#23262D 2px,transparent 2px),linear-gradient(to bottom,#23262D 2px,transparent 2px);
    background-position: top center;
    image-rendering: pixelated;
    -webkit-mask-image: linear-gradient(to bottom,transparent,60%,white,90%,transparent);
    mask-image: linear-gradient(to bottom,transparent,60%,white,90%,transparent);
  }
`