import React from 'react';
import iconSvg from '../icons/normalized/seat-legroom-normal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__seat-legroom-normal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender