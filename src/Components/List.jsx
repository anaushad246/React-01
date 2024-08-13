import React from 'react'

const applicants = [ {
    name: 'Joe', work: 'freelance-developer',
    blogs: '54', websites: '32',
    hackathons: '6', location: 'morocco', 
  },
  {
    name: 'janet', work: 'fullstack-developer', 
    blogs: '34', websites: '12', 
    hackathons: '8', location: 'Mozambique', id: '1',
  },
  {
    name: 'janet', work: 'fullstack-developer02', 
    blogs: '34', websites: '12', 
    hackathons: '8', location: 'Mozambique', id: '1',
  },

];

function List() {
  return (
    <>
    {applicants.map(function(applicant) {
      return (
        <div key={applicant.id}>
          <p>Applicant Name: {applicant.name}</p>
          {/* <p>Applicant id: {applicant.id}</p> */}
          <p>Applicant location: {applicant.location}</p>
          <p>Hackathons participated: {applicant.hackathons}</p>

        </div>
      )
    })}
    </>

  )
}

export default List