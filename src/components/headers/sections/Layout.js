import React, {Component, Fragment} from 'react';
import './Layout.scss';
import data from '../../../../src/api/headers.json';


function VisualEditor(props) {
    return (
        <div key={props.uid} className="VisualEditorDiv">
            <label key={props.uid + 1} className="VisualEditorLabel">{props.name}</label>
            <div key={props.uid + 2} id={"VisualEditorOuterMainContainer_" + props.uid + 2}>
                <div key={props.uid + 4} className="VisualEditorShowHideDiv">
                    <button key={props.uid + 5} className="VisualEditorShow VisualButton">Show</button>
                    <button key={props.uid + 6} className="VisualEditorHide VisualButton">Hide</button>
                </div>
                <div key={props.uid + 7} className="VisualEditorContainerDiv">
                    <div key={props.uid + 8} className="VisualEditor_ComboBoxRight">
                        <div key={props.uid + 9} className="VisualEditor_ComboBoxFontSizeSlider">
                            <div key={props.uid + 10} className="FontSizeSliderHandle VisualButton">36</div>
                        </div>
                        <br key={props.uid + 11}/>
                        <button key={props.uid + 12} className="VisualEditor_ComboBoxRight_Button VisualButton">Copy
                        </button>
                        <button key={props.uid + 13} className="VisualEditor_ComboBoxRight_Button VisualButton">Paste
                        </button>
                        <button key={props.uid + 14} className="VisualEditor_ComboBoxRight_Button VisualButton">Reset
                        </button>
                        <br key={props.uid + 15}/>
                        {/*<input key={props.uid} className="VisualEditor_ComboBoxRight_Button VisualButton"
                                   type="button" value="Sound"/>*/}
                        <button key={props.uid + 16} className="VisualEditor_ComboBoxRight_Button VisualButton">Icon
                        </button>
                        <button key={props.uid + 17} className="VisualEditor_ComboBoxRight_Button VisualButton">Beam
                        </button>
                    </div>
                    <div key={props.uid + 18} className="VisualEditor_ComboBoxLeft">
                        <div key={props.uid + 19} className="VisualEditor_ComboBoxColorPickerDiv">
                            <div key={props.uid + 20}
                                 className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                            <label key={props.uid + 21} className="VisualEditor_ComboBoxLeftLabel">TX</label>
                            {/*<input key={props.uid} type="text" className="SpectrumColorPicker" style="display: none;" />*/}
                            {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                        </div>
                        <div key={props.uid + 22} className="VisualEditor_ComboBoxColorPickerDiv">
                            <div key={props.uid + 23}
                                 className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                            <label key={props.uid + 24} className="VisualEditor_ComboBoxLeftLabel">BD</label>
                            {/*<input key={props.uid} className="SpectrumColorPicker" style="display: none;" />*/}
                            {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                        </div>
                        <div key={props.uid + 25} className="VisualEditor_ComboBoxColorPickerDiv">
                            <div key={props.uid + 26}
                                 className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                            <label key={props.uid + 27} className="VisualEditor_ComboBoxLeftLabel">BG</label>
                            {/*<input key={props.uid} className="SpectrumColorPicker" style="display: none;" />*/}
                            {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                        </div>
                    </div>
                    <div key={props.uid + 28} className="VisualEditorShowCaseDiv">
                        <div key={props.uid + 29} className="VisualEditor_InnerItem">
                            <div key={props.uid + 30} className="InnerItemContainer">
                                <div key={props.uid + 31} className="ItemDiv">
                                    <label key={props.uid + 32} className="ItemTextLabel">Item Name</label>
                                    {/*<div id="ItemSocketsDiv_{{ block.id }}" class="ItemSocketsDiv">

                                        </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

function AccordionCondition(props) {
    if (props.editor === "True") {
        return (
            <Fragment key={props.uid}>
                {props.data.Blocks.map((item) => {
                    return (
                        <VisualEditor key={item.uid} uid={item.uid} name={item.name}/>
                    )
                })}
            </Fragment>
        )

    } else if (props.editor === "False") {
        return (
            <Fragment>
                {props.data.BlockSections.map((item) => {
                    return (
                        <BlockSubsection key={item.uid} uid={item.uid} data={item.Blocks} name={item.name}/>
                    )
                })}
            </Fragment>
        )
    }
}

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

class SubSections extends Component {
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
            subsectionContent.replace("closed", "open",);
            elementClist.replace("closed", "open",);
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
}

function Layout() {
    return (
        <div key={0} id="Visual">
            <div key={1} id="VisualDiv2">
                {data.Sections.map((item) => {
                    return (
                        <Fragment key={item.uid}>
                            <label key={item.uid + 1} className="BroadTitle">{item.name}</label>
                            {item.Subsections.map((subitem) => {
                                return (
                                    <Fragment key={subitem.uid + 2}>
                                        <SubSections data={subitem} key={subitem.uid + 3} uid={subitem.uid}
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
    )
}

export default Layout