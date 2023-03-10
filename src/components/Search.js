import React from 'react';

const propTypes = {};
const defaultProps = {};

const Search = (props) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.search(props.term);
    };

    return <div>
        <form id="searchAPI" onSubmit={handleSubmit}>
        <label>
            <input type="text" placeholder="Enter track, artist, keyword or show..." id="term" name="term" value={props.term} onChange={(e) => props.setTerm(e.target.value)}/>
        </label>
        <input type="submit" value="Search"/>
        </form>
        <h1>{props.term && 'Searching for terms:' + props.term}</h1>
    </div>
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;