import React, {Component} from 'react';
import './Layout.scss';
import data from '../../../api/headers.json';

function SubSections(props) {
    return (
        <div key={props.i} className="Subsection closed">
            <label key={props.i} className="SubsectionLabel">{props.name}</label>
        </div>
    )
}

function BlockSubSection(props) {
    return (
        <div>
            <label id=""></label>
        </div>
    )
}

function Layout() {
    return (
        <div id="Visual">
            <div id="VisualDiv2">
                {data.Sections.map((item, index) => {
                    return (
                        <div key={index}>
                            <label key={item.id} className="BroadTitle">{item.name}</label>
                            {item.Subsections.map((subitem, i) => {
                                return (
                                    <SubSections name={subitem.name} i={i}/>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Layout