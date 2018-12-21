import React from 'react';
import iconSvg from '../icons/normalized/playstation-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__playstation-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender