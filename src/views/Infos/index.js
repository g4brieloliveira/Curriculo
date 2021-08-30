import React from 'react'

import {
    MainInfosView,
    DidYouLike,
    Title,
    Link,
    Info,
    InfosTitle,
    InfosDescription,
    InfosContainer,
    InfosLink,
    SocialMedias,
    Image
} from './styles'

import GitHubImage from '../../assets/github.png'
import LinkedInImage from '../../assets/linkedin.png'
import InstagramImage from '../../assets/instagram.png'
import TwitterImage from '../../assets/twitter.png'
import WhatsAppImage from '../../assets/whatsapp.png'
import EmailImage from '../../assets/email.png'

export const Infos = () => {
    const DESCRIPTION = `Ficou curioso sobre alguma coisa? 
                        Deseja propor alguma melhoria ao site?
                        Sinta-se convidado a conversar comigo sobre!`

    return (
        <MainInfosView>
            <DidYouLike>
                <Title>Gostou do que viu?</Title>
                <Link href="https://www.linkedin.com/in/g4brieloliveira/">Me contrata ai! ➞</Link>
            </DidYouLike>
            <InfosTitle>Informações para contato</InfosTitle>
            <Info>
                <InfosContainer>
                    <InfosDescription>{DESCRIPTION}</InfosDescription>
                </InfosContainer>
                <InfosContainer>
                    <InfosLink href="mailto:g4brieloliveira.dev@gmail.com"><Image src={EmailImage}/>Email: g4brieloliveira.dev@gmail.com</InfosLink>
                    <InfosLink href="https://api.whatsapp.com/send?phone=553194167940"><Image src={WhatsAppImage}/>WhatsApp: (31) 99416-7940</InfosLink>
                </InfosContainer>
            </Info>
            <SocialMedias>
                <InfosLink href="https://github.com/g4brieloliveira"><Image src={GitHubImage}/>GitHub</InfosLink>
                <InfosLink href="https://www.linkedin.com/in/g4brieloliveira/"><Image src={LinkedInImage}/>LinkedIn</InfosLink>
                <InfosLink href="https://www.instagram.com/gabreuolv_/"><Image src={InstagramImage}/>Instagram</InfosLink>
                <InfosLink href="https://twitter.com/gabreuolv_"><Image src={TwitterImage}/>Twitter</InfosLink>
            </SocialMedias>
        </MainInfosView>
    )
}

