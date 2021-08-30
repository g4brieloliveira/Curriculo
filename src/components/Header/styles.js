import styled from "styled-components";
import { colors } from '../../utils/colors'
import { fontSizes, spacingSizes } from '../../utils/sizes'

import { Link } from "react-router-dom";

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

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
    font-size: ${ fontSizes.large };
    font-weight: 700;
    margin-bottom: -10px;
`;

export const Description = styled.p`
    font-size: ${ fontSizes.medium };
    font-weight: 400;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Links = styled(Link)`
    display: flex;
    align-items: center;
    height: 20px;
    padding: ${ spacingSizes.small };
    justify-content: center;
    color: ${ colors.mainBlack };
    text-decoration: none;
    font-size: ${ fontSizes.semiSmall };
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    border-right: 1px solid black;
`;

export const MenuIcon = styled(HomeRoundedIcon)`
    margin-right: ${ spacingSizes.small };
    padding: ${ spacingSizes.extraSmall };
`;

export const ExperienceIcon = styled(WorkRoundedIcon)`
    margin-right: ${ spacingSizes.small };
    padding: ${ spacingSizes.extraSmall };
`;

export const AboutMeIcon = styled(PersonRoundedIcon)`
    margin-right: ${ spacingSizes.small };
    padding: ${ spacingSizes.extraSmall };
`;