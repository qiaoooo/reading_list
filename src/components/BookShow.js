import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit onSubmit={handleSubmit} book={book} /*onEdit={onEdit}*/ />
    );
  }

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      {/*   {book.title} */}
      <img
        src={`https://picsum.photos/seed/${book.id}/200/300`}
        alt={book.title}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default BookShow;
