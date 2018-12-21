import React from 'react';
import iconSvg from '../icons/normalized/skype.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__skype" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender