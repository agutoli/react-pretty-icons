import React from 'react';
import iconSvg from '../icons/normalized/wists-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wists-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender