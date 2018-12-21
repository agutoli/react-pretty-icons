import React from 'react';
import iconSvg from '../icons/normalized/happy-mac-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__happy-mac-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender