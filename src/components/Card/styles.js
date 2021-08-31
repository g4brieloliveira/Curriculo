import styled from "styled-components";
import {colors} from '../../utils/colors'
import {fontSizes, spacingSizes} from '../../utils/sizes'

export const CardView = styled.div`
    width: 500px;
    height: 700px;
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

export const SmallCardView = styled.div`
    width: 80vw;
    height: 80vh;
    box-shadow: 0 0 8px black;
    padding: ${ spacingSizes.large };
    font-family: 'Poppins', sans-serif;
    margin-bottom: ${ spacingSizes.large };

    background-color: ${ colors.lightBlue };
`

export const SmallUpperInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SmallCourseInfo = styled.div`
    width: 60%;
    margin-top: ${ spacingSizes.large };
    font-size: ${ fontSizes.large };
    font-weight: bold;
`