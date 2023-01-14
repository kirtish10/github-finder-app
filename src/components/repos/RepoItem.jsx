import React from 'react'
import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'


function RepoItem({repo}) {


const {name,
description,
html_url,
forks,
open_issues,
watchers_count,
stargazers_count
} = repo

  return (
  <div class="mb-3 card bg-base-300 hover:bg-base-200 rounded shadow-lg">
  <div class="card-body">
    <div class="font-semibold text-xl mb-2">
        <a><FaLink className='inline mr-1'/>{name}</a>
    </div>
    <p class="text-base">{description}</p>
    <div>
        <div className="mr-2 badge badge-info badge-lg">
            <FaEye className='mr-2'/> {watchers_count}
        </div>
        <div className="mr-2 badge badge-success badge-lg">
            <FaStar className='mr-2'/> {stargazers_count}
        </div>
        <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className='mr-2'/> {open_issues}
        </div>
        <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className='mr-2'/> {forks}
        </div>
    </div>
  </div>
</div>
 
  )
}


RepoItem.propTypes = {
    repo : PropTypes.object.isRequired,
}

export default RepoItem