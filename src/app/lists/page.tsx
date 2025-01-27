'use client';

import BaseContainer from '@/components/BaseContainer';
import { trpc } from '@/lib/trpc/client';
import { useEffect, useState } from 'react';
import CandidatesTable from './components/CandidatesTable';

function List() {
   const { data, isLoading } = trpc.candidates.getCandidates.useQuery();
   const [candidates, setCandidates] = useState<TCandidate[]>([]);

   useEffect(() => {
      if (!isLoading && data) {
         setCandidates(data);
      }
   }, [data, isLoading]);

   return (
      <BaseContainer styles="space-y-8 max-w-7xl relative z-10">
         <CandidatesTable
            isLoading={isLoading}
            setCandidates={setCandidates}
            candidates={candidates}
         />
      </BaseContainer>
   );
}

export default List;
