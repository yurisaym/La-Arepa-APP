import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Update = () => {
    const history = useHistory();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/results/' + id)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setIsPending(false);
            }
            ).catch(err => {
                setError(err);
                setIsPending(false);
            }
            );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/results/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
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
        <div className="update">
            <h1>Atualizar</h1>
            <form className="update-form" onSubmit={handleSubmit}>
            
                <input type="text" className="update-input" value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })} />
               <label>Nome do produto</label>
                <input type="number" className="update-input" value={blog.price} onChange={e => setBlog({ ...blog, price: e.target.value })} />
                <label>Preço do produto</label>
                <textarea className="update-input" value={blog.description} onChange={e => setBlog({ ...blog, description: e.target.value })} />
                <label>Descrição do produto</label>
                <input type="text" className="update-input"  value={blog.thumbnail} onChange={e => setBlog({ ...blog, thumbnail: e.target.value })} />
                <label>Url da imagem</label>

                <button className="atualizado" type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default Update;
