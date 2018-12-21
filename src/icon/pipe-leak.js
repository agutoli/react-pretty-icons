import React from 'react';
import iconSvg from '../icons/normalized/pipe-leak.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pipe-leak" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender