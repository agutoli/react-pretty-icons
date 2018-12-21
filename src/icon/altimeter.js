import React from 'react';
import iconSvg from '../icons/normalized/altimeter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__altimeter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender