import styled, { keyframes } from 'styled-components';
import { fontSizes, spacingSizes } from '../../utils/sizes'
import CodePhoto from '../../assets/code.jpg'

const upAndDown = keyframes`
  from {
    transform: translate(0px, 0px);
  }

  to {
    transform: translate(0px, 8px);
  }
`;

export const MainView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FirstSectionView = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 92vh;
`;

export const Texts = styled.div`
    width: 45%;
    padding: ${ spacingSizes.large };
    margin-top: ${ spacingSizes.xxExtraLarge };
`;

export const WhatIAm = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: ${ fontSizes.xExtraLarge };
    margin-bottom: ${ spacingSizes.medium };
    line-height: 0.9;
`;

export const WhatIDo = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: ${ fontSizes.medium };
    line-height: 1.3;
`;

export const DeveloperImage = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${CodePhoto}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(4px);
    -webkit-filter: blur(4px);
`;

export const ScrollToImage = styled.img`
    width: ${ spacingSizes.large };
    height: ${ spacingSizes.large };
    margin: ${ spacingSizes.large };
    animation: ${upAndDown} 0.7s linear 0s infinite alternate;
`;