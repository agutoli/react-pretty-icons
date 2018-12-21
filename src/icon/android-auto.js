import React from 'react';
import iconSvg from '../icons/normalized/android-auto.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__android-auto" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender