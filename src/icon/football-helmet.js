import React from 'react';
import iconSvg from '../icons/normalized/football-helmet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__football-helmet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender