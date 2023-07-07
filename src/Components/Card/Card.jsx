import React from 'react';
import "./Card.css"
import ethicon from "../../images/icon-ethereum.svg"
import clockicon from "../../images/icon-clock.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {

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

    return (
        <div className='card'>
            <div className="img">
                <div onClick={handleClick} className="overlay"></div>
            </div>
            <div onClick={handleClick} className="card-title">Equilibrium #3429</div>
            <div className="card-desc">Our Equilibrium collection promotes balance and calm.</div>
            <div className="info">
                <span className='pricing'>
                    <img src={ethicon} alt="" />
                    <span>0.041 ETH</span>
                </span>
                <span className='timer pricing'>
                    <img src={clockicon} alt="" />
                    <span>3 days left</span>
                </span>
            </div>
            <div className="line"></div>
            <div className="author">
                <div className="author-img"></div>
                <div className="footer">Creation of <span onClick={handleClick}>Jules Wyvern</span></div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Card;
