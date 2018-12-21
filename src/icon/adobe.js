import React from 'react';
import iconSvg from '../icons/normalized/adobe.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__adobe" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender