import * as S from "./PopNeWCard.styled"
import { useState } from "react";
import { convertDate } from "../../helpers/convertDate";
import Calendar from "../../components/Calendar/Calendar";
import { postTasks } from "../../services/api";
import { useAuthContext } from "../../Context/AuthProvider";
function PopNewCard(params) {

/* Если заголовок не был введен, то по умолчанию устанавливается значение "Новая задача". 
   Если тема не была введена, то по умолчанию устанавливается значение "Research". 
   Если статус не был введен, то по умолчанию устанавливается значение "Без статуса". 
   Если не было добавлено описание, то по умолчанию устанавливается пустая строка. 
   Если дата не была введена, то по умолчанию устанавливается текущая дата. */

// const [dataFromChild, setdata]= useState()




// const TakeDate = (date) =>{
//     setdata(date)
// }
    const [isAuth, seveUser, removeUser, ] = useAuthContext()
    const [activeLink, setActivLink] = useState('')
    const [formData, setFormData] = useState({
    title: "Новая задача",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date:convertDate(new Date()) ,
    });
    
     console.log(formData)

    function handler (e) {
        setFormData({...formData, topic: e.target.innerText})
    }
    function hendlerLink (topik)  {
        setActivLink(topik)
    }
    
   async function createTasK () {
        console.log(formData)
          try {
                    const data = await postTasks(formData, isAuth.token)
                    console.log(data)   
                    navigate("/");
                }
                catch (error) {
                    return error
                }
    }

   



    return (
        <S.PopNewCardS /* id="popNewCard" */>
            < S.PopNewCardContainer>
                < S.PopNewCardBlock>
                    <S.PopCardContent>
                        <S.PopCardTtl>Создание задачи</S.PopCardTtl>
                        <S.PopCardClose to="/">&#10006;</S.PopCardClose>
                        <S.PopCardWrap>
                            <S.PopCardForm id="formNewCard" >
                                <S.FormBlock>
                                    <S.Subttl htmlFor="formTitle" >Название задачи</S.Subttl>
                                    <S.FormNewInput  onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }} value={formData.title}  type="text" name="title" placeholder="Введите название задачи..." autoFocus />
                                </S.FormBlock>
                                <S.FormBlock>
                                    <S.Subttl htmlFor="textArea" >Описание задачи</S.Subttl>
                                    <S.FormNewArea   onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }} value={formData.description} name="description" placeholder="Введите описание задачи..."></S.FormNewArea>
                                </S.FormBlock>
                            </S.PopCardForm>

                           <Calendar setFormData={setFormData} formData={formData}  />
                           
                        </S.PopCardWrap>
                        <S.Categories>
                            <S.CategoriesP>Категория</S.CategoriesP>
                            <S.CategoriesThemes>
                                <S.CategoriesOrange onClick={()=> hendlerLink('Web Design')} style={{opacity: activeLink === 'Web Design' && '1'}}>
                                    <S.OrangeP onClick={handler}>Web Design</S.OrangeP>
                                </S.CategoriesOrange>
                                <S.CategoriesGreen onClick={()=> hendlerLink('Research')} style={{opacity: activeLink === 'Research' && '1'}}>
                                    <S.GreenP onClick={handler}>Research</S.GreenP>
                                </S.CategoriesGreen>
                                <S.CategoriesPurple onClick={()=> hendlerLink('Copywriting')} style={{opacity: activeLink === 'Copywriting' && '1'}}>
                                    <S.PurpleP onClick={handler}>Copywriting</S.PurpleP>
                                </S.CategoriesPurple>
                            </S.CategoriesThemes>
                        </S.Categories>
                        <button className="form-new__create _hover01" id="btnCreate" onClick={createTasK}>Создать задачу</button>
                    </S.PopCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCardS>
    )
}
export default PopNewCard