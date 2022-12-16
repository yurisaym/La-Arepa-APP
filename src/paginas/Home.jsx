import BlogList from './BlogList';
import useFetch from '../services/UseFetch';

const Home = () => {
    const { data: results, isPending, error } = useFetch('http://localhost:3000/results');
    if (isPending) {
        return <div className="loader"></div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
    }
    return (
        <div className="home">
            <BlogList blogs={results} />
        </div>
    );
}

export default Home;
