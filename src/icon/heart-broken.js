import React from 'react';
import iconSvg from '../icons/normalized/heart-broken.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-broken" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender