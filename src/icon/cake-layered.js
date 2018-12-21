import React from 'react';
import iconSvg from '../icons/normalized/cake-layered.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cake-layered" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender