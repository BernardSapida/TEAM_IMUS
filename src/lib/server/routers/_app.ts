import { candidatesRouter } from "./candidates";
import { router } from "@/lib/server/trpc";

export const appRouter = router({
  candidates: candidatesRouter,
});

export type AppRouter = typeof appRouter;
