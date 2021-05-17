import React from 'react';

const MaterialCard = () => (
    <div className="materialCard">
        <article>
            <h5>Video</h5>
            <p>Lecture on Process Chemistry in the Pharmaceutical Industry:<br/>Key Concepts and Selected Examples</p>
            <p>Donor name: <span className="donor-name">Mukund Chorghade</span></p>
            <p>Donor affiliation: <span className="donor-affiliation">THINQ Pharma</span></p>
            <p>Name of Author/Originator: <span className="name-author">ASTM International</span></p>
            <p>Date: <span className="date">26 July 2020</span></p>
            <p>Copyright status: <span className="copyright-status">Copyright</span></p>
        </article>

        <style jsx>{`
          h5 {
            font-size: 13px;
            font-weight: normal;
            font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
            color: #666666;
          }

          p {
            font-size: 13px;
            font-weight: normal;
          }
          
          .materialCard {
            position: relative;
            top: 200px;
            background:#fff;
            margin: -25px 30px 29px;
            border-radius: 10px;
            padding: 0 10px;
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
            box-sizing: border-box;
            display: block;
          }
        `}</style>
    </div>
);

export default MaterialCard;