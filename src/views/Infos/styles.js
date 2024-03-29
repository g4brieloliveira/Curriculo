import styled from "styled-components";

import { colors } from '../../utils/colors'
import { fontSizes, spacingSizes } from '../../utils/sizes'

export const MainInfosView = styled.div`
    margin-top: ${ spacingSizes.xxExtraLarge };
    padding: ${ spacingSizes.large };
    width: 100%;
    font-family: 'Poppins', sans-serif;
`;

export const DidYouLike = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: ${ fontSizes.large };
    font-weight: 400;
`;

export const Link = styled.a`
    font-size: ${ fontSizes.xxExtraLarge };
    text-decoration: none;
    color: ${ colors.mainBlack };
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const InfosTitle = styled.h1`
    margin-top: ${ spacingSizes.xxExtraLarge };
    font-size: ${ fontSizes.large };
`;

export const InfosDescription = styled.p`
    font-size: ${ fontSizes.medium };
`;

export const InfosContainer = styled.p`
    width: 45%;
    display: flex;
    flex-direction: column;
`;

export const InfosLink = styled.a`
    display: flex;
    align-items: center;
    font-size: ${ fontSizes.medium };
    text-decoration: none;
    color: ${ colors.mainBlack };

    &:hover {
        text-decoration: underline;
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: ${ spacingSizes.xExtraLarge };
`;

export const Image = styled.img`
    width: ${ spacingSizes.medium };
    height: ${ spacingSizes.medium };
    margin-right: ${ spacingSizes.small };
`;