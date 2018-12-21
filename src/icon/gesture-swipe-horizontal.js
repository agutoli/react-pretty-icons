import React from 'react';
import iconSvg from '../icons/normalized/gesture-swipe-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-swipe-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender