import React from 'react'

const RestaurantList = () => {
    return (
        <div className="list-group">
            <table className="table table-hover table-dark"></table>
            <thead>
                <tr className="bg-primary">
                    <th scope = "col"> Restaurant </th>
                    <th scope = "col"> Location </th>
                    <th scope = "col"> Price Range </th>
                    <th scope = "col"> Ratings </th>
                    <th scope = "col"> Edit </th>
                    <th scope = "col"> Delete </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>mcdonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <div>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn warning">Delete</button></td>
                    </div>
                </tr>
            </tbody>
        </div>
    )
}

export default RestaurantList
