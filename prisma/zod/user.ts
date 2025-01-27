import * as z from "zod"
import { UserType } from "@prisma/client"

export const userSchema = z.object({
  id: z.string(),
  clerkUserId: z.string(),
  type: z.nativeEnum(UserType),
  email: z.string(),
  restricted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
