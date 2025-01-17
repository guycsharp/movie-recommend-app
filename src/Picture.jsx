import PropTypes from "prop-types";

function Picture(props) {

    const {imgSrc, imgAlt} = props;
    console.log(props)
    return (
        // <img src={props.imgSrc} alt={props.imgAlt} />
        <img src={imgSrc} alt={imgAlt} />
    )
}

Picture.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string
}

export default Picture;
