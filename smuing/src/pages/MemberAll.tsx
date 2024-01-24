import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MemberCard from '../components/member/MemberCard'
import MEMBERS from '../constants/MEMBERS'

const MemberAll = () => {
  const [year, setYear] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const membersPerPage = 10
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value, 10)
    setYear(selectedYear)
    setCurrentPage(1)
  }

  //기수별 사람 필터링
  const filteredMembers = year === 0 ? MEMBERS : MEMBERS.filter((item) => item.year === year)

  //현재 페이지 멤버 슬라이스
  const indexOfLastMember = currentPage * membersPerPage
  const indexOfFirstMember = indexOfLastMember - membersPerPage
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember)

  // 페이지 체인지부분
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

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
          {currentMembers.map((member) => (
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

      {/* 페이지 네이션 부분 */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredMembers.length / membersPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded-md focus:outline-none ${
              index + 1 === currentPage ? 'bg-blue-700' : ''
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default MemberAll
