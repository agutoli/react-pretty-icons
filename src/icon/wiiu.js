import React from 'react';
import iconSvg from '../icons/normalized/wiiu.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wiiu" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender