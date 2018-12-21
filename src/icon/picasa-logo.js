import React from 'react';
import iconSvg from '../icons/normalized/picasa-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__picasa-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender