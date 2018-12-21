import React from 'react';
import iconSvg from '../icons/normalized/scale-bathroom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__scale-bathroom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender