import React, { Component } from 'react'
import { fetchCoffeeShops, addToFavorites } from '../coffee-api.js'
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

export default class CoffeeList extends Component {
    state = {
        location: '',
        filteredCoffeeShops: []
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const data = await fetchCoffeeShops(this.state.location)
        this.setState({filteredCoffeeShops: data.body})
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
            <>
                <ReactNotification />
                <div className="sideBar">
                    <form onSubmit={this.handleSubmit}>
                    <input onChange={e => this.setState({ location: e.target.value })} value={this.state.location} type="text" placeholder="Enter Location" required />
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
                        this.state.filteredCoffeeShops.map((coffeeShop) => {
                            return <li className="coffeeShopItem" key={coffeeShop.biz_id}>
                            {coffeeShop.title}
                            <img src={coffeeShop.img} alt="coffeeShop" width="200" />
                            
                            <button onClick={() => this.handleAddFavorite(coffeeShop)}>Add to Favorites</button>
                            </li>
                        })
                    }
                </ul>
                </div>
            </>
        )
    }
}
