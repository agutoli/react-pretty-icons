import React from 'react';
import iconSvg from '../icons/normalized/sunglasses.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sunglasses" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender