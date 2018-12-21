import React from 'react';
import iconSvg from '../icons/normalized/label-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__label-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender