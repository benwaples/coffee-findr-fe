import React, { Component } from 'react'
import { fetchCoffeeShops } from '../coffee-api.js'

export default class CoffeeList extends Component {
    state = {
        location: '',
        filteredCoffeeShops: [],
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = await fetchCoffeeShops(this.state.location)
        this.setState({filteredCoffeeShops: data.body})
        }
   
    handleFilter = (e) => {
        const newData = this.state.filteredCoffeeShops.filter(coffeeShop => (
            !coffeeShop.title.includes("Starbucks") &&
            !coffeeShop.title.includes("Dunkin") &&
            !coffeeShop.title.includes("Peets") &&
            !coffeeShop.title.includes("Dutch Bros")
            ))
            this.setState({ filteredCoffeeShops: newData })

            console.log(this.state.filteredCoffeeShops)
    }
        
        
    render() {
        return (
            <>
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
                            return <li className="coffeeShopItem">
                            {coffeeShop.title}
                            <img src={coffeeShop.img} alt="coffeeShop" width="200" />
                            </li>
                        })
                    }
                </ul>
                </div>
            </>
        )
    }
}
                            


