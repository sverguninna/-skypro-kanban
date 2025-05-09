import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
    return <div>
     <h1>Страница не найдена</h1>    
     <button onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
};
 
export default NotFoundPage;