import { 
	MainView,
	WhatIAm,
	WhatIDo,
	FirstSectionView,
	Texts,
	DeveloperImage,
	ScrollToImage,
	SmallScreenTexts
} from './styles.js'

import { Studies } from '../Studies'
import { Infos } from '../Infos'

import ScrollTo from '../../assets/scroll.png';


export const Home = () => {
	const DESCRIPTION_TEXT = `Meu nome é Gabriel, tenho 18 anos e sou de Belo Horizonte - MG.
	Estou no Terceiro Ano do Ensino Médio juntamente com Técnico em Informática no IFMG e 
	estou em busca de uma vaga de estágio para iniciar minha carreira.
	Atualmente estou estudando através de cursos da Zero to Mastery Academy o desenvolvimento 
	de aplicações Web e Mobile utilizando ReactJS e React Native.
	`

	const getWindowSize = window.screen.width
	

  	return (
		<MainView>
			<FirstSectionView>
				{
					getWindowSize > 500 ?
					<>
						<Texts>
							<WhatIAm>Mobile and Frontend Developer</WhatIAm>
							<WhatIDo>{ DESCRIPTION_TEXT }</WhatIDo>
							<WhatIDo style={{ color: "#f00", marginTop: "40px", fontWeight: "bold" }}>ESTE SITE AINDA ESTÁ EM DESENVOLVIMENTO!!</WhatIDo>
							<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}>Proximas atualizações:</WhatIDo>
							<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Arrumar as outras abas</WhatIDo>
							<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Adicionar as fotos aos Cards</WhatIDo>
							<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Adicionar a responsividade</WhatIDo>
							<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Adicionar animações</WhatIDo>
						</Texts>
						<DeveloperImage />
					</>
					:
					<SmallScreenTexts>
						<WhatIAm>Mobile and Frontend Developer</WhatIAm>
						<WhatIDo>{ DESCRIPTION_TEXT }</WhatIDo>
						<WhatIDo style={{ color: "#f00", marginTop: "40px", fontWeight: "bold" }}>ESTE SITE AINDA ESTÁ EM DESENVOLVIMENTO!!</WhatIDo>
						<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}>Proximas atualizações:</WhatIDo>
						<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Arrumar as outras abas</WhatIDo>
						<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Adicionar as fotos aos Cards</WhatIDo>
						<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Adicionar a responsividade</WhatIDo>
						<WhatIDo style={{ color: "#f00", fontWeight: "bold" }}> - Adicionar animações</WhatIDo>
					</SmallScreenTexts>
			}
			</FirstSectionView>
			<ScrollToImage src={ ScrollTo } alt="Tem mais para baixo :)"/>
			<Studies />
			<Infos />
		</MainView>
  );
}
