import React from 'react';
import "./App.css"
import Card from '../Card/Card';

const App = () => {
    const s = [null, null, null, null, null, null]
    return (
        <div className='app'>
            {
                s.map(
                    p => {
                        return <div className="card-wrapper"><Card /></div>
                    }
                )
            }
        </div>
    );
}

export default App;
