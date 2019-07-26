import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';


export default class Header extends Component{
    render(){
        let homeButton = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        return (
            <div >
                <div className="App-header">
                    <span
                        id="homeButton"  
                        style={{cursor:'pointer'}} onClick={()=>{window.location.reload()}}>
                        <IconButton  color="primary">
                            <SvgIcon>
                                <path d={homeButton} />
                            </SvgIcon>
                        </IconButton>
                        <label  style={{cursor:'pointer'}}>Book Inventory</label>
                    </span>
                </div>
            </div>
        )
    }
}