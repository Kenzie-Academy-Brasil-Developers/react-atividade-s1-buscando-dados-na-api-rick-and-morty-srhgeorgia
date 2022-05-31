import CharCard from '../CharCard'
import "../Characters/style.css"

function Characters({ charList }) {

    return (
        <div className="list">
            <h1 className="title">Meus Personagens</h1>
            <div className="personas">
            {
                charList.map((char) => {
                    return <CharCard key={char.id} name={char.name} image={char.image} status={char.status} species={char.species} />
                })
            }
            </div>
        </div>
    )
}

export default Characters;