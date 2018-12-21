import React from 'react';
import iconSvg from '../icons/normalized/football.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__football" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender