import React, {Component} from 'react';


class FilterObject extends Component {

        constructor() {
            super();

            this.state = {
                rockets: [
                    {
                    name: 'Atlas',
                    fuel: 'solid',
                    flights: 32,
                    },
                    {
                    name: 'Falcon 9',
                    flights: 64,
                    crashes: 3
                    },
                    {
                    name: 'Soyuz',
                    costFlight: 90,
                    }
                ],
                
                userInput: '',
                filteredRockets: []
            }
        }

    handleChange(val) {
    this.setState({ userInput: val });
    }

    filteredRockets(prop) {
        let rockets = this.state.rockets;
        let filteredRockets = [];

        for(let i = 0; i< rockets.length; i++){
            if(rockets[i].hasOwnProperty(prop)){
                filteredRockets.push(rockets[i]);
            }
        }
        this.setState({filteredRockets: filteredRockets});
    }

    render(){
        return (
        <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.rockets, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.filterRockets(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredRockets, null, 10) } </span>
        </div>
        )
    }
}

export default FilterObject;
