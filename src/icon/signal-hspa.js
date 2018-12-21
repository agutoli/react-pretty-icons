import React from 'react';
import iconSvg from '../icons/normalized/signal-hspa.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal-hspa" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender