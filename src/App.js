import React, {Component, Fragment} from 'react';
import './App.css';
import Layout from "./components/headers/sections/Layout";


class App extends Component {
    render() {
        return (
            <Fragment>
                {/*<div key={0} className="MenuBarTop">
                    <label className="MenuBarItems">Customize</label>
                    <label className="MenuBarItems">Save</label>
                </div>*/}
                <section className="Filtereditor">
                    <Layout />
                </section>
            </Fragment>
        );
    }
}

export default App;
