import React from 'react';
import NewPlayList from '../components/NewPlayList';

class NewPlayListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        });
        e.target.value = '';
    }

    render(){
        return(
            <NewPlayList/>
        )
    }
}

export default NewPlayListContainer;