import React from 'react';
import iconSvg from '../icons/normalized/material-ui.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__material-ui" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender