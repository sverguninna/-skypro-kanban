import Column from "../column/Column"
import Card from "../Card/Card"
import { Main, Container, MainBlock, MainContent } from "./Main.styled"

function MainContainer(params) {

    return (

        <Main>
            <Container>
                <MainBlock>
                    <MainContent>
                        <Column status={'Без статуса'} />
                        <Column status={'Нужно сделать'} />
                        <Column status={'В работе'} />
                        <Column status={'Тестирование'} />
                        <Column status={'Готово'} />
                    </MainContent>
                </MainBlock>

                {/* a.innnerHTML = list.map((el)=> 'div el.title') */}
                
            </Container>
        </Main>
    )
}



export default MainContainer