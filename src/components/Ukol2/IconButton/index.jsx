import './style.css';

export const IconButton = ({ label, onSelectName }) => {
  return (
    <button
      onClick={() => {
        onSelectName(label);
      }}
      className="icon-button"
    >
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
