import React from 'react'

function About() {
  return (
    <div className="px-4 py-8 mx-auto max-w-3xl">
    <h1 className="text-3xl font-bold text-center mb-8">About GitHub Finder</h1>
    <p className="text-xl leading-loose mb-8">GitHub Finder is a React app that allows users to search for and view GitHub profiles. It uses the GitHub API to retrieve information about users and their repositories. </p>
    <p className="text-lg font-semibold mb-4">With GitHub Finder, you can:</p>
    <ul className="list-inside list-disc mb-8">
      <li className="text-lg mb-2">Search for users by username</li>
      <li className="text-lg mb-2">View a user's profile and repository information</li>
      <li className="text-lg mb-2">Save your favorite users to a list for easy access later</li>
    </ul>
    <p className="text-lg leading-loose">Try it out and see how easy it is to find and connect with other developers on GitHub!</p>
  </div>
  )
}

export default About