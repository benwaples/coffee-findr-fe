import React, { Component } from "react";
import { fetchFavorites, fetchFavoriteById, editFavorite, deleteFavorite } from '../coffee-api.js';
import DetailedFavorite from './DetailedFavorite.js';
import PlaceHolder from './PlaceHolder.js';

export default class FavoritesPage extends Component {
    state = {
        favorites: [],
        isLoading: false,
        detailFavorite: {},
        favoriteIsSelected: false,
        notes: ''
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})
        const data = await fetchFavorites();
        console.log(data.body);

        this.setState({ favorites: data.body, isLoading: false});
        console.log(this.state.favorites);
    }

    handleFavoriteById = async (id) => {
        const data = await fetchFavoriteById(id) 
        this.setState({detailFavorite: data.body, favoriteIsSelected:true, notes: data.body.notes })
        console.log(this.state.detailFavorite);
    }

    handleSubmit = async (id) => {
        const notes = {
            notes: this.state.notes
        }
        
        const data = await editFavorite(id, notes)
        this.setState({notes: data.body.notes})
        const refreshPage = await fetchFavoriteById(id) 
        this.setState({detailFavorite: refreshPage.body, favoriteIsSelected:true, notes: refreshPage.body.notes })
        console.log(refreshPage.body);
        }

        handleDelete = async (id) => {
            const data = await deleteFavorite(id)
            this.setState({isLoading: true})
            const refreshPage = await fetchFavorites();
            this.setState({ favorites: refreshPage.body, isLoading: false, detailFavorite: {}, favoriteIsSelected: false});
            }
    
    render() {
        return (
            <>
            <h2>
                Favorites List, Player
            </h2>
            <ul className='favoritesList'>
                {
                    !this.state.isLoading ?
                    this.state.favorites.map(favorite => {
                        return <li onClick={ () => this.handleFavoriteById(favorite.id)} key={favorite.title}>{favorite.title}</li>
                    }) : 'Is Loading'
                }
            </ul>
            <div className='favoritesInfo'>
                {
                    !this.state.favoriteIsSelected ?
                    <PlaceHolder />
                    :
                    <DetailedFavorite detailFavorite={this.state.detailFavorite} notes={this.state.notes} handleNoteChange={e => (this.setState({notes: e.target.value}))} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete}/>
                }
            </div>
            </>
        )
    }
}
