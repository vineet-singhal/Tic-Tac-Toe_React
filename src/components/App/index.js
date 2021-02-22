import React from "react";
import logo from '../../logo.svg';
import './App.css';
import GridRow from "../GridRow";
import Header from "../Header";
import Footer from "../Footer";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      gameState : [
        ["","",""],
        ["","",""],
        ["","",""]
      ],
      player_turn : "X",
      gameover : false,
      filled : 0,
      winner : ""
    };
  }

  handlePlayerClick = (row, col)=>{
    // console.log("called",row,col,this.state.player_turn);
    if(!this.state.gameover){
      this.state.gameState[row][col] = this.state.player_turn;
      this.state.filled++;
      this.setState({
        gameState : this.state.gameState,
      });
      
      for(var i=0 ; i<3 ; i++){
        if(this.state.gameState[i][0]==this.state.gameState[i][1] && this.state.gameState[i][0]==this.state.gameState[i][2] && this.state.gameState[i][0]!=""){
          this.state.gameover = true;
        }
        if(this.state.gameState[0][i]==this.state.gameState[1][i] && this.state.gameState[0][i]==this.state.gameState[2][i] && this.state.gameState[0][i]!=""){
          this.state.gameover = true;
        }
      }
      if(this.state.gameState[0][0]==this.state.gameState[1][1] && this.state.gameState[0][0]==this.state.gameState[2][2] && this.state.gameState[0][0]!=""){
        this.state.gameover = true;
      }
      if(this.state.gameState[0][2]==this.state.gameState[1][1] && this.state.gameState[0][2]==this.state.gameState[2][0] && this.state.gameState[0][2]!=""){
        this.state.gameover = true;
      }

      if(!this.state.gameover && this.state.filled!=9){
        this.setState({
          player_turn : this.state.player_turn=="X"?"O":"X",
          filled : this.state.filled
        });
      }
      else{
        if(this.state.gameover){
          this.state.winner = "Player "+this.state.player_turn+" winner!!";
        }
        else{
          this.state.winner = "Match Draw!!";
        }
        this.setState({
          gameover : true,
          winner : this.state.winner
        });
      }
    }
  }

  render(){
    // var row = [<GridRow/>,<GridRow/>,<GridRow/>];
    return (
      <div className="container">
        <Header/>
        {this.state.gameState.map((row , rowIndex) => (
          <GridRow row={row} rowIndex={rowIndex} handlePlayerClick={this.handlePlayerClick} />
        ))}
        {/* <div>{row}</div> */}
        <Footer turn={this.state.player_turn} winner={this.state.winner} />
      </div>
    );
  }
}

export default App;
