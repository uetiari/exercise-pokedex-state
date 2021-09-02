import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.nextPokemon = this.nextPokemon.bind(this);
        this.comparePokemon = this.comparePokemon.bind(this);

        this.state = {
            thisPokemon: 1,
        }
    }

    comparePokemon(){
        if ( this.state.thisPokemon < 8 ) {
            this.nextPokemon();
        } else {
            this.setState(() => ({
                thisPokemon: 0,
            }));
        }
    }

    nextPokemon(){
        this.setState((prevState, _prop) => ({
            thisPokemon: prevState.thisPokemon + 1,
        }));
    }
    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokedex">
                { pokemons.filter((pokemon, index) => pokemons[index] === pokemons[this.state.thisPokemon]).map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />) }
                <button onClick={ this.comparePokemon }>Next !</button>
            </div>
        );
    }
}

export default Pokedex;