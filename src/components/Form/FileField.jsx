import React from 'react';

import { readFromBase64 } from '../../utils/convertToBase64';

const FileField = ({ field, label, value, setState, style }) => {
  const imgPreviewRef = React.useRef();

  React.useEffect(() => {
    readFromBase64(value, imgPreviewRef);
  });

  return (
    <>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input
        type='file'
        id={label}
        onChange={(e) => {
          const { files } = e.target;
          setState((prev) => ({ ...prev, [field]: files[0] }));
          readFromBase64(files[0], imgPreviewRef);
        }}
      />
      <div ref={imgPreviewRef} className={style.imgPreview}></div>
    </>
  );
};

export default FileField;
