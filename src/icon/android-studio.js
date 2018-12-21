import React from 'react';
import iconSvg from '../icons/normalized/android-studio.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__android-studio" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender