import React from 'react';
import iconSvg from '../icons/normalized/picture.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__picture" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender