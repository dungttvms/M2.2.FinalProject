import React from "react";
import ReactModal from "react-modal";
import Youtube from "@u-wave/react-youtube";

const TrailerModal = ({
  showModal,
  setShowModal,
  handleCloseModal,
  trailerKey,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal
      isOpen={showModal}
      style={customStyles}
      contentLabel="Trailer Modal"
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <Youtube video={trailerKey} height="480" width="720" autoplay={false} />
        <button
          type="button"
          className="modal-close"
          onClick={() => setShowModal(false)}
        >
          ❌
        </button>
      </div>
    </ReactModal>
  );
};

export default TrailerModal;
