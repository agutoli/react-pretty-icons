import React from 'react';
import iconSvg from '../icons/normalized/barley-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__barley-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender