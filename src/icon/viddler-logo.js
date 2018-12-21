import React from 'react';
import iconSvg from '../icons/normalized/viddler-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__viddler-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender