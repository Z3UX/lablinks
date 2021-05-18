import React from "react";

const Header = ({articleName}) => {

    return (
        <div className="indexHeader">
            <header>
                <h4>{articleName}</h4>
            </header>

            <style jsx>{`

              h4 {
                font-size: 24px;
                font-weight: 600;
                font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
                margin: 0 30% 0 20px;
              }

              .indexHeader {
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
              }

              header {
                background-color: #d9f2f4;
                padding: 50px 20px;
              }
            `}</style>
        </div>

    );
}

export default Header;