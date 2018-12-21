import React from 'react';
import iconSvg from '../icons/normalized/near-me.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__near-me" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender