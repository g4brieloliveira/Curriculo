import styled from "styled-components";
import { colors } from '../../utils/colors'
import { fontSizes, spacingSizes } from '../../utils/sizes'

import { Link } from "react-router-dom";

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const getWindowSize = window.screen.width

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: ${ spacingSizes.large };
    background-color: ${ colors.defaultColor };
    position: fixed;
    z-index: 1;
    top: 0;
`;

export const Logo = styled.a`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: ${ colors.mainBlack };
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
`;

export const Title = styled.a`
    font-size: ${ getWindowSize > 500 ? fontSizes.large : fontSizes.medium };
    font-weight: 700;
    margin-bottom: -8px;
`;

export const Description = styled.p`
    font-size: ${ getWindowSize > 500 ? fontSizes.medium : fontSizes.small };
    font-weight: 400;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: ${ getWindowSize > 500 ? '400px' : '200px' };
`;

export const Links = styled(Link)`
    display: flex;
    align-items: center;
    height: 20px;
    padding: ${ getWindowSize > 500 ? spacingSizes.small : spacingSizes.extraSmall };
    justify-content: center;
    color: ${ colors.mainBlack };
    text-decoration: none;
    font-size: ${ fontSizes.semiSmall };
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    border-right: 1px solid black;
`;

export const MenuIcon = styled(HomeRoundedIcon)`
    margin-right: ${ getWindowSize > 500 ? spacingSizes.small : spacingSizes.extraSmall };
    padding: ${ spacingSizes.extraSmall };
`;

export const ExperienceIcon = styled(WorkRoundedIcon)`
    margin-right: ${ getWindowSize > 500 ? spacingSizes.small : spacingSizes.extraSmall };
    padding: ${ spacingSizes.extraSmall };
`;

export const AboutMeIcon = styled(PersonRoundedIcon)`
    margin-right: ${ getWindowSize > 500 ? spacingSizes.small : spacingSizes.extraSmall };
    padding: ${ spacingSizes.extraSmall };
`;