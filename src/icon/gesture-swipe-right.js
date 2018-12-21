import React from 'react';
import iconSvg from '../icons/normalized/gesture-swipe-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-swipe-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender