import { useState } from "react"
import Card from "../Card/Card"
import { cardList } from "../../data"

function Column({ status }) {
    const [loader, setloader] = useState(true)

    setTimeout(()=>{
        setloader(false)
    }, 1500)





    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{status}</p>
            </div>
            <div className="cards">
                {loader ? <div>Идет загрузка...</div> : cardList.filter((card) => card.status === status).map((card) => <Card key={card.id} card={card} />)}
            </div>
        </div>
    )
}

export default Column