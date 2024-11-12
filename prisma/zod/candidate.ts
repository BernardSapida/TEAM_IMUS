import * as z from "zod"
import { Sex } from "@prisma/client"

export const candidateSchema = z.object({
  id: z.string(),
  name: z.string(),
  contact_number: z.string(),
  address: z.string(),
  sex: z.nativeEnum(Sex),
  age: z.number().int(),
  position: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
