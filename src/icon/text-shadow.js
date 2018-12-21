import React from 'react';
import iconSvg from '../icons/normalized/text-shadow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__text-shadow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender