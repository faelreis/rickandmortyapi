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