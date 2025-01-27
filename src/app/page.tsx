import BaseContainer from '@/components/BaseContainer';
import Image from 'next/image';

export default async function Home() {
   return (
      <BaseContainer styles="space-y-8 max-w-7xl relative z-10 text-center">
         <Image
            src="/images/cover.jpg"
            className="w-full rounded-xl"
            width={1000}
            height={1000}
            alt="Cover"
         />
      </BaseContainer>
   );
}
