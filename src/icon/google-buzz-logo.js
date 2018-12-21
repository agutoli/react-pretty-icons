import React from 'react';
import iconSvg from '../icons/normalized/google-buzz-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-buzz-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender