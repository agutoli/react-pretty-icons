import React from 'react';
import iconSvg from '../icons/normalized/officialfm-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__officialfm-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender