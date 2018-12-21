import React from 'react';
import iconSvg from '../icons/normalized/tab-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tab-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender