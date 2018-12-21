import React from 'react';
import iconSvg from '../icons/normalized/chair-school.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chair-school" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender