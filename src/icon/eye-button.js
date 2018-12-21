import React from 'react';
import iconSvg from '../icons/normalized/eye-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eye-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender