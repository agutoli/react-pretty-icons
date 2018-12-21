import React from 'react';
import iconSvg from '../icons/normalized/text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender