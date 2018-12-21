import React from 'react';
import iconSvg from '../icons/normalized/counter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__counter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender