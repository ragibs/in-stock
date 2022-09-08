import "./DeleteModal.scss";
import axios from "axios";
import { useEffect } from "react";

function DeleteModal({ setDeleteModal, deleteWarehouse }) {
  const cancelHandler = () => {
    //if we click on X or cancel, the modal will close
    setDeleteModal(false);
  };
  const deleteHandler = () => {
    console.log(deleteWarehouse[0], deleteWarehouse[1]);
    axios
      .delete(`http://localhost:8080/warhouses/${deleteWarehouse[1]}`)
      .then((response) => alert("Warehouse delete successful"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="deleteModal-bg">
      <div className="deleteModal-container">
        <div className="deleteModal__top-container">
          <button onClick={cancelHandler} className="deleteModal__close-btn">
            X
          </button>
          <div className="deleteModal__text-container">
            <h1 className="deleteModal__title">
              Delete {deleteWarehouse[0]} warehouse?
            </h1>
            <p className="deleteModal__text">
              Please confirm that you’d like to delete the Washington from the
              list of warehouses. You won’t be able to undo this action.
            </p>
          </div>
        </div>
        <div className="deleteModal__btn-container">
          <button
            onClick={cancelHandler}
            className="deleteModal__btn deleteModal__btn-cancel"
          >
            Cancel
          </button>
          <button
            onClick={deleteHandler}
            className="deleteModal__btn deleteModal__btn-delete "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
