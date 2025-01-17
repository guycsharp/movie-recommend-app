// import React from 'react';
import ArticleRow from "./ArticleRow";
import articles from '../_data/your-articles.json'; // path to JSON file

import "./css/ArticleTableBlack.css"

function ArticleTable() {
  return (
    <>
      <h2> Your Articles </h2>
      <table className="tableBlack">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Link</th>
            <th>Author Name</th>
            <th>Author Image</th>
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

export default ArticleTable;
