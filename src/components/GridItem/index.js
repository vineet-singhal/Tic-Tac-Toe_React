import React from "react";
import "../GridItem/GridItem.css";
class GridItem extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick = (event)=>{
        // console.log("event is = ",event);
        if(this.props.col==""){
            console.log(this.props.rowIndex, this.props.colIndex);
            this.props.handlePlayerClick(this.props.rowIndex, this.props.colIndex);
        }
        
    }
    render(){
        return <div className="grid_item" onClick={this.handleClick}>{this.props.col}</div>
    }
}

export default GridItem;