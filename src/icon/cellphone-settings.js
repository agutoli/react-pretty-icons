import React from 'react';
import iconSvg from '../icons/normalized/cellphone-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender