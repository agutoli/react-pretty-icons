import React from 'react';
import iconSvg from '../icons/normalized/wrap-disabled.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wrap-disabled" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender