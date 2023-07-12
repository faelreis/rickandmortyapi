import { ContainerApp, HeaderApp, HeroApp } from "./styles";

import Logo from '../../assets/image/logo.svg'
import IconFavorite from '../../assets/icon/favorite-btn.svg'
import IconDarkMode from '../../assets/icon/dark-mode-on.svg'
import IconLightMode from '../../assets/icon/light-mode.svg'
import IconDarkModeOff from '../../assets/icon/dark-mode-off.svg'
import ImageHeroDarkMode from '../../assets/image/dark-hero-image.jpg'


export function Application(){
    return(
        <>
            <HeaderApp>
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
                        <img src={ImageHeroDarkMode} alt="" />
                    </div>
                    </div>
                </ContainerApp>
            </HeroApp>
        </>
    )
}