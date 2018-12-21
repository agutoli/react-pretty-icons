import React from 'react';
import iconSvg from '../icons/normalized/cellphone-dock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-dock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender