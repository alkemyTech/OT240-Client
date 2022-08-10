import React from 'react';

import convertToBase64 from '../../utils/handleBase64';

const FileField = ({ field, label, value, setState, style }) => {
  const imgPreviewRef = React.useRef();

  const handlePreview = async (image) => {
    const result = await convertToBase64(image);
    imgPreviewRef.current.style.backgroundImage = `url('${result}')`;
  };

  React.useEffect(() => {
    handlePreview(value);
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
          handlePreview(files[0]);
        }}
      />
      <div ref={imgPreviewRef} className={style.imgPreview}></div>
    </>
  );
};

export default FileField;
