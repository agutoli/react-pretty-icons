import React from 'react';
import iconSvg from '../icons/normalized/fountain.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fountain" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender