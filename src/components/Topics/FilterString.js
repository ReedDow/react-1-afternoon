import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            astronauts: ['Buzz', 'Neil', 'Yuri', 'John', 'Alan', 'Jim', 'Pete', 'Ed', 'Doug'],
            userInput: '',
            filteredAstronauts: []

        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    filteredAstronauts(userInput){
        let astronauts = this.state.astronauts;
        let filteredAstronauts = [];

        for(let i = 0; i < astronauts.length; i++){
            if (astronauts[i].includes(userInput)) {
                filteredAstronauts.push(astronauts[i]);
            }
        }

        this.setState({ filteredAstronauts: filteredAstronauts });

    }

    render(){
        return(
            <div className = 'puzzleBox filterStringPB'>
                <h4> Filter String </h4>
                <span className = 'puzzleText'> Astronauts: { JSON.stringify(this.state.astronauts, null, 10)}
                </span>
                <input className = 'inputLine' onChange = {(e) => this.handleChange(e.target.value) } />
                <button className = 'confirmationButton' onClick={ () => this.filterAstronauts(this.state.userInput)}> Filter </button>
                <span className = "resultsBox filterStringRB">Filtered Astronauts: { JSON.stringify(this.state.filteredAstronauts, null, 10) } </span>
            </div>
            
        ) 
    }
}

export default FilterString;
