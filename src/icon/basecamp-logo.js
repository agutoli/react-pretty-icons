import React from 'react';
import iconSvg from '../icons/normalized/basecamp-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__basecamp-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender