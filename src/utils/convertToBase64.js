export const convertToBase64 = async (file) =>
  new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => res(fileReader.result);
    fileReader.onerror = (error) => rej(error);
  });
