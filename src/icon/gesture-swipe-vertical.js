import React from 'react';
import iconSvg from '../icons/normalized/gesture-swipe-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-swipe-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender