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
            {getRelatedItemsID(relatedItems).map(id => (
                <div className="relatedItemsCard" key={id}>
                    <a href={id}><p>PLACEHOLDER {id}</p></a>
                </div>
            ))}

            <style jsx>{`

              .relatedItems {
                position: absolute;
                margin: 0 0 0 20px;
                display: block;
                width: 50%;
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

              h6 {
                font-size: 18px;
                font-weight: 600;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                color: #414141;
                margin: -15px 0 15px 10px;
              }

            `}</style>
        </div>
    );
};

export default RelatedItems;