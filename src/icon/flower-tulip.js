import React from 'react';
import iconSvg from '../icons/normalized/flower-tulip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flower-tulip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender