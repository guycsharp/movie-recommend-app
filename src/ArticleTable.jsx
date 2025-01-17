// import React from 'react';
import PropTypes from "prop-types";
import ArticleRow from "./ArticleRow";
import yourArticles from '../_data/your-articles.json'; // path to JSON file
import missedArticles from '../_data/missed-articles.json'; // path to JSON file

import "./css/ArticleTableBlack.css"
import "./css/MissedArticleTableRed.css"

const chooseArticles = (tableClass) => {
  switch (tableClass) {
    case 'tableBlack':
      return yourArticles;
    case 'tableRed':
      return missedArticles;
  }
}

function ArticleTable(props) {
  const { tableClass, heading } = props;
  const articles = chooseArticles(tableClass);
  return (
    <>
      <h2> {heading} </h2>
      {/* <table className="tableBlack"> */}
      <table className={tableClass}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Link</th>
            <th>Author Name</th>
            <th>Author Image</th>
            <th>Author Is Medium Member?</th>
            <th>Posted Date</th>
            <th>Minutes to Read</th>
            <th>Has Audio Available</th>
            <th>Member Preview</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <ArticleRow key={index} {...article} />
          ))}
        </tbody>
      </table>
    </>
  );
}

ArticleTable.propTypes = {
  tableClass: PropTypes.string.isRequired,
  heading: PropTypes.string
}

export default ArticleTable;
