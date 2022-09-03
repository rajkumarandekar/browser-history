import './index.css'

const UserHistoryList = props => {
  const {historyListDetails, onDeleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }
  return (
    <li className="history">
      <div className="time-container">
        <p className="time-stamp">{timeAccessed}</p>
        <div className="domain-details-container">
          <div className="domain-details">
            <img src={logoUrl} alt="domain logo" className="domain-logo" />
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="history-delete-container">
        <button
          testid="delete"
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default UserHistoryList
