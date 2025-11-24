import homeIcon from '/icon/home.svg'
import bellIcon from '/icon/bell.svg'
import infoAvatar from '/img/toan.jpg'

export default function Header() {
  return (

    <div className="fixed z-20 w-screen h-22 bg-white/70 backdrop-blur-lg flex flex-frow justify-between items-center py-8">

      <div className="ml-8">
        <img src={homeIcon} alt="" />
      </div>

      <div className="flex justify-between items-center">
        <ul className="flex flex-row gap-12  justify-center items-center">
          <li>
            <div className="px-5 py-2 border-0 rounded-sm">Home</div>
          </li>
          <li>
            <div className="px-5 py-2 border-0 rounded-sm">Forum</div>
          </li>
          <li>
            <button className="text-white px-7 py-2.5 border-1 bg-black rounded-sm">
              Report
            </button>
          </li>
        </ul>

        <div className="flex justify-evenly items-center w-38">
          <div>
            <img className="size-11" src={bellIcon} alt="" />
          </div>
          <div>
            <img className="size-11 rounded-full" src={infoAvatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
