import { trpc } from '@/lib/trpc/client';
import {
   Button,
   Divider,
   Modal,
   ModalBody,
   ModalContent,
   ModalHeader,
   useDisclosure
} from '@nextui-org/react';
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'sonner';

interface DeleteButtonProps {
   candidate: TCandidate;
   setCandidates: Dispatch<SetStateAction<TCandidate[]>>;
}

const DeleteButton: FunctionComponent<DeleteButtonProps> = ({
   candidate: currentCandidate,
   setCandidates
}) => {
   const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
   const [loading, setLoading] = useState<boolean>(false);
   const deleteMutation = trpc.candidates.deleteCandidate.useMutation({
      onSuccess: () => {
         setCandidates((prevCandidates) => {
            return prevCandidates.filter((candidate) => currentCandidate.id != candidate.id);
         });
         toast.success('Successfully deleted folder/s');
         setLoading(false);
         onClose();
      },
      onError: () => {
         toast.error('There was an error, please try again');
         setLoading(false);
      }
   });

   const deleteCandidate = () => {
      setLoading(true);
      deleteMutation.mutate({ id: currentCandidate.id! });
   };

   return (
      <>
         <Button
            size="sm"
            isIconOnly
            color="danger"
            startContent={<FiTrash2 />}
            onPress={onOpen}
            isDisabled={loading}
         />
         <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
         >
            <ModalContent>
               {() => (
                  <>
                     <ModalHeader className="flex flex-col gap-1">Delete Confirmation</ModalHeader>
                     <Divider />
                     <ModalBody className="py-5">
                        <p>Are you sure you want to delete?</p>
                        <Button
                           type="submit"
                           size="sm"
                           startContent={!loading && <FiTrash2 />}
                           color="danger"
                           className="ml-auto"
                           onPress={deleteCandidate}
                           isDisabled={loading}
                           isLoading={loading}
                        >
                           {loading ? 'Deleting...' : 'Delete'}
                        </Button>
                     </ModalBody>
                  </>
               )}
            </ModalContent>
         </Modal>
      </>
   );
};

export default DeleteButton;
