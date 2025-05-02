import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types'
import React from 'react'

export default async function ListEvents() {

    
      const events = await getAllEvents({
        query: '',
        category: 'all',
        page:1,
        limit: 6
      })
  return (
    <div>
       

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={events?.totalPages}
        />

  
    </div>
  )
}

