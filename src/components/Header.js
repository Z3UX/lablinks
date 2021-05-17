import React from 'react';

const Header = () => (
    <div className="index-header">
        <header>
            <h4>Process Chemistry in the Pharmaceutical Industry:<br/>Key Concepts and Selected Examples</h4>
        </header>

        <style jsx>{`
          h4 {
          font-size: 1.5rem;
          font-weight: 600;
          font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
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

export default Header;