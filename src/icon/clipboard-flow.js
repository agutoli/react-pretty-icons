import React from 'react';
import iconSvg from '../icons/normalized/clipboard-flow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-flow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender