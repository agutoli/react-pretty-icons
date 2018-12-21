import React from 'react';
import iconSvg from '../icons/normalized/gesture-spread.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-spread" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender