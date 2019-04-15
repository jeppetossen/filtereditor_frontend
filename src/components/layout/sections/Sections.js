import React, {Fragment, useState} from 'react';
import './Sections.css';
import data from '../../../api/headers.json';
import Subsections from '../subsections/Subsections';


function Sections() {
    return (
        <Fragment>
            <div key={1} id="Visual">
                <div key={2} id="VisualDiv2">
                    {data.sections.map((item) => {
                        return (
                            <Fragment key={item.uid}>
                                <label key={item.uid + 1} className="BroadTitle">{item.name}</label>
                                {item.subsections.map((subitem) => {
                                    return (
                                        <Fragment key={subitem.uid + 2}>
                                            <Subsections data={subitem} key={subitem.uid + 3} uid={subitem.uid}
                                                         name={subitem.name}
                                                         editor={subitem.editor}/>
                                        </Fragment>
                                    )
                                })}
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Sections;