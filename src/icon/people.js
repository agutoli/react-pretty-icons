import React from 'react';
import iconSvg from '../icons/normalized/people.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__people" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender