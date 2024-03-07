import MyPageContents from '../components/mypagecontents/MyPageContents'
import MyPageSideBar from '../components/mypagesidebar/MyPageSideBar'

const MyPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rgb-35-39-49">
      <div className="w-4/5 lg:flex h-96">
        <MyPageSideBar />
        <MyPageContents />
      </div>
    </div>
  )
}

export default MyPage
