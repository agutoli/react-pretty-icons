import React from 'react';
import iconSvg from '../icons/normalized/gesture-pinch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-pinch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender