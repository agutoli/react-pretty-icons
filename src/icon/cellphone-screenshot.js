import React from 'react';
import iconSvg from '../icons/normalized/cellphone-screenshot.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-screenshot" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender