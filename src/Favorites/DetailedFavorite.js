import React, { Component } from 'react'

export default class DetailedFavorite extends Component {
    state = {
        notes: ''

    }
    componentDidMount = () => {
        this.setState({notes: this.props.detailFavorite.notes})
    }
    render() {
        // nice destructuring! you could have deeply destructured like so:
        const {
            detailFavorite: {
                yelp_url,
                title,
                img,
                address,
                is_closed,
                rating,
                notes,
                id
            },
            handleNoteChange,
            notes,
            handleSubmit,
            handleDelete
        } = this.props
        return (
            <div className="detailedFav">
                <a href={yelp_url} target="_blank" rel="noopener noreferrer">
                    <h2>{title}</h2>
                    <img src={img} alt={title} />
                </a>
                    <p>{address}</p>
                    <p>{is_closed ? 'Is Closed' : 'Is Open'}</p>
                    <p>Rating: {rating}</p>
                    <p>Personal Notes: {notes}</p>
                <input type="text" onChange={handleNoteChange} value={notes}/>
                <button className="editButt" onClick={() => handleSubmit(id)} >Edit Notes</button>
                <button className="deleteButt" onClick={() => handleDelete(id)} >Delete</button>
            </div>
        )
    }
}
