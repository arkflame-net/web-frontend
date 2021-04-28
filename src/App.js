// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Layout from "./Layout";
import LoadingPanel from "./components/layout/LoadingPanel"

// Relay
import { QueryRenderer } from "react-relay";
import { initEnvironment } from "./relay/environment";

// GraphQL
import { currentUserQuery } from "./graphql"

// Wrapper
import User from "./utils/UserWrapper";

// Initialization
const environment = initEnvironment();

function App({ authenticated, checked }) {
  if (!checked) {
    return <LoadingPanel/>
  }

  if (authenticated) {
    return <QueryRenderer
      environment={environment}
      query={currentUserQuery}
      render={({error, props}) => {
        if (error) {
          return <div>Error, {error.message}</div>;
        }

        if (!props) {
            return <LoadingPanel/>;
        }

        return <Layout user={new User(props.currentUser)} environment={environment} />
      }}
    />
  }
  
  return <Layout environment={environment} />
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired
}

const mapState = ({session}) => ({
  authenticated: session.authenticated,
  checked: session.checked,
})

export default connect(mapState)(App);