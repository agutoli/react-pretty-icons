import React from 'react';
import iconSvg from '../icons/normalized/gesture-tap.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-tap" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender