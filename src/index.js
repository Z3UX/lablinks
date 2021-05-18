import React from "react";
import ReactDOM from "react-dom";
import PageLayout from "./components/PageLayout";

let pageURL = window.location.href;
let lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);

ReactDOM.render(
    <PageLayout articleID={lastURLSegment ? lastURLSegment : "0012"}/>,
    document.getElementById('root')
);
