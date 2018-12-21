import React from 'react';
import iconSvg from '../icons/normalized/elephant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__elephant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender