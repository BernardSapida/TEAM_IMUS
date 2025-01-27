import { barangay } from '@/components/config/barangay';
import { positions } from '@/components/config/positions';
import { trpc } from '@/lib/trpc/client';
import { Form } from '@nextui-org/form';
import {
   Button,
   Divider,
   Input,
   Modal,
   ModalBody,
   ModalContent,
   ModalHeader,
   Select,
   SelectItem,
   Spinner,
   useDisclosure
} from '@nextui-org/react';
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { toast } from 'sonner';

interface EditButtonProps {
   candidate: TCandidate;
   setCandidates: Dispatch<SetStateAction<TCandidate[]>>;
}

const EditButton: FunctionComponent<EditButtonProps> = ({
   candidate: currentCandidate,
   setCandidates
}) => {
   const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
   const [loading, setLoading] = useState<boolean>(false);
   const updateMutation = trpc.candidates.updateCandidate.useMutation({
      onSuccess: (updatedCandidate) => {
         setCandidates((prevCandidates) =>
            prevCandidates.map((candidate) =>
               candidate.id === currentCandidate.id ? { ...(updatedCandidate as any) } : candidate
            )
         );
         toast.success('Successfully updated');
         onClose();
         setLoading(false);
      },
      onError: () => {
         toast.error('There was an error, please try again');
         setLoading(false);
      }
   });

   const onSubmit = (e: any) => {
      e.preventDefault();
      setLoading(true);
      const data = Object.fromEntries(new FormData(e.currentTarget)) as TCandidate;
      updateMutation.mutate({ id: currentCandidate.id!, ...data });
   };

   return (
      <>
         <Button
            size="sm"
            isIconOnly
            color="primary"
            startContent={<FaRegPenToSquare />}
            onPress={onOpen}
         />
         <Modal
            isOpen={isOpen}
            defaultOpen
            onOpenChange={onOpenChange}
            size="2xl"
            placement="center"
         >
            <ModalContent>
               {() => (
                  <>
                     <ModalHeader className="flex flex-col gap-1">Update Information</ModalHeader>
                     <Divider />
                     <ModalBody className="py-5">
                        <Form
                           validationBehavior="native"
                           onSubmit={onSubmit}
                        >
                           <div className="flex w-full flex-col gap-2 md:flex-row">
                              <Input
                                 type="text"
                                 name="firstname"
                                 placeholder="Enter firstname"
                                 label="Firstname"
                                 defaultValue={currentCandidate.firstname}
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
                                 defaultValue={currentCandidate.middlename}
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
                                 defaultValue={currentCandidate.lastname}
                                 validate={(value) => {
                                    if (!value) return 'Lastname is required';
                                 }}
                                 isRequired
                              />
                           </div>
                           <div className="flex w-full flex-col gap-2 md:flex-row">
                              <Select
                                 name="position"
                                 label="Position"
                                 placeholder="Choose position"
                                 defaultSelectedKeys={new Set([currentCandidate.position])}
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
                                 defaultValue={currentCandidate.contact}
                                 validate={(value) => {
                                    if (!value) return 'Contact is required';
                                    else if (!/^9\d{9}$/.test(value))
                                       return 'Contact number must start with 9 and be 10 digits long';
                                 }}
                                 maxLength={10}
                                 isRequired
                              />
                           </div>
                           <Select
                              name="barangay"
                              label="Barangay"
                              placeholder="Choose barangay"
                              defaultSelectedKeys={new Set([currentCandidate.barangay])}
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
                              defaultValue={currentCandidate.address}
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
                              {loading ? 'Updating...' : 'Update'}
                           </Button>
                        </Form>
                     </ModalBody>
                  </>
               )}
            </ModalContent>
         </Modal>
      </>
   );
};

export default EditButton;
