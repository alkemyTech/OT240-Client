import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/Form.module.scss';

import convertToBase64 from '../../utils/handleBase64';
import { formField } from '../../redux/actions/form.actions';

const FileField = ({ field }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.fields[field]);
  const imgPreviewRef = React.useRef();

  const handlePreview = async (image) => {
    const result = await convertToBase64(image);
    imgPreviewRef.current.style.backgroundImage = `url('${result}')`;
  };

  React.useEffect(() => {
    handlePreview(value);
  }, [value]);

  const onChange = async (e) => {
    const { files } = e.target;
    const toBase64 = await convertToBase64(files[0]);
    dispatch(formField({ [field]: toBase64 }));
  };

  return (
    <>
      <input type='file' id={field} onChange={onChange} />
      <div ref={imgPreviewRef} className={style.imgPreview}></div>
    </>
  );
};

export default FileField;
