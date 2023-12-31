import React, { useEffect, useState } from 'react';
import { Loader, BtnLoadMore, CharactersApp, ContainerApp, FooterApp, HeaderApp, HeroApp } from "./styles";
import axios from 'axios'


//Icons
import Logo from '../../assets/image/logo.svg'
import IconSearch from '../../assets/icon/search.svg'
import ArrowUp from '../../assets/icon/arrowUp.svg'
import IconLoader from '../../assets/image/loader.webp'

//Images
import ImageHeroDarkMode from '../../assets/image/dark-hero-image.jpg'
import ImageHeroLightMode from '../../assets/image/light-hero-image.jpg'

import { CardCharacter } from '../CardCharacter';


export function Application(){ 

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState('');
    const [isLoader, setIsLoader] = useState(true);
    const [searchCharacter, setSearchCharacter] = useState('');

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response =>{
            const array = [...characters, ...response.data.results]
            setCharacters(array)
            setCountPage(response.data.info.pages)
            setIsLoader(false)
        })
    }, [page])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?name=${searchCharacter}`)
        .then(response => {
            setCharacters(response.data.results)
        })
    }, [searchCharacter])

    return(
        <>

            {
                isLoader &&  (
                <Loader>
                    <img src={IconLoader} alt="Loader" />
                 </Loader>)
            }

            <HeaderApp id='hero'>
                <ContainerApp>
                    <div className="wrapper-header">
                        <img className="logo" src={Logo} alt="Logo Rick and Morty" />
                    </div>
                </ContainerApp>
            </HeaderApp>

            <HeroApp>
                <ContainerApp>
                    <div className="wrapper-hero">
                        <div className="l-hero">
                        <h1>Conheça todos os personagens em um <strong>só lugar!</strong></h1>
                        <p>Da série Rick e Morty</p>
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
                                <input onChange={event => setSearchCharacter(event.target.value)} value={searchCharacter} type="text" placeholder="Personagem"/>
                                <img className="icon-search" src={IconSearch} alt="" />
                            </div>
                        </div>
                        <div className="characters">
                        {
                            characters && characters.map(({id, image, name, status, species}) => {
                                return(
                                    <CardCharacter 
                                        key={id}
                                        image={image}
                                        name={name}
                                        status={status}
                                        specie={species}
                                     />
                                )

                            })
                        }
                        </div>
                        {
                            (!(page == countPage)) && <BtnLoadMore onClick={()=> setPage(page + 1)}>Load more</BtnLoadMore>
                        }
                        
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
                            <a href="https://www.linkedin.com/in/rafaelreisfranco/" target="_blank">Desenvolvido por <strong>Rafael Reis</strong></a>
                        </div>
                    </div>
                </ContainerApp>
            </FooterApp>
        </>
    )
}