import { useEffect, useState } from "react"
import Card from "../Card/Card"
/* import { cardList } from "../../mock/data" */
import { ColumnS, ColumnTitle, ColumnTitleP, Cards} from "./Column.styled"
import { useTasksContext } from "../../Context/TasksProvider"

function Column({ status }) {
    const [loader, setloader] = useState(true)
    useEffect (()=>{
        setTimeout(()=>{
            setloader(false)
        }, 1500)
    }, [])
   
 const [listTasks] = useTasksContext()




    return (
        <ColumnS>
            <ColumnTitle>
                <ColumnTitleP>{status}</ColumnTitleP>
            </ColumnTitle>
            <Cards>
                {loader ? <div>Идет загрузка...</div> : listTasks.filter((card) => card.status === status).map((card) => <Card key={card.id} card={card} />)}
            </Cards>
        </ColumnS>
    )
}

export default Column