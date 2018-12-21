import React from 'react';
import iconSvg from '../icons/normalized/logout-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__logout-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender