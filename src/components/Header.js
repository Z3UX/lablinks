import React from 'react';

const Header = ({articleName}) => {

    return (
        <div className="index-header">
            <header>
                <h4>{articleName}</h4>
            </header>

            <style jsx>{`
              h4 {
                font-size: 24px;
                font-weight: 600;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                margin: 0 0 0 20px;
              }

              header {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                background-color: #d9f2f4;
                display: flex;
                flex-direction: column;
                padding: 50px 20px;
                box-sizing: border-box;
              }
            `}</style>
        </div>

    );
}

export default Header;