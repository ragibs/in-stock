import "./DeleteModal.scss";
function DeleteModal() {
  return (
    <div className="deleteModal-bg">
      <div className="deleteModal-container">
        <button className="deleteModal__close-btn">X</button>
        <div className="deleteModal__text-container">
          <h1 className="deleteModal__title">Delete Washington warehouse?</h1>
          <p className="deleteModal__text">
            Please confirm that you’d like to delete the Washington from the
            list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="deleteModal__btn-container">
          <button className="deleteModal__btn deleteModal__btn-cancel">
            Cancel
          </button>
          <button className="deleteModal__btn deleteModal__btn-delete ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
