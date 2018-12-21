import React from 'react';
import iconSvg from '../icons/normalized/textbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__textbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender