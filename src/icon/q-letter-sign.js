import React from 'react';
import iconSvg from '../icons/normalized/q-letter-sign.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__q-letter-sign" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender