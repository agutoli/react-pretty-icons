import React from 'react';
import iconSvg from '../icons/normalized/tennis.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tennis" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender