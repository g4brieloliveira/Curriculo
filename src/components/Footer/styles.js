import styled from "styled-components";
import { colors } from "../../utils/colors";

import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { fontSizes, spacingSizes } from "../../utils/sizes";

export const MainView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 100%;
    height: 50px;
    padding: ${ spacingSizes.small };
  
    background-color: ${ colors.defaultColor };
`
export const Text = styled.p`
    display: flex;
    align-items: center;
  
    font-size: ${ fontSizes.semiSmall };
    font-weight: 500;
    font-family: "Poppins", sans-serif;
`

export const Icon = styled(FavoriteRoundedIcon)`
    margin: ${ spacingSizes.extraSmall };

`

