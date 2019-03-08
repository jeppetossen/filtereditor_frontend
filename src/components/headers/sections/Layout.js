import React from 'react';
import './Layout.scss';
import data from '../../../api/headers.json';

function AccordionCondition(props) {
    if (props.editor === "True") {

    } else if (props.editor === "False") {

    }
}

function SubSections(props) {
    return (
        <div>
            <div key={props.id} className="Subsection closed">
                <label key={props.id} className="SubsectionLabel">{props.name}</label>
            </div>
            <div className="SubsectionBlockContent closed">
                <AccordionCondition editor=""/>
            </div>
        </div>
    )
}

function VisualEditor(props) {
    return (
        <div className="VisualEditorDiv">
            <label className="VisualEditorLabel">{props.name}</label>
            <div>
                <form method="POST">
                    <div className="VisualEditorShowHideDiv">
                        <button className="VisualEditorShow VisualButton">Show</button>
                        <button className="VisualEditorHide VisualButton">Hide</button>
                    </div>
                    <div className="VisualEditorContainerDiv">
                        <div className="VisualEditor_ComboBoxRight">
                            <div className="VisualEditor_ComboBoxFontSizeSlider">
                                <div className="FontSizeSliderHandle VisualButton">36</div>
                            </div>
                            <br />
                            <button className="VisualEditor_ComboBoxRight_Button VisualButton">Copy</button>
                            <button className="VisualEditor_ComboBoxRight_Button VisualButton">Paste</button>
                            <button className="VisualEditor_ComboBoxRight_Button VisualButton">Reset</button>
                            <br />
                            <input className="VisualEditor_ComboBoxRight_Button VisualButton" type="button" value="Sound" />
                            <button className="VisualEditor_ComboBoxRight_Button VisualButton">Icon</button>
                            <button className="VisualEditor_ComboBoxRight_Button VisualButton">Beam</button>
                        </div>
                        <div className="VisualEditor_ComboBoxLeft">
                            <div className="VisualEditor_ComboBoxColorPickerDiv">
                                <div className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                                <label className="VisualEditor_ComboBoxLeftLabel">TX</label>
                                <input type="text" className="SpectrumColorPicker" style="display: none;" />
                                {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                            </div>
                            <div className="VisualEditor_ComboBoxColorPickerDiv">
                                <div className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                                <label className="VisualEditor_ComboBoxLeftLabel">BD</label>
                                <input className="SpectrumColorPicker" style="display: none;" />
                                {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                            </div>
                            <div className="VisualEditor_ComboBoxColorPickerDiv">
                                <div className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                                <label className="VisualEditor_ComboBoxLeftLabel">BG</label>
                                <input className="SpectrumColorPicker" style="display: none;" />
                                {/*<div class="sp-replacer sp-light">
                                    <div class="sp-preview">
                                        <div class="sp-preview-inner"></div>
                                    </div>
                                    <div class="sp-dd">▼</div>
                                </div>*/}
                            </div>
                        </div>
                        <div className="VisualEditorShowCaseDiv">
                            <div className="VisualEditor_InnerItem">
                                <div className="InnerItemContainer">
                                    <div className="ItemDiv">
                                        <label className="ItemTextLabel">Item Name</label>
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
        <div key={props.id}>
            <div className="BlockSubsection closed">
                <label className="BlockSubsectionLabel">{props.name}</label>
            </div>
            <div className="BlockSubsectionContent closed">
                <VisualEditor />
            </div>
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
                                    <SubSections name={subitem.name} id={i}/>
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