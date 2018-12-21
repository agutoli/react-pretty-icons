import React from 'react';
import iconSvg from '../icons/normalized/signal-5g.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal-5g" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender