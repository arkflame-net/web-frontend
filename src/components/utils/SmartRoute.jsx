import { Route } from 'react-router-dom';

export default function SmartRoute ({ Component, user = null, permissions = [], requiredLogin = false, ...componentProps }) {
    if (user == null && requiredLogin) {
        return <Route
            {...componentProps}
            render={(props) => <h1>Unauthenticated</h1>}
        />
    }

    else if (user != null && !user.hasPermissions(permissions)) {
        return <Route
            {...componentProps}
            render={(props) => <h1>No permissions</h1>}
        />
    }

    else {
        return <Route
            {...componentProps}
            render={(props) => <Component {...props} {...componentProps} user={user} />}
        />
    }
}