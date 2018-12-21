import React from 'react';
import iconSvg from '../icons/normalized/skype-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__skype-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender