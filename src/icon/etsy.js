import React from 'react';
import iconSvg from '../icons/normalized/etsy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__etsy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender