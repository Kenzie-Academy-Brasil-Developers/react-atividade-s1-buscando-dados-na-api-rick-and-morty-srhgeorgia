import "../CharCard/style.css"

function ChardCard({ name, image, species, status }) {


    return (
        <div className="container">

            {status === 'Alive' ?
                (
                    <div className="alive">
                        <p className="pAlive">{status}</p>
                        <h1 className="characterName">{name}</h1>
                        <img src={image} alt={name} className="cardImage" />
                        <p className="characterSpecie">{species}</p>
                    </div>
                )
                :
                (
                    <div className="dead">
                    <p className="pDead">{status}</p>
                        <h1 className="characterName">{name}</h1>
                        <img src={image} alt={name} className="cardImage" />
                        <p className="characterSpecie">{species}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ChardCard;