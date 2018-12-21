import React from 'react';
import iconSvg from '../icons/normalized/arto-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arto-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender