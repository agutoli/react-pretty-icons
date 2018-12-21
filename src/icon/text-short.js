import React from 'react';
import iconSvg from '../icons/normalized/text-short.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__text-short" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender