import React from 'react';
import PropTypes from 'prop-types';

// Now storeProvider is a function returning another function
/**
 * This storeProvider[function] is now a customizable higher order component,
 * because it can accept a generic function, extraProps, that we can use 
 * in any component to isolate any props logic that depends on the store,
 * which leaves the wrapped component as a pure presentational one 
 * that only receives normal props and present a UI for them.
 * @param {*} extraProps 
 */
const storeProvider = (extraProps) => (Component) => {

    // Create a Container Component [class component]
    return class extends React.Component {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object
        };

        render() {
            return <Component
                {...this.props}
                {...extraProps(this.context.store, this.props)}
                store={this.context.store} />;
        }
    };

    // Create a Container Component [function component]
    /*
    const WithStore = (props, { store }) =>
        <Component {...props} store={store} />;

    WithStore.contextTypes = {
        store: PropTypes.object
    };

    WithStore.displayName = `${Component.name}Container`;

    return WithStore;
    */
};

/**
 * If you've used the React Redux bindings before,
 * this should look familiar, because it's similar to what the
 * connect[function] in that library does.
 * This is now a recognized good pattern to do when you need components
 * to access things out of the Context API because it isolates that
 * access into just one function, instead of different indivisual components
 * accessing the Context API on their own.
 */
export default storeProvider;