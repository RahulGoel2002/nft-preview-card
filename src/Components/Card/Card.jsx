import React, { useEffect } from 'react';
import "./Card.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({content}) => {

    const handleClick = e => {
        toast.info('I don\'t do anything yet!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }

    useEffect(
        () => {
            console.log(content)
        }, [content]
    )


    return (
        <div className='card'>
            <div className="img" style={{backgroundImage: `url(${content.image})`}}>
                <div onClick={handleClick} className="overlay"></div>
            </div>
            <div onClick={handleClick} className="card-title">{content.title}</div>
            <div className="card-desc">{content.desc}</div>
            <div className="line"></div>
            <div className="author">
                <div className="author-img" style={{backgroundImage: `url(${content.author.image})`}}></div>
                <div className="footer">Creation of <span onClick={handleClick}>{content.author.name}</span></div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Card;
