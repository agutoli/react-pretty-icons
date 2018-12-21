import React from 'react';
import iconSvg from '../icons/normalized/dictionary.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dictionary" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender