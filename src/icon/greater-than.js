import React from 'react';
import iconSvg from '../icons/normalized/greater-than.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__greater-than" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender