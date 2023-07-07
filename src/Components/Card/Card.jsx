import React from 'react';
import "./Card.css"

const Card = ({ content }) => {
    return (
        <div className='card'>
            <div className="img" style={{ backgroundImage: `url(${content.image})` }}>
                <a href={content.link} target="_blank" rel="noopener noreferrer">
                    <div className="overlay"></div>
                </a>
            </div>
            <div className="card-title"><a href={content.link} target="_blank" rel="noopener noreferrer">{content.title}</a></div>
            <div className="card-desc">{content.desc}</div>
            <div className="line"></div>
            <div className="author">
                <div className="author-img" style={{ backgroundImage: `url(${content.author.image})` }}></div>
                <div className="footer">Creation of <a href={content.author.github} target="_blank" rel="noopener noreferrer">{content.author.name}</a></div>
            </div>
        </div>
    );
}

export default Card;
