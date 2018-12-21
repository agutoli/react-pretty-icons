import React from 'react';
import iconSvg from '../icons/normalized/badminton.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__badminton" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender