import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    return (
        <section className='text-white text-center' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <button onClick={startQuiz} className="btn btn-info">Click here to start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;