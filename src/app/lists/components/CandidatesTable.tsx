'use client';

import { barangay } from '@/components/config/barangay';
import { positions } from '@/components/config/positions';
import {
   Button,
   Input,
   Pagination,
   Select,
   SelectItem,
   Spinner,
   Table,
   TableBody,
   TableCell,
   TableColumn,
   TableHeader,
   TableRow
} from '@nextui-org/react';
import {
   Dispatch,
   FunctionComponent,
   SetStateAction,
   useCallback,
   useContext,
   useMemo,
   useState
} from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { exportToExcel } from '@/utils/exportToExcel';
import { UserContext } from '@/components/UserContextWrapper';

interface CandidatesTableProps {
   candidates: TCandidate[];
   setCandidates: Dispatch<SetStateAction<TCandidate[]>>;
   isLoading: boolean;
}
export const columns = [
   // { name: 'ID', uid: 'id' },
   { name: 'FIRSTNAME', uid: 'firstname', sortable: true },
   { name: 'MIDDLENAME', uid: 'middlename', sortable: true },
   { name: 'LASTNAME', uid: 'lastname', sortable: true },
   { name: 'BARANGAY', uid: 'barangay', sortable: true },
   { name: 'ADDRESS', uid: 'address' },
   { name: 'CONTACT', uid: 'contact' },
   { name: 'POSITION', uid: 'position', sortable: true },
   { name: 'ACTIONS', uid: 'actions' }
];

