import { useNavigate } from 'react-router-dom'

import MemberCard from '../components/member/MemberCard'
import MEMBERS from '../constants/members'

const MemberActive = () => {
  const navigate = useNavigate()
  const active = MEMBERS.filter((member) => member.year === 5)
  const activeLeader = active.filter(
    (member) => member.position === '회장' || member.position === '부회장' || member.position === '파트장',
  )
  const activeChallenger = active.filter((member) => member.position === '챌린저')

  console.log(active)
  return (
    <div className="bg-rgb-35-39-49">
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {activeLeader.map((member) => (
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
      <div className="flex items-center justify-center mt-[100px] mb-[100px]">
        <hr className="w-4/5 border-t-4" />
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {activeChallenger.map((member) => (
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
  )
}

export default MemberActive
