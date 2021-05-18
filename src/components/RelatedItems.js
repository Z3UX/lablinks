import React from 'react';

const RelatedItems = ({relatedItems}) => {

    console.log(relatedItems);

    return (
        <div className="relatedItems">
            <h6>Related items</h6>
            <div className="relatedItemsCard">
                <p>PLACEHOLDER</p>
            </div>

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