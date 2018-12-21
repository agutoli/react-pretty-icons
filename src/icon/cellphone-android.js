import React from 'react';
import iconSvg from '../icons/normalized/cellphone-android.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-android" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender