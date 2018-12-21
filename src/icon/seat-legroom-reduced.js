import React from 'react';
import iconSvg from '../icons/normalized/seat-legroom-reduced.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__seat-legroom-reduced" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender