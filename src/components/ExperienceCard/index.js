import React from 'react'

import {
    CardView,
    UpperInfos,
    CourseInfo,
} from './styles'

export const ExperienceCard = ({data, local, course, photo}) => {
    return (  
        <CardView>
            <UpperInfos>
                <p>{ data }</p>
                <p>{ local }</p>
            </UpperInfos>
            <CourseInfo>{ course }</CourseInfo>
        </CardView>
    )
}
