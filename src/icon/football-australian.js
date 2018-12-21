import React from 'react';
import iconSvg from '../icons/normalized/football-australian.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__football-australian" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender