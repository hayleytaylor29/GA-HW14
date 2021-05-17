import React from 'react';
import GroceryList from './GroceryList';

class GroceryApp extends React.Component {
    constructor() {
        super();
        this.state = { 
            item: '', 
            brand: '',
            units: '',
            quantity: '',
            isPurchased: false,
        
        };
    }

    handleChange = ({ target: {value} }) => this.setState({ 
            item: this.state.value, 
            brand: this.state.value,
            units: this.state.value,
            quantity: this.state.value,
            isPurchased: false
     })


    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: true
        }

        this.setState((state) => ({ 
            items: [...state.items,
            {item: '',
            brand: '',
            units: '',
            quantity: '',
            isPurchased: false
            }
        ]
        }))
    }

    render(){
        return (
            <div>
                <h3>Grocery List</h3>
                <form onSubmit={this.handleSubmit}>
                    Item: <input type="text" value={this.state.item} name="item"/>
                    <br/>
                    Brand: <input type="text" value={this.state.brand} name="brand"/>
                    <br/>
                    Units: <input type="text" value={this.state.units} name="units"/>
                    <br/>
                    Quantity: <input type="text" value={this.state.quantity} name="quantity"/>
                    <input 
                    onChange={this.handleChange} 
                    type="text"
                    autoComplete="off"
                    value={this.state.text}
                    />
                    <button>Create List</button>
                </form>
                <GroceryList items={this.state.items}/>
            </div>
        )
    }
}

export default GroceryApp;

//this todoapp manages state




// function Main () {
//     this.state = { text: '', }
//     return (
//         <div>
//         <h2>Grocery List</h2>
//         <form>
//         Item: <input type="text" name="item" /><br></br>
//         Brand: <input type="text" name="brand" /><br></br>
//         Units: <input type="text" name="units" /><br></br>
//         Quantity: <input type="text" name="quantity" /><br></br>
//         <input type="submit" name="submit" value="add to list"/>
//         </form>
//         </div>
//     )
// }

