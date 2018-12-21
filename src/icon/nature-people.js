import React from 'react';
import iconSvg from '../icons/normalized/nature-people.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nature-people" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender