import { useHistory, useParams } from "react-router";
import useFetch from '../services/UseFetch';

const ArepaDetails = () => {

    const history = useHistory();
    const { id } = useParams();
    const { data: results, isPending, error } = useFetch('http://localhost:3000/results/' + id);
    if (isPending) {
        return <div className="loader"></div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!results) {
        return <div className="error">Não existe</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/update/' + id);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/results/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                history.push('/');
            }
            ).catch(err => {
                console.log(err);
            }
            );
    }
    return (
        <div className="blog-details">
            <img src={results.thumbnail} alt={results.title} />
            <h1>{results.title}</h1>
            <h3>Preço: R$ {results.price}</h3>
            <h3>Descrição: {results.description}</h3>
            <button className="atualizar" onClick={handleSubmit}>Atualizar</button>
            <button className="delete" onClick={handleDelete}>Deletar</button>
            <button className="voltar" onClick={() => history.push("/")}>Voltar</button>
        </div>
    );
    
}
export default ArepaDetails;