import React from 'react';
import iconSvg from '../icons/normalized/directions-signs-outlines.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__directions-signs-outlines" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender