import React from 'react';
import iconSvg from '../icons/normalized/facebook-workplace.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__facebook-workplace" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender