import React from 'react';
import iconSvg from '../icons/normalized/gesture-swipe-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-swipe-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender