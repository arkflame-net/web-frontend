import React from "react"
import './Comment.css'

export default class Comment extends React.Component {
    render() {
        const { author, message } = this.props
        if(author && message) return (
            <div className="comment">
                <img className="picture" src={author.picture} />
                <div className="normal">
                    <span style={{fontWeight: "bold"}}>{author.name}</span><br />
                    <span>{message}</span>
                </div>
            </div>
        )
    }
}