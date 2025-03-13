import Card from "../Card/Card"

function Column(params) {
    return(
        <div className="main__block">
        <div className="main__content">
            <div className="main__column column">
                <div className="column__title">
                    <p>Без статуса</p>
                </div>
                <div className="cards">
                     <Card/> 
                </div>
            </div>						
            <div className="main__column">
                <div className="column__title">
                    <p>Нужно сделать</p>
                </div>
                <div className="cards">
                  <Card/> 
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>В работе</p>
                </div>
                <div className="cards">
                  <Card/> 
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>Тестирование</p>
                </div>
                <div className="cards">
                    <Card/> 
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>Готово</p>
                </div>
                <div className="cards">
                    <Card/> 
                </div>
            </div>
    
            
        </div>
    
    </div>
    )
}

export default Column