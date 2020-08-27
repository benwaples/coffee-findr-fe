import React, { Component } from 'react'

export default class DetailedFavorite extends Component {
    state = {
        notes: ''

    }
    componentDidMount = () => {
        this.setState({notes: this.props.detailFavorite.notes})
    }
    render() {
        const {
            detailFavorite,
            handleNoteChange,
            notes,
            handleSubmit,
            handleDelete
        } = this.props
        return (
            <div className="detailedFav">
                <a href={detailFavorite.yelp_url} target="_blank" rel="noopener noreferrer">
                    <h2>{detailFavorite.title}</h2>
                    <img src={detailFavorite.img} alt={detailFavorite.title} />
                </a>
                    <p>{detailFavorite.address}</p>
                    <p>{detailFavorite.is_closed ? 'Is Closed' : 'Is Open'}</p>
                    <p>Rating: {detailFavorite.rating}</p>
                    <p>Personal Notes: {detailFavorite.notes}</p>
                <input type="text" onChange={handleNoteChange} value={notes}/>
                <button onClick={() => handleSubmit(detailFavorite.id)} >Edit Notes</button>
                <button onClick={() => handleDelete(detailFavorite.id)} >Delete</button>
            </div>
        )
    }
}
