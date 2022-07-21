import React from "react";
import ModalEditProfile from "../components/ModalEditProfile";
import ModalDeleteProfile from "../components/ModalDeleteProfile";

const Profile = () => {
    return(
        <div className="bg-primary vh-100">
            <div className="container d-flex flex-column align-items-center justify-content-center h-100 p-5">
                <img src="https://acortar.link/RazRlW" alt="Profile" className="h-25 rounded-circle position-absolute top-0 mt-5 border border-5 border-info"/>
                <div className="h-75 col-12 col-md-10 col-lg-8 col-xl-6 bg-secondary pt-5 rounded">
                    <br />
                    <h6 className="mt-5 text-center text-uppercase lead">MUHAMMED ARAFAT</h6>
                    <p className="text-center mt-3 mb-3 font-monospace">muhammed@gmail.com</p>
                    <div className="d-flex flex-column justify-content-around align-items-center h-50 w-50 mx-auto">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#editProfileModal" className="rounded h-25 bg-warning border-warning text-white col-12 col-md-10 col-lg-8 col-xl-6">Edit data</button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#deleteProfileModal" className="rounded h-25 bg-danger border-danger text-white col-12 col-md-10 col-lg-8 col-xl-6">Delete account</button>
                    </div>
                </div>

            </div>
            <ModalEditProfile/>
            <ModalDeleteProfile/>
        </div>
    )
}

export default Profile;