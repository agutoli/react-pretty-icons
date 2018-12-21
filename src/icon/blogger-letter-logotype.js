import React from 'react';
import iconSvg from '../icons/normalized/blogger-letter-logotype.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blogger-letter-logotype" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender