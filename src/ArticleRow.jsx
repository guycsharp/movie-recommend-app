// import React from 'react';

function ArticleRow(props) {
  const {
    title,
    description,
    image,
    link,
    authorName,
    authorImage,
    postedDate,
    minutesToRead,
    hasAudioAvailable,
    memberPreview,
    altImage,
    altAuthorImage
  } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td><img src={image} alt={altImage} /></td>
      <td><a href={link}>Read Article</a></td>
      <td>{authorName}</td>
      <td><img src={authorImage} alt={altAuthorImage} /></td>
      <td>{postedDate}</td>
      <td>{minutesToRead}</td>
      <td>{hasAudioAvailable}</td>
      <td>{memberPreview}</td>
    </tr>
  );
}

export default ArticleRow;
