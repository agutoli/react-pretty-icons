import React from 'react';
import iconSvg from '../icons/normalized/android-debug-bridge.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__android-debug-bridge" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender