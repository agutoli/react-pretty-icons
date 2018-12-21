import React from 'react';
import iconSvg from '../icons/normalized/fax.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fax" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender