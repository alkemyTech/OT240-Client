const convertToBase64 = async (file) =>
  new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => res(fileReader.result);
    fileReader.onerror = (error) => rej(error);
  });

const readFromBase64 = (image, ref) => {
  if (image && (image instanceof Blob || image instanceof ArrayBuffer)) {
    const reader = new FileReader();
    reader.onload = () => {
      ref.current.style.backgroundImage = `url('${reader.result}')`;
    };
    reader.readAsDataURL(image);
  } else {
    ref.current.style.backgroundImage = `url('${image}')`;
  }
};

export { convertToBase64, readFromBase64 };
