import React from 'react';
import iconSvg from '../icons/normalized/signal-3g.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal-3g" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender