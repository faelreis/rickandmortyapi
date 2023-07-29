import styled from 'styled-components'

export const StyledCardCharacter = styled.div`
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
            }
        }
`