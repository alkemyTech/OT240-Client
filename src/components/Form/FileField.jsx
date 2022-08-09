import React from 'react';

import { convertToBase64 } from '../../utils/convertToBase64';

const FileField = ({ field, name, value, setState, style }) => {
  const imgPreviewRef = React.useRef();

  const handlePreview = (image) => {
    if (image && (image instanceof Blob || image instanceof ArrayBuffer)) {
      const reader = new FileReader();
      reader.onload = () => {
        imgPreviewRef.current.style.backgroundImage = `url('${reader.result}')`;
      };
      reader.readAsDataURL(image);
    } else {
      imgPreviewRef.current.style.backgroundImage = `url('${image}')`;
    }
  };

  React.useEffect(() => {
    handlePreview(value);
  });

  return (
    <>
      <label className={style.label} htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        type='file'
        id={name}
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
