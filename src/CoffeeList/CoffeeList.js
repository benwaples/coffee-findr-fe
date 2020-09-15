import React, { Component } from 'react'
import { fetchCoffeeShops, addToFavorites } from '../coffee-api.js'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import '../App.css'


const notification = {    
    title: "Wonderful!",    
    message: "Configurable",    
    type: "success",    
    insert: "top",    
    container: "top-right",    
    animationIn: ["animated", "fadeIn"],    
    animationOut: ["animated", "fadeOut"]
    };

export default class CoffeeList extends Component {
    state = {
        location: '',
        filteredCoffeeShops: [],
        isLoading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            this.setState({isLoading: true})
            const data = await fetchCoffeeShops(this.state.location)
            this.setState({filteredCoffeeShops: data.body, isLoading: false})
        } catch(e) {
            return store.addNotification({
                ...notification,
                container: 'top-right',
                type: 'danger',
                title: 'Oops!',
                message: `Invalid Location`,
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {        
                    duration: 2000    
            }
        });
    }
}
   
    handleFilter = (e) => {
        // seems like this work should probably have been done on the back-end to keep the front end more ignorant
        const newData = this.state.filteredCoffeeShops.filter(coffeeShop => (
            !coffeeShop.title.includes("Starbucks") &&
            !coffeeShop.title.includes("Dunkin") &&
            !coffeeShop.title.includes("Peets") &&
            !coffeeShop.title.includes("Dutch Bros")
            ))
            this.setState({ filteredCoffeeShops: newData })
    }

    handleAddFavorite = async (favorite) => {
        try {
        await addToFavorites(favorite);
        store.addNotification({
            ...notification,
            container: 'top-right',
            type: 'success',
            message: `${favorite.title} has been added to Your Favorites!`,
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {        
                duration: 2000    
            }
        });
        } catch(e) {
            return store.addNotification({
                // starting to feel like all this notification duplication could have been prevented by making a makeNotification function with some default animations, dismiss.duration, etc
                ...notification,
                container: 'top-right',
                type: 'danger',
                title: 'Danger, watch yo self',
                message: `${favorite.title} is already in Your Favorites List!`,
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {        
                    duration: 2000    
                }
            });
        }
    }
        
        
    render() {
        return (
            <div className="coffeeListPage">
                <ReactNotification />
                <div className="sideBar">
                    <form onSubmit={this.handleSubmit}>
                    <h3>Enter Location:</h3>
                    <input onChange={e => this.setState({ location: e.target.value })} value={this.state.location} type="text" placeholder="Portland" required />
                    <select onChange={this.handleFilter}>
                        <option value="all">All Coffee Shops</option>
                        <option value="nonChain">Non-Chain Coffee Shops</option>
                    </select>
                    <button>Submit</button>
                    </form>
                </div>
                <div className="shopContainer">
                <ul className="shopList">
                    {
                        !this.state.isLoading ?
                        this.state.filteredCoffeeShops.map((coffeeShop) => {
                            return <li className="coffeeShopItem" key={coffeeShop.biz_id}>
                            <h4>{coffeeShop.title}</h4>
                            <div className="
                            hover">
                                <img src={coffeeShop.img} alt="coffeeShop"/>
                                <div className="moreInfo">
                                    <p>{coffeeShop.address}</p> 
                                    <p>{coffeeShop.is_closed ? `${coffeeShop.title} is closed` : `${coffeeShop.title} is open`}</p> 
                                    <p>Yelp Rating: {coffeeShop.rating}</p> 
                                </div>
                            </div>
                            <form action="http://maps.google.com/maps" method="get" target="_blank" >
                                <input type="hidden" name="daddr" value={coffeeShop.address} />
                                <input className="directions" type="submit" value="Get directions" />
                            </form>

                            <button onClick={() => this.handleAddFavorite(coffeeShop)}>Add to Favorites</button>
                            </li>
                        })
                        :
                        <img src="https://media.giphy.com/media/a0G1MUBGwmBcQ/source.gif" alt="loading" />
                    }
                </ul>
                </div>
            </div>
        )
    }
}
