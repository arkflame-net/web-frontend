import React from "react";

import './Container.css'

export default class Container extends React.Component {
    render() {
        const { header } = this.props
        return (
            <div className="cont">
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