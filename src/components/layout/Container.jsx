import React from "react";

import './Container.css'

export default class Container extends React.Component {
    render() {
        const { id, header } = this.props
        return (
            <div className="cont" id={id}>
                <div className="header">
                    {header}
                </div>
                <div className="cont-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}