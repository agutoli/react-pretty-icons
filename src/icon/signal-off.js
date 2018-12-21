import React from 'react';
import iconSvg from '../icons/normalized/signal-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender