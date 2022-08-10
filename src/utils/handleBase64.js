const convertToBase64 = async (file) =>
  new Promise((res, rej) => {
    if (file && (file instanceof Blob || file instanceof ArrayBuffer)) {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = (error) => rej(error);
      reader.readAsDataURL(file);
    } else {
      res(file);
    }
  });

export default convertToBase64;
