// import React from 'react';
import ArticleRow from "./ArticleRow";
import articles from '../_data/your-articles.json'; // Update the path to your JSON file

function ArticleTable() {
  return (
    <>
      <table>
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
