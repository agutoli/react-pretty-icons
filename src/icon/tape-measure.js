import React from 'react';
import iconSvg from '../icons/normalized/tape-measure.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tape-measure" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender