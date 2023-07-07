import React from 'react';
import "./App.css"
import Card from '../Card/Card';
import content from '../../Content';

const App = () => {
    return (
        <div className='app'>
            <div className="title">My Project Portfolio</div>
            <div className="projects">
                {
                    content.map(
                        c => {
                            return <div key={c.id} className="card-wrapper">
                                <Card  content={c} />
                            </div>
                        }
                    )
                }
            </div>

        </div>
    );
}

export default App;
