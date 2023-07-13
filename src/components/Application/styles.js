import styled from 'styled-components';

export const ContainerApp = styled.div`
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 0rem 1.5rem;
`;


export const HeaderApp = styled.div`
    padding: 20px 0px;
    background-color: #000000;
    .wrapper-header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 3.2rem;
            padding: 1.3rem 2rem;
            background-color: var(--blue);
            gap: 10px;
            transition: all .3s ease;
            cursor: pointer;
            &:hover{
                filter: drop-shadow(0px 0px 36px #11B0C8);
            }
    }
    }
    @media(max-width: 440px){
        .wrapper-header{
            flex-direction: column;
            gap: 20px;
            .logo{
                width:60%;
        }
        }
    }
    @media(max-width: 230px){ 
        .wrapper-header{
            .logo{
            width:80%;
        }
            a{
                img{
                    width:18%;
                }
                span{
                    font-size: 12px;
                }
            }
        }
    }
`

export const HeroApp = styled.div`
    padding: 50px 0px 0px 0px;
    background-color: #000000;
    .wrapper-hero{
        display: flex;
        align-items: center;
        justify-content: space-between;
    .l-hero{
        h1{
            width: 100%;
            font-size: 4.8rem;
            font-weight: 700;
            strong{
                font-size: 4.8rem;
                font-weight: 700;   
                color: var(--blue);
            }
        }
        .btns-mode{
            margin: 40px 0px 35px 0px;
            display: flex;
            align-items: center;
            gap: 40px;
            .dark-mode{
                background-color: var(--blue);
                color: var(--white);
                padding: 1rem 2rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                border-radius: 4rem;
                transition: all .3s ease;
                &:hover{
                    filter: drop-shadow(0px 0px 36px #11B0C8);
                    img{
                        transition: all .3s ease;
                        transform: rotate(40deg);
                    }
                }

            }
            .dark-mode.off{
                display: none;
                background-color: var(--white);
                span{
                    color: #313234;
                }
            }
            .light-mode{
                background-color: #313234;
                color: var(--white);
                padding: 1rem 2rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                border-radius: 4rem;
                transition: all .3s ease;
                &:hover{
                    filter: drop-shadow(0px 0px 36px #FFFFFF50);
                    img{
                        transition: all .3s ease;
                        transform: rotate(40deg);
                    }
                }
                &.active{
                    background-color: var(--blue);
                }
            }
        }
        .desc{
            font-size: 18px;
            color: var(--blue);
            display: none;
            &.active{
                display: block;
            }
        }
    }
    .r-hero{
        img.dark{
            display: block;
        }
        img.light{
            display: none;
        }
    }
    }
    @media(max-width: 950px){
        padding: 30px 0px 0px 0px;
        .wrapper-hero{
            .l-hero{
                h1{
                    max-width: 400px;
                }   
            }
        }
    }
    @media(max-width: 620px){
        padding: 30px 0px 0px 0px;
        .wrapper-hero{
            flex-direction: column;
            .l-hero{
                text-align: center;
                h1{
                    max-width: 400px;
                }   
                .btns-mode{
                    justify-content: center;
                }
            }
        }
    }
    @media(max-width: 370px){
        padding: 15px 0px 0px 0px;
        .wrapper-hero{
            .l-hero{
                h1{
                    font-size: 33px;
                    strong{
                        font-size: 33px;
                    }
                }   
                .btns-mode{
                    margin: 20px 0px 15px 0px;
                    flex-direction: column;
                    gap: 20px;
                }
                .desc{
                    font-size: 15px;
                }
            }
        }
    }
`

export const CharactersApp = styled.div`
    padding: 7rem 0rem 10rem 0rem;
    .wrapperCharacters{
        .filter{
            margin-bottom: 5rem;
            .search{
                width: 100%;
                max-width: 40.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #2A2A2A;
                color: var(--white);
                border-radius: 20rem;
                padding: 0.9rem 2rem;
                border: 1px solid #2A2A2A;
                transition: all .3s ease;
                &:hover{
                    border: 1px solid var(--blue);
                }
                input{
                    background-color: transparent;
                    outline: none;
                }
                img{
                    transition: all .3s ease;
                    cursor: pointer;
                    &:hover{
                        opacity: 80%;
                        transform: rotate(15deg);
                    }
                }
            }
        }
        .characters{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 30px;
            .cardCharacter{
                background-color: #2A2A2A;
                padding: 2.5rem;
                width: 100%;
                max-width: 29.4rem;
                border-radius: 1.5rem;
                .imgCard{
                    border-radius: 1.5rem;
                    margin-bottom: 3rem;
                }
                .content-card{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    .lWrapper{
                        .nameCharacter{
                            font-size: 2rem;
                            margin-bottom: 2.5rem;
                        }
                        span{
                            font-size: 17px;
                        }
                        .status{
                            display: flex;
                            align-items: center;
                            gap: 2rem;
                            margin-bottom: 1.0rem;
                        }
                        .specie{
                            display: flex;
                            align-items: center;
                            gap: 2rem;
                            margin-bottom: 1.0rem;
                        }
                        .planet{
                            display: flex;
                            align-items: center;
                            gap: 2rem;
                        }
                    }
                    .rWrapper{
                        .favoriteCard{
                            transition: all .3s ease;
                            cursor: pointer;
                            &:hover{
                                opacity: 70%;
                                transform: rotate(20deg);
                            }
                        }
                    }
                }
            }
        }
    }
`

export const FooterApp = styled.div`
    .wrapper-footer{
        .tWrapper{
            padding-bottom: 50px;
            margin-bottom: 30px;
            border-bottom: 1px solid #505050;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .toTop{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                border-radius: 20rem;
                padding: 1rem 2rem;
                transition: all .3s ease;
                &:hover{
                    background-color: var(--blue);
                }
        }
    }
    .bWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 30px;
            a{
                text-align: center;
                font-size: 1.5rem;
                font-weight: 300;
                transition: all .3s ease;
                &:hover{
                    opacity: 70%;
                }
                strong{
                    font-weight: 600;
                }
            }
        }
}
`