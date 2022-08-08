import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import DarkContentHook from '../../hooks/DarkContentHook';
import DarkToggler from '../helper/DarkToggler/DarkToggler';
import './Intro.css';

const Intro = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

    const [backImg, ] = DarkContentHook('App-backImg-1-dark', 'App-backImg-1-light')

    // Set Classes Based On darkMode Value
    // const [backImg, setBackImg] = useState(() => {
    //     return (darkMode ? 'App-backImg-1-dark' : 'App-backImg-1-light')
    // })

    // Update State On Toggle and Save Boolean Value to Local Storage For Persisting User Choice on Refresh
    const handleToggle = () => {
        if (darkMode) {
            localStorage.setItem('darkMode', false);
            dispatch({ type: 'setDarkMode', payload: false });
            return;
        } 
        localStorage.setItem('darkMode', true);
        dispatch({ type: 'setDarkMode', payload: true });
    }

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            document.querySelector('#toggler').checked = true;
            // setBackImg('App-backImg-1-dark');
        } else {
            // setBackImg('App-backImg-1-light');
        }
    }, [darkMode])

    return (
        <section className={`App-backImg ${backImg}`}>
            <article className='Intro-dark-toggle'>
                <DarkToggler
                    handleToggle={handleToggle}
                />
            </article>
            <article className='Intro-container'>
                <article className='Intro'>
                    <h1 className='App-typedFix App-dropShadow'>
                       
                    </h1>
                    <img
                        className='Intro-mainPhoto Intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt='me xD'
                    />
                    <h2
                        className='App-typedFix Intro-margin App-dropShadow'
                    >
                        {/* Delay time so this starts when my name finishes typing */}
                     
                    </h2>
                </article>
            </article>
        </section>
    );
};

export default Intro;