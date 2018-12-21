import React from 'react';
import iconSvg from '../icons/normalized/quora-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__quora-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender