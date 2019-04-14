import React, {Component, Fragment} from 'react';
import './App.css';
import Sections from "./components/layout/sections/Sections";


class App extends Component {
    render() {
        return (
            <Fragment>
                {/*<div key={0} className="MenuBarTop">
                    <label className="MenuBarItems">Customize</label>
                    <label className="MenuBarItems">Save</label>
                </div>*/}
                <section className="Filtereditor">
                    <Sections />
                </section>
            </Fragment>
        );
    }
}



export default App;
