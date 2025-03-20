import Column from "../column/Column"
import Card from "../Card/Card"

function MainContainer(params) {

    return (

        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        <Column status={'Без статуса'} />
                        <Column status={'Нужно сделать'} />
                        <Column status={'В работе'} />
                        <Column status={'Тестирование'} />
                        <Column status={'Готово'} />
                    </div>
                </div>

                {/* a.innnerHTML = list.map((el)=> 'div el.title') */}
                
            </div>
        </main>
    )
}



export default MainContainer