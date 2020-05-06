import React from 'react';
import ListItem from './ListItem'
import  './App.css'

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
            <div>
                <ul>
                    {beers.map(beer => (
                    <ListItem beer={beer}></ListItem>
                    ))}
                </ul>
            </div>
            );
        }
    }
}

export default Beer;