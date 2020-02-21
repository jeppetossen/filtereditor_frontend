import React from 'react'

import './Block.css'

const Block = ({block}) => {
  return (
    <div key={block.id} className={`VisualEditorDiv`}>
      <label className='VisualEditorLabel'>{block.name}</label>
      <div id={'VisualEditorOuterMainContainer_' + block.id}>
        <div className='VisualEditorShowHideDiv'>
          <button className='VisualEditorShow VisualButton'>Show</button>
          <button className='VisualEditorHide VisualButton'>Hide</button>
        </div>
        <div className='VisualEditorContainerDiv'>
          <div className='VisualEditor_ComboBoxRight'>
            <div className='VisualEditor_ComboBoxFontSizeSlider'>
              <div className='FontSizeSliderHandle VisualButton'>36</div>
            </div>
            <br/>
            <button className='VisualEditor_ComboBoxRight_Button VisualButton'>
              Copy
            </button>
            <button className='VisualEditor_ComboBoxRight_Button VisualButton'>
              Paste
            </button>
            <button className='VisualEditor_ComboBoxRight_Button VisualButton'>
              Reset
            </button>
            <br/>
            <input
              className='VisualEditor_ComboBoxRight_Button VisualButton'
              type='button'
              value='Sound'
            />
            <button className='VisualEditor_ComboBoxRight_Button VisualButton'>
              Icon
            </button>
            <button className='VisualEditor_ComboBoxRight_Button VisualButton'>
              Beam
            </button>
          </div>
          <div className='VisualEditor_ComboBoxLeft'>
            <div className='VisualEditor_ComboBoxColorPickerDiv'>
              <div className='VisualEditor_ComboBoxEnabledColor selectedSocket'></div>
              <label className='VisualEditor_ComboBoxLeftLabel'>TX</label>
              <input
                type='text'
                className='SpectrumColorPicker'
                style={{display: 'none'}}
              />
              <div className='sp-replacer sp-light'>
                <div className='sp-preview'>
                  <div className='sp-preview-inner'></div>
                </div>
                <div className='sp-dd'>▼</div>
              </div>
            </div>
            <div className='VisualEditor_ComboBoxColorPickerDiv'>
              <div className='VisualEditor_ComboBoxEnabledColor selectedSocket'></div>
              <label className='VisualEditor_ComboBoxLeftLabel'>BD</label>
              <input
                className='SpectrumColorPicker'
                style={{display: 'none'}}
              />
              <div className='sp-replacer sp-light'>
                <div className='sp-preview'>
                  <div className='sp-preview-inner'></div>
                </div>
                <div className='sp-dd'>▼</div>
              </div>
            </div>
            <div className='VisualEditor_ComboBoxColorPickerDiv'>
              <div className='VisualEditor_ComboBoxEnabledColor selectedSocket'></div>
              <label className='VisualEditor_ComboBoxLeftLabel'>BG</label>
              <input
                className='SpectrumColorPicker'
                style={{display: 'none'}}
              />
              <div className='sp-replacer sp-light'>
                <div className='sp-preview'>
                  <div className='sp-preview-inner'></div>
                </div>
                <div className='sp-dd'>▼</div>
              </div>
            </div>
          </div>
          <div className='VisualEditorShowCaseDiv'>
            <div className='VisualEditor_InnerItem'>
              <div className='InnerItemContainer'>
                <div className='ItemDiv'>
                  <label className='ItemTextLabel'>Item Name</label>
                  {/*<div id="ItemSocketsDiv_{{ block.id }}" className="ItemSocketsDiv"></div>*/}
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

export default Block
