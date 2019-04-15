import React, {useState} from 'react';
import './VisualEditor.css';


const VisualEditor = props => {

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
                        <button key={props.uid + 12}
                                className="VisualEditor_ComboBoxRight_Button VisualButton">Copy
                        </button>
                        <button key={props.uid + 13}
                                className="VisualEditor_ComboBoxRight_Button VisualButton">Paste
                        </button>
                        <button key={props.uid + 14}
                                className="VisualEditor_ComboBoxRight_Button VisualButton">Reset
                        </button>
                        <br key={props.uid + 15}/>
                        <input key={props.uid + 16} className="VisualEditor_ComboBoxRight_Button VisualButton"
                               type="button" value="Sound"/>
                        <button key={props.uid + 17}
                                className="VisualEditor_ComboBoxRight_Button VisualButton">Icon
                        </button>
                        <button key={props.uid + 18}
                                className="VisualEditor_ComboBoxRight_Button VisualButton">Beam
                        </button>
                    </div>
                    <div key={props.uid + 19} className="VisualEditor_ComboBoxLeft">
                        <div key={props.uid + 20} className="VisualEditor_ComboBoxColorPickerDiv">
                            <div key={props.uid + 21}
                                 className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                            <label key={props.uid + 22} className="VisualEditor_ComboBoxLeftLabel">TX</label>
                            <input key={props.uid + 23} type="text" className="SpectrumColorPicker"
                                   style={{display: 'none'}}/>
                            <div key={props.uid + 24} className="sp-replacer sp-light">
                                <div key={props.uid + 25} className="sp-preview">
                                    <div key={props.uid + 26} className="sp-preview-inner"></div>
                                </div>
                                <div key={props.uid + 27} className="sp-dd">▼</div>
                            </div>
                        </div>
                        <div key={props.uid + 28} className="VisualEditor_ComboBoxColorPickerDiv">
                            <div key={props.uid + 29}
                                 className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                            <label key={props.uid + 30} className="VisualEditor_ComboBoxLeftLabel">BD</label>
                            <input key={props.uid + 31} className="SpectrumColorPicker"
                                   style={{display: 'none'}}/>
                            <div key={props.uid + 32} className="sp-replacer sp-light">
                                <div key={props.uid + 33} className="sp-preview">
                                    <div key={props.uid + 34} className="sp-preview-inner"></div>
                                </div>
                                <div key={props.uid + 35} className="sp-dd">▼</div>
                            </div>
                        </div>
                        <div key={props.uid + 36} className="VisualEditor_ComboBoxColorPickerDiv">
                            <div key={props.uid + 37}
                                 className="VisualEditor_ComboBoxEnabledColor selectedSocket"></div>
                            <label key={props.uid + 38} className="VisualEditor_ComboBoxLeftLabel">BG</label>
                            <input key={props.uid + 39} className="SpectrumColorPicker"
                                   style={{display: 'none'}}/>
                            <div key={props.uid + 40} className="sp-replacer sp-light">
                                <div key={props.uid + 41} className="sp-preview">
                                    <div key={props.uid + 42} className="sp-preview-inner"></div>
                                </div>
                                <div key={props.uid + 43} className="sp-dd">▼</div>
                            </div>
                        </div>
                    </div>
                    <div key={props.uid + 44} className="VisualEditorShowCaseDiv">
                        <div key={props.uid + 45} className="VisualEditor_InnerItem">
                            <div key={props.uid + 46} className="InnerItemContainer">
                                <div key={props.uid + 47} className="ItemDiv">
                                    <label key={props.uid + 48} className="ItemTextLabel">Item Name</label>
                                    {/*<div id="ItemSocketsDiv_{{ block.id }}" className="ItemSocketsDiv">

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
};

export default VisualEditor;