'use client';

import BaseContainer from '@/components/BaseContainer';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { IoIosArrowRoundForward } from 'react-icons/io';

function RestrictedPage() {
   const router = useRouter();

   return (
      <BaseContainer styles="h-[calc(100vh-80px)] flex flex-col justify-center">
         <div className="mx-auto max-w-3xl space-y-5 text-center">
            <h1 className="text-3xl font-bold sm:text-6xl">We are sorry...</h1>
            <p className="text-sm sm:text-base">
               We apologize for the inconvenience. Currently, only whitelisted users can access this
               website.
            </p>
            <p className="text-sm sm:text-base">Thank you for your understanding!</p>
            <Button
               className={`bg-trussen-btn-blue w-max rounded-lg py-2 text-xs text-white`}
               endContent={<IoIosArrowRoundForward className="text-xl" />}
               onPress={() => router.replace('/')}
            >
               Back to Homepage
            </Button>
         </div>
      </BaseContainer>
   );
}

export default RestrictedPage;
