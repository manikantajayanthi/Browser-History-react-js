import './index.css'

const HistoryItem = props => {
  const {historyLists, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyLists
  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <div>
        <img className="logo" src={logoUrl} alt={title} />
      </div>
      <div className="title-container">
        <p className="title">{title} </p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <button
        className="delete-icon"
        data-testid="delete"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
