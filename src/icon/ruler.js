import React from 'react';
import iconSvg from '../icons/normalized/ruler.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ruler" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender