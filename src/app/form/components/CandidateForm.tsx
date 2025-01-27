'use client';

import { barangay } from '@/components/config/barangay';
import { positions } from '@/components/config/positions';
import { trpc } from '@/lib/trpc/client';
import { Form } from '@nextui-org/form';
import { Button, Divider, Input, Select, SelectItem, Spinner } from '@nextui-org/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

function Page() {
   const [loading, setLoading] = useState<boolean>(false);
   const formRef = useRef<HTMLFormElement>(null);
   const insertMutation = trpc.candidates.insertCandidate.useMutation({
      onSuccess: () => {
         formRef.current?.reset();
         toast.success('Successful', {
            description: 'Form successfully submitted. Thank you!'
         });
         setLoading(false);
      },
      onError: () => {
         toast.error('There was an error', {
            description: 'Please try again submitting the form.'
         });
         setLoading(false);
      }
   });

   const onSubmit = (e: any) => {
      e.preventDefault();
      setLoading(true);
      const data = Object.fromEntries(new FormData(e.currentTarget)) as TCandidate;
      insertMutation.mutate(data);
   };

   return (
      <div className="mx-auto w-3/5 rounded-md border-1 shadow-md">
         <Image
            alt="Team Imus logo"
            src={'/images/banner.png'}
            width={1000}
            height={1000}
            className="mx-auto my-4 w-2/3"
         />
         <Divider />
         <div className="p-5">
            <Form
               validationBehavior="native"
               onSubmit={onSubmit}
               className="space-y-2"
               ref={formRef}
            >
               <div className="flex w-full gap-2">
                  <Input
                     type="text"
                     name="firstname"
                     placeholder="Enter firstname"
                     label="Firstname"
                     validate={(value) => {
                        if (!value) return 'Firstname is required';
                     }}
                     isRequired
                  />
                  <Input
                     type="text"
                     name="middlename"
                     placeholder="Enter middlename"
                     label="Middlename"
                     validate={(value) => {
                        if (!value) return 'Middlename is required';
                     }}
                     isRequired
                  />
                  <Input
                     type="text"
                     name="lastname"
                     placeholder="Enter lastname"
                     label="Lastname"
                     validate={(value) => {
                        if (!value) return 'Lastname is required';
                     }}
                     isRequired
                  />
               </div>
               <div className="flex w-full gap-2">
                  <Select
                     name="position"
                     label="Position"
                     placeholder="Choose position"
                     validate={(value) => {
                        if (!value) return 'Position is required';
                     }}
                     isRequired
                  >
                     {positions.map((position) => (
                        <SelectItem
                           key={position}
                           value={position}
                        >
                           {position}
                        </SelectItem>
                     ))}
                  </Select>
                  <Input
                     type="text"
                     name="contact"
                     placeholder="Enter contact number"
                     label="Contact"
                     validate={(value) => {
                        if (!value) return 'Contact is required';
                        else if (!/^9\d{9}$/.test(value))
                           return 'Contact number must start with 9 and be 10 digits long';
                     }}
                     isRequired
                  />
               </div>
               <Select
                  name="barangay"
                  label="Barangay"
                  placeholder="Choose barangay"
                  validate={(value) => {
                     if (!value) return 'Barangay is required';
                  }}
                  isRequired
               >
                  {barangay.map((value) => (
                     <SelectItem
                        key={value}
                        value={value}
                     >
                        {value}
                     </SelectItem>
                  ))}
               </Select>
               <Input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  label="Address"
                  validate={(value) => {
                     if (!value) return 'Address is required';
                  }}
                  isRequired
               />
               <Button
                  type="submit"
                  className="w-full rounded-lg bg-ti-primary px-10 text-xs"
                  isLoading={loading}
                  spinner={
                     <Spinner
                        size="sm"
                        color="white"
                     />
                  }
               >
                  {loading ? 'Submitting...' : 'Submit'}
               </Button>
            </Form>
         </div>
      </div>
   );
}

export default Page;
