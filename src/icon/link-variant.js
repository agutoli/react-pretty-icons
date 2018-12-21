import React from 'react';
import iconSvg from '../icons/normalized/link-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__link-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender