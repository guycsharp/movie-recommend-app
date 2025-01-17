// import React from 'react';
import PropTypes from "prop-types";

function ArticleRow(props) {
  const {
    title,
    description,
    image,
    link,
    postedDate,
    minutesToRead,
    hasAudioAvailable,
    memberPreview,
    altImage,
    altAuthorImage,
  } = props;
  const { author} = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td><img src={image} alt={altImage} /></td>
      <td><a href={link}>Read Article</a></td>
      <td>{author.name}</td>
      <td><img src={author.image} alt={altAuthorImage} /></td>
      <td>{author.isMediumMember.toString()}</td>
      <td>{postedDate}</td>
      <td>{minutesToRead}</td>
      <td>{hasAudioAvailable.toString()}</td>
      <td>{memberPreview.toString()}</td>
    </tr>
  );
}

ArticleRow.propTypes =
{
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
  hasAudioAvailable: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired,
  altImage: PropTypes.string,
  altAuthorImage: PropTypes.string
};

export default ArticleRow;
