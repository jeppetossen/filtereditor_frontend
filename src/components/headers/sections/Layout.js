import React, {Component, Fragment} from 'react';
import './Layout.scss';
import data from '../../../api/headers.json';

//import '../../../main.js'


function VisualEditor(props) {
    return (
        <div key={props.uid} className="VisualEditorDiv">
            <label key={props.uid} className="VisualEditorLabel">{props.name}</label>
            <div key={props.uid}>
                <form key={props.uid} method="POST">
                    <div key={props.uid} className="VisualEditorShowHideDiv">
                        <button key={props.uid} className="VisualEditorShow VisualButton">Show</button>
                        <button key={props.uid} className="VisualEditorHide VisualButton">Hide</button>
                    </div>
                    <div key={props.uid} className="VisualEditorContainerDiv">
                        <div key={props.uid} className="VisualEditor_ComboBoxRight">
                            <div key={props.uid} className="VisualEditor_ComboBoxFontSizeSlider">
                                <div key={props.uid} className="FontSizeSliderHandle VisualButton">36</div>
                            </div>
                            <br key={props.uid}/>
                            <button key={props.uid} className="VisualEditor_ComboBoxRight_Button VisualButton">Copy
                            </button>
                            <button key={props.uid} className="VisualEditor_ComboBoxRight_Button VisualButton">Paste
                            </button>
                            <button key={props.uid} className="VisualEditor_ComboBoxRight_Button VisualButton">Reset
                            </button>
                            <br key={props.uid}/>
                            {/*<input key={props.uid} className="VisualEditor_ComboBoxRight_Button VisualButton"
                                   type="button" value="Sound"/>*/}
                            <button key={props.uid} className="VisualEditor_ComboBoxRight_Button VisualButton">Icon
                            </button>
                            <button key={props.uid} className="VisualEditor_ComboBoxRight_Button VisualButton">Beam
                            </button>
                        </div>
                        <div key={props.uid} className="VisualEditor_ComboBoxLeft">
                            <div key={props.uid} className="VisualEditor_ComboBoxColorPickerDiv">
                                <div key={props.uid} className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                                <label key={props.uid} className="VisualEditor_ComboBoxLeftLabel">TX</label>
                                {/*<input key={props.uid} type="text" className="SpectrumColorPicker" style="display: none;" />*/}
                                {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                            </div>
                            <div key={props.uid} className="VisualEditor_ComboBoxColorPickerDiv">
                                <div key={props.uid} className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                                <label key={props.uid} className="VisualEditor_ComboBoxLeftLabel">BD</label>
                                {/*<input key={props.uid} className="SpectrumColorPicker" style="display: none;" />*/}
                                {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                            </div>
                            <div key={props.uid} className="VisualEditor_ComboBoxColorPickerDiv">
                                <div key={props.uid} className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                                <label key={props.uid} className="VisualEditor_ComboBoxLeftLabel">BG</label>
                                {/*<input key={props.uid} className="SpectrumColorPicker" style="display: none;" />*/}
                                {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                            </div>
                        </div>
                        <div key={props.uid} className="VisualEditorShowCaseDiv">
                            <div key={props.uid} className="VisualEditor_InnerItem">
                                <div key={props.uid} className="InnerItemContainer">
                                    <div key={props.uid} className="ItemDiv">
                                        <label key={props.uid} className="ItemTextLabel">Item Name</label>
                                        {/*<div id="ItemSocketsDiv_{{ block.id }}" class="ItemSocketsDiv">

                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <br />
        </div>
    )
}

function BlockSubsection(props) {
    return (
        <Fragment key={props.uid}>
            <div key={props.uid} id={"BlockSubsection_"+props.uid} className="BlockSubsection closed">
                <label key={props.uid} id={"BlockSubsectionLabel_"+props.uid} className="BlockSubsectionLabel">{props.name}</label>
            </div>
            <div key={props.uid} id={"BlockSubsectionContent_"+props.uid} className="BlockSubsectionContent closed">
                <VisualEditor key={props.uid} id={props.uid} name={props.name}/>
            </div>
        </Fragment>
    )
}

function AccordionCondition(props) {
    if (props.editor === "True") {
        return (
            <Fragment key={props.uid}>
                {props.data.Blocks.map((item) => {
                    return (
                        <VisualEditor key={item.uid} id={item.uid} name={item.name}/>
                    )
                })}
            </Fragment>
        )

    } else if (props.editor === "False") {
        return (
            <Fragment>
                {props.data.BlockSections.map((item) => {
                    return (
                        <BlockSubsection key={item.uid} id={item.uid} name={item.name}/>
                    )
                })}
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
        console.log(event.target);
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
                <div key={this.props.uid} id={"Subsection_" + this.props.uid} className="Subsection closed" onClick={(e) => this.clickEvent(e)}>
                    <label key={this.props.uid} id={"SubsectionLabel_"+this.props.uid} className="SubsectionLabel">{this.props.name}</label>
                </div>
                <div key={this.props.uid} id={"SubsectionBlockContent_"+this.props.uid} className="SubsectionBlockContent closed">
                    <AccordionCondition data={this.props.data} key={this.props.uid} id={this.props.uid} name={this.props.name}
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
                            <label key={item.uid} className="BroadTitle">{item.name}</label>
                            {item.Subsections.map((subitem) => {
                                return (
                                    <Fragment key={subitem.uid}>
                                        <SubSections data={subitem} key={subitem.uid} uid={subitem.uid} name={subitem.name}
                                                     editor={subitem.editor} />
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