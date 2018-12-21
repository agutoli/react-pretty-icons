import React from 'react';
import iconSvg from '../icons/normalized/signal-2g.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal-2g" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender