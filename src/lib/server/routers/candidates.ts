import { db } from '@/lib/db/index';
import { publicProcedure, router } from "@/lib/server/trpc";
import { z } from "zod";

export const candidatesRouter = router({
  getPersons: publicProcedure.query(async () => {
   const candidates = await db.candidate.findMany();
   return candidates;
  }),
  savePerson: publicProcedure.input(
    z.object({
      name: z.string().min(1, { message: 'Name is required' }),
      contact_number: z.string().regex(/^09\d{9}$/, { message: 'Contact number must start with 09 and be 11 digits long' }),
      address: z.string().min(1, { message: 'Address is required' }),
      sex: z.enum(
        ['male', 'female'],
        {
           errorMap: () => ({
              message: 'Gender is required'
           })
        }
     ),
      age: z.coerce.number().min(1, { message: 'Age is required' }),
      position: z.enum(
        ['Kapitan', 'Kagawad', 'SK', 'NGO', 'Senior', 'PWD', 'HOA', 'SPTA', 'TODA', 'Coop', 'Youth', 'BHW', 'Day Care', 'LGBTQ'],
        {
           errorMap: () => ({
              message: 'Candidate position is required'
           })
        }
     )
    })
 ).mutation(async ({ input }) => {
   console.log(input)
   // Insert the candidate to database
   await db.candidate.create({
      data: input
   })
   return { success: true };
  })
});
