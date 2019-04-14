import React, {Fragment, useState} from "react";


const AccordionCondition = props => {
    if (props.editor === "True") {
        return (
            <Fragment key={props.uid}>
                {props.data.blocks.map((item) => {
                    return (
                        <VisualEditor key={item.uid} uid={item.uid} name={item.name}/>
                    )
                })}
            </Fragment>
        )

    } else if (props.editor === "False") {
        return (
            <Fragment>
                {props.data.blocksections.map((item) => {
                    return (
                        <BlockSubsection key={item.uid} uid={item.uid} data={item.blocks} name={item.name}/>
                    )
                })}
            </Fragment>
        )
    }
};


/*function AccordionCondition(props) {
    if (props.editor === "True") {
        return (
            <Fragment key={props.uid}>
                {props.data.blocks.map((item) => {
                    return (
                        <VisualEditor key={item.uid} uid={item.uid} name={item.name}/>
                    )
                })}
            </Fragment>
        )

    } else if (props.editor === "False") {
        return (
            <Fragment>
                {props.data.blocksections.map((item) => {
                    return (
                        <BlockSubsection key={item.uid} uid={item.uid} data={item.blocks} name={item.name}/>
                    )
                })}
            </Fragment>
        )
    }
}*/


const Subsections = props => {

    function targetElementById(elementId) {
        return document.getElementById("SubsectionBlockContent_" + elementId);
    }

    function clickEvent(event) {
        let element = event.target;
        let elementClist = element.classList;
        let targetIdNumber = element.id.split("_")[1];
        let subsectionContent = targetElementById(targetIdNumber).classList;

        if (elementClist.contains("closed")) {
            subsectionContent.replace("closed", "open");
            elementClist.replace("closed", "open");
        } else if (elementClist.contains("open")) {
            subsectionContent.replace("open", "closed");
            elementClist.replace("open", "closed");
        }
    }

    function render() {
        return (
            <Fragment key={props.uid}>
                <div key={props.uid + 1} id={"Subsection_" + props.uid} className="Subsection closed"
                     onClick={(e) => clickEvent(e)}>
                    <label key={props.uid + 2} id={"SubsectionLabel_" + props.uid}
                           className="SubsectionLabel">{props.name}</label>
                </div>
                <div key={props.uid + 3} id={"SubsectionBlockContent_" + props.uid}
                     className="SubsectionBlockContent closed">
                    <AccordionCondition data={props.data} key={props.uid} uid={props.uid}
                                        name={props.name}
                                        editor={props.editor}/>
                </div>
            </Fragment>
        )
    }
};


export default Subsections;


/*class Subsections extends Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this);
    }


    clickEvent(event) {
        let element = event.target;
        let elementClist = element.classList;
        let targetIdNumber = element.id.split("_")[1];
        let subsectionContent = this.targetElementById(targetIdNumber).classList;

        if (elementClist.contains("closed")) {
            subsectionContent.replace("closed", "open");
            elementClist.replace("closed", "open");
        } else if (elementClist.contains("open")) {
            subsectionContent.replace("open", "closed");
            elementClist.replace("open", "closed");
        }
    }

    targetElementById(elementId) {
        return document.getElementById("SubsectionBlockContent_" + elementId);
    }

    render() {
        return (
            <Fragment key={this.props.uid}>
                <div key={this.props.uid + 1} id={"Subsection_" + this.props.uid} className="Subsection closed"
                     onClick={(e) => this.clickEvent(e)}>
                    <label key={this.props.uid + 2} id={"SubsectionLabel_" + this.props.uid}
                           className="SubsectionLabel">{this.props.name}</label>
                </div>
                <div key={this.props.uid + 3} id={"SubsectionBlockContent_" + this.props.uid}
                     className="SubsectionBlockContent closed">
                    <AccordionCondition data={this.props.data} key={this.props.uid} uid={this.props.uid}
                                        name={this.props.name}
                                        editor={this.props.editor}/>
                </div>
            </Fragment>
        )
    }
}*/