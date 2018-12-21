import React from 'react';
import iconSvg from '../icons/normalized/babel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__babel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender