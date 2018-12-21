import React from 'react';
import iconSvg from '../icons/normalized/image-broken.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-broken" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender