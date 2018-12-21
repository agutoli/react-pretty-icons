import React from 'react';
import iconSvg from '../icons/normalized/navigation.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__navigation" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender