import { candidatesRouter } from './candidates';
import { router } from '@/lib/server/trpc';
import { usersRouter } from './users';

export const appRouter = router({
   user: usersRouter,
   candidates: candidatesRouter
});

export type AppRouter = typeof appRouter;
