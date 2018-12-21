import React from 'react';
import iconSvg from '../icons/normalized/flag-checkered-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flag-checkered-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender