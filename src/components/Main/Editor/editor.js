import React from 'react';
import { connect } from 'react-redux'

import Block from "../Block";
import {selectedBlocksectionAction as selectedBlocksection} from "../../../Actions/selected_blocksection";

const Editor = ({blocks, selected_block_section, selected_subsection, d_selected_block_section}) => {
  return (
    blocks.map(block => {
      if (block.parent === selected_block_section) {
        return (
          <Block block={block}/>
        )
      } else if (block.parent === selected_subsection) {
          d_selected_block_section(null)
          return (<Block block={block} />)
      } else return null
    })
  )
}

const mapStateToProps = state => ({
  selected_subsection: state.selectedSubsection,
  selected_block_section: state.selectedBlocksection,
  blocks: state.blocks
})

const mapDispatchToProps = dispatch => {
  return {
    d_selected_block_section: name => {
      dispatch(selectedBlocksection(name))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)