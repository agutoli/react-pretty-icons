import React from 'react';
import iconSvg from '../icons/normalized/import.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__import" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender