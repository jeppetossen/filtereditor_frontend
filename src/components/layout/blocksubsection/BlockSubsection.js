import React from 'react';
import VisualEditor from '../visualeditor/VisualEditor';

class BlockSubsection extends Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this)
    }


    clickEvent(event) {
        let element = event.target;
        let elementClist = element.classList;
        let targetIdNumber = element.id.split("_")[1];
        let subsectionContent = this.targetElementById(targetIdNumber).classList;

        if (elementClist.contains("closed")) {
            subsectionContent.replace("closed", "open",);
            elementClist.replace("closed", "open",);
        } else if (elementClist.contains("open")) {
            subsectionContent.replace("open", "closed");
            elementClist.replace("open", "closed");
        }
    }

    targetElementById(elementId) {
        return document.getElementById("BlockSubsectionContent_" + elementId);
    }

    render() {
        return (
            <Fragment key={this.props.uid}>
                <div key={this.props.uid + 1} id={"BlockSubsection_" + this.props.uid}
                     className="BlockSubsection closed" onClick={(e) => this.clickEvent(e)}>
                    <label key={this.props.uid + 2} id={"BlockSubsectionLabel_" + this.props.uid}
                           className="BlockSubsectionLabel">{this.props.name}</label>
                </div>
                <div key={this.props.uid + 3} id={"BlockSubsectionContent_" + this.props.uid}
                     className="BlockSubsectionContent closed">
                    {this.props.data.map((item) => {
                        return (
                            <VisualEditor key={item.uid} uid={item.uid} name={item.name}/>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}