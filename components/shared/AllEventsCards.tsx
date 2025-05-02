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
    <div className="group relative flex min-h-[380px] w-48 sm:w-full  flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
     
        


      <div
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        

        <p className="p-medium-16 p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
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