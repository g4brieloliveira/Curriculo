import React from 'react';

import { 
  Main, 
  Title,
  Links, 
  Menu,
  MenuIcon,
  ExperienceIcon,
  AboutMeIcon,
  Logo,
  Description
} from './styles.js'

export const Header = () => {

  return (
      <>
        <Main>
          <Logo href="/">
            <Title>Gabriel Oliveira</Title>
            <Description href="/">Mobile and Front End Developer</Description>
          </Logo>
          <Menu>
            <Links to="/"><MenuIcon /> <p>Início</p></Links>
            <Links to="/experience"><ExperienceIcon /> <p>Experiência</p></Links>
            <Links to="/about"><AboutMeIcon /><p>Sobre mim</p></Links>   
          </Menu>
        </Main>
      </>
  )
}
