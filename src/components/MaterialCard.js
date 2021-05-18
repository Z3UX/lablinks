import React from "react";

const MaterialCard = ({article}) => {

    function getKeywords(keywords) {
        if (keywords) {
            return keywords.split(",");
        } else return [];
    }

    return (
        <div className="materialCard">
            <article>
                <div className="articleStructure">
                    <div className="row">
                        <div className="column">
                            <h5>{article["Type of material"]}</h5>
                            <div className="articleDesignation">{article.Description}</div>
                            <div className="articleInformation">Donor name: <span
                                className="apiInformation">{article["Donor person's name"]}</span></div>
                            <div className="articleInformation">Donor affiliation: <span
                                className="apiInformation">{article["Donor's affiliation"]}</span>
                            </div>
                            <div className="articleInformation">Name of Author/Originator: <span
                                className="apiInformation">{article["Name of author/originator"]}</span>
                            </div>
                            <div className="articleInformation">Date: <span
                                className="apiInformation">{article["Date first added to ProcTank"]}</span></div>
                            <div className="articleInformation">Copyright status: <span
                                className="apiInformation">{article["Copyright status"]}</span></div>
                            <div className="articleTags">Category</div>
                            <ul>
                                <li className="liCategory">Pharma</li>
                            </ul>
                            <div className="articleTags">Keywords</div>
                            {getKeywords(article.Keywords).map(keyword => (
                                <ul key={keyword}>
                                    <li className="liKeywords">
                                        {keyword.charAt(0).toUpperCase()+keyword.slice(1)}
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="column">
                            <div className="videoPlayer">
                                <iframe className="responsiveIframe" src="https://player.vimeo.com/video/549218268"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <style jsx>{`

              .row {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
              }

              .column {
                display: flex;
                flex-direction: column;
                flex-basis: 100%;
                flex: 1;
                margin-bottom: 10px;
              }

              .materialCard {
                position: relative;
                background: #fff;
                margin: -25px 30px 30px;
                border-radius: 10px;
                box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
                box-sizing: border-box;
                display: block;
              }

              .articleStructure {
                padding: 10px 10px 10px 20px;
              }

              h5 {
                font-size: 10px;
                font-weight: normal;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                color: #666666;
                margin: 10px 0 5px 10px;
              }

              .articleDesignation {
                font-size: 12px;
                font-weight: normal;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                color: #666666;
                padding: 0 0 15px 10px;
              }

              .articleInformation {
                font-size: 12px;
                font-weight: normal;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                color: #666666;
                padding: 0 0 2px 10px;
              }

              .apiInformation {
                color: black;
              }

              .articleTags {
                font-size: 13px;
                font-weight: 600;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                color: black;
                padding-left: 10px;
                margin-top: 15px;
                margin-bottom: -5px;
              }

              ul {
                margin: 10px 0 -5px 10px;
                padding: 0;
                display: flex;
                justify-content: space-between;
                text-align: center;
              }

              li {
                font-size: 11px;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                border-radius: 10px;
                list-style-type: none;
                padding: 1px 6px;
              }

              .liCategory {
                color: white;
                background-color: #36898f;
              }

              .liKeywords {
                color: #36898f;
                background-color: #ebfdff;
              }

              .videoPlayer {
                position: relative;
                overflow: hidden;
                width: 100%;
                padding-top: 56.25%;
                margin-top: 20px;
              }

              .responsiveIframe {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
              }
            `}</style>
        </div>
    );
};

export default MaterialCard;