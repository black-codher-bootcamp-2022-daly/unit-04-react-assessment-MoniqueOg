import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
    return (
        <div className="header">
            <h1>About</h1>
            <div className="NavLinks">
                <Link to="/"> Home </Link> |
                <Link to="/about"> About </Link> |
                <Link to="/bookcase" className="bookLink"> Bookcase ({props.bookLength})</Link>
            </div>
            <div className="page">Welcome to the Bookcase Application.
                <br />
                <h2>Welcome to the iTunes Store</h2>
                <br />
                <p>
                    iTunes Store is an app that displays a list of music
                    but also allows you to search for any other media.
                    <br />
                    The user can search for their track either by keyword or by artist.
                    <br />
                    The "Add to Basket" button will save the product to your local basket where you can view your personal track list.
                    <br />
                    If you change your mind you can remove it by clicking "Remove".
                </p>
            </div>
        </div>
    )
}

export default About;