import React from 'react';
import iconSvg from '../icons/normalized/stadium.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stadium" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender