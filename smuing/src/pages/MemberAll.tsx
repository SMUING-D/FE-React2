import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MemberCard from '../components/member/MemberCard'
import MEMBERS from '../constants/members'

const MemberAll = () => {
  //   const [year, setYear] = useState(0)
  //   const [page, setPage] = useState(1)
  const [filteredMembers, setFilteredMembers] = useState(MEMBERS)
  const navigate = useNavigate()
  // const membersPerPage = 10

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value, 10)
    // setYear(selectedYear)
    // setPage(1)
    setFilteredMembers(selectedYear === 0 ? MEMBERS : MEMBERS.filter((item) => item.year === selectedYear))
  }

  return (
    <>
      <div className="bg-rgb-35-39-49">
        <div className="max-w-md mx-auto p-6 bg-rgb-35-39-49 rounded-md shadow-md">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="member-year-select">
            Member Year:
          </label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            id="member-year-select"
            name="member-year"
            onChange={handleChange}
          >
            <option value="0">전체</option>
            <option value="2">2기</option>
            <option value="3">3기</option>
            <option value="4">4기</option>
            <option value="5">5기</option>
          </select>
        </div>

        <div className="bg-rgb-35-39-49 flex flex-wrap justify-center gap-8 p-8">
          {filteredMembers.map((member) => (
            <MemberCard
              key={member.id}
              member={{
                name: member.name,
                year: member.year,
                sex: member.sex,
                part: member.part,
                position: member.position,
                onClick: () => {
                  navigate(`/members/${member.id}`)
                  console.log('찍함')
                },
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MemberAll
