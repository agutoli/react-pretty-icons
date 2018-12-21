import React from 'react';
import iconSvg from '../icons/normalized/clipboard-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender