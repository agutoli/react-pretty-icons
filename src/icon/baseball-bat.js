import React from 'react';
import iconSvg from '../icons/normalized/baseball-bat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__baseball-bat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender