import styled from "styled-components";
import {colors} from '../../utils/colors'
import {fontSizes, spacingSizes} from '../../utils/sizes'

export const CardView = styled.div`
    width: 30rem;
    height: 35rem;
    box-shadow: 0 0 8px black;
    padding: ${ spacingSizes.large };
    font-family: 'Poppins', sans-serif;

    background-color: ${ colors.lightBlue };
`

export const UpperInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CourseInfo = styled.div`
    width: 60%;
    margin-top: ${ spacingSizes.large };
    font-size: ${ fontSizes.extraLarge };
    font-weight: bold;
`