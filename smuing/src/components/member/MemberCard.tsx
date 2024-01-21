import { motion } from 'framer-motion'

import femaleimg from '../../../public/memberimg/DEFAULT_FEMALE.webp'
import maleimg from '../../../public/memberimg/DEFAULT_MALE.webp'

type Membercardprops = {
  name: string
  year: number
  sex: string
  part: string
  position: string
  onClick?: () => void
}

const MemberCard: React.FC<{ member: Membercardprops }> = ({ member }) => {
  return (
    <motion.div
      className="w-[260px] h-[278px] bg-color:white border-[1px] rounded-[3rem] text-center bg-white"
      onClick={member.onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2, bounce: 0.5 }}
    >
      {/* 카드 커버 */}
      {member.position !== '챌린저' && (
        <div className="w-[50px] h-[32px] rounded-[0.5rem] bg-gray-300 text-center pt-1 ml-[52px] mb-[-60px] mt-11 relative z-10 text-base">
          {member.position}
        </div>
      )}
      {/* 카드 이미지 */}
      <img
        src={member.sex === 'w' ? femaleimg : maleimg}
        alt="멤버 이미지"
        className="w-[160px] h-[168px] ml-12 mt-5 z-0"
      />
      <div className="text-lg mt-2">{member.name}</div>
      <div className="text-sm">
        {member.year}기 | {member.part}
      </div>
    </motion.div>
  )
}

export default MemberCard
