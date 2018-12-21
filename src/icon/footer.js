import React from 'react';
import iconSvg from '../icons/normalized/footer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__footer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender