import React from 'react';
import iconSvg from '../icons/normalized/box-shadow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__box-shadow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender