import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import { cn } from "@/lib/utils";
import { Button } from '../ui/button'

type CardProps = {
  event: IEvent,

}
const AllEventsCards = ({ event }: CardProps) => {


  return (
    <div className="group relative flex min-w-[230px] sm:min-w-[380px] h-[520px] sm:h-[580px] sm:w-full  flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">

      <div className='h-72'>

        <Link
          href={`/events/${event._id}`}
          style={{ backgroundImage: `url(${event.imageUrl})` }}
          className="flex-center flex-grow bg-gray-50 bg-cover bg-center h-72 text-grey-500"
        />
      </div>

      <div className="absolute right-2 top-4 rounded-lg bg-secondary p-2 shadow-sm transition-all">
        Featured
      </div>



      <div
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-secondary px-4 py-1 text-green-60">
            {event.isFree ? 'FREE' : `$${event.price}`}
          </span>
          <p className="p-semibold-14 w-auto rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
            {event.category.name}
          </p>
        </div>


        <p className="p-medium-16 p-medium-18 text-grey-500 mt-4">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-1 flex-1 text-black">{event.title}</p>
          <p className="p-medium-12 p-medium-14 text-grey-600 line-clamp-2">{event.description}</p>
        </Link>

        <div className="flex-between w-full mt-6">
          <p className="p-medium-14 md:p-medium-16 text-grey-600 line-clamp-1">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>
          <Link href={`/events/${event._id}`}>
            <Button className='hidden sm:block'>View</Button>
          </Link>
        </div>
      </div>
    </div>





  );


}

export default AllEventsCards