const CandidatesTableProps: FunctionComponent<CandidatesTableProps> = ({
   candidates,
   setCandidates,
   isLoading
}) => {
   const { user } = useContext(UserContext);
   const [filterValue, setFilterValue] = useState<string>('');
   const [selectedKeys, setSelectedKeys] = useState(new Set([]));
   const [candidateBarangayFilter, setCandidateBarangayFilter] = useState<string[]>([]);
   const [candidatePositionFilter, setCandidatePositionFilter] = useState<string[]>([]);
   const [rowsPerPage, setRowsPerPage] = useState<number>(10);
   const [sortDescriptor, setSortDescriptor] = useState({
      column: 'barangay',
      direction: 'ascending'
   });
   const [page, setPage] = useState<number>(1);

   const hasSearchFilter = Boolean(filterValue);

   const filteredItems = useMemo(() => {
      let filteredCandidates = [...candidates];

      if (hasSearchFilter) {
         filteredCandidates = filteredCandidates.filter(
            (candidate) =>
               candidate.firstname.toLowerCase().includes(filterValue.toLowerCase()) ||
               candidate.middlename.toLowerCase().includes(filterValue.toLowerCase()) ||
               candidate.lastname.toLowerCase().includes(filterValue.toLowerCase()) ||
               candidate.barangay.toLowerCase().includes(filterValue.toLowerCase()) ||
               candidate.position.toLowerCase().includes(filterValue.toLowerCase())
         );
      }

      if (candidateBarangayFilter.length !== 0) {
         filteredCandidates = filteredCandidates.filter((candidate) =>
            candidateBarangayFilter.includes(candidate.barangay)
         );
      }

      if (candidatePositionFilter.length !== 0) {
         filteredCandidates = filteredCandidates.filter((candidate) => {
            return candidatePositionFilter.includes(candidate.position);
         });
      }

      return filteredCandidates;
   }, [candidates, filterValue, candidateBarangayFilter, candidatePositionFilter]);

   const pages = Math.ceil(filteredItems.length / rowsPerPage);

   const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      return filteredItems.slice(start, end);
   }, [page, filteredItems, rowsPerPage]);

   const sortedItems = useMemo(() => {
      return [...items].sort((a: any, b: any) => {
         const first = a[sortDescriptor.column];
         const second = b[sortDescriptor.column];
         const cmp = first < second ? -1 : first > second ? 1 : 0;

         return sortDescriptor.direction === 'descending' ? -cmp : cmp;
      });
   }, [sortDescriptor, items]);

   const renderCell = useCallback((candidate: any, columnKey: string) => {
      const cellValue = candidate[columnKey];

      switch (columnKey) {
         case 'actions':
            return (
               <div className="space-x-1">
                  <EditButton
                     candidate={candidate}
                     setCandidates={setCandidates}
                  />
                  <DeleteButton
                     candidate={candidate}
                     setCandidates={setCandidates}
                  />
               </div>
            );
         default:
            return cellValue || <span className="text-default-400">N/A</span>;
      }
   }, []);

   const onNextPage = useCallback(() => {
      if (page < pages) {
         setPage(page + 1);
      }
   }, [page, pages]);

   const onPreviousPage = useCallback(() => {
      if (page > 1) {
         setPage(page - 1);
      }
   }, [page]);

   const onRowsPerPageChange = useCallback((e: any) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
   }, []);

   const onSearchChange = useCallback((value: string) => {
      if (value) {
         setFilterValue(value);
         setPage(1);
      } else {
         setFilterValue('');
      }
   }, []);

   const onClear = useCallback(() => {
      setFilterValue('');
      setPage(1);
   }, []);

   const downloadReport = () => {
      exportToExcel(filteredItems, 'list-report');
   };

   const topContent = useMemo(() => {
      return (
         <div className="flex flex-col gap-4">
            <div className="space-between flex items-center">
               <h1 className="text-2xl font-bold">Lists</h1>
               <Button
                  className={`${user?.type != 'admin' && 'hidden'} ml-auto`}
                  color="primary"
                  startContent={<FiDownload />}
                  onPress={downloadReport}
               >
                  Download Report
               </Button>
            </div>
            <div className="flex items-end justify-between gap-3">
               <Input
                  isClearable
                  className="w-full sm:max-w-[20%]"
                  placeholder="Search"
                  startContent={<MdSearch />}
                  value={filterValue}
                  onClear={() => onClear()}
                  onValueChange={onSearchChange}
               />
               <div className="flex w-full max-w-96 gap-3">
                  <Select
                     className="max-w-96"
                     label="Barangay"
                     placeholder="Select barangay"
                     selectionMode="multiple"
                     onSelectionChange={(keys) =>
                        setCandidateBarangayFilter([...(keys.valueOf() as any)])
                     }
                  >
                     {barangay.map((barangay) => (
                        <SelectItem key={barangay}>{barangay}</SelectItem>
                     ))}
                  </Select>
                  <Select
                     className="max-w-96"
                     label="Position"
                     placeholder="Select position"
                     selectionMode="multiple"
                     onSelectionChange={(keys) =>
                        setCandidatePositionFilter([...(keys.valueOf() as any)])
                     }
                  >
                     {positions.map((position) => (
                        <SelectItem key={position}>{position}</SelectItem>
                     ))}
                  </Select>
               </div>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-small text-default-400">
                  Total {candidates.length} candidates
               </span>
               <label className="flex items-center text-small text-default-400">
                  Rows per page:
                  <select
                     className="bg-transparent text-small text-default-400 outline-none"
                     onChange={onRowsPerPageChange}
                  >
                     <option
                        value="10"
                        selected
                     >
                        10
                     </option>
                     <option value="20">20</option>
                     <option value="30">30</option>
                  </select>
               </label>
            </div>
         </div>
      );
   }, [
      filterValue,
      candidatePositionFilter,
      onRowsPerPageChange,
      candidates.length,
      onSearchChange,
      hasSearchFilter
   ]);

   const bottomContent = useMemo(() => {
      return (
         <div className="flex items-center justify-between px-2 py-2">
            <Pagination
               isCompact
               showControls
               showShadow
               color="primary"
               page={page}
               total={pages}
               onChange={setPage}
            />
            <div className="hidden w-[30%] justify-end gap-2 sm:flex">
               <Button
                  isDisabled={pages === 1}
                  size="sm"
                  variant="flat"
                  onPress={onPreviousPage}
               >
                  Previous
               </Button>
               <Button
                  isDisabled={pages === 1}
                  size="sm"
                  variant="flat"
                  onPress={onNextPage}
               >
                  Next
               </Button>
            </div>
         </div>
      );
   }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

   return (
      <Table
         isHeaderSticky
         aria-label="Example table with custom cells, pagination and sorting"
         bottomContent={bottomContent}
         bottomContentPlacement="outside"
         selectedKeys={selectedKeys}
         sortDescriptor={sortDescriptor as any}
         topContent={topContent}
         topContentPlacement="outside"
         onSelectionChange={(value: any) => setSelectedKeys(value)}
         onSortChange={(value: any) => setSortDescriptor(value)}
      >
         <TableHeader columns={columns}>
            {(column: any) => (
               <TableColumn
                  key={column.uid}
                  align={column.uid === 'actions' ? 'center' : 'start'}
                  allowsSorting={column.sortable}
               >
                  {column.name}
               </TableColumn>
            )}
         </TableHeader>
         <TableBody
            emptyContent={'No results found'}
            isLoading={isLoading}
            loadingContent={
               <Spinner
                  size="sm"
                  label="Loading..."
                  color="default"
               />
            }
            items={sortedItems}
         >
            {(item) => (
               <TableRow key={item.id}>
                  {(columnKey: any) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
               </TableRow>
            )}
         </TableBody>
      </Table>
   );
};

export default CandidatesTableProps;
