import React from 'react';
import iconSvg from '../icons/normalized/signal-4g.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal-4g" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender