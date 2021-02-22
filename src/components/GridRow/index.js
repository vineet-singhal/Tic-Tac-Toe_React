import React from "react";
import GridItem from "../GridItem";
import "./GridRow.css";

class GridRow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // var items = [<GridItem/>,<GridItem/>,<GridItem/>];
        return <div class="row">
            {this.props.row.map((col , colIndex) =>(
                <GridItem rowIndex={this.props.rowIndex} colIndex={colIndex} col={col} handlePlayerClick={this.props.handlePlayerClick}/>
            ))}
        </div>;
    }
}

export default GridRow;