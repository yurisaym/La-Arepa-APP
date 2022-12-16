import { useState } from "react";
import { useHistory } from 'react-router-dom';


const Create = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setBody] = useState('');
    const [price, setAuthor] = useState('');
    const [thumbnail, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, description, price, thumbnail };
        fetch('http://localhost:3000/results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                history.push('/');
            }).catch(err => {
                console.log(err);
            }
            );
    }

    return (
        <div className="create">
            <h1>Criar novo produto</h1>
            <form className="create-form" onSubmit={handleSubmit}>
               
                <input className="create-input" placeholder="TÍTULO" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
             
                <textarea className="create-input" placeholder="DESCRIÇÂO" value={description} onChange={(e) => setBody(e.target.value)} />
              
                <input className="create-input" placeholder="PREÇO" type="number" value={price} onChange={(e) => setAuthor(e.target.value)} />
               
                <input className="create-input" placeholder="IMAGEM URL" type="text" value={thumbnail} onChange={(e) => setImage(e.target.value)} />
                <button className="criar" type="submit">Criar</button>
            </form>
        </div>
    );
}


export default Create;
