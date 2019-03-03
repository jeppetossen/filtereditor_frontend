import React, { Component } from 'react';
import './App.css';
import Layout from "./components/headers/sections/Layout";


class App extends Component {
    render() {
        return (
            <section className="Filtereditor">
                <Layout />
            </section>
        );
    }
}

export default App;
