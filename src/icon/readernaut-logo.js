import React from 'react';
import iconSvg from '../icons/normalized/readernaut-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__readernaut-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender