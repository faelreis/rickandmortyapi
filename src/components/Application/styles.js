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
        justify-content: center;
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
            max-width: 400px;
            font-size: 4.8rem;
            font-weight: 700;
            margin-bottom: 2rem;
            strong{
                font-size: 4.8rem;
                font-weight: 700;   
                color: var(--blue);
            }
        }
        p{
            color: var(--green);
            font-size: 1.8rem;
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
    padding: 5rem 0rem 10rem 0rem;
    .wrapperCharacters{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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
        }
    }
    @media(max-width: 970px){
        .wrapperCharacters{
            .characters{
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 30px;  
            }
        }
    }
    @media(max-width: 780px){
        .wrapperCharacters{
            .characters{
                grid-template-columns: 1fr 1fr;
                grid-gap: 30px;  
            }
        }
    }
    @media(max-width: 490px){
        .wrapperCharacters{
            .characters{
                grid-template-columns: 1fr;
                grid-gap: 30px;  
            }
        }
    }
`



export const BtnLoadMore = styled.button`
    margin-top: 4rem;
    padding: 20px 30px;
    background: var(--blue);
    border-radius: 20rem;
    border: 1px solid var(--blue);
    transition: all .3s ease;
    &:hover{
        cursor: pointer;
        background-color: transparent;
        border: 1px solid var(--blue);
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
    @media(max-width: 490px){
        .wrapper-footer{
            .tWrapper{
                flex-direction: column-reverse;
                .toTop{
                    margin-bottom: 3rem;
                    font-size: 2.5rem;
                }
            }
    }
}
`

export const Loader = styled.div`
        transition: all .3s ease;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 2023;
        background-color: var(--bg-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
    img{
        width: 30%;
    }
`