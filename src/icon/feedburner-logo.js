import React from 'react';
import iconSvg from '../icons/normalized/feedburner-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__feedburner-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender