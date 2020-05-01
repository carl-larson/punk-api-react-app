import React from 'react';

class Beer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            beers: []
        };
    }
    
        componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                isLoaded: true,
                beers: result
                });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            })
        }
    
        render() {
        const { error, isLoaded, beers } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
            <ul>
                {beers.map(beer => (
                <li key={beer.id}>
                    {beer.id}-{beer.name}--{beer.tagline}
                </li>
                ))}
            </ul>
            );
        }
    }
}

export default Beer;