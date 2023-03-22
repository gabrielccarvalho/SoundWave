import styled from 'styled-components'

export const Background = styled.section`
  :before {
    content: "";
    position: absolute;
    top: 60rem;
    height: 100%;
    width: 100% !important;
    z-index: -1;
    opacity: 0.4;
    background-size: 20px 20px;
    background-image: linear-gradient(to right,#23262D 2px,transparent 2px),linear-gradient(to bottom,#23262D 2px,transparent 2px);
    background-position: top center;
    image-rendering: pixelated;
    -webkit-mask-image: linear-gradient(to bottom,transparent,60%,white,90%,transparent);
    mask-image: linear-gradient(to bottom,transparent,60%,white,90%,transparent);

    @media (max-width: 414px) {
      display: none;
    }
  }
`