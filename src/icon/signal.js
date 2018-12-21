import React from 'react';
import iconSvg from '../icons/normalized/signal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender