import React from 'react';
import iconSvg from '../icons/normalized/dropbox-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dropbox-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender