import React, { useState } from 'react';
import {  CharactersApp, ContainerApp, FooterApp, HeaderApp, HeroApp } from "./styles";

//Icons
import Logo from '../../assets/image/logo.svg'
import IconFavorite from '../../assets/icon/favorite-btn.svg'
import IconDarkMode from '../../assets/icon/dark-mode-on.svg'
import IconLightMode from '../../assets/icon/light-mode.svg'
import IconDarkModeOff from '../../assets/icon/dark-mode-off.svg'
import IconSearch from '../../assets/icon/search.svg'
import IconStatus from '../../assets/icon/status-dark.svg'
import IconSpecieDark from '../../assets/icon/species-dark.svg'
import IconSpecieLight from '../../assets/icon/species-light.svg'
import IconPlanetDark from '../../assets/icon/planet-dark.svg'
import IconPlanetLight from '../../assets/icon/planet-light.svg'
import FavoriteCardOff from '../../assets/icon/favorite-card-off.svg'
import FavoriteCardOn from '../../assets/icon/favorite-card-on.svg'
import ArrowUp from '../../assets/icon/arrowUp.svg'


//Images
import ImageHeroDarkMode from '../../assets/image/dark-hero-image.jpg'
import ImageHeroLightMode from '../../assets/image/light-hero-image.jpg'
import ImageCard from '../../assets/image/default-image-card.jpg'


export function Application(){
    
    function addFavoriteCharacter(){
        const [favoriteCharacter, setFavoriteCharacter] = useState();
        
        const handleClick = () => {
            setFavoriteCharacter(!favoriteCharacter);
          };
    }

    return(
        <>
            <HeaderApp id='hero'>
                <ContainerApp>
                    <div className="wrapper-header">
                        <img className="logo" src={Logo} alt="Logo Rick and Morty" />
                        <a to="">
                            <img src={IconFavorite} alt="" />
                            <span>Lista de favoritos</span>
                        </a>
                    </div>
                </ContainerApp>
            </HeaderApp>

            <HeroApp>
                <ContainerApp>
                    <div className="wrapper-hero">
                        <div className="l-hero">
                        <h1>Saiba tudo em um <strong>só lugar.</strong></h1>
                        <div className="btns-mode">
                            <button className="dark-mode on">
                                <img src={IconDarkMode} alt="" />
                                <span>Escuro</span>
                            </button>
                            <button className="dark-mode off">
                                <img src={IconDarkModeOff} alt="" />
                                <span>Escuro</span>
                            </button>
                            <button className="light-mode off">
                                <img src={IconLightMode} alt="" />
                                <span>Claro</span>
                            </button>
                        </div>
                        <p className="desc dark active">Ai sim, Porr#@%&*</p>
                        <p className="desc light">Wubba Lubba Dub Dub! Cuidado com os olhos</p>
                    </div>
                    <div className="r-hero">
                        <img className="dark" src={ImageHeroDarkMode} alt="" />
                        <img className="light" src={ImageHeroLightMode} alt="" />
                    </div>
                    </div>
                </ContainerApp>
            </HeroApp>

            <CharactersApp id='characters'>
                <ContainerApp>
                    <div className="wrapperCharacters">
                        <div className="filter">
                            <div className="search">
                                <input type="text" placeholder="Personagem"/>
                                <img className="icon-search" src={IconSearch} alt="" />
                            </div>
                        </div>
                        <div className="characters">
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img  onClick={handleClick} className={`favoriteCardOff ${favoriteCharacter ? 'active' : ''}`} src={FavoriteCardOff} alt="" />
                                        <img   onClick={handleClick} className={`favoriteCardOn ${favoriteCharacter ? 'active' : ''}`} src={FavoriteCardOn} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img className="favoriteCard" src={FavoriteCardOff} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img className="favoriteCard" src={FavoriteCardOff} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img className="favoriteCard" src={FavoriteCardOff} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img className="favoriteCard" src={FavoriteCardOff} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img className="favoriteCard" src={FavoriteCardOff} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img className="favoriteCard" src={FavoriteCardOff} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cardCharacter">
                                <img className="imgCard" src={ImageCard} />
                                <div className="content-card">
                                    <div className="lWrapper">
                                        <h3 className="nameCharacter">Rick Sanchez</h3>
                                            <div className="status">
                                            <img src={IconStatus} alt="" />
                                            <span>Alive</span>
                                            </div>
                                            <div className="specie">
                                                <img src={IconSpecieDark} alt="" />
                                                <span>Human</span>
                                            </div>
                                            <div className="planet">
                                                <img src={IconPlanetDark} alt="" />
                                                <span>Earth C-137</span>
                                            </div>
                                    </div>
                                    <div className="rWrapper">
                                        <img className="favoriteCard" src={FavoriteCardOff} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerApp>
            </CharactersApp>

            <FooterApp>
                <ContainerApp>
                    <div className="wrapper-footer">
                        <div className="tWrapper">
                            <img src={Logo} alt="" />
                            <a className="toTop" href="#hero">
                                <span>Voltar ao topo</span>
                                <img src={ArrowUp} alt="" />
                            </a>
                        </div>
                        <div className="bWrapper">
                            <a href='https://www.linkedin.com/in/rafaelreisfranco/' target="_blank">Desenvolvido por <strong>Rafael Reis</strong></a>
                        </div>
                    </div>
                </ContainerApp>
            </FooterApp>
        </>
    )
}