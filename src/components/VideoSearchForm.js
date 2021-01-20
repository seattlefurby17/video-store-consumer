import React, { useState } from 'react';

const VideoSearchForm = (props) => {
    const [title, setTitle] = useState('');

    // event handler
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.searchVideoCallback(title);
        setTitle(' ')
    };

    return (
        <form className="video-search-form" onSubmit={onFormSubmit}>
            <div>
            <label htmlFor="title">Movie Title:</label>
            <input  name="title"
                    placeholder="movie title"
                    onChange={onTitleChange}
            />
            </div>
            <input
                type="submit"
                value="Search Video"
            />
        </form>
    );
} 

export default VideoSearchForm;

