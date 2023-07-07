import React from 'react';
import "./App.css"
import Card from '../Card/Card';
import content from '../../Content';

const App = () => {
    return (
        <div className='app'>
            <div className="nav">
            <div className="title">My Project Portfolio</div>

            <div className="resume-btn">
                <a  target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1jEWOiY0IWr3VFnSFxhO7W9pNtOraoJPP/view?usp=drive_link'>
                    <button className="btn">Resume</button>
                </a>
            </div>
            </div>
            <div className="projects">
                {
                    content.map(
                        c => {
                            return <div key={c.id} className="card-wrapper">
                                <Card content={c} />
                            </div>
                        }
                    )
                }
            </div>
            
        </div>
    );
}

export default App;
