import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        enteredCreature: '',
        favoriteCreature: '',
    }
    
    changeFavoriteAnimal = (event) => {
        this.setState({
            enteredCreature: event.target.value,
        });
    }

    saveCreature = (event) => {
        // const creature = this.state.enteredCreature;

        this.setState({
            enteredCreature: '',
            // favoriteCreature: creature,
        });
    }

    editCreature = (event) => {
        this.setState({
            isEditable: true,
        });
    }

    render() {
        let myCreature = <h3>You have not chosen a Favorite Creature</h3>;

        if (this.state.favoriteCreature != null
            && this.state.favoriteCreature.length > 0
        ) {
            myCreature = <h3>Your Favorite Creature: {this.state.favoriteCreature}</h3>
        }

        return (
            <div>
                <div className="headerBar">
                    <h1>Browser Cookies</h1>
                    {myCreature}
                </div>

                {editRegion}
            </div>
        );
    }
}

export default App;
