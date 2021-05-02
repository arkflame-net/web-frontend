import React from 'react'
import { Link } from 'react-router-dom';
import SummaryFullWide from '../components/layout/SummaryFullWide'
import parseMD from 'parse-md'

const importAll = (r) => r.keys().map(r);
const postFiles = importAll(require.context('../content/', true, /\.md$/)).sort().reverse();

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  } 

  async componentDidMount() {
    const posts = await Promise.all(postFiles.map((file) => fetch(file.default).then((res) => res.text())))
      .catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
  }

  render() {
    
    if(this.state)
      return (
        <div>
          {
              this.state.posts.map((post, key) => (
                <Link to={"/news/" + parseMD(post).metadata.id}>
                  <SummaryFullWide
                    title={parseMD(post).metadata.title}
                    subtitle={`Escrito por ${parseMD(post).metadata.author}`}
                    image={parseMD(post).metadata.banner}
                  />
                </Link>
              ))
          }
        </div>
      )
    else return <div style={{color: "white"}}>Cargando...</div>
  }
}
