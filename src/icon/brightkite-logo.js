import React from 'react';
import iconSvg from '../icons/normalized/brightkite-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__brightkite-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender