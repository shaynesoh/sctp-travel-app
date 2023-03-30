import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

function DeleteTripModal({ show, handleDeleteClose }) {
  return (
    <Modal show={show} onHide={() => handleDeleteClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this trip?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleDeleteClose(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDeleteClose(true)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteTripModal;
