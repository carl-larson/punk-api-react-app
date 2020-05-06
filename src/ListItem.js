import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
            beer: props.beer
        };
    }

    changeLike = () => {
        let liked = false;
        // console.log(this.state)
        this.state.isLiked ? liked = false : liked = true;
        this.setState({isLiked: liked})

    }

    render() {
        // console.log(this)
        const beer = this.state.beer;
        let likeStatus = 'unliked';
        if (this.state.isLiked) {
            likeStatus = 'liked'
        }

        return (
            <li key={beer.id}>
                <img src={beer.image_url} alt={beer.name}/>
                <p>{beer.id}-{beer.name}--{beer.tagline}</p>
                <button className={likeStatus} onClick={this.changeLike}>❤</button>
            </li>
        )
    }
}

export default ListItem