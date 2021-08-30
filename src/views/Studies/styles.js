import styled from "styled-components";
import { fontSizes, spacingSizes} from '../../utils/sizes'

export const StudiesView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    width: 100%;
    height: 100%;
`

export const DuoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 10px;
    margin-bottom: ${ spacingSizes.medium };
`

export const Title = styled.h1`
    align-self: flex-start;
    font-family: 'Poppins', sans-serif;
    padding: ${ spacingSizes.xExtraLarge };
    margin-left: ${ spacingSizes.semiSmall };
    font-size: ${ fontSizes.xExtraLarge };
    font-weight: bold;
`