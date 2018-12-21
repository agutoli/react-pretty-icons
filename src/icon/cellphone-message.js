import React from 'react';
import iconSvg from '../icons/normalized/cellphone-message.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-message" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender