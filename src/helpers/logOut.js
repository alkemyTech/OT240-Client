
const logOut = () => {
    // Implement Redux logout
    sessionStorage.removeItem('token');
};

export default logOut;