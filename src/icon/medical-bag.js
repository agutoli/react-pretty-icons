import React from 'react';
import iconSvg from '../icons/normalized/medical-bag.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__medical-bag" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender