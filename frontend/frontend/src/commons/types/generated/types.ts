export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type ICarBrand = {
  __typename?: 'CarBrand';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ICarBrandInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ICarCategory = {
  __typename?: 'CarCategory';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ICarCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ICarMains = {
  __typename?: 'CarMains';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export type ICarSize = {
  __typename?: 'CarSize';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ICarSizeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ICreateCarInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ICreateMbtiInput = {
  carBrandId?: InputMaybe<ICarBrandInput>;
  carCategoryId?: InputMaybe<ICarCategoryInput>;
  carSizeId: ICarSizeInput;
  contents: Scalars['String']['input'];
  creatmains?: InputMaybe<ICreateCarInput>;
  name: Scalars['String']['input'];
};

export type IMbtis = {
  __typename?: 'MBTIS';
  carBrand?: Maybe<ICarBrand>;
  carCategory?: Maybe<ICarCategory>;
  carMain?: Maybe<ICarMains>;
  carSize?: Maybe<ICarSize>;
  contents: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type IMutation = {
  __typename?: 'Mutation';
  carBrand?: Maybe<ICarBrand>;
  createCar: ICarMains;
  createCarCategory?: Maybe<ICarCategory>;
  createCarSize: ICarSize;
  creatembti: IMbtis;
  deleteCar: Scalars['Boolean']['output'];
  updateMBTI?: Maybe<IMbtis>;
  uploadFile: Scalars['String']['output'];
};


export type IMutationCarBrandArgs = {
  name: Scalars['String']['input'];
};


export type IMutationCreateCarArgs = {
  createCarInput: ICreateCarInput;
};


export type IMutationCreateCarCategoryArgs = {
  name: Scalars['String']['input'];
};


export type IMutationCreateCarSizeArgs = {
  name: Scalars['String']['input'];
};


export type IMutationCreatembtiArgs = {
  creatembtiInput: ICreateMbtiInput;
};


export type IMutationDeleteCarArgs = {
  mbti: Scalars['String']['input'];
};


export type IMutationUpdateMbtiArgs = {
  mbtiName: Scalars['String']['input'];
  updateMBTIInput: IUpdateMbtiInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchCar?: Maybe<ICarMains>;
  fetchCars: Array<ICarMains>;
  fetchMbti: IMbtis;
  fetchMbtis: Array<IMbtis>;
};


export type IQueryFetchCarArgs = {
  CarId?: InputMaybe<Scalars['String']['input']>;
  CarName?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchMbtiArgs = {
  MbtiName: Scalars['String']['input'];
};

export type IUpdateMbtiInput = {
  carBrandId?: InputMaybe<ICarBrandInput>;
  carCategoryId?: InputMaybe<ICarCategoryInput>;
  carSizeId?: InputMaybe<ICarSizeInput>;
  contents?: InputMaybe<Scalars['String']['input']>;
  creatmains?: InputMaybe<ICreateCarInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};
