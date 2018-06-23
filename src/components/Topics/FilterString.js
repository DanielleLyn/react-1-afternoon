import React, { Component } from 'react';


class FilterString extends Component {
  constructor(){ 
    super();
    this.state = {
      emotions: [""],
      userInput: "",
      filteredArray: [],
    }
  }

  handleChange(val){
    this.setState({userInput:val});
  }

  filterArray(userInput){
  var emotions = this.state.emotions;
  var filteredArray = [];
  for (var i=0;i<emotions.length;i++){
  if(emotions[i].includes(userInput)){
    filteredArray.push(emotions[i]);
  }
 }
 this.setState({filteredArray: filteredArray});
}

   render() {
       return(
  <div className="puzzleBox filterStringPB">
  <h4>Filter String</h4>
<span className="puzzleText">Names: {this.state.emotions}</span> 
<input className="inputLine"OnChange={(e)=>this.handleChange(e.target.value)} ></input>
<button className="confirmationButton"OnClick={()=>this.filterArray(this.state.userInput)}>Filter</button>
       <span className="resultBox filterStringRB">Filtered:[{this.state.filteredArray}]</span>
     </div>
       )
   }   
 }
  
  
  
  export default FilterString;
