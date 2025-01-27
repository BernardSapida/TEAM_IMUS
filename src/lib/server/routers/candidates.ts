import { positions } from '@/components/config/positions';
import { db } from '@/lib/db/index';
import { publicProcedure, router } from '@/lib/server/trpc';
import { z } from 'zod';

export const candidatesRouter = router({
   getCandidates: publicProcedure.query(async () => {
      const candidates = await db.candidate.findMany({});
      return candidates;
   }),
   insertCandidate: publicProcedure
      .input(
         z.object({
            firstname: z.string().min(1, { message: 'Firstname is required' }),
            middlename: z.string().min(1, { message: 'Middlename is required' }),
            lastname: z.string().min(1, { message: 'Lastname is required' }),
            barangay: z.string().min(1, { message: 'Barangay is required' }),
            address: z.string().min(1, { message: 'Address is required' }),
            contact: z.string().regex(/^9\d{9}$/, {
               message: 'Contact number must start with 9 and be 10 digits long'
            }),
            position: z.enum(positions as [string, ...string[]], {
               errorMap: () => ({
                  message: 'Candidate position is required'
               })
            })
         })
      )
      .mutation(async ({ input }) => {
         console.log(input);
         // Insert the candidate to database
         await db.candidate.create({
            data: input
         });
         return { success: true };
      }),
   updateCandidate: publicProcedure
      .input(
         z.object({
            id: z.string().min(1, { message: 'Candidate ID is required' }),
            firstname: z.string().min(1, { message: 'Firstname is required' }),
            middlename: z.string().min(1, { message: 'Middlename is required' }),
            lastname: z.string().min(1, { message: 'Lastname is required' }),
            barangay: z.string().min(1, { message: 'Barangay is required' }),
            address: z.string().min(1, { message: 'Address is required' }),
            contact: z.string().regex(/^9\d{9}$/, {
               message: 'Contact number must start with 9 and be 10 digits long'
            }),
            position: z.enum(positions as [string, ...string[]], {
               errorMap: () => ({
                  message: 'Candidate position is required'
               })
            })
         })
      )
      .mutation(
         async ({
            input: { id, firstname, middlename, lastname, barangay, address, contact, position }
         }) => {
            // Update the candidate to database
            const res = await db.candidate.update({
               where: { id },
               data: {
                  firstname,
                  middlename,
                  lastname,
                  barangay,
                  address,
                  contact,
                  position
               }
            });

            return res;
         }
      ),
   deleteCandidate: publicProcedure
      .input(
         z.object({
            id: z.string().min(1, { message: 'Candidate ID is required' })
         })
      )
      .mutation(async ({ input: { id } }) => {
         // Update the candidate to database
         const res = await db.candidate.delete({
            where: { id }
         });

         return res;
      })
});
