import React, {useState} from 'react';
import '../css/style.css';
import Header from './Header';
import MaterialCard from './MaterialCard';

const PageLayout = () => {

    const [article, setArticle] = useState([]);

    React.useEffect(() => {
        async function fetchArticle() {
            const response = await fetch(
                'https://my-json-server.typicode.com/Z3UX/lablinks-mock-api/0012'
            ).then(res => res.json());

            setArticle(response);
        }

        fetchArticle();
    }, []);

    return (
        <div>
            <Header articleName={article.Name}/>
            <MaterialCard article={article}/>
        </div>
    );
};

export default PageLayout;