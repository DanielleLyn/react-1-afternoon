import React, { Component } from 'react';


class FilterObject extends Component{
  constructor(){
   super();
 
    this.state={
     cars: [
      {
        Make: 'Toyota',
        Model: 'Color',
        Year: 2006,
      },
      {
        Model: 'Civic',
        Color: 'Red',
        Year: 2004,
      },
      {
        Make: 'Kia',
        Model: 'Sportage',
        Color: 'White',
      },
      {
        Model: "Elantra",
        Year: 2002,
        Color: "Blue",
      }
    ],
    userInput:"",
    filteredCars: [],
    }
  }

 handleChange(val){
   this.setState({userInput:val});
 } 
 filteredCars(prop){
   var cars = this.state.cars;
   var filteredCars = [];
  for (var i=0;i<cars.length;i++){
    if(cars[i].hasOwnProperty(prop)){
      filteredCars.push(cars[i]);
    }
  }
  this.setState({filteredCars:filteredCars});
 }

  render() {
    return(
     <div className="puzzleBox filterObjectPB">
     <h4>Filter Object</h4>
     <span className="puzzleText">Original:{this.state.Cars}</span>
     <input className="inputLine"OnChange={(e) =>this.handleChange(e.target.value)}></input>
     <button className="confirmationButton"OnClick={() =>this.filteredCars(this.state.userInput)}>Filter</button>
     <span className="resultsBox filterObjectRB">Filtered:[{this.state.filteredCars}]</span>
     </div>
    )
  } 
    
}



export default FilterObject;
