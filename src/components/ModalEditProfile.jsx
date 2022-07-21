import React from "react";

const ModalEditProfile = () => {
    return(
        <div className="modal fade" data-bs-backdrop="static" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfilieModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit data</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="name" class="col-form-label">Name:</label>
                                <input type="text" class="form-control" id="name"/>
                            </div>
                            <div class="mb-3">
                                <label for="lastname" class="col-form-label">Lastname:</label>
                                <input type="text" class="form-control" id="lastname"/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="col-form-label">Email:</label>
                                <input type="email" class="form-control" id="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="image" class="col-form-label">Image:</label>
                                <input type="file" accept="image/x-png,image/jpeg"  class="form-control" id="image"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditProfile;