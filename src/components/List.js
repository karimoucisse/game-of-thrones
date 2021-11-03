import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                {this.props.items.map((item,index) => (
                    <div key= {index} className="row my-4 fs-3">
                        <p className="col-4">Name: {item.name}</p>
                        <p className="col-3">Price: {item.price}€</p>
                        <button type="button"
                            className="btn btn-outline-danger col-2 btn-lg"
                            onClick={()=>this.props.deleteTask(index)}>Supprimer
                        </button>
                    </div>)
                )}
            </div>
        )
    }
}
