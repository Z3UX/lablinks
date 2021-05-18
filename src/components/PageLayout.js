import React, {useState} from "react";
import "../css/style.css";
import Header from "./Header";
import MaterialCard from "./MaterialCard";
import RelatedItems from "./RelatedItems";

const PageLayout = ({ articleID }) => {

    const [article, setArticle] = useState([]);

    React.useEffect(() => {
        async function fetchArticle() {
            const response = await fetch(
                "https://my-json-server.typicode.com/Z3UX/lablinks-mock-api/"+articleID
            ).then(res => res.json());

            setArticle(response);
        }

        fetchArticle();
    }, [articleID]);

    return (
        <div className="pageLayoutDiv">
            <Header articleName={article.Name}/>
            <MaterialCard article={article}/>
            <RelatedItems relatedItems={article["Related item IDs"]}/>

            <style jsx>{`
              
              .pageLayoutDiv {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
              }
            `}</style>
        </div>
    );
};

export default PageLayout;