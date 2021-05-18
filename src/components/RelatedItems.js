import React from 'react';

const RelatedItems = ({relatedItems}) => {

    function pad_with_zeroes(number, length) {
        let my_string = '' + number;
        while (my_string.length < length) {
            my_string = '0' + my_string;
        }
        return my_string;
    }

    function getRelatedItemsID(relatedItems) {
        if (relatedItems) {
            let arr = JSON.parse("[" + relatedItems + "]");

            return arr.map(id => pad_with_zeroes(id, 4));
        } else return [];
    }

    return (
        <div className="relatedItems">
            <h6>Related items</h6>
            <div className="row">
                {getRelatedItemsID(relatedItems).map(id => (
                    <a href={id}>
                        <div className="relatedItemsCard" key={id}>
                            <div className="column">
                                <div className="relatedItemThumbnail">
                                    <img src="favicon.png" alt="Default image" width="150" height="150"/>
                                </div>
                            </div>
                            <div className="column">
                                <div className="relatedItemData">
                                    <span className="relatedItemDesignation">PRESENTATION #{id}&nbsp;</span>
                                    <span className="relatedItemName">Process Chemistry in the Pharmaceutical
                                        Industry:
                                        Key
                                        Concepts and Selected Examples&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

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

              .relatedItems {
                position: absolute;
                margin: 0 0 0 20px;
                display: block;
                width: 100%;
              }

              .relatedItemsCard {
                cursor: pointer;
                position: relative;
                background: #fff;
                margin: 0 0 0 10px;
                border-radius: 10px;
                box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
                box-sizing: border-box;
                display: block;
              }

              .relatedItemThumbnail {
                float: left;
              }

              .relatedItemData {
                display: inline-block;
              }

              h6 {
                font-size: 18px;
                font-weight: 600;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                color: #414141;
                margin: -15px 0 15px 10px;
              }

              a {
                text-decoration: none; /* no underline */
              }
            `}</style>
        </div>
    );
};

export default RelatedItems;