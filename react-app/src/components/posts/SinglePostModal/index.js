import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SinglePost from '../SinglePost';

function SinglePostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>See Post</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SinglePost />
        </Modal>
      )}
    </>
  );
}

export default SinglePostModal;
