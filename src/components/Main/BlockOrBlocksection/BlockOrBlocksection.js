import React from 'react';
import {connect} from "react-redux";

import Block from "../Block";
import BlockSection from "../BlockSection/BlockSection";

const BlockAndBlocksection = props => {
  return (
    <React.Fragment>
      <React.Fragment>
        {props.blocksections.map(block_section => {
          if (props.subsection.name === block_section.parent) {
            return <BlockSection block_section={block_section}/>
          } else return null
        })}
      </React.Fragment>
      <React.Fragment>
        {props.blocks.map(block => {
          if (props.subsection.name === block.parent) {
            return <Block block={block}/>
          } else return null
        })}
      </React.Fragment>
    </React.Fragment>
  )
}

export default connect(
  state => ({
    blocksections: state.blocksections,
    blocks: state.blocks
  }),
  dispatch => ({})
)(BlockAndBlocksection)