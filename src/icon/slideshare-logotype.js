import React from 'react';
import iconSvg from '../icons/normalized/slideshare-logotype.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__slideshare-logotype" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender