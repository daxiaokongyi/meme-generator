import React from 'react';
import "./Meme.css";
import PropTypes from 'prop-types';

const Meme = ({topText, bottomText, deleteMeme, url, id}) => {
    const handleDelete = () => {
        deleteMeme(id);
    }

    return (
        <div id="foo" className="Meme">
            <div className="container">
                <span className="top-text">{topText}</span>
                <img src={url} alt="a meme" />
                <span className="bottom-text">{bottomText}</span>
                <button id="meme_deleteBtn" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

Meme.propTypes = {
    topText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired
}

export default Meme;