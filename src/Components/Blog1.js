import React from 'react';
import blogimage1 from './Images/blg1.jpg';

const Blog1 = () => {
    return (
        <div className="blog-container">
            <div className="left-side">
                <h2 className="date">On September 19,2032</h2>
                <h1 className="title">Classic New-York style Cheesecake Recipes</h1>
                <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <button className="read-more">
                    Read More
                    <span className="arrow">&rarr;</span>
                </button>
            </div>
            <div className="right-side">
                <img src={blogimage1} alt="Right Side Img" className="image" />
            </div>
        </div>
    );
};

export default Blog1;
