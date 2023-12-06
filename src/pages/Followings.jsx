import React from 'react'
import { Link } from 'react-router-dom'

const Followings = () => {
  return (
    <div>
      <Link to={{ pathname: "/" }}><span>戻る</span></Link>
      <table>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
          <td>Cell 5</td>
          <td>Cell 6</td>
        </tr>
      </table>
    </div>
  )
}

export default Followings
