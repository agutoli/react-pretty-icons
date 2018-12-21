import React from 'react';
import iconSvg from '../icons/normalized/humble-bundle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__humble-bundle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender