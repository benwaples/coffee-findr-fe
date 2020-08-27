import React, { Component } from "react";
import { fetchFavorites, fetchFavoriteById, editFavorite, deleteFavorite } from '../coffee-api.js';
import DetailedFavorite from './DetailedFavorite.js';
import PlaceHolder from './PlaceHolder.js';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const notification = {    
    title: "Wonderful!",    
    message: "Configurable",    
    type: "success",    
    insert: "top",    
    container: "top-right",    
    animationIn: ["animated", "fadeIn"],    
    animationOut: ["animated", "fadeOut"]
    };

export default class FavoritesPage extends Component {
    state = {
        favorites: [],
        isLoading: false,
        detailFavorite: {},
        favoriteIsSelected: false,
        notes: ''
    }

    componentDidMount = async () => {
        try {
        this.setState({isLoading: true})
        const data = await fetchFavorites();
        console.log(data.body);

        this.setState({ favorites: data.body, isLoading: false});
        console.log(this.state.favorites);
        } catch(e) {
            return this.props.history.push('/')
        }
    }

    handleFavoriteById = async (id) => {
        const data = await fetchFavoriteById(id) 
        this.setState({detailFavorite: data.body, favoriteIsSelected:true, notes: data.body.notes })
        console.log(this.state.detailFavorite);
    }

    handleSubmit = async (id) => {
        try {
        const notes = {
            notes: this.state.notes
        }
        const data = await editFavorite(id, notes)
        store.addNotification({
            ...notification,
            container: 'top-right',
            type: 'success',
            message: `${data.body.title} notes have changed.`,
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {        
                duration: 2000    
            }
        });
        const refreshPage = await fetchFavoriteById(id) 
        this.setState({detailFavorite: refreshPage.body, favoriteIsSelected:true, notes: data.body.notes })
        } catch(e) {
            return console.log({ error: e.response.body.error })
        }   
    }

    handleDelete = async (id) => {
        try {
        const data = await deleteFavorite(id)
        console.log(data);
        store.addNotification({
            ...notification,
            container: 'top-right',
            title: 'Successful Deletion',
            type: 'warning',
            message: `Your selected shop has been deleted.`,
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {        
                duration: 2000    
            }
        });
        this.setState({isLoading: true})
        const refreshPage = await fetchFavorites();
        this.setState({ favorites: refreshPage.body, isLoading: false, detailFavorite: {}, favoriteIsSelected: false});
        } catch(e) {
            return console.log({ error: e.response.body.error })
        }   
    }
    
    render() {
        return (
            <>
            <ReactNotification />
            <h2>
                Favorites List, Player
            </h2>
            <ul className='favoritesList'>
                {
                    !this.state.isLoading ?
                    this.state.favorites.map(favorite => {
                        return <li onClick={ () => this.handleFavoriteById(favorite.id)} key={favorite.title}>{favorite.title}</li>
                    }) : <img src="https://media.giphy.com/media/a0G1MUBGwmBcQ/source.gif" alt="loading" />
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
