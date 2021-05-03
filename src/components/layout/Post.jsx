import React from 'react'
import parseMD from 'parse-md'
import marked from 'marked'

import './Post.css'
import { Link } from 'react-router-dom'

export default class Post extends React.Component {
    render() {
        const { content } = this.props
        const parsedContent = parseMD(content)

        if(parsedContent)
            return (
                <div className="post">
                    <div className="header">
                        <Link className="link" to="/">Inicio</Link> {"> "} <Link to={"/news/" + parsedContent.metadata.id}>{parsedContent.metadata.title}</Link>
                    </div>
                    <div className="banner" style={{backgroundImage: `url(${parsedContent.metadata.banner})`}}>
                        <div className="banner-content">
                            <span className="post-title">{parsedContent.metadata.title}</span><br />
                            <span className="post-author">
                                Escrito por <a href={`/user/${parsedContent.metadata.author}`}>{parsedContent.metadata.author}</a>
                            </span>
                        </div>
                    </div>
                    <div className="post-content" dangerouslySetInnerHTML={{__html: marked(parsedContent.content)}} />
                </div>
            )
    }
}