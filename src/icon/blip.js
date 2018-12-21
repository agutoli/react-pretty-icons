import React from 'react';
import iconSvg from '../icons/normalized/blip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender