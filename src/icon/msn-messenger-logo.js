import React from 'react';
import iconSvg from '../icons/normalized/msn-messenger-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__msn-messenger-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender