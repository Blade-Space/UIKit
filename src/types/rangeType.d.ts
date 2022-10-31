type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never;

type EnumerateInternalExclusive<A extends Array<unknown>, N extends number> = {
  0: A;
  1: EnumerateInternalExclusive<PrependNextNum<A>, N>;
}[N extends A['length'] ? 0 : 1];

type EnumerateInternalInclusive<A extends Array<unknown>, N extends number> = {
  0: PrependNextNum<A>;
  1: EnumerateInternalInclusive<PrependNextNum<A>, N>;
}[N extends A['length'] ? 0 : 1];

export type EnumerateExclusive<N extends number> = EnumerateInternalExclusive<
  [],
  N
> extends (infer E)[]
  ? E
  : never;

export type EnumerateInclusive<N extends number> = EnumerateInternalInclusive<
  [],
  N
> extends (infer E)[]
  ? E
  : never;

export type Range<FROM extends number, TO extends number> = Exclude<
  EnumerateInclusive<TO>,
  EnumerateExclusive<FROM>
>;