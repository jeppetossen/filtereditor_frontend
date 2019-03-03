import React, {Component} from 'react';
import './Layout.scss';
import data from '../../../api/headers.json';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="Visual">
                <div id="VisualDiv2">
                    {data.Sections.map((item, index) => {
                        return (
                            <div key={index}>
                                <label key={item.id} className="BroadTitle">{item.name}</label>
                                {item.Subsections.map((subitem, i) => {
                                    return (
                                        <div key={i} className="Subsection closed">
                                            <label key={i} className="SubsectionLabel">{subitem.name}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Layout