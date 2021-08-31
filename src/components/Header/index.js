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
            <Links to="/"><MenuIcon /> Início</Links>
            <Links to="/experience"><ExperienceIcon /> Experiência</Links>
            <Links to="/about" style={{ border: 0 }}><AboutMeIcon /> Sobre mim</Links>   
          </Menu>
        </Main>
      </>
  )
}
