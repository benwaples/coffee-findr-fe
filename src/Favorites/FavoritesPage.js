import React, { Component } from "react";
import { fetchFavorites, fetchFavoriteById, editFavorite, deleteFavorite } from '../coffee-api.js';

export default class FavoritesPage extends Component {
    state = {
        favorites: [],
        isLoading: false
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})
        const data = await fetchFavorites();
        console.log(data.body);

        this.setState({ favorites: data.body, isLoading: false});
        console.log(this.state.favorites);
    }
    
    render() {
        return (
            <>
            <ul className='favoritesList'>
                {
                    !this.state.isLoading ?
                    this.state.favorites.map(favorite => {
                        return <li key={favorite.title}>{favorite.title}</li>
                    }) : 'Is Loading'
                }
            </ul>
            <div className='favoritesInfo'>

            </div>
            </>
        )
    }
}