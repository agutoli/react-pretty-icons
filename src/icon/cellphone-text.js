import React from 'react';
import iconSvg from '../icons/normalized/cellphone-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender