import React from 'react';
import iconSvg from '../icons/normalized/signal-hspa-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__signal-hspa-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender