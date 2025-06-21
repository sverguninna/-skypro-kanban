import { useEffect, useState } from "react"
import Card from "../Card/Card"
/* import { cardList } from "../../mock/data" */
import { ColumnS, ColumnTitle, ColumnTitleP, Cards} from "./Column.styled"
import { useTasksContext } from "../../Context/TasksProvider"

function Column({ status }) {

 const [listTasks] = useTasksContext()
 
 console.log(listTasks)

    const [loader, setloader] = useState(true)
    useEffect (()=>{
        setTimeout(()=>{
            setloader(false)
        }, 1500)
    }, [])
   





    return (
        <ColumnS>
            <ColumnTitle>
                <ColumnTitleP>{status}</ColumnTitleP>
            </ColumnTitle>
            <Cards>
                {loader ? <div>Идет загрузка...</div> : listTasks.filter((card) => card.status === status)
                                                                 .map((card) => <Card key={card.id} card={card} />)}
            </Cards>
        </ColumnS>
    )
}

export default Column