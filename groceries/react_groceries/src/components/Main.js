function Main () {
    return (
        <div>
        <h1>Grocery List</h1>
        <form>
        Item: <input type="text" name="item" /><br></br>
        Brand: <input type="text" name="brand" /><br></br>
        Units: <input type="text" name="units" /><br></br>
        Quantity: <input type="text" name="quantity" /><br></br>
        <input type="submit" name="submit" value="add to list"/>
        </form>
        </div>
    )
}

export default Main;