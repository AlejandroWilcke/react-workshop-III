import React from 'react';

export default class NewPlayList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        this.controlChange = this.controlChange.bind(this);
    }

    controlChange(e){
        const value = e.target.value;
        this.setState({
          inputValue: value
        });
    }

    render(){
        return(
            <div className="well">
                <form className="form-horizontal" onSubmit={this.props.handleChange}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" onChange={this.controlChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success">Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
             </div>
        )
    }
}