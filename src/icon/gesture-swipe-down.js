import React from 'react';
import iconSvg from '../icons/normalized/gesture-swipe-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-swipe-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender