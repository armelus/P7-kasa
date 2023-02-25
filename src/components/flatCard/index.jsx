import {Link} from 'react-router-dom'

export default function FlatCard({id, title, cover}) {
  return (
    <Link to={`/flat/${id}`} className="acc-card" id={id}>
      <img src={cover} alt="" className="acc-cover" />
      <div className="acc-card-text">
        <span className="acc-card-title">{title}</span>
      </div>
    </Link>
  )
}
