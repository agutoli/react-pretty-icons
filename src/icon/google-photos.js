import React from 'react';
import iconSvg from '../icons/normalized/google-photos.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-photos" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender