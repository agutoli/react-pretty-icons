import React from 'react';
import iconSvg from '../icons/normalized/roboto-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__roboto-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender