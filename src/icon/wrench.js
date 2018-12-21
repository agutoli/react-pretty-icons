import React from 'react';
import iconSvg from '../icons/normalized/wrench.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wrench" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender