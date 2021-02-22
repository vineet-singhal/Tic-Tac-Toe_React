import React from "react";
import "./Footer.css";

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <h2 class="section">Player {this.props.turn}'s turn</h2>;
                <h1 class="section">{this.props.winner}</h1>
            </>
        )
    }
}

export default Footer;