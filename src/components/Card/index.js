import React from 'react'

import {
    CardView,
    UpperInfos,
    CourseInfo,
    SmallCardView,
    SmallUpperInfos,
    SmallCourseInfo
} from './styles'

export const Card = ({data, local, course, photo}) => {
	const getWindowSize = window.screen.width

    return (
        <>
            { getWindowSize > 500 ?    
            <CardView>
                <UpperInfos>
                    <p>{ data }</p>
                    <p>{ local }</p>
                </UpperInfos>
                <CourseInfo>{ course }</CourseInfo>
            </CardView>
            :
            <SmallCardView>
                <SmallUpperInfos>
                    <p>{ data }</p>
                    <p>{ local }</p>
                </SmallUpperInfos>
                <SmallCourseInfo>{ course }</SmallCourseInfo>
            </SmallCardView>
        }
        </>
    )
}
