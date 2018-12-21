import React from 'react';
import iconSvg from '../icons/normalized/stocking.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stocking" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender