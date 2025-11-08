
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Motor
 * 
 */
export type Motor = $Result.DefaultSelection<Prisma.$MotorPayload>
/**
 * Model Gambar
 * 
 */
export type Gambar = $Result.DefaultSelection<Prisma.$GambarPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motor`: Exposes CRUD operations for the **Motor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motors
    * const motors = await prisma.motor.findMany()
    * ```
    */
  get motor(): Prisma.MotorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gambar`: Exposes CRUD operations for the **Gambar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gambars
    * const gambars = await prisma.gambar.findMany()
    * ```
    */
  get gambar(): Prisma.GambarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Kategori: 'Kategori',
    Motor: 'Motor',
    Gambar: 'Gambar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "kategori" | "motor" | "gambar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Motor: {
        payload: Prisma.$MotorPayload<ExtArgs>
        fields: Prisma.MotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          findFirst: {
            args: Prisma.MotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          findMany: {
            args: Prisma.MotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          create: {
            args: Prisma.MotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          createMany: {
            args: Prisma.MotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          delete: {
            args: Prisma.MotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          update: {
            args: Prisma.MotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          deleteMany: {
            args: Prisma.MotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          upsert: {
            args: Prisma.MotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          aggregate: {
            args: Prisma.MotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotor>
          }
          groupBy: {
            args: Prisma.MotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotorCountArgs<ExtArgs>
            result: $Utils.Optional<MotorCountAggregateOutputType> | number
          }
        }
      }
      Gambar: {
        payload: Prisma.$GambarPayload<ExtArgs>
        fields: Prisma.GambarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GambarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GambarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          findFirst: {
            args: Prisma.GambarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GambarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          findMany: {
            args: Prisma.GambarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>[]
          }
          create: {
            args: Prisma.GambarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          createMany: {
            args: Prisma.GambarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GambarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>[]
          }
          delete: {
            args: Prisma.GambarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          update: {
            args: Prisma.GambarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          deleteMany: {
            args: Prisma.GambarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GambarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GambarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>[]
          }
          upsert: {
            args: Prisma.GambarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          aggregate: {
            args: Prisma.GambarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGambar>
          }
          groupBy: {
            args: Prisma.GambarGroupByArgs<ExtArgs>
            result: $Utils.Optional<GambarGroupByOutputType>[]
          }
          count: {
            args: Prisma.GambarCountArgs<ExtArgs>
            result: $Utils.Optional<GambarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    kategori?: KategoriOmit
    motor?: MotorOmit
    gambar?: GambarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userAction: number
    gambarList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAction?: boolean | UserCountOutputTypeCountUserActionArgs
    gambarList?: boolean | UserCountOutputTypeCountGambarListArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGambarListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
  }


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    motors: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motors?: boolean | KategoriCountOutputTypeCountMotorsArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountMotorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorWhereInput
  }


  /**
   * Count Type MotorCountOutputType
   */

  export type MotorCountOutputType = {
    gambarMotors: number
  }

  export type MotorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambarMotors?: boolean | MotorCountOutputTypeCountGambarMotorsArgs
  }

  // Custom InputTypes
  /**
   * MotorCountOutputType without action
   */
  export type MotorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorCountOutputType
     */
    select?: MotorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MotorCountOutputType without action
   */
  export type MotorCountOutputTypeCountGambarMotorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    token: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    token: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    email: number
    token: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    token?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    token?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    token?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    name: string
    email: string
    token: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    token?: boolean
    userAction?: boolean | User$userActionArgs<ExtArgs>
    gambarList?: boolean | User$gambarListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    token?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    token?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    token?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "email" | "token", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAction?: boolean | User$userActionArgs<ExtArgs>
    gambarList?: boolean | User$gambarListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userAction: Prisma.$MotorPayload<ExtArgs>[]
      gambarList: Prisma.$GambarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      name: string
      email: string
      token: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAction<T extends User$userActionArgs<ExtArgs> = {}>(args?: Subset<T, User$userActionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gambarList<T extends User$gambarListArgs<ExtArgs> = {}>(args?: Subset<T, User$gambarListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userAction
   */
  export type User$userActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    where?: MotorWhereInput
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    cursor?: MotorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * User.gambarList
   */
  export type User$gambarListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    cursor?: GambarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id_kategori: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id_kategori: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
    created_at: Date | null
  }

  export type KategoriMaxAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
    created_at: Date | null
  }

  export type KategoriCountAggregateOutputType = {
    id_kategori: number
    nama_kategori: number
    created_at: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id_kategori?: true
  }

  export type KategoriSumAggregateInputType = {
    id_kategori?: true
  }

  export type KategoriMinAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    created_at?: true
  }

  export type KategoriMaxAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    created_at?: true
  }

  export type KategoriCountAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    created_at?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id_kategori: number
    nama_kategori: string
    created_at: Date
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    created_at?: boolean
    motors?: boolean | Kategori$motorsArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id_kategori?: boolean
    nama_kategori?: boolean
    created_at?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kategori" | "nama_kategori" | "created_at", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motors?: boolean | Kategori$motorsArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      motors: Prisma.$MotorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kategori: number
      nama_kategori: string
      created_at: Date
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.findMany({ select: { id_kategori: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id_kategori: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {KategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.updateManyAndReturn({
     *   select: { id_kategori: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    motors<T extends Kategori$motorsArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$motorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kategori model
   */
  interface KategoriFieldRefs {
    readonly id_kategori: FieldRef<"Kategori", 'Int'>
    readonly nama_kategori: FieldRef<"Kategori", 'String'>
    readonly created_at: FieldRef<"Kategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori updateManyAndReturn
   */
  export type KategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.motors
   */
  export type Kategori$motorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    where?: MotorWhereInput
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    cursor?: MotorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Motor
   */

  export type AggregateMotor = {
    _count: MotorCountAggregateOutputType | null
    _avg: MotorAvgAggregateOutputType | null
    _sum: MotorSumAggregateOutputType | null
    _min: MotorMinAggregateOutputType | null
    _max: MotorMaxAggregateOutputType | null
  }

  export type MotorAvgAggregateOutputType = {
    id_motor: number | null
    id_kategori: number | null
    id_user: number | null
    harga: Decimal | null
  }

  export type MotorSumAggregateOutputType = {
    id_motor: number | null
    id_kategori: number | null
    id_user: number | null
    harga: Decimal | null
  }

  export type MotorMinAggregateOutputType = {
    id_motor: number | null
    id_kategori: number | null
    id_user: number | null
    nama_barang: string | null
    deskripsi: string | null
    harga: Decimal | null
    gambar_card: string | null
    created_at: Date | null
  }

  export type MotorMaxAggregateOutputType = {
    id_motor: number | null
    id_kategori: number | null
    id_user: number | null
    nama_barang: string | null
    deskripsi: string | null
    harga: Decimal | null
    gambar_card: string | null
    created_at: Date | null
  }

  export type MotorCountAggregateOutputType = {
    id_motor: number
    id_kategori: number
    id_user: number
    nama_barang: number
    deskripsi: number
    harga: number
    gambar_card: number
    created_at: number
    _all: number
  }


  export type MotorAvgAggregateInputType = {
    id_motor?: true
    id_kategori?: true
    id_user?: true
    harga?: true
  }

  export type MotorSumAggregateInputType = {
    id_motor?: true
    id_kategori?: true
    id_user?: true
    harga?: true
  }

  export type MotorMinAggregateInputType = {
    id_motor?: true
    id_kategori?: true
    id_user?: true
    nama_barang?: true
    deskripsi?: true
    harga?: true
    gambar_card?: true
    created_at?: true
  }

  export type MotorMaxAggregateInputType = {
    id_motor?: true
    id_kategori?: true
    id_user?: true
    nama_barang?: true
    deskripsi?: true
    harga?: true
    gambar_card?: true
    created_at?: true
  }

  export type MotorCountAggregateInputType = {
    id_motor?: true
    id_kategori?: true
    id_user?: true
    nama_barang?: true
    deskripsi?: true
    harga?: true
    gambar_card?: true
    created_at?: true
    _all?: true
  }

  export type MotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motor to aggregate.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motors
    **/
    _count?: true | MotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotorMaxAggregateInputType
  }

  export type GetMotorAggregateType<T extends MotorAggregateArgs> = {
        [P in keyof T & keyof AggregateMotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotor[P]>
      : GetScalarType<T[P], AggregateMotor[P]>
  }




  export type MotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorWhereInput
    orderBy?: MotorOrderByWithAggregationInput | MotorOrderByWithAggregationInput[]
    by: MotorScalarFieldEnum[] | MotorScalarFieldEnum
    having?: MotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotorCountAggregateInputType | true
    _avg?: MotorAvgAggregateInputType
    _sum?: MotorSumAggregateInputType
    _min?: MotorMinAggregateInputType
    _max?: MotorMaxAggregateInputType
  }

  export type MotorGroupByOutputType = {
    id_motor: number
    id_kategori: number
    id_user: number
    nama_barang: string
    deskripsi: string | null
    harga: Decimal | null
    gambar_card: string | null
    created_at: Date
    _count: MotorCountAggregateOutputType | null
    _avg: MotorAvgAggregateOutputType | null
    _sum: MotorSumAggregateOutputType | null
    _min: MotorMinAggregateOutputType | null
    _max: MotorMaxAggregateOutputType | null
  }

  type GetMotorGroupByPayload<T extends MotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotorGroupByOutputType[P]>
            : GetScalarType<T[P], MotorGroupByOutputType[P]>
        }
      >
    >


  export type MotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_motor?: boolean
    id_kategori?: boolean
    id_user?: boolean
    nama_barang?: boolean
    deskripsi?: boolean
    harga?: boolean
    gambar_card?: boolean
    created_at?: boolean
    gambarMotors?: boolean | Motor$gambarMotorsArgs<ExtArgs>
    userCreated?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    _count?: boolean | MotorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_motor?: boolean
    id_kategori?: boolean
    id_user?: boolean
    nama_barang?: boolean
    deskripsi?: boolean
    harga?: boolean
    gambar_card?: boolean
    created_at?: boolean
    userCreated?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_motor?: boolean
    id_kategori?: boolean
    id_user?: boolean
    nama_barang?: boolean
    deskripsi?: boolean
    harga?: boolean
    gambar_card?: boolean
    created_at?: boolean
    userCreated?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectScalar = {
    id_motor?: boolean
    id_kategori?: boolean
    id_user?: boolean
    nama_barang?: boolean
    deskripsi?: boolean
    harga?: boolean
    gambar_card?: boolean
    created_at?: boolean
  }

  export type MotorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_motor" | "id_kategori" | "id_user" | "nama_barang" | "deskripsi" | "harga" | "gambar_card" | "created_at", ExtArgs["result"]["motor"]>
  export type MotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambarMotors?: boolean | Motor$gambarMotorsArgs<ExtArgs>
    userCreated?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    _count?: boolean | MotorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCreated?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type MotorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCreated?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $MotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motor"
    objects: {
      gambarMotors: Prisma.$GambarPayload<ExtArgs>[]
      userCreated: Prisma.$UserPayload<ExtArgs>
      kategori: Prisma.$KategoriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_motor: number
      id_kategori: number
      id_user: number
      nama_barang: string
      deskripsi: string | null
      harga: Prisma.Decimal | null
      gambar_card: string | null
      created_at: Date
    }, ExtArgs["result"]["motor"]>
    composites: {}
  }

  type MotorGetPayload<S extends boolean | null | undefined | MotorDefaultArgs> = $Result.GetResult<Prisma.$MotorPayload, S>

  type MotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotorCountAggregateInputType | true
    }

  export interface MotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motor'], meta: { name: 'Motor' } }
    /**
     * Find zero or one Motor that matches the filter.
     * @param {MotorFindUniqueArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotorFindUniqueArgs>(args: SelectSubset<T, MotorFindUniqueArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Motor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotorFindUniqueOrThrowArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotorFindUniqueOrThrowArgs>(args: SelectSubset<T, MotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindFirstArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotorFindFirstArgs>(args?: SelectSubset<T, MotorFindFirstArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindFirstOrThrowArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotorFindFirstOrThrowArgs>(args?: SelectSubset<T, MotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Motors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motors
     * const motors = await prisma.motor.findMany()
     * 
     * // Get first 10 Motors
     * const motors = await prisma.motor.findMany({ take: 10 })
     * 
     * // Only select the `id_motor`
     * const motorWithId_motorOnly = await prisma.motor.findMany({ select: { id_motor: true } })
     * 
     */
    findMany<T extends MotorFindManyArgs>(args?: SelectSubset<T, MotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Motor.
     * @param {MotorCreateArgs} args - Arguments to create a Motor.
     * @example
     * // Create one Motor
     * const Motor = await prisma.motor.create({
     *   data: {
     *     // ... data to create a Motor
     *   }
     * })
     * 
     */
    create<T extends MotorCreateArgs>(args: SelectSubset<T, MotorCreateArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Motors.
     * @param {MotorCreateManyArgs} args - Arguments to create many Motors.
     * @example
     * // Create many Motors
     * const motor = await prisma.motor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotorCreateManyArgs>(args?: SelectSubset<T, MotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motors and returns the data saved in the database.
     * @param {MotorCreateManyAndReturnArgs} args - Arguments to create many Motors.
     * @example
     * // Create many Motors
     * const motor = await prisma.motor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motors and only return the `id_motor`
     * const motorWithId_motorOnly = await prisma.motor.createManyAndReturn({
     *   select: { id_motor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotorCreateManyAndReturnArgs>(args?: SelectSubset<T, MotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Motor.
     * @param {MotorDeleteArgs} args - Arguments to delete one Motor.
     * @example
     * // Delete one Motor
     * const Motor = await prisma.motor.delete({
     *   where: {
     *     // ... filter to delete one Motor
     *   }
     * })
     * 
     */
    delete<T extends MotorDeleteArgs>(args: SelectSubset<T, MotorDeleteArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Motor.
     * @param {MotorUpdateArgs} args - Arguments to update one Motor.
     * @example
     * // Update one Motor
     * const motor = await prisma.motor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotorUpdateArgs>(args: SelectSubset<T, MotorUpdateArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Motors.
     * @param {MotorDeleteManyArgs} args - Arguments to filter Motors to delete.
     * @example
     * // Delete a few Motors
     * const { count } = await prisma.motor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotorDeleteManyArgs>(args?: SelectSubset<T, MotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motors
     * const motor = await prisma.motor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotorUpdateManyArgs>(args: SelectSubset<T, MotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motors and returns the data updated in the database.
     * @param {MotorUpdateManyAndReturnArgs} args - Arguments to update many Motors.
     * @example
     * // Update many Motors
     * const motor = await prisma.motor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motors and only return the `id_motor`
     * const motorWithId_motorOnly = await prisma.motor.updateManyAndReturn({
     *   select: { id_motor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MotorUpdateManyAndReturnArgs>(args: SelectSubset<T, MotorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Motor.
     * @param {MotorUpsertArgs} args - Arguments to update or create a Motor.
     * @example
     * // Update or create a Motor
     * const motor = await prisma.motor.upsert({
     *   create: {
     *     // ... data to create a Motor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motor we want to update
     *   }
     * })
     */
    upsert<T extends MotorUpsertArgs>(args: SelectSubset<T, MotorUpsertArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Motors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorCountArgs} args - Arguments to filter Motors to count.
     * @example
     * // Count the number of Motors
     * const count = await prisma.motor.count({
     *   where: {
     *     // ... the filter for the Motors we want to count
     *   }
     * })
    **/
    count<T extends MotorCountArgs>(
      args?: Subset<T, MotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MotorAggregateArgs>(args: Subset<T, MotorAggregateArgs>): Prisma.PrismaPromise<GetMotorAggregateType<T>>

    /**
     * Group by Motor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotorGroupByArgs['orderBy'] }
        : { orderBy?: MotorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motor model
   */
  readonly fields: MotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gambarMotors<T extends Motor$gambarMotorsArgs<ExtArgs> = {}>(args?: Subset<T, Motor$gambarMotorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCreated<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Motor model
   */
  interface MotorFieldRefs {
    readonly id_motor: FieldRef<"Motor", 'Int'>
    readonly id_kategori: FieldRef<"Motor", 'Int'>
    readonly id_user: FieldRef<"Motor", 'Int'>
    readonly nama_barang: FieldRef<"Motor", 'String'>
    readonly deskripsi: FieldRef<"Motor", 'String'>
    readonly harga: FieldRef<"Motor", 'Decimal'>
    readonly gambar_card: FieldRef<"Motor", 'String'>
    readonly created_at: FieldRef<"Motor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Motor findUnique
   */
  export type MotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor findUniqueOrThrow
   */
  export type MotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor findFirst
   */
  export type MotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motors.
     */
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor findFirstOrThrow
   */
  export type MotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motors.
     */
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor findMany
   */
  export type MotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motors to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor create
   */
  export type MotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Motor.
     */
    data: XOR<MotorCreateInput, MotorUncheckedCreateInput>
  }

  /**
   * Motor createMany
   */
  export type MotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motors.
     */
    data: MotorCreateManyInput | MotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motor createManyAndReturn
   */
  export type MotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * The data used to create many Motors.
     */
    data: MotorCreateManyInput | MotorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motor update
   */
  export type MotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Motor.
     */
    data: XOR<MotorUpdateInput, MotorUncheckedUpdateInput>
    /**
     * Choose, which Motor to update.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor updateMany
   */
  export type MotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motors.
     */
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyInput>
    /**
     * Filter which Motors to update
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to update.
     */
    limit?: number
  }

  /**
   * Motor updateManyAndReturn
   */
  export type MotorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * The data used to update Motors.
     */
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyInput>
    /**
     * Filter which Motors to update
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motor upsert
   */
  export type MotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Motor to update in case it exists.
     */
    where: MotorWhereUniqueInput
    /**
     * In case the Motor found by the `where` argument doesn't exist, create a new Motor with this data.
     */
    create: XOR<MotorCreateInput, MotorUncheckedCreateInput>
    /**
     * In case the Motor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotorUpdateInput, MotorUncheckedUpdateInput>
  }

  /**
   * Motor delete
   */
  export type MotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter which Motor to delete.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor deleteMany
   */
  export type MotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motors to delete
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to delete.
     */
    limit?: number
  }

  /**
   * Motor.gambarMotors
   */
  export type Motor$gambarMotorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    cursor?: GambarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Motor without action
   */
  export type MotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
  }


  /**
   * Model Gambar
   */

  export type AggregateGambar = {
    _count: GambarCountAggregateOutputType | null
    _avg: GambarAvgAggregateOutputType | null
    _sum: GambarSumAggregateOutputType | null
    _min: GambarMinAggregateOutputType | null
    _max: GambarMaxAggregateOutputType | null
  }

  export type GambarAvgAggregateOutputType = {
    id_gambar: number | null
    id_motor: number | null
    id_user: number | null
  }

  export type GambarSumAggregateOutputType = {
    id_gambar: number | null
    id_motor: number | null
    id_user: number | null
  }

  export type GambarMinAggregateOutputType = {
    id_gambar: number | null
    id_motor: number | null
    url_gambar: string | null
    id_user: number | null
  }

  export type GambarMaxAggregateOutputType = {
    id_gambar: number | null
    id_motor: number | null
    url_gambar: string | null
    id_user: number | null
  }

  export type GambarCountAggregateOutputType = {
    id_gambar: number
    id_motor: number
    url_gambar: number
    id_user: number
    _all: number
  }


  export type GambarAvgAggregateInputType = {
    id_gambar?: true
    id_motor?: true
    id_user?: true
  }

  export type GambarSumAggregateInputType = {
    id_gambar?: true
    id_motor?: true
    id_user?: true
  }

  export type GambarMinAggregateInputType = {
    id_gambar?: true
    id_motor?: true
    url_gambar?: true
    id_user?: true
  }

  export type GambarMaxAggregateInputType = {
    id_gambar?: true
    id_motor?: true
    url_gambar?: true
    id_user?: true
  }

  export type GambarCountAggregateInputType = {
    id_gambar?: true
    id_motor?: true
    url_gambar?: true
    id_user?: true
    _all?: true
  }

  export type GambarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gambar to aggregate.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gambars
    **/
    _count?: true | GambarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GambarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GambarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GambarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GambarMaxAggregateInputType
  }

  export type GetGambarAggregateType<T extends GambarAggregateArgs> = {
        [P in keyof T & keyof AggregateGambar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGambar[P]>
      : GetScalarType<T[P], AggregateGambar[P]>
  }




  export type GambarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithAggregationInput | GambarOrderByWithAggregationInput[]
    by: GambarScalarFieldEnum[] | GambarScalarFieldEnum
    having?: GambarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GambarCountAggregateInputType | true
    _avg?: GambarAvgAggregateInputType
    _sum?: GambarSumAggregateInputType
    _min?: GambarMinAggregateInputType
    _max?: GambarMaxAggregateInputType
  }

  export type GambarGroupByOutputType = {
    id_gambar: number
    id_motor: number
    url_gambar: string
    id_user: number
    _count: GambarCountAggregateOutputType | null
    _avg: GambarAvgAggregateOutputType | null
    _sum: GambarSumAggregateOutputType | null
    _min: GambarMinAggregateOutputType | null
    _max: GambarMaxAggregateOutputType | null
  }

  type GetGambarGroupByPayload<T extends GambarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GambarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GambarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GambarGroupByOutputType[P]>
            : GetScalarType<T[P], GambarGroupByOutputType[P]>
        }
      >
    >


  export type GambarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_gambar?: boolean
    id_motor?: boolean
    url_gambar?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gambar"]>

  export type GambarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_gambar?: boolean
    id_motor?: boolean
    url_gambar?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gambar"]>

  export type GambarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_gambar?: boolean
    id_motor?: boolean
    url_gambar?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gambar"]>

  export type GambarSelectScalar = {
    id_gambar?: boolean
    id_motor?: boolean
    url_gambar?: boolean
    id_user?: boolean
  }

  export type GambarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_gambar" | "id_motor" | "url_gambar" | "id_user", ExtArgs["result"]["gambar"]>
  export type GambarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
  }
  export type GambarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
  }
  export type GambarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
  }

  export type $GambarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gambar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      motor: Prisma.$MotorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_gambar: number
      id_motor: number
      url_gambar: string
      id_user: number
    }, ExtArgs["result"]["gambar"]>
    composites: {}
  }

  type GambarGetPayload<S extends boolean | null | undefined | GambarDefaultArgs> = $Result.GetResult<Prisma.$GambarPayload, S>

  type GambarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GambarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GambarCountAggregateInputType | true
    }

  export interface GambarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gambar'], meta: { name: 'Gambar' } }
    /**
     * Find zero or one Gambar that matches the filter.
     * @param {GambarFindUniqueArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GambarFindUniqueArgs>(args: SelectSubset<T, GambarFindUniqueArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gambar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GambarFindUniqueOrThrowArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GambarFindUniqueOrThrowArgs>(args: SelectSubset<T, GambarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gambar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindFirstArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GambarFindFirstArgs>(args?: SelectSubset<T, GambarFindFirstArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gambar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindFirstOrThrowArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GambarFindFirstOrThrowArgs>(args?: SelectSubset<T, GambarFindFirstOrThrowArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gambars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gambars
     * const gambars = await prisma.gambar.findMany()
     * 
     * // Get first 10 Gambars
     * const gambars = await prisma.gambar.findMany({ take: 10 })
     * 
     * // Only select the `id_gambar`
     * const gambarWithId_gambarOnly = await prisma.gambar.findMany({ select: { id_gambar: true } })
     * 
     */
    findMany<T extends GambarFindManyArgs>(args?: SelectSubset<T, GambarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gambar.
     * @param {GambarCreateArgs} args - Arguments to create a Gambar.
     * @example
     * // Create one Gambar
     * const Gambar = await prisma.gambar.create({
     *   data: {
     *     // ... data to create a Gambar
     *   }
     * })
     * 
     */
    create<T extends GambarCreateArgs>(args: SelectSubset<T, GambarCreateArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gambars.
     * @param {GambarCreateManyArgs} args - Arguments to create many Gambars.
     * @example
     * // Create many Gambars
     * const gambar = await prisma.gambar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GambarCreateManyArgs>(args?: SelectSubset<T, GambarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gambars and returns the data saved in the database.
     * @param {GambarCreateManyAndReturnArgs} args - Arguments to create many Gambars.
     * @example
     * // Create many Gambars
     * const gambar = await prisma.gambar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gambars and only return the `id_gambar`
     * const gambarWithId_gambarOnly = await prisma.gambar.createManyAndReturn({
     *   select: { id_gambar: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GambarCreateManyAndReturnArgs>(args?: SelectSubset<T, GambarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gambar.
     * @param {GambarDeleteArgs} args - Arguments to delete one Gambar.
     * @example
     * // Delete one Gambar
     * const Gambar = await prisma.gambar.delete({
     *   where: {
     *     // ... filter to delete one Gambar
     *   }
     * })
     * 
     */
    delete<T extends GambarDeleteArgs>(args: SelectSubset<T, GambarDeleteArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gambar.
     * @param {GambarUpdateArgs} args - Arguments to update one Gambar.
     * @example
     * // Update one Gambar
     * const gambar = await prisma.gambar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GambarUpdateArgs>(args: SelectSubset<T, GambarUpdateArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gambars.
     * @param {GambarDeleteManyArgs} args - Arguments to filter Gambars to delete.
     * @example
     * // Delete a few Gambars
     * const { count } = await prisma.gambar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GambarDeleteManyArgs>(args?: SelectSubset<T, GambarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gambars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gambars
     * const gambar = await prisma.gambar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GambarUpdateManyArgs>(args: SelectSubset<T, GambarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gambars and returns the data updated in the database.
     * @param {GambarUpdateManyAndReturnArgs} args - Arguments to update many Gambars.
     * @example
     * // Update many Gambars
     * const gambar = await prisma.gambar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gambars and only return the `id_gambar`
     * const gambarWithId_gambarOnly = await prisma.gambar.updateManyAndReturn({
     *   select: { id_gambar: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GambarUpdateManyAndReturnArgs>(args: SelectSubset<T, GambarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gambar.
     * @param {GambarUpsertArgs} args - Arguments to update or create a Gambar.
     * @example
     * // Update or create a Gambar
     * const gambar = await prisma.gambar.upsert({
     *   create: {
     *     // ... data to create a Gambar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gambar we want to update
     *   }
     * })
     */
    upsert<T extends GambarUpsertArgs>(args: SelectSubset<T, GambarUpsertArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gambars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarCountArgs} args - Arguments to filter Gambars to count.
     * @example
     * // Count the number of Gambars
     * const count = await prisma.gambar.count({
     *   where: {
     *     // ... the filter for the Gambars we want to count
     *   }
     * })
    **/
    count<T extends GambarCountArgs>(
      args?: Subset<T, GambarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GambarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gambar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GambarAggregateArgs>(args: Subset<T, GambarAggregateArgs>): Prisma.PrismaPromise<GetGambarAggregateType<T>>

    /**
     * Group by Gambar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GambarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GambarGroupByArgs['orderBy'] }
        : { orderBy?: GambarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GambarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGambarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gambar model
   */
  readonly fields: GambarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gambar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GambarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    motor<T extends MotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MotorDefaultArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gambar model
   */
  interface GambarFieldRefs {
    readonly id_gambar: FieldRef<"Gambar", 'Int'>
    readonly id_motor: FieldRef<"Gambar", 'Int'>
    readonly url_gambar: FieldRef<"Gambar", 'String'>
    readonly id_user: FieldRef<"Gambar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Gambar findUnique
   */
  export type GambarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar findUniqueOrThrow
   */
  export type GambarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar findFirst
   */
  export type GambarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambars.
     */
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar findFirstOrThrow
   */
  export type GambarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambars.
     */
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar findMany
   */
  export type GambarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambars to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar create
   */
  export type GambarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The data needed to create a Gambar.
     */
    data: XOR<GambarCreateInput, GambarUncheckedCreateInput>
  }

  /**
   * Gambar createMany
   */
  export type GambarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gambars.
     */
    data: GambarCreateManyInput | GambarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gambar createManyAndReturn
   */
  export type GambarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * The data used to create many Gambars.
     */
    data: GambarCreateManyInput | GambarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gambar update
   */
  export type GambarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The data needed to update a Gambar.
     */
    data: XOR<GambarUpdateInput, GambarUncheckedUpdateInput>
    /**
     * Choose, which Gambar to update.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar updateMany
   */
  export type GambarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gambars.
     */
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyInput>
    /**
     * Filter which Gambars to update
     */
    where?: GambarWhereInput
    /**
     * Limit how many Gambars to update.
     */
    limit?: number
  }

  /**
   * Gambar updateManyAndReturn
   */
  export type GambarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * The data used to update Gambars.
     */
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyInput>
    /**
     * Filter which Gambars to update
     */
    where?: GambarWhereInput
    /**
     * Limit how many Gambars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gambar upsert
   */
  export type GambarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The filter to search for the Gambar to update in case it exists.
     */
    where: GambarWhereUniqueInput
    /**
     * In case the Gambar found by the `where` argument doesn't exist, create a new Gambar with this data.
     */
    create: XOR<GambarCreateInput, GambarUncheckedCreateInput>
    /**
     * In case the Gambar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GambarUpdateInput, GambarUncheckedUpdateInput>
  }

  /**
   * Gambar delete
   */
  export type GambarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter which Gambar to delete.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar deleteMany
   */
  export type GambarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gambars to delete
     */
    where?: GambarWhereInput
    /**
     * Limit how many Gambars to delete.
     */
    limit?: number
  }

  /**
   * Gambar without action
   */
  export type GambarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gambar
     */
    omit?: GambarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    email: 'email',
    token: 'token'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    id_kategori: 'id_kategori',
    nama_kategori: 'nama_kategori',
    created_at: 'created_at'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const MotorScalarFieldEnum: {
    id_motor: 'id_motor',
    id_kategori: 'id_kategori',
    id_user: 'id_user',
    nama_barang: 'nama_barang',
    deskripsi: 'deskripsi',
    harga: 'harga',
    gambar_card: 'gambar_card',
    created_at: 'created_at'
  };

  export type MotorScalarFieldEnum = (typeof MotorScalarFieldEnum)[keyof typeof MotorScalarFieldEnum]


  export const GambarScalarFieldEnum: {
    id_gambar: 'id_gambar',
    id_motor: 'id_motor',
    url_gambar: 'url_gambar',
    id_user: 'id_user'
  };

  export type GambarScalarFieldEnum = (typeof GambarScalarFieldEnum)[keyof typeof GambarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    userAction?: MotorListRelationFilter
    gambarList?: GambarListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    token?: SortOrderInput | SortOrder
    userAction?: MotorOrderByRelationAggregateInput
    gambarList?: GambarOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    userAction?: MotorListRelationFilter
    gambarList?: GambarListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    token?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id_kategori?: IntFilter<"Kategori"> | number
    nama_kategori?: StringFilter<"Kategori"> | string
    created_at?: DateTimeFilter<"Kategori"> | Date | string
    motors?: MotorListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    created_at?: SortOrder
    motors?: MotorOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id_kategori?: number
    nama_kategori?: string
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    created_at?: DateTimeFilter<"Kategori"> | Date | string
    motors?: MotorListRelationFilter
  }, "id_kategori" | "nama_kategori">

  export type KategoriOrderByWithAggregationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    created_at?: SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _avg?: KategoriAvgOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
    _sum?: KategoriSumOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id_kategori?: IntWithAggregatesFilter<"Kategori"> | number
    nama_kategori?: StringWithAggregatesFilter<"Kategori"> | string
    created_at?: DateTimeWithAggregatesFilter<"Kategori"> | Date | string
  }

  export type MotorWhereInput = {
    AND?: MotorWhereInput | MotorWhereInput[]
    OR?: MotorWhereInput[]
    NOT?: MotorWhereInput | MotorWhereInput[]
    id_motor?: IntFilter<"Motor"> | number
    id_kategori?: IntFilter<"Motor"> | number
    id_user?: IntFilter<"Motor"> | number
    nama_barang?: StringFilter<"Motor"> | string
    deskripsi?: StringNullableFilter<"Motor"> | string | null
    harga?: DecimalNullableFilter<"Motor"> | Decimal | DecimalJsLike | number | string | null
    gambar_card?: StringNullableFilter<"Motor"> | string | null
    created_at?: DateTimeFilter<"Motor"> | Date | string
    gambarMotors?: GambarListRelationFilter
    userCreated?: XOR<UserScalarRelationFilter, UserWhereInput>
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }

  export type MotorOrderByWithRelationInput = {
    id_motor?: SortOrder
    id_kategori?: SortOrder
    id_user?: SortOrder
    nama_barang?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    harga?: SortOrderInput | SortOrder
    gambar_card?: SortOrderInput | SortOrder
    created_at?: SortOrder
    gambarMotors?: GambarOrderByRelationAggregateInput
    userCreated?: UserOrderByWithRelationInput
    kategori?: KategoriOrderByWithRelationInput
  }

  export type MotorWhereUniqueInput = Prisma.AtLeast<{
    id_motor?: number
    AND?: MotorWhereInput | MotorWhereInput[]
    OR?: MotorWhereInput[]
    NOT?: MotorWhereInput | MotorWhereInput[]
    id_kategori?: IntFilter<"Motor"> | number
    id_user?: IntFilter<"Motor"> | number
    nama_barang?: StringFilter<"Motor"> | string
    deskripsi?: StringNullableFilter<"Motor"> | string | null
    harga?: DecimalNullableFilter<"Motor"> | Decimal | DecimalJsLike | number | string | null
    gambar_card?: StringNullableFilter<"Motor"> | string | null
    created_at?: DateTimeFilter<"Motor"> | Date | string
    gambarMotors?: GambarListRelationFilter
    userCreated?: XOR<UserScalarRelationFilter, UserWhereInput>
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }, "id_motor">

  export type MotorOrderByWithAggregationInput = {
    id_motor?: SortOrder
    id_kategori?: SortOrder
    id_user?: SortOrder
    nama_barang?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    harga?: SortOrderInput | SortOrder
    gambar_card?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: MotorCountOrderByAggregateInput
    _avg?: MotorAvgOrderByAggregateInput
    _max?: MotorMaxOrderByAggregateInput
    _min?: MotorMinOrderByAggregateInput
    _sum?: MotorSumOrderByAggregateInput
  }

  export type MotorScalarWhereWithAggregatesInput = {
    AND?: MotorScalarWhereWithAggregatesInput | MotorScalarWhereWithAggregatesInput[]
    OR?: MotorScalarWhereWithAggregatesInput[]
    NOT?: MotorScalarWhereWithAggregatesInput | MotorScalarWhereWithAggregatesInput[]
    id_motor?: IntWithAggregatesFilter<"Motor"> | number
    id_kategori?: IntWithAggregatesFilter<"Motor"> | number
    id_user?: IntWithAggregatesFilter<"Motor"> | number
    nama_barang?: StringWithAggregatesFilter<"Motor"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Motor"> | string | null
    harga?: DecimalNullableWithAggregatesFilter<"Motor"> | Decimal | DecimalJsLike | number | string | null
    gambar_card?: StringNullableWithAggregatesFilter<"Motor"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Motor"> | Date | string
  }

  export type GambarWhereInput = {
    AND?: GambarWhereInput | GambarWhereInput[]
    OR?: GambarWhereInput[]
    NOT?: GambarWhereInput | GambarWhereInput[]
    id_gambar?: IntFilter<"Gambar"> | number
    id_motor?: IntFilter<"Gambar"> | number
    url_gambar?: StringFilter<"Gambar"> | string
    id_user?: IntFilter<"Gambar"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    motor?: XOR<MotorScalarRelationFilter, MotorWhereInput>
  }

  export type GambarOrderByWithRelationInput = {
    id_gambar?: SortOrder
    id_motor?: SortOrder
    url_gambar?: SortOrder
    id_user?: SortOrder
    user?: UserOrderByWithRelationInput
    motor?: MotorOrderByWithRelationInput
  }

  export type GambarWhereUniqueInput = Prisma.AtLeast<{
    id_gambar?: number
    AND?: GambarWhereInput | GambarWhereInput[]
    OR?: GambarWhereInput[]
    NOT?: GambarWhereInput | GambarWhereInput[]
    id_motor?: IntFilter<"Gambar"> | number
    url_gambar?: StringFilter<"Gambar"> | string
    id_user?: IntFilter<"Gambar"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    motor?: XOR<MotorScalarRelationFilter, MotorWhereInput>
  }, "id_gambar">

  export type GambarOrderByWithAggregationInput = {
    id_gambar?: SortOrder
    id_motor?: SortOrder
    url_gambar?: SortOrder
    id_user?: SortOrder
    _count?: GambarCountOrderByAggregateInput
    _avg?: GambarAvgOrderByAggregateInput
    _max?: GambarMaxOrderByAggregateInput
    _min?: GambarMinOrderByAggregateInput
    _sum?: GambarSumOrderByAggregateInput
  }

  export type GambarScalarWhereWithAggregatesInput = {
    AND?: GambarScalarWhereWithAggregatesInput | GambarScalarWhereWithAggregatesInput[]
    OR?: GambarScalarWhereWithAggregatesInput[]
    NOT?: GambarScalarWhereWithAggregatesInput | GambarScalarWhereWithAggregatesInput[]
    id_gambar?: IntWithAggregatesFilter<"Gambar"> | number
    id_motor?: IntWithAggregatesFilter<"Gambar"> | number
    url_gambar?: StringWithAggregatesFilter<"Gambar"> | string
    id_user?: IntWithAggregatesFilter<"Gambar"> | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    name: string
    email: string
    token?: string | null
    userAction?: MotorCreateNestedManyWithoutUserCreatedInput
    gambarList?: GambarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    name: string
    email: string
    token?: string | null
    userAction?: MotorUncheckedCreateNestedManyWithoutUserCreatedInput
    gambarList?: GambarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userAction?: MotorUpdateManyWithoutUserCreatedNestedInput
    gambarList?: GambarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userAction?: MotorUncheckedUpdateManyWithoutUserCreatedNestedInput
    gambarList?: GambarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    name: string
    email: string
    token?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KategoriCreateInput = {
    nama_kategori: string
    created_at?: Date | string
    motors?: MotorCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id_kategori?: number
    nama_kategori: string
    created_at?: Date | string
    motors?: MotorUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    motors?: MotorUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    motors?: MotorUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id_kategori?: number
    nama_kategori: string
    created_at?: Date | string
  }

  export type KategoriUpdateManyMutationInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateManyInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorCreateInput = {
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
    gambarMotors?: GambarCreateNestedManyWithoutMotorInput
    userCreated: UserCreateNestedOneWithoutUserActionInput
    kategori: KategoriCreateNestedOneWithoutMotorsInput
  }

  export type MotorUncheckedCreateInput = {
    id_motor?: number
    id_kategori: number
    id_user: number
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
    gambarMotors?: GambarUncheckedCreateNestedManyWithoutMotorInput
  }

  export type MotorUpdateInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gambarMotors?: GambarUpdateManyWithoutMotorNestedInput
    userCreated?: UserUpdateOneRequiredWithoutUserActionNestedInput
    kategori?: KategoriUpdateOneRequiredWithoutMotorsNestedInput
  }

  export type MotorUncheckedUpdateInput = {
    id_motor?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gambarMotors?: GambarUncheckedUpdateManyWithoutMotorNestedInput
  }

  export type MotorCreateManyInput = {
    id_motor?: number
    id_kategori: number
    id_user: number
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
  }

  export type MotorUpdateManyMutationInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorUncheckedUpdateManyInput = {
    id_motor?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateInput = {
    url_gambar: string
    user: UserCreateNestedOneWithoutGambarListInput
    motor: MotorCreateNestedOneWithoutGambarMotorsInput
  }

  export type GambarUncheckedCreateInput = {
    id_gambar?: number
    id_motor: number
    url_gambar: string
    id_user: number
  }

  export type GambarUpdateInput = {
    url_gambar?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGambarListNestedInput
    motor?: MotorUpdateOneRequiredWithoutGambarMotorsNestedInput
  }

  export type GambarUncheckedUpdateInput = {
    id_gambar?: IntFieldUpdateOperationsInput | number
    id_motor?: IntFieldUpdateOperationsInput | number
    url_gambar?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type GambarCreateManyInput = {
    id_gambar?: number
    id_motor: number
    url_gambar: string
    id_user: number
  }

  export type GambarUpdateManyMutationInput = {
    url_gambar?: StringFieldUpdateOperationsInput | string
  }

  export type GambarUncheckedUpdateManyInput = {
    id_gambar?: IntFieldUpdateOperationsInput | number
    id_motor?: IntFieldUpdateOperationsInput | number
    url_gambar?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MotorListRelationFilter = {
    every?: MotorWhereInput
    some?: MotorWhereInput
    none?: MotorWhereInput
  }

  export type GambarListRelationFilter = {
    every?: GambarWhereInput
    some?: GambarWhereInput
    none?: GambarWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MotorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GambarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    token?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    token?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KategoriCountOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    created_at?: SortOrder
  }

  export type KategoriAvgOrderByAggregateInput = {
    id_kategori?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    created_at?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    created_at?: SortOrder
  }

  export type KategoriSumOrderByAggregateInput = {
    id_kategori?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type MotorCountOrderByAggregateInput = {
    id_motor?: SortOrder
    id_kategori?: SortOrder
    id_user?: SortOrder
    nama_barang?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    gambar_card?: SortOrder
    created_at?: SortOrder
  }

  export type MotorAvgOrderByAggregateInput = {
    id_motor?: SortOrder
    id_kategori?: SortOrder
    id_user?: SortOrder
    harga?: SortOrder
  }

  export type MotorMaxOrderByAggregateInput = {
    id_motor?: SortOrder
    id_kategori?: SortOrder
    id_user?: SortOrder
    nama_barang?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    gambar_card?: SortOrder
    created_at?: SortOrder
  }

  export type MotorMinOrderByAggregateInput = {
    id_motor?: SortOrder
    id_kategori?: SortOrder
    id_user?: SortOrder
    nama_barang?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    gambar_card?: SortOrder
    created_at?: SortOrder
  }

  export type MotorSumOrderByAggregateInput = {
    id_motor?: SortOrder
    id_kategori?: SortOrder
    id_user?: SortOrder
    harga?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type MotorScalarRelationFilter = {
    is?: MotorWhereInput
    isNot?: MotorWhereInput
  }

  export type GambarCountOrderByAggregateInput = {
    id_gambar?: SortOrder
    id_motor?: SortOrder
    url_gambar?: SortOrder
    id_user?: SortOrder
  }

  export type GambarAvgOrderByAggregateInput = {
    id_gambar?: SortOrder
    id_motor?: SortOrder
    id_user?: SortOrder
  }

  export type GambarMaxOrderByAggregateInput = {
    id_gambar?: SortOrder
    id_motor?: SortOrder
    url_gambar?: SortOrder
    id_user?: SortOrder
  }

  export type GambarMinOrderByAggregateInput = {
    id_gambar?: SortOrder
    id_motor?: SortOrder
    url_gambar?: SortOrder
    id_user?: SortOrder
  }

  export type GambarSumOrderByAggregateInput = {
    id_gambar?: SortOrder
    id_motor?: SortOrder
    id_user?: SortOrder
  }

  export type MotorCreateNestedManyWithoutUserCreatedInput = {
    create?: XOR<MotorCreateWithoutUserCreatedInput, MotorUncheckedCreateWithoutUserCreatedInput> | MotorCreateWithoutUserCreatedInput[] | MotorUncheckedCreateWithoutUserCreatedInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutUserCreatedInput | MotorCreateOrConnectWithoutUserCreatedInput[]
    createMany?: MotorCreateManyUserCreatedInputEnvelope
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
  }

  export type GambarCreateNestedManyWithoutUserInput = {
    create?: XOR<GambarCreateWithoutUserInput, GambarUncheckedCreateWithoutUserInput> | GambarCreateWithoutUserInput[] | GambarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUserInput | GambarCreateOrConnectWithoutUserInput[]
    createMany?: GambarCreateManyUserInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type MotorUncheckedCreateNestedManyWithoutUserCreatedInput = {
    create?: XOR<MotorCreateWithoutUserCreatedInput, MotorUncheckedCreateWithoutUserCreatedInput> | MotorCreateWithoutUserCreatedInput[] | MotorUncheckedCreateWithoutUserCreatedInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutUserCreatedInput | MotorCreateOrConnectWithoutUserCreatedInput[]
    createMany?: MotorCreateManyUserCreatedInputEnvelope
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
  }

  export type GambarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GambarCreateWithoutUserInput, GambarUncheckedCreateWithoutUserInput> | GambarCreateWithoutUserInput[] | GambarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUserInput | GambarCreateOrConnectWithoutUserInput[]
    createMany?: GambarCreateManyUserInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MotorUpdateManyWithoutUserCreatedNestedInput = {
    create?: XOR<MotorCreateWithoutUserCreatedInput, MotorUncheckedCreateWithoutUserCreatedInput> | MotorCreateWithoutUserCreatedInput[] | MotorUncheckedCreateWithoutUserCreatedInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutUserCreatedInput | MotorCreateOrConnectWithoutUserCreatedInput[]
    upsert?: MotorUpsertWithWhereUniqueWithoutUserCreatedInput | MotorUpsertWithWhereUniqueWithoutUserCreatedInput[]
    createMany?: MotorCreateManyUserCreatedInputEnvelope
    set?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    disconnect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    delete?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    update?: MotorUpdateWithWhereUniqueWithoutUserCreatedInput | MotorUpdateWithWhereUniqueWithoutUserCreatedInput[]
    updateMany?: MotorUpdateManyWithWhereWithoutUserCreatedInput | MotorUpdateManyWithWhereWithoutUserCreatedInput[]
    deleteMany?: MotorScalarWhereInput | MotorScalarWhereInput[]
  }

  export type GambarUpdateManyWithoutUserNestedInput = {
    create?: XOR<GambarCreateWithoutUserInput, GambarUncheckedCreateWithoutUserInput> | GambarCreateWithoutUserInput[] | GambarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUserInput | GambarCreateOrConnectWithoutUserInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutUserInput | GambarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GambarCreateManyUserInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutUserInput | GambarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutUserInput | GambarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MotorUncheckedUpdateManyWithoutUserCreatedNestedInput = {
    create?: XOR<MotorCreateWithoutUserCreatedInput, MotorUncheckedCreateWithoutUserCreatedInput> | MotorCreateWithoutUserCreatedInput[] | MotorUncheckedCreateWithoutUserCreatedInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutUserCreatedInput | MotorCreateOrConnectWithoutUserCreatedInput[]
    upsert?: MotorUpsertWithWhereUniqueWithoutUserCreatedInput | MotorUpsertWithWhereUniqueWithoutUserCreatedInput[]
    createMany?: MotorCreateManyUserCreatedInputEnvelope
    set?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    disconnect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    delete?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    update?: MotorUpdateWithWhereUniqueWithoutUserCreatedInput | MotorUpdateWithWhereUniqueWithoutUserCreatedInput[]
    updateMany?: MotorUpdateManyWithWhereWithoutUserCreatedInput | MotorUpdateManyWithWhereWithoutUserCreatedInput[]
    deleteMany?: MotorScalarWhereInput | MotorScalarWhereInput[]
  }

  export type GambarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GambarCreateWithoutUserInput, GambarUncheckedCreateWithoutUserInput> | GambarCreateWithoutUserInput[] | GambarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUserInput | GambarCreateOrConnectWithoutUserInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutUserInput | GambarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GambarCreateManyUserInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutUserInput | GambarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutUserInput | GambarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type MotorCreateNestedManyWithoutKategoriInput = {
    create?: XOR<MotorCreateWithoutKategoriInput, MotorUncheckedCreateWithoutKategoriInput> | MotorCreateWithoutKategoriInput[] | MotorUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutKategoriInput | MotorCreateOrConnectWithoutKategoriInput[]
    createMany?: MotorCreateManyKategoriInputEnvelope
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
  }

  export type MotorUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<MotorCreateWithoutKategoriInput, MotorUncheckedCreateWithoutKategoriInput> | MotorCreateWithoutKategoriInput[] | MotorUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutKategoriInput | MotorCreateOrConnectWithoutKategoriInput[]
    createMany?: MotorCreateManyKategoriInputEnvelope
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MotorUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<MotorCreateWithoutKategoriInput, MotorUncheckedCreateWithoutKategoriInput> | MotorCreateWithoutKategoriInput[] | MotorUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutKategoriInput | MotorCreateOrConnectWithoutKategoriInput[]
    upsert?: MotorUpsertWithWhereUniqueWithoutKategoriInput | MotorUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: MotorCreateManyKategoriInputEnvelope
    set?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    disconnect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    delete?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    update?: MotorUpdateWithWhereUniqueWithoutKategoriInput | MotorUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: MotorUpdateManyWithWhereWithoutKategoriInput | MotorUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: MotorScalarWhereInput | MotorScalarWhereInput[]
  }

  export type MotorUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<MotorCreateWithoutKategoriInput, MotorUncheckedCreateWithoutKategoriInput> | MotorCreateWithoutKategoriInput[] | MotorUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: MotorCreateOrConnectWithoutKategoriInput | MotorCreateOrConnectWithoutKategoriInput[]
    upsert?: MotorUpsertWithWhereUniqueWithoutKategoriInput | MotorUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: MotorCreateManyKategoriInputEnvelope
    set?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    disconnect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    delete?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    connect?: MotorWhereUniqueInput | MotorWhereUniqueInput[]
    update?: MotorUpdateWithWhereUniqueWithoutKategoriInput | MotorUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: MotorUpdateManyWithWhereWithoutKategoriInput | MotorUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: MotorScalarWhereInput | MotorScalarWhereInput[]
  }

  export type GambarCreateNestedManyWithoutMotorInput = {
    create?: XOR<GambarCreateWithoutMotorInput, GambarUncheckedCreateWithoutMotorInput> | GambarCreateWithoutMotorInput[] | GambarUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutMotorInput | GambarCreateOrConnectWithoutMotorInput[]
    createMany?: GambarCreateManyMotorInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutUserActionInput = {
    create?: XOR<UserCreateWithoutUserActionInput, UserUncheckedCreateWithoutUserActionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActionInput
    connect?: UserWhereUniqueInput
  }

  export type KategoriCreateNestedOneWithoutMotorsInput = {
    create?: XOR<KategoriCreateWithoutMotorsInput, KategoriUncheckedCreateWithoutMotorsInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutMotorsInput
    connect?: KategoriWhereUniqueInput
  }

  export type GambarUncheckedCreateNestedManyWithoutMotorInput = {
    create?: XOR<GambarCreateWithoutMotorInput, GambarUncheckedCreateWithoutMotorInput> | GambarCreateWithoutMotorInput[] | GambarUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutMotorInput | GambarCreateOrConnectWithoutMotorInput[]
    createMany?: GambarCreateManyMotorInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type GambarUpdateManyWithoutMotorNestedInput = {
    create?: XOR<GambarCreateWithoutMotorInput, GambarUncheckedCreateWithoutMotorInput> | GambarCreateWithoutMotorInput[] | GambarUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutMotorInput | GambarCreateOrConnectWithoutMotorInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutMotorInput | GambarUpsertWithWhereUniqueWithoutMotorInput[]
    createMany?: GambarCreateManyMotorInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutMotorInput | GambarUpdateWithWhereUniqueWithoutMotorInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutMotorInput | GambarUpdateManyWithWhereWithoutMotorInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutUserActionNestedInput = {
    create?: XOR<UserCreateWithoutUserActionInput, UserUncheckedCreateWithoutUserActionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActionInput
    upsert?: UserUpsertWithoutUserActionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserActionInput, UserUpdateWithoutUserActionInput>, UserUncheckedUpdateWithoutUserActionInput>
  }

  export type KategoriUpdateOneRequiredWithoutMotorsNestedInput = {
    create?: XOR<KategoriCreateWithoutMotorsInput, KategoriUncheckedCreateWithoutMotorsInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutMotorsInput
    upsert?: KategoriUpsertWithoutMotorsInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutMotorsInput, KategoriUpdateWithoutMotorsInput>, KategoriUncheckedUpdateWithoutMotorsInput>
  }

  export type GambarUncheckedUpdateManyWithoutMotorNestedInput = {
    create?: XOR<GambarCreateWithoutMotorInput, GambarUncheckedCreateWithoutMotorInput> | GambarCreateWithoutMotorInput[] | GambarUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutMotorInput | GambarCreateOrConnectWithoutMotorInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutMotorInput | GambarUpsertWithWhereUniqueWithoutMotorInput[]
    createMany?: GambarCreateManyMotorInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutMotorInput | GambarUpdateWithWhereUniqueWithoutMotorInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutMotorInput | GambarUpdateManyWithWhereWithoutMotorInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGambarListInput = {
    create?: XOR<UserCreateWithoutGambarListInput, UserUncheckedCreateWithoutGambarListInput>
    connectOrCreate?: UserCreateOrConnectWithoutGambarListInput
    connect?: UserWhereUniqueInput
  }

  export type MotorCreateNestedOneWithoutGambarMotorsInput = {
    create?: XOR<MotorCreateWithoutGambarMotorsInput, MotorUncheckedCreateWithoutGambarMotorsInput>
    connectOrCreate?: MotorCreateOrConnectWithoutGambarMotorsInput
    connect?: MotorWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGambarListNestedInput = {
    create?: XOR<UserCreateWithoutGambarListInput, UserUncheckedCreateWithoutGambarListInput>
    connectOrCreate?: UserCreateOrConnectWithoutGambarListInput
    upsert?: UserUpsertWithoutGambarListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGambarListInput, UserUpdateWithoutGambarListInput>, UserUncheckedUpdateWithoutGambarListInput>
  }

  export type MotorUpdateOneRequiredWithoutGambarMotorsNestedInput = {
    create?: XOR<MotorCreateWithoutGambarMotorsInput, MotorUncheckedCreateWithoutGambarMotorsInput>
    connectOrCreate?: MotorCreateOrConnectWithoutGambarMotorsInput
    upsert?: MotorUpsertWithoutGambarMotorsInput
    connect?: MotorWhereUniqueInput
    update?: XOR<XOR<MotorUpdateToOneWithWhereWithoutGambarMotorsInput, MotorUpdateWithoutGambarMotorsInput>, MotorUncheckedUpdateWithoutGambarMotorsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type MotorCreateWithoutUserCreatedInput = {
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
    gambarMotors?: GambarCreateNestedManyWithoutMotorInput
    kategori: KategoriCreateNestedOneWithoutMotorsInput
  }

  export type MotorUncheckedCreateWithoutUserCreatedInput = {
    id_motor?: number
    id_kategori: number
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
    gambarMotors?: GambarUncheckedCreateNestedManyWithoutMotorInput
  }

  export type MotorCreateOrConnectWithoutUserCreatedInput = {
    where: MotorWhereUniqueInput
    create: XOR<MotorCreateWithoutUserCreatedInput, MotorUncheckedCreateWithoutUserCreatedInput>
  }

  export type MotorCreateManyUserCreatedInputEnvelope = {
    data: MotorCreateManyUserCreatedInput | MotorCreateManyUserCreatedInput[]
    skipDuplicates?: boolean
  }

  export type GambarCreateWithoutUserInput = {
    url_gambar: string
    motor: MotorCreateNestedOneWithoutGambarMotorsInput
  }

  export type GambarUncheckedCreateWithoutUserInput = {
    id_gambar?: number
    id_motor: number
    url_gambar: string
  }

  export type GambarCreateOrConnectWithoutUserInput = {
    where: GambarWhereUniqueInput
    create: XOR<GambarCreateWithoutUserInput, GambarUncheckedCreateWithoutUserInput>
  }

  export type GambarCreateManyUserInputEnvelope = {
    data: GambarCreateManyUserInput | GambarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MotorUpsertWithWhereUniqueWithoutUserCreatedInput = {
    where: MotorWhereUniqueInput
    update: XOR<MotorUpdateWithoutUserCreatedInput, MotorUncheckedUpdateWithoutUserCreatedInput>
    create: XOR<MotorCreateWithoutUserCreatedInput, MotorUncheckedCreateWithoutUserCreatedInput>
  }

  export type MotorUpdateWithWhereUniqueWithoutUserCreatedInput = {
    where: MotorWhereUniqueInput
    data: XOR<MotorUpdateWithoutUserCreatedInput, MotorUncheckedUpdateWithoutUserCreatedInput>
  }

  export type MotorUpdateManyWithWhereWithoutUserCreatedInput = {
    where: MotorScalarWhereInput
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyWithoutUserCreatedInput>
  }

  export type MotorScalarWhereInput = {
    AND?: MotorScalarWhereInput | MotorScalarWhereInput[]
    OR?: MotorScalarWhereInput[]
    NOT?: MotorScalarWhereInput | MotorScalarWhereInput[]
    id_motor?: IntFilter<"Motor"> | number
    id_kategori?: IntFilter<"Motor"> | number
    id_user?: IntFilter<"Motor"> | number
    nama_barang?: StringFilter<"Motor"> | string
    deskripsi?: StringNullableFilter<"Motor"> | string | null
    harga?: DecimalNullableFilter<"Motor"> | Decimal | DecimalJsLike | number | string | null
    gambar_card?: StringNullableFilter<"Motor"> | string | null
    created_at?: DateTimeFilter<"Motor"> | Date | string
  }

  export type GambarUpsertWithWhereUniqueWithoutUserInput = {
    where: GambarWhereUniqueInput
    update: XOR<GambarUpdateWithoutUserInput, GambarUncheckedUpdateWithoutUserInput>
    create: XOR<GambarCreateWithoutUserInput, GambarUncheckedCreateWithoutUserInput>
  }

  export type GambarUpdateWithWhereUniqueWithoutUserInput = {
    where: GambarWhereUniqueInput
    data: XOR<GambarUpdateWithoutUserInput, GambarUncheckedUpdateWithoutUserInput>
  }

  export type GambarUpdateManyWithWhereWithoutUserInput = {
    where: GambarScalarWhereInput
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyWithoutUserInput>
  }

  export type GambarScalarWhereInput = {
    AND?: GambarScalarWhereInput | GambarScalarWhereInput[]
    OR?: GambarScalarWhereInput[]
    NOT?: GambarScalarWhereInput | GambarScalarWhereInput[]
    id_gambar?: IntFilter<"Gambar"> | number
    id_motor?: IntFilter<"Gambar"> | number
    url_gambar?: StringFilter<"Gambar"> | string
    id_user?: IntFilter<"Gambar"> | number
  }

  export type MotorCreateWithoutKategoriInput = {
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
    gambarMotors?: GambarCreateNestedManyWithoutMotorInput
    userCreated: UserCreateNestedOneWithoutUserActionInput
  }

  export type MotorUncheckedCreateWithoutKategoriInput = {
    id_motor?: number
    id_user: number
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
    gambarMotors?: GambarUncheckedCreateNestedManyWithoutMotorInput
  }

  export type MotorCreateOrConnectWithoutKategoriInput = {
    where: MotorWhereUniqueInput
    create: XOR<MotorCreateWithoutKategoriInput, MotorUncheckedCreateWithoutKategoriInput>
  }

  export type MotorCreateManyKategoriInputEnvelope = {
    data: MotorCreateManyKategoriInput | MotorCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type MotorUpsertWithWhereUniqueWithoutKategoriInput = {
    where: MotorWhereUniqueInput
    update: XOR<MotorUpdateWithoutKategoriInput, MotorUncheckedUpdateWithoutKategoriInput>
    create: XOR<MotorCreateWithoutKategoriInput, MotorUncheckedCreateWithoutKategoriInput>
  }

  export type MotorUpdateWithWhereUniqueWithoutKategoriInput = {
    where: MotorWhereUniqueInput
    data: XOR<MotorUpdateWithoutKategoriInput, MotorUncheckedUpdateWithoutKategoriInput>
  }

  export type MotorUpdateManyWithWhereWithoutKategoriInput = {
    where: MotorScalarWhereInput
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyWithoutKategoriInput>
  }

  export type GambarCreateWithoutMotorInput = {
    url_gambar: string
    user: UserCreateNestedOneWithoutGambarListInput
  }

  export type GambarUncheckedCreateWithoutMotorInput = {
    id_gambar?: number
    url_gambar: string
    id_user: number
  }

  export type GambarCreateOrConnectWithoutMotorInput = {
    where: GambarWhereUniqueInput
    create: XOR<GambarCreateWithoutMotorInput, GambarUncheckedCreateWithoutMotorInput>
  }

  export type GambarCreateManyMotorInputEnvelope = {
    data: GambarCreateManyMotorInput | GambarCreateManyMotorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUserActionInput = {
    username: string
    password: string
    name: string
    email: string
    token?: string | null
    gambarList?: GambarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserActionInput = {
    id?: number
    username: string
    password: string
    name: string
    email: string
    token?: string | null
    gambarList?: GambarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserActionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserActionInput, UserUncheckedCreateWithoutUserActionInput>
  }

  export type KategoriCreateWithoutMotorsInput = {
    nama_kategori: string
    created_at?: Date | string
  }

  export type KategoriUncheckedCreateWithoutMotorsInput = {
    id_kategori?: number
    nama_kategori: string
    created_at?: Date | string
  }

  export type KategoriCreateOrConnectWithoutMotorsInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutMotorsInput, KategoriUncheckedCreateWithoutMotorsInput>
  }

  export type GambarUpsertWithWhereUniqueWithoutMotorInput = {
    where: GambarWhereUniqueInput
    update: XOR<GambarUpdateWithoutMotorInput, GambarUncheckedUpdateWithoutMotorInput>
    create: XOR<GambarCreateWithoutMotorInput, GambarUncheckedCreateWithoutMotorInput>
  }

  export type GambarUpdateWithWhereUniqueWithoutMotorInput = {
    where: GambarWhereUniqueInput
    data: XOR<GambarUpdateWithoutMotorInput, GambarUncheckedUpdateWithoutMotorInput>
  }

  export type GambarUpdateManyWithWhereWithoutMotorInput = {
    where: GambarScalarWhereInput
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyWithoutMotorInput>
  }

  export type UserUpsertWithoutUserActionInput = {
    update: XOR<UserUpdateWithoutUserActionInput, UserUncheckedUpdateWithoutUserActionInput>
    create: XOR<UserCreateWithoutUserActionInput, UserUncheckedCreateWithoutUserActionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserActionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserActionInput, UserUncheckedUpdateWithoutUserActionInput>
  }

  export type UserUpdateWithoutUserActionInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    gambarList?: GambarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    gambarList?: GambarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KategoriUpsertWithoutMotorsInput = {
    update: XOR<KategoriUpdateWithoutMotorsInput, KategoriUncheckedUpdateWithoutMotorsInput>
    create: XOR<KategoriCreateWithoutMotorsInput, KategoriUncheckedCreateWithoutMotorsInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutMotorsInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutMotorsInput, KategoriUncheckedUpdateWithoutMotorsInput>
  }

  export type KategoriUpdateWithoutMotorsInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateWithoutMotorsInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutGambarListInput = {
    username: string
    password: string
    name: string
    email: string
    token?: string | null
    userAction?: MotorCreateNestedManyWithoutUserCreatedInput
  }

  export type UserUncheckedCreateWithoutGambarListInput = {
    id?: number
    username: string
    password: string
    name: string
    email: string
    token?: string | null
    userAction?: MotorUncheckedCreateNestedManyWithoutUserCreatedInput
  }

  export type UserCreateOrConnectWithoutGambarListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGambarListInput, UserUncheckedCreateWithoutGambarListInput>
  }

  export type MotorCreateWithoutGambarMotorsInput = {
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
    userCreated: UserCreateNestedOneWithoutUserActionInput
    kategori: KategoriCreateNestedOneWithoutMotorsInput
  }

  export type MotorUncheckedCreateWithoutGambarMotorsInput = {
    id_motor?: number
    id_kategori: number
    id_user: number
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
  }

  export type MotorCreateOrConnectWithoutGambarMotorsInput = {
    where: MotorWhereUniqueInput
    create: XOR<MotorCreateWithoutGambarMotorsInput, MotorUncheckedCreateWithoutGambarMotorsInput>
  }

  export type UserUpsertWithoutGambarListInput = {
    update: XOR<UserUpdateWithoutGambarListInput, UserUncheckedUpdateWithoutGambarListInput>
    create: XOR<UserCreateWithoutGambarListInput, UserUncheckedCreateWithoutGambarListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGambarListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGambarListInput, UserUncheckedUpdateWithoutGambarListInput>
  }

  export type UserUpdateWithoutGambarListInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userAction?: MotorUpdateManyWithoutUserCreatedNestedInput
  }

  export type UserUncheckedUpdateWithoutGambarListInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userAction?: MotorUncheckedUpdateManyWithoutUserCreatedNestedInput
  }

  export type MotorUpsertWithoutGambarMotorsInput = {
    update: XOR<MotorUpdateWithoutGambarMotorsInput, MotorUncheckedUpdateWithoutGambarMotorsInput>
    create: XOR<MotorCreateWithoutGambarMotorsInput, MotorUncheckedCreateWithoutGambarMotorsInput>
    where?: MotorWhereInput
  }

  export type MotorUpdateToOneWithWhereWithoutGambarMotorsInput = {
    where?: MotorWhereInput
    data: XOR<MotorUpdateWithoutGambarMotorsInput, MotorUncheckedUpdateWithoutGambarMotorsInput>
  }

  export type MotorUpdateWithoutGambarMotorsInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userCreated?: UserUpdateOneRequiredWithoutUserActionNestedInput
    kategori?: KategoriUpdateOneRequiredWithoutMotorsNestedInput
  }

  export type MotorUncheckedUpdateWithoutGambarMotorsInput = {
    id_motor?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorCreateManyUserCreatedInput = {
    id_motor?: number
    id_kategori: number
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
  }

  export type GambarCreateManyUserInput = {
    id_gambar?: number
    id_motor: number
    url_gambar: string
  }

  export type MotorUpdateWithoutUserCreatedInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gambarMotors?: GambarUpdateManyWithoutMotorNestedInput
    kategori?: KategoriUpdateOneRequiredWithoutMotorsNestedInput
  }

  export type MotorUncheckedUpdateWithoutUserCreatedInput = {
    id_motor?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gambarMotors?: GambarUncheckedUpdateManyWithoutMotorNestedInput
  }

  export type MotorUncheckedUpdateManyWithoutUserCreatedInput = {
    id_motor?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUpdateWithoutUserInput = {
    url_gambar?: StringFieldUpdateOperationsInput | string
    motor?: MotorUpdateOneRequiredWithoutGambarMotorsNestedInput
  }

  export type GambarUncheckedUpdateWithoutUserInput = {
    id_gambar?: IntFieldUpdateOperationsInput | number
    id_motor?: IntFieldUpdateOperationsInput | number
    url_gambar?: StringFieldUpdateOperationsInput | string
  }

  export type GambarUncheckedUpdateManyWithoutUserInput = {
    id_gambar?: IntFieldUpdateOperationsInput | number
    id_motor?: IntFieldUpdateOperationsInput | number
    url_gambar?: StringFieldUpdateOperationsInput | string
  }

  export type MotorCreateManyKategoriInput = {
    id_motor?: number
    id_user: number
    nama_barang: string
    deskripsi?: string | null
    harga?: Decimal | DecimalJsLike | number | string | null
    gambar_card?: string | null
    created_at?: Date | string
  }

  export type MotorUpdateWithoutKategoriInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gambarMotors?: GambarUpdateManyWithoutMotorNestedInput
    userCreated?: UserUpdateOneRequiredWithoutUserActionNestedInput
  }

  export type MotorUncheckedUpdateWithoutKategoriInput = {
    id_motor?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gambarMotors?: GambarUncheckedUpdateManyWithoutMotorNestedInput
  }

  export type MotorUncheckedUpdateManyWithoutKategoriInput = {
    id_motor?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gambar_card?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateManyMotorInput = {
    id_gambar?: number
    url_gambar: string
    id_user: number
  }

  export type GambarUpdateWithoutMotorInput = {
    url_gambar?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGambarListNestedInput
  }

  export type GambarUncheckedUpdateWithoutMotorInput = {
    id_gambar?: IntFieldUpdateOperationsInput | number
    url_gambar?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type GambarUncheckedUpdateManyWithoutMotorInput = {
    id_gambar?: IntFieldUpdateOperationsInput | number
    url_gambar?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}