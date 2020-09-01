import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <h2>Search</h2>
                <input type="text" name="search" onChange={this.props.search} />

                <div>
                    <h3>Search Results</h3>
                    {this.props.result &&
                        this.props.result.map(item => {
                            return item.task
                        })}
                </div>
            </div>
        )
    }
}