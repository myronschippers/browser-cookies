import React, { Component } from 'react';
import './App.css';
import { getCookie, setCookie } from '../../services/cookies.service';

class App extends Component {
    state = {
        enteredCreature: '',
        favoriteCreature: '',
    }
    componentDidMount() {
        const favoriteCreature = getCookie('favoriteCreature');
        console.log('Favorite: ', favoriteCreature);
        this.setState({
            favoriteCreature,
        });
    }
    
    changeFavoriteAnimal = (event) => {
        this.setState({
            enteredCreature: event.target.value,
        });
    }

    saveCreature = (event) => {
        const creature = this.state.enteredCreature;
        setCookie('favoriteCreature', creature);

        this.setState({
            enteredCreature: '',
            favoriteCreature: creature,
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

                <div className="container">
                    <label className="formField">
                        <div>Favorite Fantastic Creature:</div>
                        <input
                            type="text"
                            placeholder="Animal"
                            value={this.state.enteredCreature}
                            onChange={this.changeFavoriteAnimal}
                        />
                    </label>
                    <button onClick={this.saveCreature}>Save My Creature</button>
                </div>
            </div>
        );
    }
}

export default App;
