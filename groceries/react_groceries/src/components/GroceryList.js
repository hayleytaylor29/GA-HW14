import React from 'react';

class GroceryList extends React.Component {

    render() {
        const { newItem } = this.props;
        return(
            <ul>
            {newItem.map((newItem) => (
                <div className="listItem">
                <li key={newItem.id}>
                    {newItem.text}
                    <br/>
                    {newItem.brand}
                    <br/>
                    {newItem.units}
                    <br/>
                    {newItem.quantity}
                    </li>
                <button key={newItem.id}>Delete</button>
                </div>
            ))}
            </ul>
        )
    }
}

export default GroceryList;