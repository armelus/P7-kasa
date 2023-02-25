import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {TagContext} from '../../utils/context'

export default function TagLink(props) {
  const { selectedTag, setSelectedState } = useContext(TagContext)

  function handleClick(e) {
    e.preventDefault()
    setSelectedState()
    console.log('TAGLINK', selectedTag)
  }
  return (
    <Link
      onClick={handleClick}
      to={`/${selectedTag}`}
      className="tagContainer tagButton"
    >
      {props.value}
    </Link>
  )
}
