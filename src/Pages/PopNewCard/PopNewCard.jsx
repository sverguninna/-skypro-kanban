import * as S from "./PopNeWCard.styled"
import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
function PopNewCard(params) {
const [dataFromChild, setdata]= useState()
console.log(dataFromChild);
const TakeDate =(date) =>{
    setdata(date)
}
    const [formData, setFormData] = useState({
        title: "",
        topic: "",
        status: "",
        description: "",
        date: "",
    });
    console.log(formData)


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
                                    }} value={formData.title}  type="text" name="name" placeholder="Введите название задачи..." autoFocus />
                                </S.FormBlock>
                                <S.FormBlock>
                                    <S.Subttl htmlFor="textArea" >Описание задачи</S.Subttl>
                                    <S.FormNewArea   onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }} value={formData.description} name="text" placeholder="Введите описание задачи..."></S.FormNewArea>
                                </S.FormBlock>
                            </S.PopCardForm>
                           <Calendar onSendData={TakeDate} />
                        </S.PopCardWrap>
                        <S.Categories>
                            <S.CategoriesP>Категория</S.CategoriesP>
                            <S.CategoriesThemes>
                                <S.CategoriesOrange>
                                    <S.OrangeP>Web Design</S.OrangeP>
                                </S.CategoriesOrange>
                                <S.CategoriesGreen>
                                    <S.GreenP>Research</S.GreenP>
                                </S.CategoriesGreen>
                                <S.CategoriesPurple>
                                    <S.PurpleP>Copywriting</S.PurpleP>
                                </S.CategoriesPurple>
                            </S.CategoriesThemes>
                        </S.Categories>
                        <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                    </S.PopCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCardS>
    )
}
export default PopNewCard