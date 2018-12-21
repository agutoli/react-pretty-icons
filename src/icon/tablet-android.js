import React from 'react';
import iconSvg from '../icons/normalized/tablet-android.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tablet-android" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender