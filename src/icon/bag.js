import React from 'react';
import iconSvg from '../icons/normalized/bag.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bag" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender