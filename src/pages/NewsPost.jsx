import React from 'react'
import Post from '../components/layout/Post';

const importAll = (r) => r.keys().map(r);
const postFiles = importAll(require.context('../content/', true, /\.md$/)).sort().reverse();

export default class NewsPost extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            post: null
        }
    } 

    componentDidMount() {
        const path = window.location.pathname;
        const shrug = path.split("/")[path.split("/").length - 1];

        const post = postFiles.filter(file => file.default.split('/')[3].split('.')[0] === shrug)

        if(post.length > 0) {
            fetch(post[0].default).then(r => r.text().then(m => {
                this.setState({
                    post: m
                })
            }))
        }
    }

    render() {
        if(this.state.post)
            return (
                <div>
                    <Post content={this.state.post} />
                </div>
            )
        else return <div></div>
    }
}