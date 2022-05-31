import "../CharCard/style.css"

function ChardCard({ name, image, species, status }){


    return(
        <div className="container">
            <h1 className="characterName">{name}</h1>
            <img src={image} alt={name} className="cardImage"/>
            <p className="characterSpecie">{species}</p>

            {status === 'Alive' ?
            (
                <p className="alive">{status}</p>
            )    
            :
            (
                <p className="dead">{status}</p>
            )
        }
        </div>
    )
}

export default ChardCard;