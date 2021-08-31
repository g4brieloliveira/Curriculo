import React from 'react'
import { Card } from '../../components/Card'

import {
    StudiesView,
    DuoCard,
    Title
} from './styles'

export const Studies = () => {
	const getWindowSize = window.screen.width

    return (
        <StudiesView>
            {
                getWindowSize > 500 ?
                <>
                <Title>Meus Estudos</Title>
                <DuoCard>
                    <Card data="2019 - em andamento" local="IFMG" course="Técnico em Informática"/>
                    <Card data="2020" local="Rock University" course="Search Engine Optimization (SEO)"/>
                </DuoCard>
                <DuoCard>
                    <Card data="2021" local="Udemy" course="Curso FullStack (Node, Mongo, ReactJS e React Native)"/>
                    <Card data="2021 - em andamento" local="Zero To Mastery Academy" course="Complete React Native in 2021: Zero to Mastery [w/ Hooks]"/>
                </DuoCard>
                <DuoCard>
                    <Card data="2021 - em andamento" local="Zero To Mastery Academy" course="Complete React Developer in 2021 [w/ Redux, Hooks, GraphQL]"/>
                </DuoCard>
            </>
            :
            <>
                <Title>Meus Estudos</Title>
                <Card data="2019 - em andamento" local="IFMG" course="Técnico em Informática"/>
                <Card data="2020" local="Rock University" course="Search Engine Optimization (SEO)"/>
                <Card data="2021" local="Udemy" course="Curso FullStack (Node, Mongo, ReactJS e React Native)"/>
                <Card data="2021 - em andamento" local="Zero To Mastery Academy" course="Complete React Native in 2021: Zero to Mastery [w/ Hooks]"/>
                <Card data="2021 - em andamento" local="Zero To Mastery Academy" course="Complete React Developer in 2021 [w/ Redux, Hooks, GraphQL]"/>
            </>
            }
        </StudiesView>
    )
}
