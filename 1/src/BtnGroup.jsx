import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [leftButtonStatus, handle_left_button] =  useState(false)
  const [rightButtonStatus, handle_right_button] =  useState(false)

  const leftButtonClass = cn("btn btn-secondary left", {"active": leftButtonStatus})
  const rightButtonClass = cn("btn btn-secondary right", {"active": rightButtonStatus})
  return(
    <div class="btn-group" role="group">
      <button type="button" onClick = {() => {
        handle_right_button(false);
        handle_left_button(true);
        }} className={leftButtonClass}>Left</button>
      <button type="button" onClick = {() => {
        handle_right_button(true);
        handle_left_button(false)}}
        className={rightButtonClass}>Right</button>
    </div>
  )
  // END
}
export default BtnGroup