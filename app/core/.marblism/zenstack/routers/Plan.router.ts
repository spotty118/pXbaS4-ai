/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PlanInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).plan.createMany(input as any))),

        create: procedure.input($Schema.PlanInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).plan.create(input as any))),

        deleteMany: procedure.input($Schema.PlanInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).plan.deleteMany(input as any))),

        delete: procedure.input($Schema.PlanInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).plan.delete(input as any))),

        findFirst: procedure.input($Schema.PlanInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).plan.findFirst(input as any))),

        findMany: procedure.input($Schema.PlanInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).plan.findMany(input as any))),

        findUnique: procedure.input($Schema.PlanInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).plan.findUnique(input as any))),

        updateMany: procedure.input($Schema.PlanInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).plan.updateMany(input as any))),

        update: procedure.input($Schema.PlanInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).plan.update(input as any))),

        count: procedure.input($Schema.PlanInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).plan.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PlanCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlanCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlanCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlanCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PlanCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlanCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlanCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlanCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlanGetPayload<T>, Context>) => Promise<Prisma.PlanGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PlanDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlanDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlanDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlanDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PlanDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlanDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlanDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlanDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlanGetPayload<T>, Context>) => Promise<Prisma.PlanGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PlanFindFirstArgs, TData = Prisma.PlanGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PlanFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlanGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlanFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlanFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlanGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlanGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PlanFindManyArgs, TData = Array<Prisma.PlanGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PlanFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PlanGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlanFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlanFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PlanGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PlanGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PlanFindUniqueArgs, TData = Prisma.PlanGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlanFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlanGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlanFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlanFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlanGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlanGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PlanUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlanUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlanUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlanUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PlanUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlanUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlanUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlanUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlanGetPayload<T>, Context>) => Promise<Prisma.PlanGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PlanCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlanCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PlanCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PlanCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PlanCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PlanCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PlanCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlanCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
