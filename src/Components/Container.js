import React, { Component } from 'react'
import Grid from "./Grid";
import Description from "./Description";

export default class Container extends Component {
   
    render() {
        return (
            <div className="nav__content">
                    <Description />
                    <Grid />
            </div>
        )
    }
}
