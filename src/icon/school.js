import React from 'react';
import iconSvg from '../icons/normalized/school.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__school" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender