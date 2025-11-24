import type { FC } from 'react'
import replyIcon from '/icon/Reply.svg'
import shareIcon from '/icon/Share.svg'
import archieveIcon from '/icon/Archive.svg'
import personIcon from '/icon/person.svg'
import timeIcon from '/icon/time.svg'
import tagIcon from '/icon/tag.svg'
import locationIcon from '/icon/location.svg'

export type LostFoundItem = {
  id: number
  title: string
  person: string
  time: string
  tag: string
  location: string
  description: string
  imageUrl: string
}

type Props = {
  item: LostFoundItem
}

const LostFoundCard: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col rounded-[28px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#F3F3F3] overflow-hidden max-w-70">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full object-cover"
      />

      <div className="px-6 pt-4 pb-6 text-sm">
        <div className="flex items-center justify-between text-[#C4C4C4] mb-3">
          <div className="flex items-center gap-4">
            <img src={replyIcon} alt="" className="text-xl leading-none" />
            <img src={shareIcon} alt="" className="text-xl leading-none" />
          </div>
          <img src={archieveIcon} className="text-xl leading-none" alt="" />
        </div>

        <p className="text-[20px] font-semibold text-[#2E2600] mb-2">
          {item.title}
        </p>

        <div className="space-y-1 text-[13px]">
          <p>
            <img src={personIcon} alt="" className="mr-1 size-5 inline-block" />
            <span className="text-[#EB7979]">{item.person}</span>
          </p>
          <p>
            <img src={timeIcon} alt="" className="size-5 mr-1 inline-block" />
            <span className="text-[#EB7979]">{item.time}</span>
          </p>
          <p>
            <img src={tagIcon} alt="" className="size-5 mr-1 inline-block" />
            <span className="text-[#EB7979]">{item.tag}</span>
          </p>
          <p>
            <img
              src={locationIcon}
              alt=""
              className="size-5 mr-1 inline-block"
            />
            <span className="text-[#EB7979]">{item.location}</span>
          </p>
        </div>

        <p className="mt-2 text-[13px] text-[#737373]">{item.description}</p>
      </div>
    </div>
  )
}

export default LostFoundCard
