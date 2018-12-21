import React from 'react';
import iconSvg from '../icons/normalized/asterisk.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__asterisk" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender