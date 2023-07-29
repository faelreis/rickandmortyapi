import { StyledCardCharacter } from './styles'

import IconStatus from '../../assets/icon/status-dark.svg'
import IconSpecieDark from '../../assets/icon/species-dark.svg'
import IconPlanetDark from '../../assets/icon/planet-dark.svg'

export function CardCharacter({image, name, status, specie, planet}){    
    return(
        <StyledCardCharacter>
        <img className="imgCard" src={image} />
        <div className="content-card">
            <div className="lWrapper">
                <h3 className="nameCharacter">{name}</h3>
                    <div className="status">
                    <img src={IconStatus} alt="" />
                    <span>{status}</span>
                    </div>
                    <div className="specie">
                        <img src={IconSpecieDark} alt="" />
                        <span>{specie}</span>
                    </div>
            </div>
        </div>
        </StyledCardCharacter>
    )
}