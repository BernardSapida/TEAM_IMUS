import * as z from "zod"

export const candidateSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  barangay: z.string(),
  address: z.string(),
  contact: z.string(),
  position: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
