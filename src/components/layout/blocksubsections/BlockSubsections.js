import React, {Fragment} from 'react';
import './BlockSubsections.css';
import VisualEditor from '../visualeditor/VisualEditor';


const BlockSubsections = props => {

    function targetElementById(elementId) {
        return document.getElementById("BlockSubsectionContent_" + elementId);
    }

    function clickEvent(event) {
        let element = event.target;
        let elementClist = element.classList;
        let targetIdNumber = element.id.split("_")[1];
        let subsectionContent = targetElementById(targetIdNumber).classList;

        if (elementClist.contains("closed")) {
            subsectionContent.replace("closed", "open",);
            elementClist.replace("closed", "open",);
        } else if (elementClist.contains("open")) {
            subsectionContent.replace("open", "closed");
            elementClist.replace("open", "closed");
        }
    }

    return (
        <Fragment key={props.uid}>
            <div key={props.uid + 1} id={"BlockSubsection_" + props.uid}
                 className="BlockSubsection closed" onClick={(e) => clickEvent(e)}>
                <label key={props.uid + 2} id={"BlockSubsectionLabel_" + props.uid}
                       className="BlockSubsectionLabel">{props.name}</label>
            </div>
            <div key={props.uid + 3} id={"BlockSubsectionContent_" + props.uid}
                 className="BlockSubsectionContent closed">
                {props.data.map((item) => {
                    return (
                        <VisualEditor key={item.uid} uid={item.uid} name={item.name}/>
                    )
                })}
            </div>
        </Fragment>
    )
};

export default BlockSubsections;