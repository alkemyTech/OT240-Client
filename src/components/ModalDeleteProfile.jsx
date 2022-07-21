import React from "react";

const ModalDeleteProfile = () => {
    return(
        <React.Fragment>
            <div className="modal fade" data-bs-backdrop="static" id="deleteProfileModal" tabIndex="-1" aria-labelledby="deleteProfileModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Are you sure you want to delete your account?</h5>
                            <p><strong>Note: </strong>This action will be irreversible</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalDeleteProfile;