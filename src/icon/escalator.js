import React from 'react';
import iconSvg from '../icons/normalized/escalator.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__escalator" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender