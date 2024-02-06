import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  datetime: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Mysql8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Mysql8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Mysql8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "datetime". All fields are combined with logical 'AND'. */
export type Datetime_Mysql8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['datetime']['input']>;
  _gt?: InputMaybe<Scalars['datetime']['input']>;
  _gte?: InputMaybe<Scalars['datetime']['input']>;
  _in?: InputMaybe<Array<Scalars['datetime']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['datetime']['input']>;
  _lte?: InputMaybe<Scalars['datetime']['input']>;
  _neq?: InputMaybe<Scalars['datetime']['input']>;
  _nin?: InputMaybe<Array<Scalars['datetime']['input']>>;
};

export type Defaultdb_BacktestIndicator = {
  __typename?: 'defaultdb_BacktestIndicator';
  createdAt: Scalars['datetime']['output'];
  /** An object relationship */
  defaultdb_BacktestStrategyState: Defaultdb_BacktestStrategyState;
  id: Scalars['Int']['output'];
  strategyStateId: Scalars['Int']['output'];
  subType?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
  value: Scalars['Float']['output'];
};

/** aggregated selection of "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Aggregate = {
  __typename?: 'defaultdb_BacktestIndicator_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestIndicator_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestIndicator>;
};

/** aggregate fields of "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestIndicator_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestIndicator_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestIndicator_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestIndicator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestIndicator_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestIndicator_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestIndicator_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestIndicator_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestIndicator_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Aggregate_Order_By = {
  avg?: InputMaybe<Defaultdb_BacktestIndicator_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Defaultdb_BacktestIndicator_Max_Order_By>;
  min?: InputMaybe<Defaultdb_BacktestIndicator_Min_Order_By>;
  stddev_pop?: InputMaybe<Defaultdb_BacktestIndicator_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Defaultdb_BacktestIndicator_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Defaultdb_BacktestIndicator_Sum_Order_By>;
  var_pop?: InputMaybe<Defaultdb_BacktestIndicator_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Defaultdb_BacktestIndicator_Var_Samp_Order_By>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestIndicator_Avg_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Avg_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestIndicator". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestIndicator_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestIndicator_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestIndicator_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestStrategyState?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  strategyStateId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  subType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  type?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  value?: InputMaybe<Float_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  strategyStateId?: InputMaybe<Scalars['Int']['input']>;
  subType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestIndicator_Max_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  strategyStateId?: Maybe<Scalars['Int']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by max() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Max_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  subType?: InputMaybe<Mysql8_Order_By>;
  type?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestIndicator_Min_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  strategyStateId?: Maybe<Scalars['Int']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by min() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Min_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  subType?: InputMaybe<Mysql8_Order_By>;
  type?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** response of any mutation on the table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Mutation_Response = {
  __typename?: 'defaultdb_BacktestIndicator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestIndicator>;
};

/** Ordering options when selecting data from "defaultdb.BacktestIndicator". */
export type Defaultdb_BacktestIndicator_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestStrategyState?: InputMaybe<Defaultdb_BacktestStrategyState_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  subType?: InputMaybe<Mysql8_Order_By>;
  type?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestIndicator */
export type Defaultdb_BacktestIndicator_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestIndicator" */
export enum Defaultdb_BacktestIndicator_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  StrategyStateId = 'strategyStateId',
  /** column name */
  SubType = 'subType',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  strategyStateId?: InputMaybe<Scalars['Int']['input']>;
  subType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestIndicator_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Stddev_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestIndicator_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Stddev_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestIndicator_Sum_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  strategyStateId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Sum_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestIndicator_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestIndicator_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestIndicator_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestIndicator_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Var_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestIndicator_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestIndicator_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "defaultdb.BacktestIndicator" */
export type Defaultdb_BacktestIndicator_Var_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestOrder = {
  __typename?: 'defaultdb_BacktestOrder';
  createdAt: Scalars['datetime']['output'];
  date: Scalars['datetime']['output'];
  /** An object relationship */
  defaultdb_BacktestTradingStrategy: Defaultdb_BacktestTradingStrategy;
  exchangeOrderId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  orderType: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  profitRate?: Maybe<Scalars['Float']['output']>;
  side: Scalars['String']['output'];
  stopLoss?: Maybe<Scalars['Float']['output']>;
  stopOrderType?: Maybe<Scalars['String']['output']>;
  symbol: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
  tradingStrategyName: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
};

/** aggregated selection of "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Aggregate = {
  __typename?: 'defaultdb_BacktestOrder_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestOrder_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestOrder>;
};

/** aggregate fields of "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestOrder_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestOrder_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestOrder_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestOrder_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestOrder_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestOrder_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestOrder_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestOrder_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestOrder_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestOrder_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Aggregate_Order_By = {
  avg?: InputMaybe<Defaultdb_BacktestOrder_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Defaultdb_BacktestOrder_Max_Order_By>;
  min?: InputMaybe<Defaultdb_BacktestOrder_Min_Order_By>;
  stddev_pop?: InputMaybe<Defaultdb_BacktestOrder_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Defaultdb_BacktestOrder_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Defaultdb_BacktestOrder_Sum_Order_By>;
  var_pop?: InputMaybe<Defaultdb_BacktestOrder_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Defaultdb_BacktestOrder_Var_Samp_Order_By>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestOrder_Avg_Fields = {
  __typename?: 'defaultdb_BacktestOrder_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Avg_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestOrder". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestOrder_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestOrder_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestOrder_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  date?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestTradingStrategy?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
  exchangeOrderId?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  openPositionPrice?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  orderType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  price?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  profitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  side?: InputMaybe<String_Mysql8_Comparison_Exp>;
  stopLoss?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  stopOrderType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  timestamp?: InputMaybe<String_Mysql8_Comparison_Exp>;
  tradingStrategyName?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  date?: InputMaybe<Scalars['datetime']['input']>;
  exchangeOrderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  openPositionPrice?: InputMaybe<Scalars['Float']['input']>;
  orderType?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  profitRate?: InputMaybe<Scalars['Float']['input']>;
  side?: InputMaybe<Scalars['String']['input']>;
  stopLoss?: InputMaybe<Scalars['Float']['input']>;
  stopOrderType?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  tradingStrategyName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestOrder_Max_Fields = {
  __typename?: 'defaultdb_BacktestOrder_max_fields';
  exchangeOrderId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  orderType?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  side?: Maybe<Scalars['String']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  stopOrderType?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  tradingStrategyName?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Max_Order_By = {
  exchangeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  orderType?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  side?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
  stopOrderType?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  timestamp?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestOrder_Min_Fields = {
  __typename?: 'defaultdb_BacktestOrder_min_fields';
  exchangeOrderId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  orderType?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  side?: Maybe<Scalars['String']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  stopOrderType?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  tradingStrategyName?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Min_Order_By = {
  exchangeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  orderType?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  side?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
  stopOrderType?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  timestamp?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
};

/** response of any mutation on the table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Mutation_Response = {
  __typename?: 'defaultdb_BacktestOrder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestOrder>;
};

/** Ordering options when selecting data from "defaultdb.BacktestOrder". */
export type Defaultdb_BacktestOrder_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  date?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestTradingStrategy?: InputMaybe<Defaultdb_BacktestTradingStrategy_Order_By>;
  exchangeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  orderType?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  side?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
  stopOrderType?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  timestamp?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestOrder */
export type Defaultdb_BacktestOrder_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestOrder" */
export enum Defaultdb_BacktestOrder_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Date = 'date',
  /** column name */
  ExchangeOrderId = 'exchangeOrderId',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  OpenPositionPrice = 'openPositionPrice',
  /** column name */
  OrderType = 'orderType',
  /** column name */
  Price = 'price',
  /** column name */
  ProfitRate = 'profitRate',
  /** column name */
  Side = 'side',
  /** column name */
  StopLoss = 'stopLoss',
  /** column name */
  StopOrderType = 'stopOrderType',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TradingStrategyName = 'tradingStrategyName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  date?: InputMaybe<Scalars['datetime']['input']>;
  exchangeOrderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  openPositionPrice?: InputMaybe<Scalars['Float']['input']>;
  orderType?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  profitRate?: InputMaybe<Scalars['Float']['input']>;
  side?: InputMaybe<Scalars['String']['input']>;
  stopLoss?: InputMaybe<Scalars['Float']['input']>;
  stopOrderType?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  tradingStrategyName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestOrder_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestOrder_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Stddev_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestOrder_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestOrder_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Stddev_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestOrder_Sum_Fields = {
  __typename?: 'defaultdb_BacktestOrder_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Sum_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestOrder_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestOrder_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestOrder_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestOrder_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestOrder_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Var_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestOrder_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestOrder_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "defaultdb.BacktestOrder" */
export type Defaultdb_BacktestOrder_Var_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestPlan = {
  __typename?: 'defaultdb_BacktestPlan';
  createdAt: Scalars['datetime']['output'];
  /** An object relationship */
  defaultdb_BacktestPlanAccount: Defaultdb_BacktestPlanAccount;
  /** An array relationship */
  defaultdb_BacktestReportSummaries: Array<Defaultdb_BacktestReportSummary>;
  /** An aggregate relationship */
  defaultdb_BacktestReportSummaries_aggregate: Defaultdb_BacktestReportSummary_Aggregate;
  /** An array relationship */
  defaultdb_BacktestReports: Array<Defaultdb_BacktestReport>;
  /** An aggregate relationship */
  defaultdb_BacktestReports_aggregate: Defaultdb_BacktestReport_Aggregate;
  /** An object relationship */
  defaultdb_BacktestTaxPaymentInfo: Defaultdb_BacktestTaxPaymentInfo;
  /** An object relationship */
  defaultdb_BacktestTradingStrategy: Defaultdb_BacktestTradingStrategy;
  /** An object relationship */
  defaultdb_BacktestWithdrawalStrategy: Defaultdb_BacktestWithdrawalStrategy;
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  leverageMultiplier: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  planAccountId: Scalars['Int']['output'];
  symbol: Scalars['String']['output'];
  taxPaymentInfoId: Scalars['Int']['output'];
  tradingStrategyName: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
  withdrawalStrategyId: Scalars['Int']['output'];
};


export type Defaultdb_BacktestPlanDefaultdb_BacktestReportSummariesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
};


export type Defaultdb_BacktestPlanDefaultdb_BacktestReportSummaries_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
};


export type Defaultdb_BacktestPlanDefaultdb_BacktestReportsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReport_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
};


export type Defaultdb_BacktestPlanDefaultdb_BacktestReports_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReport_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
};

export type Defaultdb_BacktestPlanAccount = {
  __typename?: 'defaultdb_BacktestPlanAccount';
  balance: Scalars['Float']['output'];
  createdAt: Scalars['datetime']['output'];
  /** An array relationship */
  defaultdb_BacktestPlans: Array<Defaultdb_BacktestPlan>;
  /** An aggregate relationship */
  defaultdb_BacktestPlans_aggregate: Defaultdb_BacktestPlan_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  planId: Scalars['Int']['output'];
  startingBalance: Scalars['Float']['output'];
  updatedAt: Scalars['datetime']['output'];
};


export type Defaultdb_BacktestPlanAccountDefaultdb_BacktestPlansArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Defaultdb_BacktestPlanAccountDefaultdb_BacktestPlans_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};

/** aggregated selection of "defaultdb.BacktestPlanAccount" */
export type Defaultdb_BacktestPlanAccount_Aggregate = {
  __typename?: 'defaultdb_BacktestPlanAccount_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestPlanAccount_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestPlanAccount>;
};

/** aggregate fields of "defaultdb.BacktestPlanAccount" */
export type Defaultdb_BacktestPlanAccount_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestPlanAccount_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestPlanAccount_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestPlanAccount_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestPlanAccount_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestPlanAccount_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestPlanAccount_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestPlanAccount_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestPlanAccount_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestPlanAccount" */
export type Defaultdb_BacktestPlanAccount_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestPlanAccount_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestPlanAccount_Avg_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_avg_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestPlanAccount". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestPlanAccount_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestPlanAccount_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestPlanAccount_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestPlanAccount_Bool_Exp>>;
  balance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestPlans?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  startingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestPlanAccount" */
export type Defaultdb_BacktestPlanAccount_Insert_Input = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  startingBalance?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestPlanAccount_Max_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_max_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestPlanAccount_Min_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_min_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

/** response of any mutation on the table "defaultdb.BacktestPlanAccount" */
export type Defaultdb_BacktestPlanAccount_Mutation_Response = {
  __typename?: 'defaultdb_BacktestPlanAccount_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestPlanAccount>;
};

/** Ordering options when selecting data from "defaultdb.BacktestPlanAccount". */
export type Defaultdb_BacktestPlanAccount_Order_By = {
  balance?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestPlans_aggregate?: InputMaybe<Defaultdb_BacktestPlan_Aggregate_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestPlanAccount */
export type Defaultdb_BacktestPlanAccount_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestPlanAccount" */
export enum Defaultdb_BacktestPlanAccount_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'planId',
  /** column name */
  StartingBalance = 'startingBalance',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.BacktestPlanAccount" */
export type Defaultdb_BacktestPlanAccount_Set_Input = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  startingBalance?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestPlanAccount_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestPlanAccount_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestPlanAccount_Sum_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_sum_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_BacktestPlanAccount_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestPlanAccount_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestPlanAccount_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestPlanAccount_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_var_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestPlanAccount_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestPlanAccount_var_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Aggregate = {
  __typename?: 'defaultdb_BacktestPlan_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestPlan_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestPlan>;
};

/** aggregate fields of "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestPlan_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestPlan_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestPlan_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestPlan_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestPlan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestPlan_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestPlan_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestPlan_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestPlan_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestPlan_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Aggregate_Order_By = {
  avg?: InputMaybe<Defaultdb_BacktestPlan_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Defaultdb_BacktestPlan_Max_Order_By>;
  min?: InputMaybe<Defaultdb_BacktestPlan_Min_Order_By>;
  stddev_pop?: InputMaybe<Defaultdb_BacktestPlan_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Defaultdb_BacktestPlan_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Defaultdb_BacktestPlan_Sum_Order_By>;
  var_pop?: InputMaybe<Defaultdb_BacktestPlan_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Defaultdb_BacktestPlan_Var_Samp_Order_By>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestPlan_Avg_Fields = {
  __typename?: 'defaultdb_BacktestPlan_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  leverageMultiplier?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Float']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Avg_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestPlan". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestPlan_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestPlan_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestPlan_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestPlanAccount?: InputMaybe<Defaultdb_BacktestPlanAccount_Bool_Exp>;
  defaultdb_BacktestReportSummaries?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
  defaultdb_BacktestReports?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
  defaultdb_BacktestTaxPaymentInfo?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>;
  defaultdb_BacktestTradingStrategy?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
  defaultdb_BacktestWithdrawalStrategy?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  leverageMultiplier?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  planAccountId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  taxPaymentInfoId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  tradingStrategyName?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  withdrawalStrategyId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  leverageMultiplier?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planAccountId?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  taxPaymentInfoId?: InputMaybe<Scalars['Int']['input']>;
  tradingStrategyName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  withdrawalStrategyId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestPlan_Max_Fields = {
  __typename?: 'defaultdb_BacktestPlan_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  leverageMultiplier?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Int']['output']>;
  tradingStrategyName?: Maybe<Scalars['String']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Max_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestPlan_Min_Fields = {
  __typename?: 'defaultdb_BacktestPlan_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  leverageMultiplier?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Int']['output']>;
  tradingStrategyName?: Maybe<Scalars['String']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Min_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

/** response of any mutation on the table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Mutation_Response = {
  __typename?: 'defaultdb_BacktestPlan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestPlan>;
};

/** Ordering options when selecting data from "defaultdb.BacktestPlan". */
export type Defaultdb_BacktestPlan_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestPlanAccount?: InputMaybe<Defaultdb_BacktestPlanAccount_Order_By>;
  defaultdb_BacktestReportSummaries_aggregate?: InputMaybe<Defaultdb_BacktestReportSummary_Aggregate_Order_By>;
  defaultdb_BacktestReports_aggregate?: InputMaybe<Defaultdb_BacktestReport_Aggregate_Order_By>;
  defaultdb_BacktestTaxPaymentInfo?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Order_By>;
  defaultdb_BacktestTradingStrategy?: InputMaybe<Defaultdb_BacktestTradingStrategy_Order_By>;
  defaultdb_BacktestWithdrawalStrategy?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestPlan */
export type Defaultdb_BacktestPlan_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestPlan" */
export enum Defaultdb_BacktestPlan_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  LeverageMultiplier = 'leverageMultiplier',
  /** column name */
  Name = 'name',
  /** column name */
  PlanAccountId = 'planAccountId',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TaxPaymentInfoId = 'taxPaymentInfoId',
  /** column name */
  TradingStrategyName = 'tradingStrategyName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WithdrawalStrategyId = 'withdrawalStrategyId'
}

/** input type for updating data in table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  leverageMultiplier?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planAccountId?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  taxPaymentInfoId?: InputMaybe<Scalars['Int']['input']>;
  tradingStrategyName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  withdrawalStrategyId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestPlan_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestPlan_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  leverageMultiplier?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Float']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Stddev_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestPlan_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestPlan_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  leverageMultiplier?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Float']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Stddev_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestPlan_Sum_Fields = {
  __typename?: 'defaultdb_BacktestPlan_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  leverageMultiplier?: Maybe<Scalars['Int']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Int']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Sum_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestPlan_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestPlan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestPlan_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestPlan_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestPlan_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  leverageMultiplier?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Float']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Var_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestPlan_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestPlan_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  leverageMultiplier?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  taxPaymentInfoId?: Maybe<Scalars['Float']['output']>;
  withdrawalStrategyId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "defaultdb.BacktestPlan" */
export type Defaultdb_BacktestPlan_Var_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  leverageMultiplier?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  taxPaymentInfoId?: InputMaybe<Mysql8_Order_By>;
  withdrawalStrategyId?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestReport = {
  __typename?: 'defaultdb_BacktestReport';
  accountStartingBalance: Scalars['Float']['output'];
  createdAt: Scalars['datetime']['output'];
  cumulativeEarnings: Scalars['Float']['output'];
  cumulativeFees: Scalars['Float']['output'];
  cumulativeLosses: Scalars['Float']['output'];
  cumulativeOrders: Scalars['Float']['output'];
  cumulativeProfit: Scalars['Float']['output'];
  cumulativeProfitRate: Scalars['Float']['output'];
  cumulativeTaxes: Scalars['Float']['output'];
  cumulativeWinRate: Scalars['Float']['output'];
  cumulativeWins: Scalars['Float']['output'];
  cumulativeWithdrawalAmount: Scalars['Float']['output'];
  fromDate: Scalars['datetime']['output'];
  id: Scalars['Int']['output'];
  intervalEarnings: Scalars['Float']['output'];
  intervalEndingBalance: Scalars['Float']['output'];
  intervalEndingBalanceAfterFees: Scalars['Float']['output'];
  intervalFees: Scalars['Float']['output'];
  intervalFrom: Scalars['String']['output'];
  intervalLosses: Scalars['Int']['output'];
  intervalOrders: Scalars['Int']['output'];
  intervalProfit: Scalars['Float']['output'];
  intervalProfitRate: Scalars['Float']['output'];
  intervalStartingBalance: Scalars['Float']['output'];
  intervalTaxes: Scalars['Float']['output'];
  intervalTo: Scalars['String']['output'];
  intervalTradeEntries: Scalars['Int']['output'];
  intervalTrades: Scalars['Int']['output'];
  intervalWinRate: Scalars['Float']['output'];
  intervalWins: Scalars['Int']['output'];
  intervalWithdrawalAmount: Scalars['Float']['output'];
  isConfirmed: Scalars['Int']['output'];
  planAccountId: Scalars['Int']['output'];
  planId: Scalars['Int']['output'];
  reportInterval: Scalars['String']['output'];
  toDate: Scalars['datetime']['output'];
  updatedAt: Scalars['datetime']['output'];
};

export type Defaultdb_BacktestReportSummary = {
  __typename?: 'defaultdb_BacktestReportSummary';
  createdAt: Scalars['datetime']['output'];
  /** An object relationship */
  defaultdb_BacktestPlan: Defaultdb_BacktestPlan;
  endingBalance: Scalars['Float']['output'];
  endingBalanceAfterFees: Scalars['Float']['output'];
  fromDate: Scalars['datetime']['output'];
  id: Scalars['Int']['output'];
  planAccountId: Scalars['Int']['output'];
  planId: Scalars['Int']['output'];
  reportFrom: Scalars['String']['output'];
  reportInterval: Scalars['String']['output'];
  reportTo: Scalars['String']['output'];
  startingBalance: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  toDate: Scalars['datetime']['output'];
  totalEarnings: Scalars['Float']['output'];
  totalFees: Scalars['Float']['output'];
  totalLosses: Scalars['Int']['output'];
  totalOrders: Scalars['Int']['output'];
  totalProfit: Scalars['Float']['output'];
  totalProfitRate: Scalars['Float']['output'];
  totalTaxes: Scalars['Float']['output'];
  totalTradeEntries: Scalars['Int']['output'];
  totalTrades: Scalars['Int']['output'];
  totalWins: Scalars['Int']['output'];
  totalWithdrawalAmount: Scalars['Float']['output'];
  updatedAt: Scalars['datetime']['output'];
  winRate: Scalars['Float']['output'];
};

/** aggregated selection of "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Aggregate = {
  __typename?: 'defaultdb_BacktestReportSummary_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestReportSummary_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestReportSummary>;
};

/** aggregate fields of "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestReportSummary_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestReportSummary_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestReportSummary_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestReportSummary_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestReportSummary_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestReportSummary_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestReportSummary_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestReportSummary_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestReportSummary_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Aggregate_Order_By = {
  avg?: InputMaybe<Defaultdb_BacktestReportSummary_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Defaultdb_BacktestReportSummary_Max_Order_By>;
  min?: InputMaybe<Defaultdb_BacktestReportSummary_Min_Order_By>;
  stddev_pop?: InputMaybe<Defaultdb_BacktestReportSummary_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Defaultdb_BacktestReportSummary_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Defaultdb_BacktestReportSummary_Sum_Order_By>;
  var_pop?: InputMaybe<Defaultdb_BacktestReportSummary_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Defaultdb_BacktestReportSummary_Var_Samp_Order_By>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestReportSummary_Avg_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_avg_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Float']['output']>;
  totalOrders?: Maybe<Scalars['Float']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  totalWins?: Maybe<Scalars['Float']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Avg_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestReportSummary". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestReportSummary_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestPlan?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
  endingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  endingBalanceAfterFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  fromDate?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  planAccountId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  reportFrom?: InputMaybe<String_Mysql8_Comparison_Exp>;
  reportInterval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  reportTo?: InputMaybe<String_Mysql8_Comparison_Exp>;
  startingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  status?: InputMaybe<String_Mysql8_Comparison_Exp>;
  toDate?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  totalEarnings?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  totalFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  totalLosses?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  totalOrders?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  totalProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  totalProfitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  totalTaxes?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  totalTradeEntries?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  totalTrades?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  totalWins?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  totalWithdrawalAmount?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  winRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  endingBalance?: InputMaybe<Scalars['Float']['input']>;
  endingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  fromDate?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  planAccountId?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  reportFrom?: InputMaybe<Scalars['String']['input']>;
  reportInterval?: InputMaybe<Scalars['String']['input']>;
  reportTo?: InputMaybe<Scalars['String']['input']>;
  startingBalance?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['datetime']['input']>;
  totalEarnings?: InputMaybe<Scalars['Float']['input']>;
  totalFees?: InputMaybe<Scalars['Float']['input']>;
  totalLosses?: InputMaybe<Scalars['Int']['input']>;
  totalOrders?: InputMaybe<Scalars['Int']['input']>;
  totalProfit?: InputMaybe<Scalars['Float']['input']>;
  totalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  totalTaxes?: InputMaybe<Scalars['Float']['input']>;
  totalTradeEntries?: InputMaybe<Scalars['Int']['input']>;
  totalTrades?: InputMaybe<Scalars['Int']['input']>;
  totalWins?: InputMaybe<Scalars['Int']['input']>;
  totalWithdrawalAmount?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  winRate?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestReportSummary_Max_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_max_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  reportFrom?: Maybe<Scalars['String']['output']>;
  reportInterval?: Maybe<Scalars['String']['output']>;
  reportTo?: Maybe<Scalars['String']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Int']['output']>;
  totalOrders?: Maybe<Scalars['Int']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Int']['output']>;
  totalTrades?: Maybe<Scalars['Int']['output']>;
  totalWins?: Maybe<Scalars['Int']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by max() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Max_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  reportFrom?: InputMaybe<Mysql8_Order_By>;
  reportInterval?: InputMaybe<Mysql8_Order_By>;
  reportTo?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  status?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestReportSummary_Min_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_min_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  reportFrom?: Maybe<Scalars['String']['output']>;
  reportInterval?: Maybe<Scalars['String']['output']>;
  reportTo?: Maybe<Scalars['String']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Int']['output']>;
  totalOrders?: Maybe<Scalars['Int']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Int']['output']>;
  totalTrades?: Maybe<Scalars['Int']['output']>;
  totalWins?: Maybe<Scalars['Int']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by min() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Min_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  reportFrom?: InputMaybe<Mysql8_Order_By>;
  reportInterval?: InputMaybe<Mysql8_Order_By>;
  reportTo?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  status?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** response of any mutation on the table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Mutation_Response = {
  __typename?: 'defaultdb_BacktestReportSummary_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestReportSummary>;
};

/** Ordering options when selecting data from "defaultdb.BacktestReportSummary". */
export type Defaultdb_BacktestReportSummary_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestPlan?: InputMaybe<Defaultdb_BacktestPlan_Order_By>;
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  fromDate?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  reportFrom?: InputMaybe<Mysql8_Order_By>;
  reportInterval?: InputMaybe<Mysql8_Order_By>;
  reportTo?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  status?: InputMaybe<Mysql8_Order_By>;
  toDate?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestReportSummary */
export type Defaultdb_BacktestReportSummary_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestReportSummary" */
export enum Defaultdb_BacktestReportSummary_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndingBalance = 'endingBalance',
  /** column name */
  EndingBalanceAfterFees = 'endingBalanceAfterFees',
  /** column name */
  FromDate = 'fromDate',
  /** column name */
  Id = 'id',
  /** column name */
  PlanAccountId = 'planAccountId',
  /** column name */
  PlanId = 'planId',
  /** column name */
  ReportFrom = 'reportFrom',
  /** column name */
  ReportInterval = 'reportInterval',
  /** column name */
  ReportTo = 'reportTo',
  /** column name */
  StartingBalance = 'startingBalance',
  /** column name */
  Status = 'status',
  /** column name */
  ToDate = 'toDate',
  /** column name */
  TotalEarnings = 'totalEarnings',
  /** column name */
  TotalFees = 'totalFees',
  /** column name */
  TotalLosses = 'totalLosses',
  /** column name */
  TotalOrders = 'totalOrders',
  /** column name */
  TotalProfit = 'totalProfit',
  /** column name */
  TotalProfitRate = 'totalProfitRate',
  /** column name */
  TotalTaxes = 'totalTaxes',
  /** column name */
  TotalTradeEntries = 'totalTradeEntries',
  /** column name */
  TotalTrades = 'totalTrades',
  /** column name */
  TotalWins = 'totalWins',
  /** column name */
  TotalWithdrawalAmount = 'totalWithdrawalAmount',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WinRate = 'winRate'
}

/** input type for updating data in table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  endingBalance?: InputMaybe<Scalars['Float']['input']>;
  endingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  fromDate?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  planAccountId?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  reportFrom?: InputMaybe<Scalars['String']['input']>;
  reportInterval?: InputMaybe<Scalars['String']['input']>;
  reportTo?: InputMaybe<Scalars['String']['input']>;
  startingBalance?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['datetime']['input']>;
  totalEarnings?: InputMaybe<Scalars['Float']['input']>;
  totalFees?: InputMaybe<Scalars['Float']['input']>;
  totalLosses?: InputMaybe<Scalars['Int']['input']>;
  totalOrders?: InputMaybe<Scalars['Int']['input']>;
  totalProfit?: InputMaybe<Scalars['Float']['input']>;
  totalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  totalTaxes?: InputMaybe<Scalars['Float']['input']>;
  totalTradeEntries?: InputMaybe<Scalars['Int']['input']>;
  totalTrades?: InputMaybe<Scalars['Int']['input']>;
  totalWins?: InputMaybe<Scalars['Int']['input']>;
  totalWithdrawalAmount?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  winRate?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestReportSummary_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_stddev_pop_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Float']['output']>;
  totalOrders?: Maybe<Scalars['Float']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  totalWins?: Maybe<Scalars['Float']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Stddev_Pop_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestReportSummary_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_stddev_samp_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Float']['output']>;
  totalOrders?: Maybe<Scalars['Float']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  totalWins?: Maybe<Scalars['Float']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Stddev_Samp_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestReportSummary_Sum_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_sum_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Int']['output']>;
  totalOrders?: Maybe<Scalars['Int']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Int']['output']>;
  totalTrades?: Maybe<Scalars['Int']['output']>;
  totalWins?: Maybe<Scalars['Int']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Sum_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestReportSummary_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestReportSummary_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestReportSummary_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestReportSummary_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_var_pop_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Float']['output']>;
  totalOrders?: Maybe<Scalars['Float']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  totalWins?: Maybe<Scalars['Float']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Var_Pop_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestReportSummary_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestReportSummary_var_samp_fields';
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  totalFees?: Maybe<Scalars['Float']['output']>;
  totalLosses?: Maybe<Scalars['Float']['output']>;
  totalOrders?: Maybe<Scalars['Float']['output']>;
  totalProfit?: Maybe<Scalars['Float']['output']>;
  totalProfitRate?: Maybe<Scalars['Float']['output']>;
  totalTaxes?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  totalWins?: Maybe<Scalars['Float']['output']>;
  totalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "defaultdb.BacktestReportSummary" */
export type Defaultdb_BacktestReportSummary_Var_Samp_Order_By = {
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  totalEarnings?: InputMaybe<Mysql8_Order_By>;
  totalFees?: InputMaybe<Mysql8_Order_By>;
  totalLosses?: InputMaybe<Mysql8_Order_By>;
  totalOrders?: InputMaybe<Mysql8_Order_By>;
  totalProfit?: InputMaybe<Mysql8_Order_By>;
  totalProfitRate?: InputMaybe<Mysql8_Order_By>;
  totalTaxes?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  totalWins?: InputMaybe<Mysql8_Order_By>;
  totalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
};

/** aggregated selection of "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Aggregate = {
  __typename?: 'defaultdb_BacktestReport_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestReport_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestReport>;
};

/** aggregate fields of "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestReport_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestReport_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestReport_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestReport_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestReport_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestReport_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestReport_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestReport_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestReport_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestReport_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Aggregate_Order_By = {
  avg?: InputMaybe<Defaultdb_BacktestReport_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Defaultdb_BacktestReport_Max_Order_By>;
  min?: InputMaybe<Defaultdb_BacktestReport_Min_Order_By>;
  stddev_pop?: InputMaybe<Defaultdb_BacktestReport_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Defaultdb_BacktestReport_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Defaultdb_BacktestReport_Sum_Order_By>;
  var_pop?: InputMaybe<Defaultdb_BacktestReport_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Defaultdb_BacktestReport_Var_Samp_Order_By>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestReport_Avg_Fields = {
  __typename?: 'defaultdb_BacktestReport_avg_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalLosses?: Maybe<Scalars['Float']['output']>;
  intervalOrders?: Maybe<Scalars['Float']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Float']['output']>;
  intervalTrades?: Maybe<Scalars['Float']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Float']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Avg_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestReport". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestReport_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestReport_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestReport_Bool_Exp>>;
  accountStartingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  cumulativeEarnings?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeLosses?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeOrders?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeProfitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeTaxes?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeWinRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeWins?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeWithdrawalAmount?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  fromDate?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  intervalEarnings?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalEndingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalEndingBalanceAfterFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalFrom?: InputMaybe<String_Mysql8_Comparison_Exp>;
  intervalLosses?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  intervalOrders?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  intervalProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalProfitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalStartingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalTaxes?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalTo?: InputMaybe<String_Mysql8_Comparison_Exp>;
  intervalTradeEntries?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  intervalTrades?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  intervalWinRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalWins?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  intervalWithdrawalAmount?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  isConfirmed?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  planAccountId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  reportInterval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  toDate?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Insert_Input = {
  accountStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  cumulativeEarnings?: InputMaybe<Scalars['Float']['input']>;
  cumulativeFees?: InputMaybe<Scalars['Float']['input']>;
  cumulativeLosses?: InputMaybe<Scalars['Float']['input']>;
  cumulativeOrders?: InputMaybe<Scalars['Float']['input']>;
  cumulativeProfit?: InputMaybe<Scalars['Float']['input']>;
  cumulativeProfitRate?: InputMaybe<Scalars['Float']['input']>;
  cumulativeTaxes?: InputMaybe<Scalars['Float']['input']>;
  cumulativeWinRate?: InputMaybe<Scalars['Float']['input']>;
  cumulativeWins?: InputMaybe<Scalars['Float']['input']>;
  cumulativeWithdrawalAmount?: InputMaybe<Scalars['Float']['input']>;
  fromDate?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  intervalEarnings?: InputMaybe<Scalars['Float']['input']>;
  intervalEndingBalance?: InputMaybe<Scalars['Float']['input']>;
  intervalEndingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  intervalFees?: InputMaybe<Scalars['Float']['input']>;
  intervalFrom?: InputMaybe<Scalars['String']['input']>;
  intervalLosses?: InputMaybe<Scalars['Int']['input']>;
  intervalOrders?: InputMaybe<Scalars['Int']['input']>;
  intervalProfit?: InputMaybe<Scalars['Float']['input']>;
  intervalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  intervalStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  intervalTaxes?: InputMaybe<Scalars['Float']['input']>;
  intervalTo?: InputMaybe<Scalars['String']['input']>;
  intervalTradeEntries?: InputMaybe<Scalars['Int']['input']>;
  intervalTrades?: InputMaybe<Scalars['Int']['input']>;
  intervalWinRate?: InputMaybe<Scalars['Float']['input']>;
  intervalWins?: InputMaybe<Scalars['Int']['input']>;
  intervalWithdrawalAmount?: InputMaybe<Scalars['Float']['input']>;
  isConfirmed?: InputMaybe<Scalars['Int']['input']>;
  planAccountId?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  reportInterval?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestReport_Max_Fields = {
  __typename?: 'defaultdb_BacktestReport_max_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalFrom?: Maybe<Scalars['String']['output']>;
  intervalLosses?: Maybe<Scalars['Int']['output']>;
  intervalOrders?: Maybe<Scalars['Int']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTo?: Maybe<Scalars['String']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Int']['output']>;
  intervalTrades?: Maybe<Scalars['Int']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Int']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Int']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  reportInterval?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Max_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalFrom?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTo?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  reportInterval?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestReport_Min_Fields = {
  __typename?: 'defaultdb_BacktestReport_min_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalFrom?: Maybe<Scalars['String']['output']>;
  intervalLosses?: Maybe<Scalars['Int']['output']>;
  intervalOrders?: Maybe<Scalars['Int']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTo?: Maybe<Scalars['String']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Int']['output']>;
  intervalTrades?: Maybe<Scalars['Int']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Int']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Int']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  reportInterval?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Min_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalFrom?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTo?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  reportInterval?: InputMaybe<Mysql8_Order_By>;
};

/** response of any mutation on the table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Mutation_Response = {
  __typename?: 'defaultdb_BacktestReport_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestReport>;
};

/** Ordering options when selecting data from "defaultdb.BacktestReport". */
export type Defaultdb_BacktestReport_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  fromDate?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalFrom?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTo?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  reportInterval?: InputMaybe<Mysql8_Order_By>;
  toDate?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestReport */
export type Defaultdb_BacktestReport_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestReport" */
export enum Defaultdb_BacktestReport_Select_Column {
  /** column name */
  AccountStartingBalance = 'accountStartingBalance',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CumulativeEarnings = 'cumulativeEarnings',
  /** column name */
  CumulativeFees = 'cumulativeFees',
  /** column name */
  CumulativeLosses = 'cumulativeLosses',
  /** column name */
  CumulativeOrders = 'cumulativeOrders',
  /** column name */
  CumulativeProfit = 'cumulativeProfit',
  /** column name */
  CumulativeProfitRate = 'cumulativeProfitRate',
  /** column name */
  CumulativeTaxes = 'cumulativeTaxes',
  /** column name */
  CumulativeWinRate = 'cumulativeWinRate',
  /** column name */
  CumulativeWins = 'cumulativeWins',
  /** column name */
  CumulativeWithdrawalAmount = 'cumulativeWithdrawalAmount',
  /** column name */
  FromDate = 'fromDate',
  /** column name */
  Id = 'id',
  /** column name */
  IntervalEarnings = 'intervalEarnings',
  /** column name */
  IntervalEndingBalance = 'intervalEndingBalance',
  /** column name */
  IntervalEndingBalanceAfterFees = 'intervalEndingBalanceAfterFees',
  /** column name */
  IntervalFees = 'intervalFees',
  /** column name */
  IntervalFrom = 'intervalFrom',
  /** column name */
  IntervalLosses = 'intervalLosses',
  /** column name */
  IntervalOrders = 'intervalOrders',
  /** column name */
  IntervalProfit = 'intervalProfit',
  /** column name */
  IntervalProfitRate = 'intervalProfitRate',
  /** column name */
  IntervalStartingBalance = 'intervalStartingBalance',
  /** column name */
  IntervalTaxes = 'intervalTaxes',
  /** column name */
  IntervalTo = 'intervalTo',
  /** column name */
  IntervalTradeEntries = 'intervalTradeEntries',
  /** column name */
  IntervalTrades = 'intervalTrades',
  /** column name */
  IntervalWinRate = 'intervalWinRate',
  /** column name */
  IntervalWins = 'intervalWins',
  /** column name */
  IntervalWithdrawalAmount = 'intervalWithdrawalAmount',
  /** column name */
  IsConfirmed = 'isConfirmed',
  /** column name */
  PlanAccountId = 'planAccountId',
  /** column name */
  PlanId = 'planId',
  /** column name */
  ReportInterval = 'reportInterval',
  /** column name */
  ToDate = 'toDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Set_Input = {
  accountStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  cumulativeEarnings?: InputMaybe<Scalars['Float']['input']>;
  cumulativeFees?: InputMaybe<Scalars['Float']['input']>;
  cumulativeLosses?: InputMaybe<Scalars['Float']['input']>;
  cumulativeOrders?: InputMaybe<Scalars['Float']['input']>;
  cumulativeProfit?: InputMaybe<Scalars['Float']['input']>;
  cumulativeProfitRate?: InputMaybe<Scalars['Float']['input']>;
  cumulativeTaxes?: InputMaybe<Scalars['Float']['input']>;
  cumulativeWinRate?: InputMaybe<Scalars['Float']['input']>;
  cumulativeWins?: InputMaybe<Scalars['Float']['input']>;
  cumulativeWithdrawalAmount?: InputMaybe<Scalars['Float']['input']>;
  fromDate?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  intervalEarnings?: InputMaybe<Scalars['Float']['input']>;
  intervalEndingBalance?: InputMaybe<Scalars['Float']['input']>;
  intervalEndingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  intervalFees?: InputMaybe<Scalars['Float']['input']>;
  intervalFrom?: InputMaybe<Scalars['String']['input']>;
  intervalLosses?: InputMaybe<Scalars['Int']['input']>;
  intervalOrders?: InputMaybe<Scalars['Int']['input']>;
  intervalProfit?: InputMaybe<Scalars['Float']['input']>;
  intervalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  intervalStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  intervalTaxes?: InputMaybe<Scalars['Float']['input']>;
  intervalTo?: InputMaybe<Scalars['String']['input']>;
  intervalTradeEntries?: InputMaybe<Scalars['Int']['input']>;
  intervalTrades?: InputMaybe<Scalars['Int']['input']>;
  intervalWinRate?: InputMaybe<Scalars['Float']['input']>;
  intervalWins?: InputMaybe<Scalars['Int']['input']>;
  intervalWithdrawalAmount?: InputMaybe<Scalars['Float']['input']>;
  isConfirmed?: InputMaybe<Scalars['Int']['input']>;
  planAccountId?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  reportInterval?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestReport_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestReport_stddev_pop_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalLosses?: Maybe<Scalars['Float']['output']>;
  intervalOrders?: Maybe<Scalars['Float']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Float']['output']>;
  intervalTrades?: Maybe<Scalars['Float']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Float']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Stddev_Pop_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestReport_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestReport_stddev_samp_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalLosses?: Maybe<Scalars['Float']['output']>;
  intervalOrders?: Maybe<Scalars['Float']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Float']['output']>;
  intervalTrades?: Maybe<Scalars['Float']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Float']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Stddev_Samp_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestReport_Sum_Fields = {
  __typename?: 'defaultdb_BacktestReport_sum_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalLosses?: Maybe<Scalars['Int']['output']>;
  intervalOrders?: Maybe<Scalars['Int']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Int']['output']>;
  intervalTrades?: Maybe<Scalars['Int']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Int']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Int']['output']>;
  planAccountId?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Sum_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestReport_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestReport_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestReport_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestReport_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestReport_var_pop_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalLosses?: Maybe<Scalars['Float']['output']>;
  intervalOrders?: Maybe<Scalars['Float']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Float']['output']>;
  intervalTrades?: Maybe<Scalars['Float']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Float']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Var_Pop_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestReport_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestReport_var_samp_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  cumulativeEarnings?: Maybe<Scalars['Float']['output']>;
  cumulativeFees?: Maybe<Scalars['Float']['output']>;
  cumulativeLosses?: Maybe<Scalars['Float']['output']>;
  cumulativeOrders?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  cumulativeTaxes?: Maybe<Scalars['Float']['output']>;
  cumulativeWinRate?: Maybe<Scalars['Float']['output']>;
  cumulativeWins?: Maybe<Scalars['Float']['output']>;
  cumulativeWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  intervalEarnings?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalance?: Maybe<Scalars['Float']['output']>;
  intervalEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  intervalFees?: Maybe<Scalars['Float']['output']>;
  intervalLosses?: Maybe<Scalars['Float']['output']>;
  intervalOrders?: Maybe<Scalars['Float']['output']>;
  intervalProfit?: Maybe<Scalars['Float']['output']>;
  intervalProfitRate?: Maybe<Scalars['Float']['output']>;
  intervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  intervalTaxes?: Maybe<Scalars['Float']['output']>;
  intervalTradeEntries?: Maybe<Scalars['Float']['output']>;
  intervalTrades?: Maybe<Scalars['Float']['output']>;
  intervalWinRate?: Maybe<Scalars['Float']['output']>;
  intervalWins?: Maybe<Scalars['Float']['output']>;
  intervalWithdrawalAmount?: Maybe<Scalars['Float']['output']>;
  isConfirmed?: Maybe<Scalars['Float']['output']>;
  planAccountId?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "defaultdb.BacktestReport" */
export type Defaultdb_BacktestReport_Var_Samp_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  cumulativeEarnings?: InputMaybe<Mysql8_Order_By>;
  cumulativeFees?: InputMaybe<Mysql8_Order_By>;
  cumulativeLosses?: InputMaybe<Mysql8_Order_By>;
  cumulativeOrders?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeTaxes?: InputMaybe<Mysql8_Order_By>;
  cumulativeWinRate?: InputMaybe<Mysql8_Order_By>;
  cumulativeWins?: InputMaybe<Mysql8_Order_By>;
  cumulativeWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalEarnings?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  intervalFees?: InputMaybe<Mysql8_Order_By>;
  intervalLosses?: InputMaybe<Mysql8_Order_By>;
  intervalOrders?: InputMaybe<Mysql8_Order_By>;
  intervalProfit?: InputMaybe<Mysql8_Order_By>;
  intervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  intervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  intervalTaxes?: InputMaybe<Mysql8_Order_By>;
  intervalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  intervalTrades?: InputMaybe<Mysql8_Order_By>;
  intervalWinRate?: InputMaybe<Mysql8_Order_By>;
  intervalWins?: InputMaybe<Mysql8_Order_By>;
  intervalWithdrawalAmount?: InputMaybe<Mysql8_Order_By>;
  isConfirmed?: InputMaybe<Mysql8_Order_By>;
  planAccountId?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestStrategyState = {
  __typename?: 'defaultdb_BacktestStrategyState';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['datetime']['output'];
  /** An array relationship */
  defaultdb_BacktestIndicators: Array<Defaultdb_BacktestIndicator>;
  /** An aggregate relationship */
  defaultdb_BacktestIndicators_aggregate: Defaultdb_BacktestIndicator_Aggregate;
  /** An object relationship */
  defaultdb_BacktestOrder?: Maybe<Defaultdb_BacktestOrder>;
  /** An object relationship */
  defaultdb_BacktestTradingStrategy: Defaultdb_BacktestTradingStrategy;
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  isOrderActive: Scalars['Int']['output'];
  isPotentialOrderSignaled: Scalars['Int']['output'];
  potentialOrderSide?: Maybe<Scalars['String']['output']>;
  start: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  takeProfit?: Maybe<Scalars['Float']['output']>;
  tradingStrategyName: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
};


export type Defaultdb_BacktestStrategyStateDefaultdb_BacktestIndicatorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestIndicator_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
};


export type Defaultdb_BacktestStrategyStateDefaultdb_BacktestIndicators_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestIndicator_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
};

/** aggregated selection of "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Aggregate = {
  __typename?: 'defaultdb_BacktestStrategyState_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestStrategyState_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestStrategyState>;
};

/** aggregate fields of "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestStrategyState_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestStrategyState_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestStrategyState_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestStrategyState_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestStrategyState_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestStrategyState_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestStrategyState_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestStrategyState_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestStrategyState_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Aggregate_Order_By = {
  avg?: InputMaybe<Defaultdb_BacktestStrategyState_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Defaultdb_BacktestStrategyState_Max_Order_By>;
  min?: InputMaybe<Defaultdb_BacktestStrategyState_Min_Order_By>;
  stddev_pop?: InputMaybe<Defaultdb_BacktestStrategyState_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Defaultdb_BacktestStrategyState_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Defaultdb_BacktestStrategyState_Sum_Order_By>;
  var_pop?: InputMaybe<Defaultdb_BacktestStrategyState_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Defaultdb_BacktestStrategyState_Var_Samp_Order_By>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestStrategyState_Avg_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_avg_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Avg_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestStrategyState". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestStrategyState_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Bool_Exp>>;
  activeOrderId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestIndicators?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
  defaultdb_BacktestOrder?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
  defaultdb_BacktestTradingStrategy?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  isOrderActive?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  isPotentialOrderSignaled?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  potentialOrderSide?: InputMaybe<String_Mysql8_Comparison_Exp>;
  start?: InputMaybe<String_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  takeProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  tradingStrategyName?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Insert_Input = {
  activeOrderId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  isOrderActive?: InputMaybe<Scalars['Int']['input']>;
  isPotentialOrderSignaled?: InputMaybe<Scalars['Int']['input']>;
  potentialOrderSide?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  takeProfit?: InputMaybe<Scalars['Float']['input']>;
  tradingStrategyName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestStrategyState_Max_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_max_fields';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  isOrderActive?: Maybe<Scalars['Int']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Int']['output']>;
  potentialOrderSide?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
  tradingStrategyName?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Max_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  potentialOrderSide?: InputMaybe<Mysql8_Order_By>;
  start?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestStrategyState_Min_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_min_fields';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  isOrderActive?: Maybe<Scalars['Int']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Int']['output']>;
  potentialOrderSide?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
  tradingStrategyName?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Min_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  potentialOrderSide?: InputMaybe<Mysql8_Order_By>;
  start?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
};

/** response of any mutation on the table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Mutation_Response = {
  __typename?: 'defaultdb_BacktestStrategyState_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestStrategyState>;
};

/** Ordering options when selecting data from "defaultdb.BacktestStrategyState". */
export type Defaultdb_BacktestStrategyState_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestIndicators_aggregate?: InputMaybe<Defaultdb_BacktestIndicator_Aggregate_Order_By>;
  defaultdb_BacktestOrder?: InputMaybe<Defaultdb_BacktestOrder_Order_By>;
  defaultdb_BacktestTradingStrategy?: InputMaybe<Defaultdb_BacktestTradingStrategy_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  potentialOrderSide?: InputMaybe<Mysql8_Order_By>;
  start?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
  tradingStrategyName?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestStrategyState */
export type Defaultdb_BacktestStrategyState_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestStrategyState" */
export enum Defaultdb_BacktestStrategyState_Select_Column {
  /** column name */
  ActiveOrderId = 'activeOrderId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  IsOrderActive = 'isOrderActive',
  /** column name */
  IsPotentialOrderSignaled = 'isPotentialOrderSignaled',
  /** column name */
  PotentialOrderSide = 'potentialOrderSide',
  /** column name */
  Start = 'start',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TakeProfit = 'takeProfit',
  /** column name */
  TradingStrategyName = 'tradingStrategyName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Set_Input = {
  activeOrderId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  isOrderActive?: InputMaybe<Scalars['Int']['input']>;
  isPotentialOrderSignaled?: InputMaybe<Scalars['Int']['input']>;
  potentialOrderSide?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  takeProfit?: InputMaybe<Scalars['Float']['input']>;
  tradingStrategyName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestStrategyState_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_stddev_pop_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Stddev_Pop_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestStrategyState_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_stddev_samp_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Stddev_Samp_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestStrategyState_Sum_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_sum_fields';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isOrderActive?: Maybe<Scalars['Int']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Int']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Sum_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestStrategyState_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestStrategyState_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestStrategyState_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestStrategyState_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_var_pop_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Var_Pop_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestStrategyState_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestStrategyState_var_samp_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "defaultdb.BacktestStrategyState" */
export type Defaultdb_BacktestStrategyState_Var_Samp_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_BacktestTaxPaymentInfo = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo';
  countryCode: Scalars['String']['output'];
  createdAt: Scalars['datetime']['output'];
  /** An array relationship */
  defaultdb_BacktestPlans: Array<Defaultdb_BacktestPlan>;
  /** An aggregate relationship */
  defaultdb_BacktestPlans_aggregate: Defaultdb_BacktestPlan_Aggregate;
  description: Scalars['String']['output'];
  filingType: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  maxProfitContributionPct: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  paymentDate?: Maybe<Scalars['datetime']['output']>;
  paymentInterval: Scalars['String']['output'];
  planId: Scalars['Int']['output'];
  stateCode: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
};


export type Defaultdb_BacktestTaxPaymentInfoDefaultdb_BacktestPlansArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Defaultdb_BacktestTaxPaymentInfoDefaultdb_BacktestPlans_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};

/** aggregated selection of "defaultdb.BacktestTaxPaymentInfo" */
export type Defaultdb_BacktestTaxPaymentInfo_Aggregate = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestTaxPaymentInfo>;
};

/** aggregate fields of "defaultdb.BacktestTaxPaymentInfo" */
export type Defaultdb_BacktestTaxPaymentInfo_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestTaxPaymentInfo" */
export type Defaultdb_BacktestTaxPaymentInfo_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Avg_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestTaxPaymentInfo". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestTaxPaymentInfo_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>>;
  countryCode?: InputMaybe<String_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestPlans?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
  description?: InputMaybe<String_Mysql8_Comparison_Exp>;
  filingType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  maxProfitContributionPct?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  paymentDate?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  paymentInterval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  stateCode?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestTaxPaymentInfo" */
export type Defaultdb_BacktestTaxPaymentInfo_Insert_Input = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filingType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxProfitContributionPct?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentDate?: InputMaybe<Scalars['datetime']['input']>;
  paymentInterval?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Max_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_max_fields';
  countryCode?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filingType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentInterval?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Min_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_min_fields';
  countryCode?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filingType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentInterval?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "defaultdb.BacktestTaxPaymentInfo" */
export type Defaultdb_BacktestTaxPaymentInfo_Mutation_Response = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestTaxPaymentInfo>;
};

/** Ordering options when selecting data from "defaultdb.BacktestTaxPaymentInfo". */
export type Defaultdb_BacktestTaxPaymentInfo_Order_By = {
  countryCode?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestPlans_aggregate?: InputMaybe<Defaultdb_BacktestPlan_Aggregate_Order_By>;
  description?: InputMaybe<Mysql8_Order_By>;
  filingType?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  maxProfitContributionPct?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  paymentDate?: InputMaybe<Mysql8_Order_By>;
  paymentInterval?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  stateCode?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestTaxPaymentInfo */
export type Defaultdb_BacktestTaxPaymentInfo_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestTaxPaymentInfo" */
export enum Defaultdb_BacktestTaxPaymentInfo_Select_Column {
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FilingType = 'filingType',
  /** column name */
  Id = 'id',
  /** column name */
  MaxProfitContributionPct = 'maxProfitContributionPct',
  /** column name */
  Name = 'name',
  /** column name */
  PaymentDate = 'paymentDate',
  /** column name */
  PaymentInterval = 'paymentInterval',
  /** column name */
  PlanId = 'planId',
  /** column name */
  StateCode = 'stateCode',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.BacktestTaxPaymentInfo" */
export type Defaultdb_BacktestTaxPaymentInfo_Set_Input = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filingType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxProfitContributionPct?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentDate?: InputMaybe<Scalars['datetime']['input']>;
  paymentInterval?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Sum_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_BacktestTaxPaymentInfo_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestTaxPaymentInfo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestTaxPaymentInfo_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestTaxPaymentInfo_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxProfitContributionPct?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_BacktestTradingStrategy = {
  __typename?: 'defaultdb_BacktestTradingStrategy';
  createdAt: Scalars['datetime']['output'];
  /** An array relationship */
  defaultdb_BacktestOrders: Array<Defaultdb_BacktestOrder>;
  /** An aggregate relationship */
  defaultdb_BacktestOrders_aggregate: Defaultdb_BacktestOrder_Aggregate;
  /** An array relationship */
  defaultdb_BacktestPlans: Array<Defaultdb_BacktestPlan>;
  /** An aggregate relationship */
  defaultdb_BacktestPlans_aggregate: Defaultdb_BacktestPlan_Aggregate;
  /** An array relationship */
  defaultdb_BacktestStrategyStates: Array<Defaultdb_BacktestStrategyState>;
  /** An aggregate relationship */
  defaultdb_BacktestStrategyStates_aggregate: Defaultdb_BacktestStrategyState_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
};


export type Defaultdb_BacktestTradingStrategyDefaultdb_BacktestOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestOrder_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
};


export type Defaultdb_BacktestTradingStrategyDefaultdb_BacktestOrders_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestOrder_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
};


export type Defaultdb_BacktestTradingStrategyDefaultdb_BacktestPlansArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Defaultdb_BacktestTradingStrategyDefaultdb_BacktestPlans_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Defaultdb_BacktestTradingStrategyDefaultdb_BacktestStrategyStatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
};


export type Defaultdb_BacktestTradingStrategyDefaultdb_BacktestStrategyStates_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
};

/** aggregated selection of "defaultdb.BacktestTradingStrategy" */
export type Defaultdb_BacktestTradingStrategy_Aggregate = {
  __typename?: 'defaultdb_BacktestTradingStrategy_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestTradingStrategy_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestTradingStrategy>;
};

/** aggregate fields of "defaultdb.BacktestTradingStrategy" */
export type Defaultdb_BacktestTradingStrategy_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestTradingStrategy_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestTradingStrategy_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestTradingStrategy_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestTradingStrategy_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestTradingStrategy_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestTradingStrategy_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestTradingStrategy_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestTradingStrategy_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestTradingStrategy" */
export type Defaultdb_BacktestTradingStrategy_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestTradingStrategy_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestTradingStrategy_Avg_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestTradingStrategy". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestTradingStrategy_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestTradingStrategy_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestTradingStrategy_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestOrders?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
  defaultdb_BacktestPlans?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
  defaultdb_BacktestStrategyStates?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestTradingStrategy" */
export type Defaultdb_BacktestTradingStrategy_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestTradingStrategy_Max_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestTradingStrategy_Min_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "defaultdb.BacktestTradingStrategy" */
export type Defaultdb_BacktestTradingStrategy_Mutation_Response = {
  __typename?: 'defaultdb_BacktestTradingStrategy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestTradingStrategy>;
};

/** Ordering options when selecting data from "defaultdb.BacktestTradingStrategy". */
export type Defaultdb_BacktestTradingStrategy_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestOrders_aggregate?: InputMaybe<Defaultdb_BacktestOrder_Aggregate_Order_By>;
  defaultdb_BacktestPlans_aggregate?: InputMaybe<Defaultdb_BacktestPlan_Aggregate_Order_By>;
  defaultdb_BacktestStrategyStates_aggregate?: InputMaybe<Defaultdb_BacktestStrategyState_Aggregate_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestTradingStrategy */
export type Defaultdb_BacktestTradingStrategy_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestTradingStrategy" */
export enum Defaultdb_BacktestTradingStrategy_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.BacktestTradingStrategy" */
export type Defaultdb_BacktestTradingStrategy_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestTradingStrategy_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestTradingStrategy_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestTradingStrategy_Sum_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_BacktestTradingStrategy_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestTradingStrategy_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestTradingStrategy_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestTradingStrategy_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestTradingStrategy_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestTradingStrategy_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_BacktestWithdrawalStrategy = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy';
  createdAt: Scalars['datetime']['output'];
  /** An array relationship */
  defaultdb_BacktestPlans: Array<Defaultdb_BacktestPlan>;
  /** An aggregate relationship */
  defaultdb_BacktestPlans_aggregate: Defaultdb_BacktestPlan_Aggregate;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  intervalPercent: Scalars['Float']['output'];
  intervalType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  planId: Scalars['Int']['output'];
  thresholdAmount: Scalars['Float']['output'];
  thresholdType: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
  waitNumberOfMonths: Scalars['Int']['output'];
};


export type Defaultdb_BacktestWithdrawalStrategyDefaultdb_BacktestPlansArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Defaultdb_BacktestWithdrawalStrategyDefaultdb_BacktestPlans_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};

/** aggregated selection of "defaultdb.BacktestWithdrawalStrategy" */
export type Defaultdb_BacktestWithdrawalStrategy_Aggregate = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_aggregate';
  aggregate?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Aggregate_Fields>;
  nodes: Array<Defaultdb_BacktestWithdrawalStrategy>;
};

/** aggregate fields of "defaultdb.BacktestWithdrawalStrategy" */
export type Defaultdb_BacktestWithdrawalStrategy_Aggregate_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_aggregate_fields';
  avg?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Max_Fields>;
  min?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.BacktestWithdrawalStrategy" */
export type Defaultdb_BacktestWithdrawalStrategy_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Avg_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.BacktestWithdrawalStrategy". All fields are combined with a logical 'AND'. */
export type Defaultdb_BacktestWithdrawalStrategy_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_BacktestPlans?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
  description?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  intervalPercent?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  intervalType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  thresholdAmount?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  thresholdType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  waitNumberOfMonths?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.BacktestWithdrawalStrategy" */
export type Defaultdb_BacktestWithdrawalStrategy_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  intervalPercent?: InputMaybe<Scalars['Float']['input']>;
  intervalType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  thresholdAmount?: InputMaybe<Scalars['Float']['input']>;
  thresholdType?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  waitNumberOfMonths?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Max_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  intervalType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  thresholdType?: Maybe<Scalars['String']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Min_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  intervalType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  thresholdType?: Maybe<Scalars['String']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "defaultdb.BacktestWithdrawalStrategy" */
export type Defaultdb_BacktestWithdrawalStrategy_Mutation_Response = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_BacktestWithdrawalStrategy>;
};

/** Ordering options when selecting data from "defaultdb.BacktestWithdrawalStrategy". */
export type Defaultdb_BacktestWithdrawalStrategy_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_BacktestPlans_aggregate?: InputMaybe<Defaultdb_BacktestPlan_Aggregate_Order_By>;
  description?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  intervalPercent?: InputMaybe<Mysql8_Order_By>;
  intervalType?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  thresholdAmount?: InputMaybe<Mysql8_Order_By>;
  thresholdType?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  waitNumberOfMonths?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.BacktestWithdrawalStrategy */
export type Defaultdb_BacktestWithdrawalStrategy_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.BacktestWithdrawalStrategy" */
export enum Defaultdb_BacktestWithdrawalStrategy_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IntervalPercent = 'intervalPercent',
  /** column name */
  IntervalType = 'intervalType',
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'planId',
  /** column name */
  ThresholdAmount = 'thresholdAmount',
  /** column name */
  ThresholdType = 'thresholdType',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WaitNumberOfMonths = 'waitNumberOfMonths'
}

/** input type for updating data in table "defaultdb.BacktestWithdrawalStrategy" */
export type Defaultdb_BacktestWithdrawalStrategy_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  intervalPercent?: InputMaybe<Scalars['Float']['input']>;
  intervalType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  thresholdAmount?: InputMaybe<Scalars['Float']['input']>;
  thresholdType?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  waitNumberOfMonths?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Sum_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_BacktestWithdrawalStrategy_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_BacktestWithdrawalStrategy_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Var_Pop_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_BacktestWithdrawalStrategy_Var_Samp_Fields = {
  __typename?: 'defaultdb_BacktestWithdrawalStrategy_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  intervalPercent?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  thresholdAmount?: Maybe<Scalars['Float']['output']>;
  waitNumberOfMonths?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_Candle = {
  __typename?: 'defaultdb_Candle';
  close: Scalars['Float']['output'];
  confirm: Scalars['Int']['output'];
  createdAt: Scalars['datetime']['output'];
  end: Scalars['String']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
  period: Scalars['String']['output'];
  start: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  turnover: Scalars['Float']['output'];
  updatedAt: Scalars['datetime']['output'];
  volume: Scalars['Float']['output'];
};

/** aggregated selection of "defaultdb.Candle" */
export type Defaultdb_Candle_Aggregate = {
  __typename?: 'defaultdb_Candle_aggregate';
  aggregate?: Maybe<Defaultdb_Candle_Aggregate_Fields>;
  nodes: Array<Defaultdb_Candle>;
};

/** aggregate fields of "defaultdb.Candle" */
export type Defaultdb_Candle_Aggregate_Fields = {
  __typename?: 'defaultdb_Candle_aggregate_fields';
  avg?: Maybe<Defaultdb_Candle_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_Candle_Max_Fields>;
  min?: Maybe<Defaultdb_Candle_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_Candle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_Candle_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_Candle_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_Candle_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_Candle_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.Candle" */
export type Defaultdb_Candle_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_Candle_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_Candle_Avg_Fields = {
  __typename?: 'defaultdb_Candle_avg_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.Candle". All fields are combined with a logical 'AND'. */
export type Defaultdb_Candle_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_Candle_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_Candle_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_Candle_Bool_Exp>>;
  close?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  confirm?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  end?: InputMaybe<String_Mysql8_Comparison_Exp>;
  high?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  low?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  open?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  period?: InputMaybe<String_Mysql8_Comparison_Exp>;
  start?: InputMaybe<String_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  turnover?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  volume?: InputMaybe<Float_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.Candle" */
export type Defaultdb_Candle_Insert_Input = {
  close?: InputMaybe<Scalars['Float']['input']>;
  confirm?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
  open?: InputMaybe<Scalars['Float']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  turnover?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_Candle_Max_Fields = {
  __typename?: 'defaultdb_Candle_max_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_Candle_Min_Fields = {
  __typename?: 'defaultdb_Candle_min_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

/** response of any mutation on the table "defaultdb.Candle" */
export type Defaultdb_Candle_Mutation_Response = {
  __typename?: 'defaultdb_Candle_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_Candle>;
};

/** Ordering options when selecting data from "defaultdb.Candle". */
export type Defaultdb_Candle_Order_By = {
  close?: InputMaybe<Mysql8_Order_By>;
  confirm?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  end?: InputMaybe<Mysql8_Order_By>;
  high?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  low?: InputMaybe<Mysql8_Order_By>;
  open?: InputMaybe<Mysql8_Order_By>;
  period?: InputMaybe<Mysql8_Order_By>;
  start?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  turnover?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  volume?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.Candle */
export type Defaultdb_Candle_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.Candle" */
export enum Defaultdb_Candle_Select_Column {
  /** column name */
  Close = 'close',
  /** column name */
  Confirm = 'confirm',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  End = 'end',
  /** column name */
  High = 'high',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  Low = 'low',
  /** column name */
  Open = 'open',
  /** column name */
  Period = 'period',
  /** column name */
  Start = 'start',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Turnover = 'turnover',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Volume = 'volume'
}

/** input type for updating data in table "defaultdb.Candle" */
export type Defaultdb_Candle_Set_Input = {
  close?: InputMaybe<Scalars['Float']['input']>;
  confirm?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
  high?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  low?: InputMaybe<Scalars['Float']['input']>;
  open?: InputMaybe<Scalars['Float']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  turnover?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_Candle_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_Candle_stddev_pop_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_Candle_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_Candle_stddev_samp_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_Candle_Sum_Fields = {
  __typename?: 'defaultdb_Candle_sum_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Int']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_Candle_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_Candle_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_Candle_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_Candle_Var_Pop_Fields = {
  __typename?: 'defaultdb_Candle_var_pop_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_Candle_Var_Samp_Fields = {
  __typename?: 'defaultdb_Candle_var_samp_fields';
  close?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
  open?: Maybe<Scalars['Float']['output']>;
  turnover?: Maybe<Scalars['Float']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_Exchange = {
  __typename?: 'defaultdb_Exchange';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "defaultdb.Exchange" */
export type Defaultdb_Exchange_Aggregate = {
  __typename?: 'defaultdb_Exchange_aggregate';
  aggregate?: Maybe<Defaultdb_Exchange_Aggregate_Fields>;
  nodes: Array<Defaultdb_Exchange>;
};

/** aggregate fields of "defaultdb.Exchange" */
export type Defaultdb_Exchange_Aggregate_Fields = {
  __typename?: 'defaultdb_Exchange_aggregate_fields';
  avg?: Maybe<Defaultdb_Exchange_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_Exchange_Max_Fields>;
  min?: Maybe<Defaultdb_Exchange_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_Exchange_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_Exchange_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_Exchange_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_Exchange_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_Exchange_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.Exchange" */
export type Defaultdb_Exchange_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_Exchange_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_Exchange_Avg_Fields = {
  __typename?: 'defaultdb_Exchange_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.Exchange". All fields are combined with a logical 'AND'. */
export type Defaultdb_Exchange_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_Exchange_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_Exchange_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_Exchange_Bool_Exp>>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.Exchange" */
export type Defaultdb_Exchange_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_Exchange_Max_Fields = {
  __typename?: 'defaultdb_Exchange_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_Exchange_Min_Fields = {
  __typename?: 'defaultdb_Exchange_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "defaultdb.Exchange" */
export type Defaultdb_Exchange_Mutation_Response = {
  __typename?: 'defaultdb_Exchange_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_Exchange>;
};

/** Ordering options when selecting data from "defaultdb.Exchange". */
export type Defaultdb_Exchange_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.Exchange */
export type Defaultdb_Exchange_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.Exchange" */
export enum Defaultdb_Exchange_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "defaultdb.Exchange" */
export type Defaultdb_Exchange_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_Exchange_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_Exchange_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_Exchange_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_Exchange_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_Exchange_Sum_Fields = {
  __typename?: 'defaultdb_Exchange_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_Exchange_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_Exchange_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_Exchange_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_Exchange_Var_Pop_Fields = {
  __typename?: 'defaultdb_Exchange_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_Exchange_Var_Samp_Fields = {
  __typename?: 'defaultdb_Exchange_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_Indicator = {
  __typename?: 'defaultdb_Indicator';
  createdAt: Scalars['datetime']['output'];
  /** An object relationship */
  defaultdb_StrategyState: Defaultdb_StrategyState;
  id: Scalars['Int']['output'];
  strategyStateId: Scalars['Int']['output'];
  subType?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
  value: Scalars['Float']['output'];
};

/** aggregated selection of "defaultdb.Indicator" */
export type Defaultdb_Indicator_Aggregate = {
  __typename?: 'defaultdb_Indicator_aggregate';
  aggregate?: Maybe<Defaultdb_Indicator_Aggregate_Fields>;
  nodes: Array<Defaultdb_Indicator>;
};

/** aggregate fields of "defaultdb.Indicator" */
export type Defaultdb_Indicator_Aggregate_Fields = {
  __typename?: 'defaultdb_Indicator_aggregate_fields';
  avg?: Maybe<Defaultdb_Indicator_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_Indicator_Max_Fields>;
  min?: Maybe<Defaultdb_Indicator_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_Indicator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_Indicator_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_Indicator_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_Indicator_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_Indicator_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.Indicator" */
export type Defaultdb_Indicator_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_Indicator_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Aggregate_Order_By = {
  avg?: InputMaybe<Defaultdb_Indicator_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Defaultdb_Indicator_Max_Order_By>;
  min?: InputMaybe<Defaultdb_Indicator_Min_Order_By>;
  stddev_pop?: InputMaybe<Defaultdb_Indicator_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Defaultdb_Indicator_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Defaultdb_Indicator_Sum_Order_By>;
  var_pop?: InputMaybe<Defaultdb_Indicator_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Defaultdb_Indicator_Var_Samp_Order_By>;
};

/** aggregate avg on columns */
export type Defaultdb_Indicator_Avg_Fields = {
  __typename?: 'defaultdb_Indicator_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Avg_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "defaultdb.Indicator". All fields are combined with a logical 'AND'. */
export type Defaultdb_Indicator_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_Indicator_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_Indicator_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_StrategyState?: InputMaybe<Defaultdb_StrategyState_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  strategyStateId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  subType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  type?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  value?: InputMaybe<Float_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  strategyStateId?: InputMaybe<Scalars['Int']['input']>;
  subType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_Indicator_Max_Fields = {
  __typename?: 'defaultdb_Indicator_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  strategyStateId?: Maybe<Scalars['Int']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by max() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Max_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  subType?: InputMaybe<Mysql8_Order_By>;
  type?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate min on columns */
export type Defaultdb_Indicator_Min_Fields = {
  __typename?: 'defaultdb_Indicator_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  strategyStateId?: Maybe<Scalars['Int']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by min() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Min_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  subType?: InputMaybe<Mysql8_Order_By>;
  type?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** response of any mutation on the table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Mutation_Response = {
  __typename?: 'defaultdb_Indicator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_Indicator>;
};

/** Ordering options when selecting data from "defaultdb.Indicator". */
export type Defaultdb_Indicator_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_StrategyState?: InputMaybe<Defaultdb_StrategyState_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  subType?: InputMaybe<Mysql8_Order_By>;
  type?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.Indicator */
export type Defaultdb_Indicator_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.Indicator" */
export enum Defaultdb_Indicator_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  StrategyStateId = 'strategyStateId',
  /** column name */
  SubType = 'subType',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  strategyStateId?: InputMaybe<Scalars['Int']['input']>;
  subType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_Indicator_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_Indicator_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Stddev_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_Indicator_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_Indicator_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Stddev_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate sum on columns */
export type Defaultdb_Indicator_Sum_Fields = {
  __typename?: 'defaultdb_Indicator_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  strategyStateId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Sum_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_Indicator_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_Indicator_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_Indicator_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_Indicator_Var_Pop_Fields = {
  __typename?: 'defaultdb_Indicator_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Var_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

/** aggregate var_samp on columns */
export type Defaultdb_Indicator_Var_Samp_Fields = {
  __typename?: 'defaultdb_Indicator_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  strategyStateId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "defaultdb.Indicator" */
export type Defaultdb_Indicator_Var_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  strategyStateId?: InputMaybe<Mysql8_Order_By>;
  value?: InputMaybe<Mysql8_Order_By>;
};

export type Defaultdb_Order = {
  __typename?: 'defaultdb_Order';
  createdAt: Scalars['datetime']['output'];
  date: Scalars['datetime']['output'];
  exchangeId: Scalars['Int']['output'];
  exchangeOrderId?: Maybe<Scalars['String']['output']>;
  exchangeOrderStatus?: Maybe<Scalars['String']['output']>;
  exchangeUserId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  orderType: Scalars['String']['output'];
  planId: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty: Scalars['Float']['output'];
  side: Scalars['String']['output'];
  stopLoss?: Maybe<Scalars['Float']['output']>;
  stopOrderType?: Maybe<Scalars['String']['output']>;
  strategy: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId: Scalars['Int']['output'];
};

/** aggregated selection of "defaultdb.Order" */
export type Defaultdb_Order_Aggregate = {
  __typename?: 'defaultdb_Order_aggregate';
  aggregate?: Maybe<Defaultdb_Order_Aggregate_Fields>;
  nodes: Array<Defaultdb_Order>;
};

/** aggregate fields of "defaultdb.Order" */
export type Defaultdb_Order_Aggregate_Fields = {
  __typename?: 'defaultdb_Order_aggregate_fields';
  avg?: Maybe<Defaultdb_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_Order_Max_Fields>;
  min?: Maybe<Defaultdb_Order_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_Order_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_Order_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.Order" */
export type Defaultdb_Order_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_Order_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_Order_Avg_Fields = {
  __typename?: 'defaultdb_Order_avg_fields';
  exchangeId?: Maybe<Scalars['Float']['output']>;
  exchangeUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.Order". All fields are combined with a logical 'AND'. */
export type Defaultdb_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_Order_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_Order_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  date?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  exchangeId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  exchangeOrderId?: InputMaybe<String_Mysql8_Comparison_Exp>;
  exchangeOrderStatus?: InputMaybe<String_Mysql8_Comparison_Exp>;
  exchangeUserId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  openPositionPrice?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  orderType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  price?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  profitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  qty?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  side?: InputMaybe<String_Mysql8_Comparison_Exp>;
  stopLoss?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  stopOrderType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  strategy?: InputMaybe<String_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  timestamp?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  userAccountBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  userAccountId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.Order" */
export type Defaultdb_Order_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  date?: InputMaybe<Scalars['datetime']['input']>;
  exchangeId?: InputMaybe<Scalars['Int']['input']>;
  exchangeOrderId?: InputMaybe<Scalars['String']['input']>;
  exchangeOrderStatus?: InputMaybe<Scalars['String']['input']>;
  exchangeUserId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  openPositionPrice?: InputMaybe<Scalars['Float']['input']>;
  orderType?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  profitRate?: InputMaybe<Scalars['Float']['input']>;
  qty?: InputMaybe<Scalars['Float']['input']>;
  side?: InputMaybe<Scalars['String']['input']>;
  stopLoss?: InputMaybe<Scalars['Float']['input']>;
  stopOrderType?: InputMaybe<Scalars['String']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  userAccountBalance?: InputMaybe<Scalars['Float']['input']>;
  userAccountId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_Order_Max_Fields = {
  __typename?: 'defaultdb_Order_max_fields';
  exchangeId?: Maybe<Scalars['Int']['output']>;
  exchangeOrderId?: Maybe<Scalars['String']['output']>;
  exchangeOrderStatus?: Maybe<Scalars['String']['output']>;
  exchangeUserId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  orderType?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  side?: Maybe<Scalars['String']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  stopOrderType?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_Order_Min_Fields = {
  __typename?: 'defaultdb_Order_min_fields';
  exchangeId?: Maybe<Scalars['Int']['output']>;
  exchangeOrderId?: Maybe<Scalars['String']['output']>;
  exchangeOrderStatus?: Maybe<Scalars['String']['output']>;
  exchangeUserId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  orderType?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  side?: Maybe<Scalars['String']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  stopOrderType?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "defaultdb.Order" */
export type Defaultdb_Order_Mutation_Response = {
  __typename?: 'defaultdb_Order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_Order>;
};

/** Ordering options when selecting data from "defaultdb.Order". */
export type Defaultdb_Order_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  date?: InputMaybe<Mysql8_Order_By>;
  exchangeId?: InputMaybe<Mysql8_Order_By>;
  exchangeOrderId?: InputMaybe<Mysql8_Order_By>;
  exchangeOrderStatus?: InputMaybe<Mysql8_Order_By>;
  exchangeUserId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  openPositionPrice?: InputMaybe<Mysql8_Order_By>;
  orderType?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  price?: InputMaybe<Mysql8_Order_By>;
  profitRate?: InputMaybe<Mysql8_Order_By>;
  qty?: InputMaybe<Mysql8_Order_By>;
  side?: InputMaybe<Mysql8_Order_By>;
  stopLoss?: InputMaybe<Mysql8_Order_By>;
  stopOrderType?: InputMaybe<Mysql8_Order_By>;
  strategy?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  timestamp?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  userAccountBalance?: InputMaybe<Mysql8_Order_By>;
  userAccountId?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.Order */
export type Defaultdb_Order_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.Order" */
export enum Defaultdb_Order_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Date = 'date',
  /** column name */
  ExchangeId = 'exchangeId',
  /** column name */
  ExchangeOrderId = 'exchangeOrderId',
  /** column name */
  ExchangeOrderStatus = 'exchangeOrderStatus',
  /** column name */
  ExchangeUserId = 'exchangeUserId',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  OpenPositionPrice = 'openPositionPrice',
  /** column name */
  OrderType = 'orderType',
  /** column name */
  PlanId = 'planId',
  /** column name */
  Price = 'price',
  /** column name */
  ProfitRate = 'profitRate',
  /** column name */
  Qty = 'qty',
  /** column name */
  Side = 'side',
  /** column name */
  StopLoss = 'stopLoss',
  /** column name */
  StopOrderType = 'stopOrderType',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserAccountBalance = 'userAccountBalance',
  /** column name */
  UserAccountId = 'userAccountId'
}

/** input type for updating data in table "defaultdb.Order" */
export type Defaultdb_Order_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  date?: InputMaybe<Scalars['datetime']['input']>;
  exchangeId?: InputMaybe<Scalars['Int']['input']>;
  exchangeOrderId?: InputMaybe<Scalars['String']['input']>;
  exchangeOrderStatus?: InputMaybe<Scalars['String']['input']>;
  exchangeUserId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  openPositionPrice?: InputMaybe<Scalars['Float']['input']>;
  orderType?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  profitRate?: InputMaybe<Scalars['Float']['input']>;
  qty?: InputMaybe<Scalars['Float']['input']>;
  side?: InputMaybe<Scalars['String']['input']>;
  stopLoss?: InputMaybe<Scalars['Float']['input']>;
  stopOrderType?: InputMaybe<Scalars['String']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  userAccountBalance?: InputMaybe<Scalars['Float']['input']>;
  userAccountId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_Order_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_Order_stddev_pop_fields';
  exchangeId?: Maybe<Scalars['Float']['output']>;
  exchangeUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_Order_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_Order_stddev_samp_fields';
  exchangeId?: Maybe<Scalars['Float']['output']>;
  exchangeUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_Order_Sum_Fields = {
  __typename?: 'defaultdb_Order_sum_fields';
  exchangeId?: Maybe<Scalars['Int']['output']>;
  exchangeUserId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_Order_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_Order_Var_Pop_Fields = {
  __typename?: 'defaultdb_Order_var_pop_fields';
  exchangeId?: Maybe<Scalars['Float']['output']>;
  exchangeUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_Order_Var_Samp_Fields = {
  __typename?: 'defaultdb_Order_var_samp_fields';
  exchangeId?: Maybe<Scalars['Float']['output']>;
  exchangeUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  openPositionPrice?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profitRate?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  userAccountBalance?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_Plan = {
  __typename?: 'defaultdb_Plan';
  createdAt: Scalars['datetime']['output'];
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  strategy: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
};

/** aggregated selection of "defaultdb.Plan" */
export type Defaultdb_Plan_Aggregate = {
  __typename?: 'defaultdb_Plan_aggregate';
  aggregate?: Maybe<Defaultdb_Plan_Aggregate_Fields>;
  nodes: Array<Defaultdb_Plan>;
};

/** aggregate fields of "defaultdb.Plan" */
export type Defaultdb_Plan_Aggregate_Fields = {
  __typename?: 'defaultdb_Plan_aggregate_fields';
  avg?: Maybe<Defaultdb_Plan_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_Plan_Max_Fields>;
  min?: Maybe<Defaultdb_Plan_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_Plan_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_Plan_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.Plan" */
export type Defaultdb_Plan_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_Plan_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_Plan_Avg_Fields = {
  __typename?: 'defaultdb_Plan_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.Plan". All fields are combined with a logical 'AND'. */
export type Defaultdb_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_Plan_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_Plan_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  strategy?: InputMaybe<String_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.Plan" */
export type Defaultdb_Plan_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_Plan_Max_Fields = {
  __typename?: 'defaultdb_Plan_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_Plan_Min_Fields = {
  __typename?: 'defaultdb_Plan_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "defaultdb.Plan" */
export type Defaultdb_Plan_Mutation_Response = {
  __typename?: 'defaultdb_Plan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_Plan>;
};

/** Ordering options when selecting data from "defaultdb.Plan". */
export type Defaultdb_Plan_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  strategy?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.Plan */
export type Defaultdb_Plan_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.Plan" */
export enum Defaultdb_Plan_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.Plan" */
export type Defaultdb_Plan_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_Plan_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_Plan_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_Plan_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_Plan_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_Plan_Sum_Fields = {
  __typename?: 'defaultdb_Plan_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_Plan_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_Plan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_Plan_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_Plan_Var_Pop_Fields = {
  __typename?: 'defaultdb_Plan_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_Plan_Var_Samp_Fields = {
  __typename?: 'defaultdb_Plan_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_Report = {
  __typename?: 'defaultdb_Report';
  accountStartingBalance: Scalars['Float']['output'];
  confirm: Scalars['Int']['output'];
  createdAt: Scalars['datetime']['output'];
  cumulativeProfit: Scalars['Float']['output'];
  cumulativeProfitRate: Scalars['Float']['output'];
  endingBalance: Scalars['Float']['output'];
  endingBalanceAfterFees: Scalars['Float']['output'];
  fees: Scalars['Float']['output'];
  from: Scalars['String']['output'];
  fromDate: Scalars['datetime']['output'];
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  leveragedAccountStartingBalance: Scalars['Float']['output'];
  leveragedCumulativeProfit: Scalars['Float']['output'];
  leveragedCumulativeProfitRate: Scalars['Float']['output'];
  leveragedEndingBalance: Scalars['Float']['output'];
  leveragedEndingBalanceAfterFees: Scalars['Float']['output'];
  leveragedFees: Scalars['Float']['output'];
  leveragedReportIntervalProfit: Scalars['Float']['output'];
  leveragedReportIntervalProfitRate: Scalars['Float']['output'];
  leveragedReportIntervalStartingBalance: Scalars['Float']['output'];
  losses: Scalars['Int']['output'];
  numberOfOrders: Scalars['Int']['output'];
  planId?: Maybe<Scalars['Int']['output']>;
  reportInterval: Scalars['String']['output'];
  reportIntervalProfit: Scalars['Float']['output'];
  reportIntervalProfitRate: Scalars['Float']['output'];
  reportIntervalStartingBalance: Scalars['Float']['output'];
  strategy: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  to: Scalars['String']['output'];
  toDate: Scalars['datetime']['output'];
  totalTradeEntries: Scalars['Int']['output'];
  totalTrades: Scalars['Int']['output'];
  updatedAt: Scalars['datetime']['output'];
  userAccountId: Scalars['Int']['output'];
  usersAccountId?: Maybe<Scalars['Int']['output']>;
  winRate: Scalars['Float']['output'];
  wins: Scalars['Int']['output'];
};

/** aggregated selection of "defaultdb.Report" */
export type Defaultdb_Report_Aggregate = {
  __typename?: 'defaultdb_Report_aggregate';
  aggregate?: Maybe<Defaultdb_Report_Aggregate_Fields>;
  nodes: Array<Defaultdb_Report>;
};

/** aggregate fields of "defaultdb.Report" */
export type Defaultdb_Report_Aggregate_Fields = {
  __typename?: 'defaultdb_Report_aggregate_fields';
  avg?: Maybe<Defaultdb_Report_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_Report_Max_Fields>;
  min?: Maybe<Defaultdb_Report_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_Report_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_Report_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_Report_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_Report_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_Report_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.Report" */
export type Defaultdb_Report_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_Report_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_Report_Avg_Fields = {
  __typename?: 'defaultdb_Report_avg_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Float']['output']>;
  numberOfOrders?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
  usersAccountId?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.Report". All fields are combined with a logical 'AND'. */
export type Defaultdb_Report_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_Report_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_Report_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_Report_Bool_Exp>>;
  accountStartingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  confirm?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  cumulativeProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  cumulativeProfitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  endingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  endingBalanceAfterFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  fees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  from?: InputMaybe<String_Mysql8_Comparison_Exp>;
  fromDate?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  leveragedAccountStartingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedCumulativeProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedCumulativeProfitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedEndingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedEndingBalanceAfterFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedFees?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedReportIntervalProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedReportIntervalProfitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  leveragedReportIntervalStartingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  losses?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  numberOfOrders?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  reportInterval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  reportIntervalProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  reportIntervalProfitRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  reportIntervalStartingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  strategy?: InputMaybe<String_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  to?: InputMaybe<String_Mysql8_Comparison_Exp>;
  toDate?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  totalTradeEntries?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  totalTrades?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  userAccountId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  usersAccountId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  winRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  wins?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.Report" */
export type Defaultdb_Report_Insert_Input = {
  accountStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  confirm?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  cumulativeProfit?: InputMaybe<Scalars['Float']['input']>;
  cumulativeProfitRate?: InputMaybe<Scalars['Float']['input']>;
  endingBalance?: InputMaybe<Scalars['Float']['input']>;
  endingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  fees?: InputMaybe<Scalars['Float']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  leveragedAccountStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  leveragedCumulativeProfit?: InputMaybe<Scalars['Float']['input']>;
  leveragedCumulativeProfitRate?: InputMaybe<Scalars['Float']['input']>;
  leveragedEndingBalance?: InputMaybe<Scalars['Float']['input']>;
  leveragedEndingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  leveragedFees?: InputMaybe<Scalars['Float']['input']>;
  leveragedReportIntervalProfit?: InputMaybe<Scalars['Float']['input']>;
  leveragedReportIntervalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  leveragedReportIntervalStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  losses?: InputMaybe<Scalars['Int']['input']>;
  numberOfOrders?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  reportInterval?: InputMaybe<Scalars['String']['input']>;
  reportIntervalProfit?: InputMaybe<Scalars['Float']['input']>;
  reportIntervalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  reportIntervalStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['datetime']['input']>;
  totalTradeEntries?: InputMaybe<Scalars['Int']['input']>;
  totalTrades?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  userAccountId?: InputMaybe<Scalars['Int']['input']>;
  usersAccountId?: InputMaybe<Scalars['Int']['input']>;
  winRate?: InputMaybe<Scalars['Float']['input']>;
  wins?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_Report_Max_Fields = {
  __typename?: 'defaultdb_Report_max_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Int']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Int']['output']>;
  numberOfOrders?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  reportInterval?: Maybe<Scalars['String']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  totalTradeEntries?: Maybe<Scalars['Int']['output']>;
  totalTrades?: Maybe<Scalars['Int']['output']>;
  userAccountId?: Maybe<Scalars['Int']['output']>;
  usersAccountId?: Maybe<Scalars['Int']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_Report_Min_Fields = {
  __typename?: 'defaultdb_Report_min_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Int']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Int']['output']>;
  numberOfOrders?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  reportInterval?: Maybe<Scalars['String']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  totalTradeEntries?: Maybe<Scalars['Int']['output']>;
  totalTrades?: Maybe<Scalars['Int']['output']>;
  userAccountId?: Maybe<Scalars['Int']['output']>;
  usersAccountId?: Maybe<Scalars['Int']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "defaultdb.Report" */
export type Defaultdb_Report_Mutation_Response = {
  __typename?: 'defaultdb_Report_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_Report>;
};

/** Ordering options when selecting data from "defaultdb.Report". */
export type Defaultdb_Report_Order_By = {
  accountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  confirm?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  cumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  endingBalance?: InputMaybe<Mysql8_Order_By>;
  endingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  fees?: InputMaybe<Mysql8_Order_By>;
  from?: InputMaybe<Mysql8_Order_By>;
  fromDate?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  leveragedAccountStartingBalance?: InputMaybe<Mysql8_Order_By>;
  leveragedCumulativeProfit?: InputMaybe<Mysql8_Order_By>;
  leveragedCumulativeProfitRate?: InputMaybe<Mysql8_Order_By>;
  leveragedEndingBalance?: InputMaybe<Mysql8_Order_By>;
  leveragedEndingBalanceAfterFees?: InputMaybe<Mysql8_Order_By>;
  leveragedFees?: InputMaybe<Mysql8_Order_By>;
  leveragedReportIntervalProfit?: InputMaybe<Mysql8_Order_By>;
  leveragedReportIntervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  leveragedReportIntervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  losses?: InputMaybe<Mysql8_Order_By>;
  numberOfOrders?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  reportInterval?: InputMaybe<Mysql8_Order_By>;
  reportIntervalProfit?: InputMaybe<Mysql8_Order_By>;
  reportIntervalProfitRate?: InputMaybe<Mysql8_Order_By>;
  reportIntervalStartingBalance?: InputMaybe<Mysql8_Order_By>;
  strategy?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  to?: InputMaybe<Mysql8_Order_By>;
  toDate?: InputMaybe<Mysql8_Order_By>;
  totalTradeEntries?: InputMaybe<Mysql8_Order_By>;
  totalTrades?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  userAccountId?: InputMaybe<Mysql8_Order_By>;
  usersAccountId?: InputMaybe<Mysql8_Order_By>;
  winRate?: InputMaybe<Mysql8_Order_By>;
  wins?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.Report */
export type Defaultdb_Report_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.Report" */
export enum Defaultdb_Report_Select_Column {
  /** column name */
  AccountStartingBalance = 'accountStartingBalance',
  /** column name */
  Confirm = 'confirm',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CumulativeProfit = 'cumulativeProfit',
  /** column name */
  CumulativeProfitRate = 'cumulativeProfitRate',
  /** column name */
  EndingBalance = 'endingBalance',
  /** column name */
  EndingBalanceAfterFees = 'endingBalanceAfterFees',
  /** column name */
  Fees = 'fees',
  /** column name */
  From = 'from',
  /** column name */
  FromDate = 'fromDate',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  LeveragedAccountStartingBalance = 'leveragedAccountStartingBalance',
  /** column name */
  LeveragedCumulativeProfit = 'leveragedCumulativeProfit',
  /** column name */
  LeveragedCumulativeProfitRate = 'leveragedCumulativeProfitRate',
  /** column name */
  LeveragedEndingBalance = 'leveragedEndingBalance',
  /** column name */
  LeveragedEndingBalanceAfterFees = 'leveragedEndingBalanceAfterFees',
  /** column name */
  LeveragedFees = 'leveragedFees',
  /** column name */
  LeveragedReportIntervalProfit = 'leveragedReportIntervalProfit',
  /** column name */
  LeveragedReportIntervalProfitRate = 'leveragedReportIntervalProfitRate',
  /** column name */
  LeveragedReportIntervalStartingBalance = 'leveragedReportIntervalStartingBalance',
  /** column name */
  Losses = 'losses',
  /** column name */
  NumberOfOrders = 'numberOfOrders',
  /** column name */
  PlanId = 'planId',
  /** column name */
  ReportInterval = 'reportInterval',
  /** column name */
  ReportIntervalProfit = 'reportIntervalProfit',
  /** column name */
  ReportIntervalProfitRate = 'reportIntervalProfitRate',
  /** column name */
  ReportIntervalStartingBalance = 'reportIntervalStartingBalance',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  To = 'to',
  /** column name */
  ToDate = 'toDate',
  /** column name */
  TotalTradeEntries = 'totalTradeEntries',
  /** column name */
  TotalTrades = 'totalTrades',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserAccountId = 'userAccountId',
  /** column name */
  UsersAccountId = 'usersAccountId',
  /** column name */
  WinRate = 'winRate',
  /** column name */
  Wins = 'wins'
}

/** input type for updating data in table "defaultdb.Report" */
export type Defaultdb_Report_Set_Input = {
  accountStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  confirm?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  cumulativeProfit?: InputMaybe<Scalars['Float']['input']>;
  cumulativeProfitRate?: InputMaybe<Scalars['Float']['input']>;
  endingBalance?: InputMaybe<Scalars['Float']['input']>;
  endingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  fees?: InputMaybe<Scalars['Float']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  leveragedAccountStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  leveragedCumulativeProfit?: InputMaybe<Scalars['Float']['input']>;
  leveragedCumulativeProfitRate?: InputMaybe<Scalars['Float']['input']>;
  leveragedEndingBalance?: InputMaybe<Scalars['Float']['input']>;
  leveragedEndingBalanceAfterFees?: InputMaybe<Scalars['Float']['input']>;
  leveragedFees?: InputMaybe<Scalars['Float']['input']>;
  leveragedReportIntervalProfit?: InputMaybe<Scalars['Float']['input']>;
  leveragedReportIntervalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  leveragedReportIntervalStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  losses?: InputMaybe<Scalars['Int']['input']>;
  numberOfOrders?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  reportInterval?: InputMaybe<Scalars['String']['input']>;
  reportIntervalProfit?: InputMaybe<Scalars['Float']['input']>;
  reportIntervalProfitRate?: InputMaybe<Scalars['Float']['input']>;
  reportIntervalStartingBalance?: InputMaybe<Scalars['Float']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['datetime']['input']>;
  totalTradeEntries?: InputMaybe<Scalars['Int']['input']>;
  totalTrades?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  userAccountId?: InputMaybe<Scalars['Int']['input']>;
  usersAccountId?: InputMaybe<Scalars['Int']['input']>;
  winRate?: InputMaybe<Scalars['Float']['input']>;
  wins?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_Report_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_Report_stddev_pop_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Float']['output']>;
  numberOfOrders?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
  usersAccountId?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_Report_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_Report_stddev_samp_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Float']['output']>;
  numberOfOrders?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
  usersAccountId?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_Report_Sum_Fields = {
  __typename?: 'defaultdb_Report_sum_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Int']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Int']['output']>;
  numberOfOrders?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Int']['output']>;
  totalTrades?: Maybe<Scalars['Int']['output']>;
  userAccountId?: Maybe<Scalars['Int']['output']>;
  usersAccountId?: Maybe<Scalars['Int']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_Report_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_Report_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_Report_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_Report_Var_Pop_Fields = {
  __typename?: 'defaultdb_Report_var_pop_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Float']['output']>;
  numberOfOrders?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
  usersAccountId?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_Report_Var_Samp_Fields = {
  __typename?: 'defaultdb_Report_var_samp_fields';
  accountStartingBalance?: Maybe<Scalars['Float']['output']>;
  confirm?: Maybe<Scalars['Float']['output']>;
  cumulativeProfit?: Maybe<Scalars['Float']['output']>;
  cumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  endingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  leveragedAccountStartingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfit?: Maybe<Scalars['Float']['output']>;
  leveragedCumulativeProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalance?: Maybe<Scalars['Float']['output']>;
  leveragedEndingBalanceAfterFees?: Maybe<Scalars['Float']['output']>;
  leveragedFees?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  leveragedReportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  losses?: Maybe<Scalars['Float']['output']>;
  numberOfOrders?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfit?: Maybe<Scalars['Float']['output']>;
  reportIntervalProfitRate?: Maybe<Scalars['Float']['output']>;
  reportIntervalStartingBalance?: Maybe<Scalars['Float']['output']>;
  totalTradeEntries?: Maybe<Scalars['Float']['output']>;
  totalTrades?: Maybe<Scalars['Float']['output']>;
  userAccountId?: Maybe<Scalars['Float']['output']>;
  usersAccountId?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_StrategyState = {
  __typename?: 'defaultdb_StrategyState';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['datetime']['output'];
  /** An array relationship */
  defaultdb_Indicators: Array<Defaultdb_Indicator>;
  /** An aggregate relationship */
  defaultdb_Indicators_aggregate: Defaultdb_Indicator_Aggregate;
  id: Scalars['Int']['output'];
  interval: Scalars['String']['output'];
  isOrderActive: Scalars['Int']['output'];
  isPotentialOrderSignaled: Scalars['Int']['output'];
  planId: Scalars['Int']['output'];
  potentialOrderSide?: Maybe<Scalars['String']['output']>;
  start: Scalars['String']['output'];
  strategy: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  takeProfit?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['datetime']['output'];
};


export type Defaultdb_StrategyStateDefaultdb_IndicatorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Indicator_Order_By>>;
  where?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
};


export type Defaultdb_StrategyStateDefaultdb_Indicators_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Indicator_Order_By>>;
  where?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
};

/** aggregated selection of "defaultdb.StrategyState" */
export type Defaultdb_StrategyState_Aggregate = {
  __typename?: 'defaultdb_StrategyState_aggregate';
  aggregate?: Maybe<Defaultdb_StrategyState_Aggregate_Fields>;
  nodes: Array<Defaultdb_StrategyState>;
};

/** aggregate fields of "defaultdb.StrategyState" */
export type Defaultdb_StrategyState_Aggregate_Fields = {
  __typename?: 'defaultdb_StrategyState_aggregate_fields';
  avg?: Maybe<Defaultdb_StrategyState_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_StrategyState_Max_Fields>;
  min?: Maybe<Defaultdb_StrategyState_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_StrategyState_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_StrategyState_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_StrategyState_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_StrategyState_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_StrategyState_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.StrategyState" */
export type Defaultdb_StrategyState_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_StrategyState_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_StrategyState_Avg_Fields = {
  __typename?: 'defaultdb_StrategyState_avg_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.StrategyState". All fields are combined with a logical 'AND'. */
export type Defaultdb_StrategyState_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_StrategyState_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_StrategyState_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_StrategyState_Bool_Exp>>;
  activeOrderId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  defaultdb_Indicators?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  interval?: InputMaybe<String_Mysql8_Comparison_Exp>;
  isOrderActive?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  isPotentialOrderSignaled?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  potentialOrderSide?: InputMaybe<String_Mysql8_Comparison_Exp>;
  start?: InputMaybe<String_Mysql8_Comparison_Exp>;
  strategy?: InputMaybe<String_Mysql8_Comparison_Exp>;
  symbol?: InputMaybe<String_Mysql8_Comparison_Exp>;
  takeProfit?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.StrategyState" */
export type Defaultdb_StrategyState_Insert_Input = {
  activeOrderId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  isOrderActive?: InputMaybe<Scalars['Int']['input']>;
  isPotentialOrderSignaled?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  potentialOrderSide?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  takeProfit?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_StrategyState_Max_Fields = {
  __typename?: 'defaultdb_StrategyState_max_fields';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  isOrderActive?: Maybe<Scalars['Int']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  potentialOrderSide?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_StrategyState_Min_Fields = {
  __typename?: 'defaultdb_StrategyState_min_fields';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
  isOrderActive?: Maybe<Scalars['Int']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  potentialOrderSide?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** response of any mutation on the table "defaultdb.StrategyState" */
export type Defaultdb_StrategyState_Mutation_Response = {
  __typename?: 'defaultdb_StrategyState_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_StrategyState>;
};

/** Ordering options when selecting data from "defaultdb.StrategyState". */
export type Defaultdb_StrategyState_Order_By = {
  activeOrderId?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  defaultdb_Indicators_aggregate?: InputMaybe<Defaultdb_Indicator_Aggregate_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  interval?: InputMaybe<Mysql8_Order_By>;
  isOrderActive?: InputMaybe<Mysql8_Order_By>;
  isPotentialOrderSignaled?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  potentialOrderSide?: InputMaybe<Mysql8_Order_By>;
  start?: InputMaybe<Mysql8_Order_By>;
  strategy?: InputMaybe<Mysql8_Order_By>;
  symbol?: InputMaybe<Mysql8_Order_By>;
  takeProfit?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.StrategyState */
export type Defaultdb_StrategyState_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.StrategyState" */
export enum Defaultdb_StrategyState_Select_Column {
  /** column name */
  ActiveOrderId = 'activeOrderId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  IsOrderActive = 'isOrderActive',
  /** column name */
  IsPotentialOrderSignaled = 'isPotentialOrderSignaled',
  /** column name */
  PlanId = 'planId',
  /** column name */
  PotentialOrderSide = 'potentialOrderSide',
  /** column name */
  Start = 'start',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TakeProfit = 'takeProfit',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.StrategyState" */
export type Defaultdb_StrategyState_Set_Input = {
  activeOrderId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['String']['input']>;
  isOrderActive?: InputMaybe<Scalars['Int']['input']>;
  isPotentialOrderSignaled?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  potentialOrderSide?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  takeProfit?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_StrategyState_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_StrategyState_stddev_pop_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_StrategyState_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_StrategyState_stddev_samp_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_StrategyState_Sum_Fields = {
  __typename?: 'defaultdb_StrategyState_sum_fields';
  activeOrderId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isOrderActive?: Maybe<Scalars['Int']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_StrategyState_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_StrategyState_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_StrategyState_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_StrategyState_Var_Pop_Fields = {
  __typename?: 'defaultdb_StrategyState_var_pop_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_StrategyState_Var_Samp_Fields = {
  __typename?: 'defaultdb_StrategyState_var_samp_fields';
  activeOrderId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isOrderActive?: Maybe<Scalars['Float']['output']>;
  isPotentialOrderSignaled?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  takeProfit?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_TaxRate = {
  __typename?: 'defaultdb_TaxRate';
  baseAmount: Scalars['Float']['output'];
  countryCode: Scalars['String']['output'];
  filingType: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  incomeFrom: Scalars['Float']['output'];
  incomeTo: Scalars['Float']['output'];
  stateCode: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
  taxYear: Scalars['Int']['output'];
};

/** aggregated selection of "defaultdb.TaxRate" */
export type Defaultdb_TaxRate_Aggregate = {
  __typename?: 'defaultdb_TaxRate_aggregate';
  aggregate?: Maybe<Defaultdb_TaxRate_Aggregate_Fields>;
  nodes: Array<Defaultdb_TaxRate>;
};

/** aggregate fields of "defaultdb.TaxRate" */
export type Defaultdb_TaxRate_Aggregate_Fields = {
  __typename?: 'defaultdb_TaxRate_aggregate_fields';
  avg?: Maybe<Defaultdb_TaxRate_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_TaxRate_Max_Fields>;
  min?: Maybe<Defaultdb_TaxRate_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_TaxRate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_TaxRate_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_TaxRate_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_TaxRate_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_TaxRate_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.TaxRate" */
export type Defaultdb_TaxRate_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_TaxRate_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_TaxRate_Avg_Fields = {
  __typename?: 'defaultdb_TaxRate_avg_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.TaxRate". All fields are combined with a logical 'AND'. */
export type Defaultdb_TaxRate_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_TaxRate_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_TaxRate_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_TaxRate_Bool_Exp>>;
  baseAmount?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  countryCode?: InputMaybe<String_Mysql8_Comparison_Exp>;
  filingType?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  incomeFrom?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  incomeTo?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  stateCode?: InputMaybe<String_Mysql8_Comparison_Exp>;
  taxRate?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  taxYear?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.TaxRate" */
export type Defaultdb_TaxRate_Insert_Input = {
  baseAmount?: InputMaybe<Scalars['Float']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  filingType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  incomeFrom?: InputMaybe<Scalars['Float']['input']>;
  incomeTo?: InputMaybe<Scalars['Float']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
  taxRate?: InputMaybe<Scalars['Float']['input']>;
  taxYear?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_TaxRate_Max_Fields = {
  __typename?: 'defaultdb_TaxRate_max_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  filingType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_TaxRate_Min_Fields = {
  __typename?: 'defaultdb_TaxRate_min_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  filingType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "defaultdb.TaxRate" */
export type Defaultdb_TaxRate_Mutation_Response = {
  __typename?: 'defaultdb_TaxRate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_TaxRate>;
};

/** Ordering options when selecting data from "defaultdb.TaxRate". */
export type Defaultdb_TaxRate_Order_By = {
  baseAmount?: InputMaybe<Mysql8_Order_By>;
  countryCode?: InputMaybe<Mysql8_Order_By>;
  filingType?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  incomeFrom?: InputMaybe<Mysql8_Order_By>;
  incomeTo?: InputMaybe<Mysql8_Order_By>;
  stateCode?: InputMaybe<Mysql8_Order_By>;
  taxRate?: InputMaybe<Mysql8_Order_By>;
  taxYear?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.TaxRate */
export type Defaultdb_TaxRate_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.TaxRate" */
export enum Defaultdb_TaxRate_Select_Column {
  /** column name */
  BaseAmount = 'baseAmount',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  FilingType = 'filingType',
  /** column name */
  Id = 'id',
  /** column name */
  IncomeFrom = 'incomeFrom',
  /** column name */
  IncomeTo = 'incomeTo',
  /** column name */
  StateCode = 'stateCode',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  TaxYear = 'taxYear'
}

/** input type for updating data in table "defaultdb.TaxRate" */
export type Defaultdb_TaxRate_Set_Input = {
  baseAmount?: InputMaybe<Scalars['Float']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  filingType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  incomeFrom?: InputMaybe<Scalars['Float']['input']>;
  incomeTo?: InputMaybe<Scalars['Float']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
  taxRate?: InputMaybe<Scalars['Float']['input']>;
  taxYear?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_TaxRate_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_TaxRate_stddev_pop_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_TaxRate_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_TaxRate_stddev_samp_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_TaxRate_Sum_Fields = {
  __typename?: 'defaultdb_TaxRate_sum_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_TaxRate_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_TaxRate_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_TaxRate_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_TaxRate_Var_Pop_Fields = {
  __typename?: 'defaultdb_TaxRate_var_pop_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_TaxRate_Var_Samp_Fields = {
  __typename?: 'defaultdb_TaxRate_var_samp_fields';
  baseAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  incomeFrom?: Maybe<Scalars['Float']['output']>;
  incomeTo?: Maybe<Scalars['Float']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  taxYear?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb_User = {
  __typename?: 'defaultdb_User';
  createdAt: Scalars['datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  updatedAt: Scalars['datetime']['output'];
};

export type Defaultdb_UserAccount = {
  __typename?: 'defaultdb_UserAccount';
  balance: Scalars['Float']['output'];
  createdAt: Scalars['datetime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  planId: Scalars['Int']['output'];
  startingBalance: Scalars['Float']['output'];
  updatedAt: Scalars['datetime']['output'];
  userId: Scalars['Int']['output'];
};

/** aggregated selection of "defaultdb.UserAccount" */
export type Defaultdb_UserAccount_Aggregate = {
  __typename?: 'defaultdb_UserAccount_aggregate';
  aggregate?: Maybe<Defaultdb_UserAccount_Aggregate_Fields>;
  nodes: Array<Defaultdb_UserAccount>;
};

/** aggregate fields of "defaultdb.UserAccount" */
export type Defaultdb_UserAccount_Aggregate_Fields = {
  __typename?: 'defaultdb_UserAccount_aggregate_fields';
  avg?: Maybe<Defaultdb_UserAccount_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_UserAccount_Max_Fields>;
  min?: Maybe<Defaultdb_UserAccount_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_UserAccount_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_UserAccount_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_UserAccount_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_UserAccount_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_UserAccount_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.UserAccount" */
export type Defaultdb_UserAccount_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_UserAccount_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_UserAccount_Avg_Fields = {
  __typename?: 'defaultdb_UserAccount_avg_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.UserAccount". All fields are combined with a logical 'AND'. */
export type Defaultdb_UserAccount_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_UserAccount_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_UserAccount_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_UserAccount_Bool_Exp>>;
  balance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  planId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  startingBalance?: InputMaybe<Float_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  userId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.UserAccount" */
export type Defaultdb_UserAccount_Insert_Input = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  startingBalance?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_UserAccount_Max_Fields = {
  __typename?: 'defaultdb_UserAccount_max_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_UserAccount_Min_Fields = {
  __typename?: 'defaultdb_UserAccount_min_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "defaultdb.UserAccount" */
export type Defaultdb_UserAccount_Mutation_Response = {
  __typename?: 'defaultdb_UserAccount_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_UserAccount>;
};

/** Ordering options when selecting data from "defaultdb.UserAccount". */
export type Defaultdb_UserAccount_Order_By = {
  balance?: InputMaybe<Mysql8_Order_By>;
  createdAt?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  planId?: InputMaybe<Mysql8_Order_By>;
  startingBalance?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
  userId?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.UserAccount */
export type Defaultdb_UserAccount_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.UserAccount" */
export enum Defaultdb_UserAccount_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'planId',
  /** column name */
  StartingBalance = 'startingBalance',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "defaultdb.UserAccount" */
export type Defaultdb_UserAccount_Set_Input = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  startingBalance?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_UserAccount_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_UserAccount_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_UserAccount_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_UserAccount_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_UserAccount_Sum_Fields = {
  __typename?: 'defaultdb_UserAccount_sum_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_UserAccount_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_UserAccount_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_UserAccount_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_UserAccount_Var_Pop_Fields = {
  __typename?: 'defaultdb_UserAccount_var_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_UserAccount_Var_Samp_Fields = {
  __typename?: 'defaultdb_UserAccount_var_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  startingBalance?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "defaultdb.User" */
export type Defaultdb_User_Aggregate = {
  __typename?: 'defaultdb_User_aggregate';
  aggregate?: Maybe<Defaultdb_User_Aggregate_Fields>;
  nodes: Array<Defaultdb_User>;
};

/** aggregate fields of "defaultdb.User" */
export type Defaultdb_User_Aggregate_Fields = {
  __typename?: 'defaultdb_User_aggregate_fields';
  avg?: Maybe<Defaultdb_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb_User_Max_Fields>;
  min?: Maybe<Defaultdb_User_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb_User_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb_User_Sum_Fields>;
  var_pop?: Maybe<Defaultdb_User_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb_User_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb.User" */
export type Defaultdb_User_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb_User_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb_User_Avg_Fields = {
  __typename?: 'defaultdb_User_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb.User". All fields are combined with a logical 'AND'. */
export type Defaultdb_User_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb_User_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb_User_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb_User_Bool_Exp>>;
  createdAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  email?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  password?: InputMaybe<String_Mysql8_Comparison_Exp>;
  updatedAt?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb.User" */
export type Defaultdb_User_Insert_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb_User_Max_Fields = {
  __typename?: 'defaultdb_User_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Defaultdb_User_Min_Fields = {
  __typename?: 'defaultdb_User_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "defaultdb.User" */
export type Defaultdb_User_Mutation_Response = {
  __typename?: 'defaultdb_User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb_User>;
};

/** Ordering options when selecting data from "defaultdb.User". */
export type Defaultdb_User_Order_By = {
  createdAt?: InputMaybe<Mysql8_Order_By>;
  email?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  password?: InputMaybe<Mysql8_Order_By>;
  updatedAt?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb.User */
export type Defaultdb_User_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "defaultdb.User" */
export enum Defaultdb_User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "defaultdb.User" */
export type Defaultdb_User_Set_Input = {
  createdAt?: InputMaybe<Scalars['datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb_User_Stddev_Pop_Fields = {
  __typename?: 'defaultdb_User_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb_User_Stddev_Samp_Fields = {
  __typename?: 'defaultdb_User_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb_User_Sum_Fields = {
  __typename?: 'defaultdb_User_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb_User_Var_Pop_Fields = {
  __typename?: 'defaultdb_User_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb_User_Var_Samp_Fields = {
  __typename?: 'defaultdb_User_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Defaultdb__Prisma_Migrations = {
  __typename?: 'defaultdb__prisma_migrations';
  applied_steps_count: Scalars['Int']['output'];
  checksum: Scalars['String']['output'];
  finished_at?: Maybe<Scalars['datetime']['output']>;
  id: Scalars['String']['output'];
  logs?: Maybe<Scalars['String']['output']>;
  migration_name: Scalars['String']['output'];
  rolled_back_at?: Maybe<Scalars['datetime']['output']>;
  started_at: Scalars['datetime']['output'];
};

/** aggregated selection of "defaultdb._prisma_migrations" */
export type Defaultdb__Prisma_Migrations_Aggregate = {
  __typename?: 'defaultdb__prisma_migrations_aggregate';
  aggregate?: Maybe<Defaultdb__Prisma_Migrations_Aggregate_Fields>;
  nodes: Array<Defaultdb__Prisma_Migrations>;
};

/** aggregate fields of "defaultdb._prisma_migrations" */
export type Defaultdb__Prisma_Migrations_Aggregate_Fields = {
  __typename?: 'defaultdb__prisma_migrations_aggregate_fields';
  avg?: Maybe<Defaultdb__Prisma_Migrations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Defaultdb__Prisma_Migrations_Max_Fields>;
  min?: Maybe<Defaultdb__Prisma_Migrations_Min_Fields>;
  stddev_pop?: Maybe<Defaultdb__Prisma_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Defaultdb__Prisma_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Defaultdb__Prisma_Migrations_Sum_Fields>;
  var_pop?: Maybe<Defaultdb__Prisma_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Defaultdb__Prisma_Migrations_Var_Samp_Fields>;
};


/** aggregate fields of "defaultdb._prisma_migrations" */
export type Defaultdb__Prisma_Migrations_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Defaultdb__Prisma_Migrations_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Defaultdb__Prisma_Migrations_Avg_Fields = {
  __typename?: 'defaultdb__prisma_migrations_avg_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "defaultdb._prisma_migrations". All fields are combined with a logical 'AND'. */
export type Defaultdb__Prisma_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<Defaultdb__Prisma_Migrations_Bool_Exp>>;
  _not?: InputMaybe<Defaultdb__Prisma_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<Defaultdb__Prisma_Migrations_Bool_Exp>>;
  applied_steps_count?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  checksum?: InputMaybe<String_Mysql8_Comparison_Exp>;
  finished_at?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  id?: InputMaybe<String_Mysql8_Comparison_Exp>;
  logs?: InputMaybe<String_Mysql8_Comparison_Exp>;
  migration_name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  rolled_back_at?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
  started_at?: InputMaybe<Datetime_Mysql8_Comparison_Exp>;
};

/** input type for inserting data into table "defaultdb._prisma_migrations" */
export type Defaultdb__Prisma_Migrations_Insert_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['datetime']['input']>;
  started_at?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate max on columns */
export type Defaultdb__Prisma_Migrations_Max_Fields = {
  __typename?: 'defaultdb__prisma_migrations_max_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
  checksum?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Scalars['String']['output']>;
  migration_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Defaultdb__Prisma_Migrations_Min_Fields = {
  __typename?: 'defaultdb__prisma_migrations_min_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
  checksum?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Scalars['String']['output']>;
  migration_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "defaultdb._prisma_migrations" */
export type Defaultdb__Prisma_Migrations_Mutation_Response = {
  __typename?: 'defaultdb__prisma_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Defaultdb__Prisma_Migrations>;
};

/** Ordering options when selecting data from "defaultdb._prisma_migrations". */
export type Defaultdb__Prisma_Migrations_Order_By = {
  applied_steps_count?: InputMaybe<Mysql8_Order_By>;
  checksum?: InputMaybe<Mysql8_Order_By>;
  finished_at?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  logs?: InputMaybe<Mysql8_Order_By>;
  migration_name?: InputMaybe<Mysql8_Order_By>;
  rolled_back_at?: InputMaybe<Mysql8_Order_By>;
  started_at?: InputMaybe<Mysql8_Order_By>;
};

/** primary key columns input for table: defaultdb._prisma_migrations */
export type Defaultdb__Prisma_Migrations_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "defaultdb._prisma_migrations" */
export enum Defaultdb__Prisma_Migrations_Select_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at'
}

/** input type for updating data in table "defaultdb._prisma_migrations" */
export type Defaultdb__Prisma_Migrations_Set_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['datetime']['input']>;
  started_at?: InputMaybe<Scalars['datetime']['input']>;
};

/** aggregate stddev_pop on columns */
export type Defaultdb__Prisma_Migrations_Stddev_Pop_Fields = {
  __typename?: 'defaultdb__prisma_migrations_stddev_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Defaultdb__Prisma_Migrations_Stddev_Samp_Fields = {
  __typename?: 'defaultdb__prisma_migrations_stddev_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Defaultdb__Prisma_Migrations_Sum_Fields = {
  __typename?: 'defaultdb__prisma_migrations_sum_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
};

export type Defaultdb__Prisma_Migrations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Defaultdb__Prisma_Migrations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Defaultdb__Prisma_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Defaultdb__Prisma_Migrations_Var_Pop_Fields = {
  __typename?: 'defaultdb__prisma_migrations_var_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Defaultdb__Prisma_Migrations_Var_Samp_Fields = {
  __typename?: 'defaultdb__prisma_migrations_var_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "defaultdb.BacktestIndicator" */
  delete_defaultdb_BacktestIndicator?: Maybe<Defaultdb_BacktestIndicator_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestIndicator" */
  delete_defaultdb_BacktestIndicator_by_pk?: Maybe<Defaultdb_BacktestIndicator>;
  /** delete data from the table: "defaultdb.BacktestOrder" */
  delete_defaultdb_BacktestOrder?: Maybe<Defaultdb_BacktestOrder_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestOrder" */
  delete_defaultdb_BacktestOrder_by_pk?: Maybe<Defaultdb_BacktestOrder>;
  /** delete data from the table: "defaultdb.BacktestPlan" */
  delete_defaultdb_BacktestPlan?: Maybe<Defaultdb_BacktestPlan_Mutation_Response>;
  /** delete data from the table: "defaultdb.BacktestPlanAccount" */
  delete_defaultdb_BacktestPlanAccount?: Maybe<Defaultdb_BacktestPlanAccount_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestPlanAccount" */
  delete_defaultdb_BacktestPlanAccount_by_pk?: Maybe<Defaultdb_BacktestPlanAccount>;
  /** delete single row from the table: "defaultdb.BacktestPlan" */
  delete_defaultdb_BacktestPlan_by_pk?: Maybe<Defaultdb_BacktestPlan>;
  /** delete data from the table: "defaultdb.BacktestReport" */
  delete_defaultdb_BacktestReport?: Maybe<Defaultdb_BacktestReport_Mutation_Response>;
  /** delete data from the table: "defaultdb.BacktestReportSummary" */
  delete_defaultdb_BacktestReportSummary?: Maybe<Defaultdb_BacktestReportSummary_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestReportSummary" */
  delete_defaultdb_BacktestReportSummary_by_pk?: Maybe<Defaultdb_BacktestReportSummary>;
  /** delete single row from the table: "defaultdb.BacktestReport" */
  delete_defaultdb_BacktestReport_by_pk?: Maybe<Defaultdb_BacktestReport>;
  /** delete data from the table: "defaultdb.BacktestStrategyState" */
  delete_defaultdb_BacktestStrategyState?: Maybe<Defaultdb_BacktestStrategyState_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestStrategyState" */
  delete_defaultdb_BacktestStrategyState_by_pk?: Maybe<Defaultdb_BacktestStrategyState>;
  /** delete data from the table: "defaultdb.BacktestTaxPaymentInfo" */
  delete_defaultdb_BacktestTaxPaymentInfo?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestTaxPaymentInfo" */
  delete_defaultdb_BacktestTaxPaymentInfo_by_pk?: Maybe<Defaultdb_BacktestTaxPaymentInfo>;
  /** delete data from the table: "defaultdb.BacktestTradingStrategy" */
  delete_defaultdb_BacktestTradingStrategy?: Maybe<Defaultdb_BacktestTradingStrategy_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestTradingStrategy" */
  delete_defaultdb_BacktestTradingStrategy_by_pk?: Maybe<Defaultdb_BacktestTradingStrategy>;
  /** delete data from the table: "defaultdb.BacktestWithdrawalStrategy" */
  delete_defaultdb_BacktestWithdrawalStrategy?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Mutation_Response>;
  /** delete single row from the table: "defaultdb.BacktestWithdrawalStrategy" */
  delete_defaultdb_BacktestWithdrawalStrategy_by_pk?: Maybe<Defaultdb_BacktestWithdrawalStrategy>;
  /** delete data from the table: "defaultdb.Candle" */
  delete_defaultdb_Candle?: Maybe<Defaultdb_Candle_Mutation_Response>;
  /** delete single row from the table: "defaultdb.Candle" */
  delete_defaultdb_Candle_by_pk?: Maybe<Defaultdb_Candle>;
  /** delete data from the table: "defaultdb.Exchange" */
  delete_defaultdb_Exchange?: Maybe<Defaultdb_Exchange_Mutation_Response>;
  /** delete single row from the table: "defaultdb.Exchange" */
  delete_defaultdb_Exchange_by_pk?: Maybe<Defaultdb_Exchange>;
  /** delete data from the table: "defaultdb.Indicator" */
  delete_defaultdb_Indicator?: Maybe<Defaultdb_Indicator_Mutation_Response>;
  /** delete single row from the table: "defaultdb.Indicator" */
  delete_defaultdb_Indicator_by_pk?: Maybe<Defaultdb_Indicator>;
  /** delete data from the table: "defaultdb.Order" */
  delete_defaultdb_Order?: Maybe<Defaultdb_Order_Mutation_Response>;
  /** delete single row from the table: "defaultdb.Order" */
  delete_defaultdb_Order_by_pk?: Maybe<Defaultdb_Order>;
  /** delete data from the table: "defaultdb.Plan" */
  delete_defaultdb_Plan?: Maybe<Defaultdb_Plan_Mutation_Response>;
  /** delete single row from the table: "defaultdb.Plan" */
  delete_defaultdb_Plan_by_pk?: Maybe<Defaultdb_Plan>;
  /** delete data from the table: "defaultdb.Report" */
  delete_defaultdb_Report?: Maybe<Defaultdb_Report_Mutation_Response>;
  /** delete single row from the table: "defaultdb.Report" */
  delete_defaultdb_Report_by_pk?: Maybe<Defaultdb_Report>;
  /** delete data from the table: "defaultdb.StrategyState" */
  delete_defaultdb_StrategyState?: Maybe<Defaultdb_StrategyState_Mutation_Response>;
  /** delete single row from the table: "defaultdb.StrategyState" */
  delete_defaultdb_StrategyState_by_pk?: Maybe<Defaultdb_StrategyState>;
  /** delete data from the table: "defaultdb.TaxRate" */
  delete_defaultdb_TaxRate?: Maybe<Defaultdb_TaxRate_Mutation_Response>;
  /** delete single row from the table: "defaultdb.TaxRate" */
  delete_defaultdb_TaxRate_by_pk?: Maybe<Defaultdb_TaxRate>;
  /** delete data from the table: "defaultdb.User" */
  delete_defaultdb_User?: Maybe<Defaultdb_User_Mutation_Response>;
  /** delete data from the table: "defaultdb.UserAccount" */
  delete_defaultdb_UserAccount?: Maybe<Defaultdb_UserAccount_Mutation_Response>;
  /** delete single row from the table: "defaultdb.UserAccount" */
  delete_defaultdb_UserAccount_by_pk?: Maybe<Defaultdb_UserAccount>;
  /** delete single row from the table: "defaultdb.User" */
  delete_defaultdb_User_by_pk?: Maybe<Defaultdb_User>;
  /** delete data from the table: "defaultdb._prisma_migrations" */
  delete_defaultdb__prisma_migrations?: Maybe<Defaultdb__Prisma_Migrations_Mutation_Response>;
  /** delete single row from the table: "defaultdb._prisma_migrations" */
  delete_defaultdb__prisma_migrations_by_pk?: Maybe<Defaultdb__Prisma_Migrations>;
  /** insert data into the table: "defaultdb.BacktestIndicator" */
  insert_defaultdb_BacktestIndicator?: Maybe<Defaultdb_BacktestIndicator_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestIndicator" */
  insert_defaultdb_BacktestIndicator_one?: Maybe<Defaultdb_BacktestIndicator>;
  /** insert data into the table: "defaultdb.BacktestOrder" */
  insert_defaultdb_BacktestOrder?: Maybe<Defaultdb_BacktestOrder_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestOrder" */
  insert_defaultdb_BacktestOrder_one?: Maybe<Defaultdb_BacktestOrder>;
  /** insert data into the table: "defaultdb.BacktestPlan" */
  insert_defaultdb_BacktestPlan?: Maybe<Defaultdb_BacktestPlan_Mutation_Response>;
  /** insert data into the table: "defaultdb.BacktestPlanAccount" */
  insert_defaultdb_BacktestPlanAccount?: Maybe<Defaultdb_BacktestPlanAccount_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestPlanAccount" */
  insert_defaultdb_BacktestPlanAccount_one?: Maybe<Defaultdb_BacktestPlanAccount>;
  /** insert a single row into the table: "defaultdb.BacktestPlan" */
  insert_defaultdb_BacktestPlan_one?: Maybe<Defaultdb_BacktestPlan>;
  /** insert data into the table: "defaultdb.BacktestReport" */
  insert_defaultdb_BacktestReport?: Maybe<Defaultdb_BacktestReport_Mutation_Response>;
  /** insert data into the table: "defaultdb.BacktestReportSummary" */
  insert_defaultdb_BacktestReportSummary?: Maybe<Defaultdb_BacktestReportSummary_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestReportSummary" */
  insert_defaultdb_BacktestReportSummary_one?: Maybe<Defaultdb_BacktestReportSummary>;
  /** insert a single row into the table: "defaultdb.BacktestReport" */
  insert_defaultdb_BacktestReport_one?: Maybe<Defaultdb_BacktestReport>;
  /** insert data into the table: "defaultdb.BacktestStrategyState" */
  insert_defaultdb_BacktestStrategyState?: Maybe<Defaultdb_BacktestStrategyState_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestStrategyState" */
  insert_defaultdb_BacktestStrategyState_one?: Maybe<Defaultdb_BacktestStrategyState>;
  /** insert data into the table: "defaultdb.BacktestTaxPaymentInfo" */
  insert_defaultdb_BacktestTaxPaymentInfo?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestTaxPaymentInfo" */
  insert_defaultdb_BacktestTaxPaymentInfo_one?: Maybe<Defaultdb_BacktestTaxPaymentInfo>;
  /** insert data into the table: "defaultdb.BacktestTradingStrategy" */
  insert_defaultdb_BacktestTradingStrategy?: Maybe<Defaultdb_BacktestTradingStrategy_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestTradingStrategy" */
  insert_defaultdb_BacktestTradingStrategy_one?: Maybe<Defaultdb_BacktestTradingStrategy>;
  /** insert data into the table: "defaultdb.BacktestWithdrawalStrategy" */
  insert_defaultdb_BacktestWithdrawalStrategy?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.BacktestWithdrawalStrategy" */
  insert_defaultdb_BacktestWithdrawalStrategy_one?: Maybe<Defaultdb_BacktestWithdrawalStrategy>;
  /** insert data into the table: "defaultdb.Candle" */
  insert_defaultdb_Candle?: Maybe<Defaultdb_Candle_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.Candle" */
  insert_defaultdb_Candle_one?: Maybe<Defaultdb_Candle>;
  /** insert data into the table: "defaultdb.Exchange" */
  insert_defaultdb_Exchange?: Maybe<Defaultdb_Exchange_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.Exchange" */
  insert_defaultdb_Exchange_one?: Maybe<Defaultdb_Exchange>;
  /** insert data into the table: "defaultdb.Indicator" */
  insert_defaultdb_Indicator?: Maybe<Defaultdb_Indicator_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.Indicator" */
  insert_defaultdb_Indicator_one?: Maybe<Defaultdb_Indicator>;
  /** insert data into the table: "defaultdb.Order" */
  insert_defaultdb_Order?: Maybe<Defaultdb_Order_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.Order" */
  insert_defaultdb_Order_one?: Maybe<Defaultdb_Order>;
  /** insert data into the table: "defaultdb.Plan" */
  insert_defaultdb_Plan?: Maybe<Defaultdb_Plan_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.Plan" */
  insert_defaultdb_Plan_one?: Maybe<Defaultdb_Plan>;
  /** insert data into the table: "defaultdb.Report" */
  insert_defaultdb_Report?: Maybe<Defaultdb_Report_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.Report" */
  insert_defaultdb_Report_one?: Maybe<Defaultdb_Report>;
  /** insert data into the table: "defaultdb.StrategyState" */
  insert_defaultdb_StrategyState?: Maybe<Defaultdb_StrategyState_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.StrategyState" */
  insert_defaultdb_StrategyState_one?: Maybe<Defaultdb_StrategyState>;
  /** insert data into the table: "defaultdb.TaxRate" */
  insert_defaultdb_TaxRate?: Maybe<Defaultdb_TaxRate_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.TaxRate" */
  insert_defaultdb_TaxRate_one?: Maybe<Defaultdb_TaxRate>;
  /** insert data into the table: "defaultdb.User" */
  insert_defaultdb_User?: Maybe<Defaultdb_User_Mutation_Response>;
  /** insert data into the table: "defaultdb.UserAccount" */
  insert_defaultdb_UserAccount?: Maybe<Defaultdb_UserAccount_Mutation_Response>;
  /** insert a single row into the table: "defaultdb.UserAccount" */
  insert_defaultdb_UserAccount_one?: Maybe<Defaultdb_UserAccount>;
  /** insert a single row into the table: "defaultdb.User" */
  insert_defaultdb_User_one?: Maybe<Defaultdb_User>;
  /** insert data into the table: "defaultdb._prisma_migrations" */
  insert_defaultdb__prisma_migrations?: Maybe<Defaultdb__Prisma_Migrations_Mutation_Response>;
  /** insert a single row into the table: "defaultdb._prisma_migrations" */
  insert_defaultdb__prisma_migrations_one?: Maybe<Defaultdb__Prisma_Migrations>;
  /** update data of the table: "defaultdb.BacktestIndicator" */
  update_defaultdb_BacktestIndicator?: Maybe<Defaultdb_BacktestIndicator_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestIndicator" */
  update_defaultdb_BacktestIndicator_by_pk?: Maybe<Defaultdb_BacktestIndicator>;
  /** update multiples rows of table: "defaultdb.BacktestIndicator" */
  update_defaultdb_BacktestIndicator_many?: Maybe<Array<Maybe<Defaultdb_BacktestIndicator_Mutation_Response>>>;
  /** update data of the table: "defaultdb.BacktestOrder" */
  update_defaultdb_BacktestOrder?: Maybe<Defaultdb_BacktestOrder_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestOrder" */
  update_defaultdb_BacktestOrder_by_pk?: Maybe<Defaultdb_BacktestOrder>;
  /** update multiples rows of table: "defaultdb.BacktestOrder" */
  update_defaultdb_BacktestOrder_many?: Maybe<Array<Maybe<Defaultdb_BacktestOrder_Mutation_Response>>>;
  /** update data of the table: "defaultdb.BacktestPlan" */
  update_defaultdb_BacktestPlan?: Maybe<Defaultdb_BacktestPlan_Mutation_Response>;
  /** update data of the table: "defaultdb.BacktestPlanAccount" */
  update_defaultdb_BacktestPlanAccount?: Maybe<Defaultdb_BacktestPlanAccount_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestPlanAccount" */
  update_defaultdb_BacktestPlanAccount_by_pk?: Maybe<Defaultdb_BacktestPlanAccount>;
  /** update multiples rows of table: "defaultdb.BacktestPlanAccount" */
  update_defaultdb_BacktestPlanAccount_many?: Maybe<Array<Maybe<Defaultdb_BacktestPlanAccount_Mutation_Response>>>;
  /** update single row of the table: "defaultdb.BacktestPlan" */
  update_defaultdb_BacktestPlan_by_pk?: Maybe<Defaultdb_BacktestPlan>;
  /** update multiples rows of table: "defaultdb.BacktestPlan" */
  update_defaultdb_BacktestPlan_many?: Maybe<Array<Maybe<Defaultdb_BacktestPlan_Mutation_Response>>>;
  /** update data of the table: "defaultdb.BacktestReport" */
  update_defaultdb_BacktestReport?: Maybe<Defaultdb_BacktestReport_Mutation_Response>;
  /** update data of the table: "defaultdb.BacktestReportSummary" */
  update_defaultdb_BacktestReportSummary?: Maybe<Defaultdb_BacktestReportSummary_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestReportSummary" */
  update_defaultdb_BacktestReportSummary_by_pk?: Maybe<Defaultdb_BacktestReportSummary>;
  /** update multiples rows of table: "defaultdb.BacktestReportSummary" */
  update_defaultdb_BacktestReportSummary_many?: Maybe<Array<Maybe<Defaultdb_BacktestReportSummary_Mutation_Response>>>;
  /** update single row of the table: "defaultdb.BacktestReport" */
  update_defaultdb_BacktestReport_by_pk?: Maybe<Defaultdb_BacktestReport>;
  /** update multiples rows of table: "defaultdb.BacktestReport" */
  update_defaultdb_BacktestReport_many?: Maybe<Array<Maybe<Defaultdb_BacktestReport_Mutation_Response>>>;
  /** update data of the table: "defaultdb.BacktestStrategyState" */
  update_defaultdb_BacktestStrategyState?: Maybe<Defaultdb_BacktestStrategyState_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestStrategyState" */
  update_defaultdb_BacktestStrategyState_by_pk?: Maybe<Defaultdb_BacktestStrategyState>;
  /** update multiples rows of table: "defaultdb.BacktestStrategyState" */
  update_defaultdb_BacktestStrategyState_many?: Maybe<Array<Maybe<Defaultdb_BacktestStrategyState_Mutation_Response>>>;
  /** update data of the table: "defaultdb.BacktestTaxPaymentInfo" */
  update_defaultdb_BacktestTaxPaymentInfo?: Maybe<Defaultdb_BacktestTaxPaymentInfo_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestTaxPaymentInfo" */
  update_defaultdb_BacktestTaxPaymentInfo_by_pk?: Maybe<Defaultdb_BacktestTaxPaymentInfo>;
  /** update multiples rows of table: "defaultdb.BacktestTaxPaymentInfo" */
  update_defaultdb_BacktestTaxPaymentInfo_many?: Maybe<Array<Maybe<Defaultdb_BacktestTaxPaymentInfo_Mutation_Response>>>;
  /** update data of the table: "defaultdb.BacktestTradingStrategy" */
  update_defaultdb_BacktestTradingStrategy?: Maybe<Defaultdb_BacktestTradingStrategy_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestTradingStrategy" */
  update_defaultdb_BacktestTradingStrategy_by_pk?: Maybe<Defaultdb_BacktestTradingStrategy>;
  /** update multiples rows of table: "defaultdb.BacktestTradingStrategy" */
  update_defaultdb_BacktestTradingStrategy_many?: Maybe<Array<Maybe<Defaultdb_BacktestTradingStrategy_Mutation_Response>>>;
  /** update data of the table: "defaultdb.BacktestWithdrawalStrategy" */
  update_defaultdb_BacktestWithdrawalStrategy?: Maybe<Defaultdb_BacktestWithdrawalStrategy_Mutation_Response>;
  /** update single row of the table: "defaultdb.BacktestWithdrawalStrategy" */
  update_defaultdb_BacktestWithdrawalStrategy_by_pk?: Maybe<Defaultdb_BacktestWithdrawalStrategy>;
  /** update multiples rows of table: "defaultdb.BacktestWithdrawalStrategy" */
  update_defaultdb_BacktestWithdrawalStrategy_many?: Maybe<Array<Maybe<Defaultdb_BacktestWithdrawalStrategy_Mutation_Response>>>;
  /** update data of the table: "defaultdb.Candle" */
  update_defaultdb_Candle?: Maybe<Defaultdb_Candle_Mutation_Response>;
  /** update single row of the table: "defaultdb.Candle" */
  update_defaultdb_Candle_by_pk?: Maybe<Defaultdb_Candle>;
  /** update multiples rows of table: "defaultdb.Candle" */
  update_defaultdb_Candle_many?: Maybe<Array<Maybe<Defaultdb_Candle_Mutation_Response>>>;
  /** update data of the table: "defaultdb.Exchange" */
  update_defaultdb_Exchange?: Maybe<Defaultdb_Exchange_Mutation_Response>;
  /** update single row of the table: "defaultdb.Exchange" */
  update_defaultdb_Exchange_by_pk?: Maybe<Defaultdb_Exchange>;
  /** update multiples rows of table: "defaultdb.Exchange" */
  update_defaultdb_Exchange_many?: Maybe<Array<Maybe<Defaultdb_Exchange_Mutation_Response>>>;
  /** update data of the table: "defaultdb.Indicator" */
  update_defaultdb_Indicator?: Maybe<Defaultdb_Indicator_Mutation_Response>;
  /** update single row of the table: "defaultdb.Indicator" */
  update_defaultdb_Indicator_by_pk?: Maybe<Defaultdb_Indicator>;
  /** update multiples rows of table: "defaultdb.Indicator" */
  update_defaultdb_Indicator_many?: Maybe<Array<Maybe<Defaultdb_Indicator_Mutation_Response>>>;
  /** update data of the table: "defaultdb.Order" */
  update_defaultdb_Order?: Maybe<Defaultdb_Order_Mutation_Response>;
  /** update single row of the table: "defaultdb.Order" */
  update_defaultdb_Order_by_pk?: Maybe<Defaultdb_Order>;
  /** update multiples rows of table: "defaultdb.Order" */
  update_defaultdb_Order_many?: Maybe<Array<Maybe<Defaultdb_Order_Mutation_Response>>>;
  /** update data of the table: "defaultdb.Plan" */
  update_defaultdb_Plan?: Maybe<Defaultdb_Plan_Mutation_Response>;
  /** update single row of the table: "defaultdb.Plan" */
  update_defaultdb_Plan_by_pk?: Maybe<Defaultdb_Plan>;
  /** update multiples rows of table: "defaultdb.Plan" */
  update_defaultdb_Plan_many?: Maybe<Array<Maybe<Defaultdb_Plan_Mutation_Response>>>;
  /** update data of the table: "defaultdb.Report" */
  update_defaultdb_Report?: Maybe<Defaultdb_Report_Mutation_Response>;
  /** update single row of the table: "defaultdb.Report" */
  update_defaultdb_Report_by_pk?: Maybe<Defaultdb_Report>;
  /** update multiples rows of table: "defaultdb.Report" */
  update_defaultdb_Report_many?: Maybe<Array<Maybe<Defaultdb_Report_Mutation_Response>>>;
  /** update data of the table: "defaultdb.StrategyState" */
  update_defaultdb_StrategyState?: Maybe<Defaultdb_StrategyState_Mutation_Response>;
  /** update single row of the table: "defaultdb.StrategyState" */
  update_defaultdb_StrategyState_by_pk?: Maybe<Defaultdb_StrategyState>;
  /** update multiples rows of table: "defaultdb.StrategyState" */
  update_defaultdb_StrategyState_many?: Maybe<Array<Maybe<Defaultdb_StrategyState_Mutation_Response>>>;
  /** update data of the table: "defaultdb.TaxRate" */
  update_defaultdb_TaxRate?: Maybe<Defaultdb_TaxRate_Mutation_Response>;
  /** update single row of the table: "defaultdb.TaxRate" */
  update_defaultdb_TaxRate_by_pk?: Maybe<Defaultdb_TaxRate>;
  /** update multiples rows of table: "defaultdb.TaxRate" */
  update_defaultdb_TaxRate_many?: Maybe<Array<Maybe<Defaultdb_TaxRate_Mutation_Response>>>;
  /** update data of the table: "defaultdb.User" */
  update_defaultdb_User?: Maybe<Defaultdb_User_Mutation_Response>;
  /** update data of the table: "defaultdb.UserAccount" */
  update_defaultdb_UserAccount?: Maybe<Defaultdb_UserAccount_Mutation_Response>;
  /** update single row of the table: "defaultdb.UserAccount" */
  update_defaultdb_UserAccount_by_pk?: Maybe<Defaultdb_UserAccount>;
  /** update multiples rows of table: "defaultdb.UserAccount" */
  update_defaultdb_UserAccount_many?: Maybe<Array<Maybe<Defaultdb_UserAccount_Mutation_Response>>>;
  /** update single row of the table: "defaultdb.User" */
  update_defaultdb_User_by_pk?: Maybe<Defaultdb_User>;
  /** update multiples rows of table: "defaultdb.User" */
  update_defaultdb_User_many?: Maybe<Array<Maybe<Defaultdb_User_Mutation_Response>>>;
  /** update data of the table: "defaultdb._prisma_migrations" */
  update_defaultdb__prisma_migrations?: Maybe<Defaultdb__Prisma_Migrations_Mutation_Response>;
  /** update single row of the table: "defaultdb._prisma_migrations" */
  update_defaultdb__prisma_migrations_by_pk?: Maybe<Defaultdb__Prisma_Migrations>;
  /** update multiples rows of table: "defaultdb._prisma_migrations" */
  update_defaultdb__prisma_migrations_many?: Maybe<Array<Maybe<Defaultdb__Prisma_Migrations_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestIndicatorArgs = {
  where: Defaultdb_BacktestIndicator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestIndicator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestOrderArgs = {
  where: Defaultdb_BacktestOrder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestOrder_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestPlanArgs = {
  where: Defaultdb_BacktestPlan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestPlanAccountArgs = {
  where: Defaultdb_BacktestPlanAccount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestPlanAccount_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestPlan_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestReportArgs = {
  where: Defaultdb_BacktestReport_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestReportSummaryArgs = {
  where: Defaultdb_BacktestReportSummary_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestReportSummary_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestReport_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestStrategyStateArgs = {
  where: Defaultdb_BacktestStrategyState_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestStrategyState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestTaxPaymentInfoArgs = {
  where: Defaultdb_BacktestTaxPaymentInfo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestTaxPaymentInfo_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestTradingStrategyArgs = {
  where: Defaultdb_BacktestTradingStrategy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestTradingStrategy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestWithdrawalStrategyArgs = {
  where: Defaultdb_BacktestWithdrawalStrategy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_BacktestWithdrawalStrategy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_CandleArgs = {
  where: Defaultdb_Candle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_Candle_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_ExchangeArgs = {
  where: Defaultdb_Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_Exchange_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_IndicatorArgs = {
  where: Defaultdb_Indicator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_Indicator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_OrderArgs = {
  where: Defaultdb_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_PlanArgs = {
  where: Defaultdb_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_Plan_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_ReportArgs = {
  where: Defaultdb_Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_Report_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_StrategyStateArgs = {
  where: Defaultdb_StrategyState_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_StrategyState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_TaxRateArgs = {
  where: Defaultdb_TaxRate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_TaxRate_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_UserArgs = {
  where: Defaultdb_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_UserAccountArgs = {
  where: Defaultdb_UserAccount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_UserAccount_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb__Prisma_MigrationsArgs = {
  where: Defaultdb__Prisma_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Defaultdb__Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestIndicatorArgs = {
  objects: Array<Defaultdb_BacktestIndicator_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestIndicator_OneArgs = {
  object: Defaultdb_BacktestIndicator_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestOrderArgs = {
  objects: Array<Defaultdb_BacktestOrder_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestOrder_OneArgs = {
  object: Defaultdb_BacktestOrder_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestPlanArgs = {
  objects: Array<Defaultdb_BacktestPlan_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestPlanAccountArgs = {
  objects: Array<Defaultdb_BacktestPlanAccount_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestPlanAccount_OneArgs = {
  object: Defaultdb_BacktestPlanAccount_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestPlan_OneArgs = {
  object: Defaultdb_BacktestPlan_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestReportArgs = {
  objects: Array<Defaultdb_BacktestReport_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestReportSummaryArgs = {
  objects: Array<Defaultdb_BacktestReportSummary_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestReportSummary_OneArgs = {
  object: Defaultdb_BacktestReportSummary_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestReport_OneArgs = {
  object: Defaultdb_BacktestReport_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestStrategyStateArgs = {
  objects: Array<Defaultdb_BacktestStrategyState_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestStrategyState_OneArgs = {
  object: Defaultdb_BacktestStrategyState_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestTaxPaymentInfoArgs = {
  objects: Array<Defaultdb_BacktestTaxPaymentInfo_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestTaxPaymentInfo_OneArgs = {
  object: Defaultdb_BacktestTaxPaymentInfo_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestTradingStrategyArgs = {
  objects: Array<Defaultdb_BacktestTradingStrategy_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestTradingStrategy_OneArgs = {
  object: Defaultdb_BacktestTradingStrategy_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestWithdrawalStrategyArgs = {
  objects: Array<Defaultdb_BacktestWithdrawalStrategy_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_BacktestWithdrawalStrategy_OneArgs = {
  object: Defaultdb_BacktestWithdrawalStrategy_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_CandleArgs = {
  objects: Array<Defaultdb_Candle_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_Candle_OneArgs = {
  object: Defaultdb_Candle_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_ExchangeArgs = {
  objects: Array<Defaultdb_Exchange_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_Exchange_OneArgs = {
  object: Defaultdb_Exchange_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_IndicatorArgs = {
  objects: Array<Defaultdb_Indicator_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_Indicator_OneArgs = {
  object: Defaultdb_Indicator_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_OrderArgs = {
  objects: Array<Defaultdb_Order_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_Order_OneArgs = {
  object: Defaultdb_Order_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_PlanArgs = {
  objects: Array<Defaultdb_Plan_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_Plan_OneArgs = {
  object: Defaultdb_Plan_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_ReportArgs = {
  objects: Array<Defaultdb_Report_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_Report_OneArgs = {
  object: Defaultdb_Report_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_StrategyStateArgs = {
  objects: Array<Defaultdb_StrategyState_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_StrategyState_OneArgs = {
  object: Defaultdb_StrategyState_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_TaxRateArgs = {
  objects: Array<Defaultdb_TaxRate_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_TaxRate_OneArgs = {
  object: Defaultdb_TaxRate_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_UserArgs = {
  objects: Array<Defaultdb_User_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_UserAccountArgs = {
  objects: Array<Defaultdb_UserAccount_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_UserAccount_OneArgs = {
  object: Defaultdb_UserAccount_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb_User_OneArgs = {
  object: Defaultdb_User_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb__Prisma_MigrationsArgs = {
  objects: Array<Defaultdb__Prisma_Migrations_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Defaultdb__Prisma_Migrations_OneArgs = {
  object: Defaultdb__Prisma_Migrations_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestIndicatorArgs = {
  _set?: InputMaybe<Defaultdb_BacktestIndicator_Set_Input>;
  where: Defaultdb_BacktestIndicator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestIndicator_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestIndicator_Set_Input>;
  pk_columns: Defaultdb_BacktestIndicator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestIndicator_ManyArgs = {
  updates: Array<Defaultdb_BacktestIndicator_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestOrderArgs = {
  _set?: InputMaybe<Defaultdb_BacktestOrder_Set_Input>;
  where: Defaultdb_BacktestOrder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestOrder_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestOrder_Set_Input>;
  pk_columns: Defaultdb_BacktestOrder_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestOrder_ManyArgs = {
  updates: Array<Defaultdb_BacktestOrder_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestPlanArgs = {
  _set?: InputMaybe<Defaultdb_BacktestPlan_Set_Input>;
  where: Defaultdb_BacktestPlan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestPlanAccountArgs = {
  _set?: InputMaybe<Defaultdb_BacktestPlanAccount_Set_Input>;
  where: Defaultdb_BacktestPlanAccount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestPlanAccount_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestPlanAccount_Set_Input>;
  pk_columns: Defaultdb_BacktestPlanAccount_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestPlanAccount_ManyArgs = {
  updates: Array<Defaultdb_BacktestPlanAccount_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestPlan_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestPlan_Set_Input>;
  pk_columns: Defaultdb_BacktestPlan_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestPlan_ManyArgs = {
  updates: Array<Defaultdb_BacktestPlan_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestReportArgs = {
  _set?: InputMaybe<Defaultdb_BacktestReport_Set_Input>;
  where: Defaultdb_BacktestReport_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestReportSummaryArgs = {
  _set?: InputMaybe<Defaultdb_BacktestReportSummary_Set_Input>;
  where: Defaultdb_BacktestReportSummary_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestReportSummary_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestReportSummary_Set_Input>;
  pk_columns: Defaultdb_BacktestReportSummary_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestReportSummary_ManyArgs = {
  updates: Array<Defaultdb_BacktestReportSummary_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestReport_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestReport_Set_Input>;
  pk_columns: Defaultdb_BacktestReport_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestReport_ManyArgs = {
  updates: Array<Defaultdb_BacktestReport_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestStrategyStateArgs = {
  _set?: InputMaybe<Defaultdb_BacktestStrategyState_Set_Input>;
  where: Defaultdb_BacktestStrategyState_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestStrategyState_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestStrategyState_Set_Input>;
  pk_columns: Defaultdb_BacktestStrategyState_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestStrategyState_ManyArgs = {
  updates: Array<Defaultdb_BacktestStrategyState_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestTaxPaymentInfoArgs = {
  _set?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Set_Input>;
  where: Defaultdb_BacktestTaxPaymentInfo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestTaxPaymentInfo_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Set_Input>;
  pk_columns: Defaultdb_BacktestTaxPaymentInfo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestTaxPaymentInfo_ManyArgs = {
  updates: Array<Defaultdb_BacktestTaxPaymentInfo_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestTradingStrategyArgs = {
  _set?: InputMaybe<Defaultdb_BacktestTradingStrategy_Set_Input>;
  where: Defaultdb_BacktestTradingStrategy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestTradingStrategy_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestTradingStrategy_Set_Input>;
  pk_columns: Defaultdb_BacktestTradingStrategy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestTradingStrategy_ManyArgs = {
  updates: Array<Defaultdb_BacktestTradingStrategy_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestWithdrawalStrategyArgs = {
  _set?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Set_Input>;
  where: Defaultdb_BacktestWithdrawalStrategy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestWithdrawalStrategy_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Set_Input>;
  pk_columns: Defaultdb_BacktestWithdrawalStrategy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_BacktestWithdrawalStrategy_ManyArgs = {
  updates: Array<Defaultdb_BacktestWithdrawalStrategy_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_CandleArgs = {
  _set?: InputMaybe<Defaultdb_Candle_Set_Input>;
  where: Defaultdb_Candle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Candle_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_Candle_Set_Input>;
  pk_columns: Defaultdb_Candle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Candle_ManyArgs = {
  updates: Array<Defaultdb_Candle_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_ExchangeArgs = {
  _set?: InputMaybe<Defaultdb_Exchange_Set_Input>;
  where: Defaultdb_Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Exchange_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_Exchange_Set_Input>;
  pk_columns: Defaultdb_Exchange_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Exchange_ManyArgs = {
  updates: Array<Defaultdb_Exchange_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_IndicatorArgs = {
  _set?: InputMaybe<Defaultdb_Indicator_Set_Input>;
  where: Defaultdb_Indicator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Indicator_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_Indicator_Set_Input>;
  pk_columns: Defaultdb_Indicator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Indicator_ManyArgs = {
  updates: Array<Defaultdb_Indicator_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_OrderArgs = {
  _set?: InputMaybe<Defaultdb_Order_Set_Input>;
  where: Defaultdb_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Order_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_Order_Set_Input>;
  pk_columns: Defaultdb_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Order_ManyArgs = {
  updates: Array<Defaultdb_Order_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_PlanArgs = {
  _set?: InputMaybe<Defaultdb_Plan_Set_Input>;
  where: Defaultdb_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Plan_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_Plan_Set_Input>;
  pk_columns: Defaultdb_Plan_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Plan_ManyArgs = {
  updates: Array<Defaultdb_Plan_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_ReportArgs = {
  _set?: InputMaybe<Defaultdb_Report_Set_Input>;
  where: Defaultdb_Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Report_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_Report_Set_Input>;
  pk_columns: Defaultdb_Report_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_Report_ManyArgs = {
  updates: Array<Defaultdb_Report_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_StrategyStateArgs = {
  _set?: InputMaybe<Defaultdb_StrategyState_Set_Input>;
  where: Defaultdb_StrategyState_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_StrategyState_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_StrategyState_Set_Input>;
  pk_columns: Defaultdb_StrategyState_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_StrategyState_ManyArgs = {
  updates: Array<Defaultdb_StrategyState_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_TaxRateArgs = {
  _set?: InputMaybe<Defaultdb_TaxRate_Set_Input>;
  where: Defaultdb_TaxRate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_TaxRate_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_TaxRate_Set_Input>;
  pk_columns: Defaultdb_TaxRate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_TaxRate_ManyArgs = {
  updates: Array<Defaultdb_TaxRate_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_UserArgs = {
  _set?: InputMaybe<Defaultdb_User_Set_Input>;
  where: Defaultdb_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_UserAccountArgs = {
  _set?: InputMaybe<Defaultdb_UserAccount_Set_Input>;
  where: Defaultdb_UserAccount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_UserAccount_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_UserAccount_Set_Input>;
  pk_columns: Defaultdb_UserAccount_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_UserAccount_ManyArgs = {
  updates: Array<Defaultdb_UserAccount_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_User_By_PkArgs = {
  _set?: InputMaybe<Defaultdb_User_Set_Input>;
  pk_columns: Defaultdb_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb_User_ManyArgs = {
  updates: Array<Defaultdb_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb__Prisma_MigrationsArgs = {
  _set?: InputMaybe<Defaultdb__Prisma_Migrations_Set_Input>;
  where: Defaultdb__Prisma_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb__Prisma_Migrations_By_PkArgs = {
  _set?: InputMaybe<Defaultdb__Prisma_Migrations_Set_Input>;
  pk_columns: Defaultdb__Prisma_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Defaultdb__Prisma_Migrations_ManyArgs = {
  updates: Array<Defaultdb__Prisma_Migrations_Updates>;
};

/** column ordering options */
export enum Mysql8_Order_By {
  /** in ascending order */
  Asc = 'asc',
  /** in descending order */
  Desc = 'desc'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "defaultdb.BacktestIndicator" */
  defaultdb_BacktestIndicator: Array<Defaultdb_BacktestIndicator>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestIndicator" */
  defaultdb_BacktestIndicator_aggregate: Defaultdb_BacktestIndicator_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestIndicator" using primary key columns */
  defaultdb_BacktestIndicator_by_pk?: Maybe<Defaultdb_BacktestIndicator>;
  /** fetch data from the table: "defaultdb.BacktestOrder" */
  defaultdb_BacktestOrder: Array<Defaultdb_BacktestOrder>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestOrder" */
  defaultdb_BacktestOrder_aggregate: Defaultdb_BacktestOrder_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestOrder" using primary key columns */
  defaultdb_BacktestOrder_by_pk?: Maybe<Defaultdb_BacktestOrder>;
  /** fetch data from the table: "defaultdb.BacktestPlan" */
  defaultdb_BacktestPlan: Array<Defaultdb_BacktestPlan>;
  /** fetch data from the table: "defaultdb.BacktestPlanAccount" */
  defaultdb_BacktestPlanAccount: Array<Defaultdb_BacktestPlanAccount>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestPlanAccount" */
  defaultdb_BacktestPlanAccount_aggregate: Defaultdb_BacktestPlanAccount_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestPlanAccount" using primary key columns */
  defaultdb_BacktestPlanAccount_by_pk?: Maybe<Defaultdb_BacktestPlanAccount>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestPlan" */
  defaultdb_BacktestPlan_aggregate: Defaultdb_BacktestPlan_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestPlan" using primary key columns */
  defaultdb_BacktestPlan_by_pk?: Maybe<Defaultdb_BacktestPlan>;
  /** fetch data from the table: "defaultdb.BacktestReport" */
  defaultdb_BacktestReport: Array<Defaultdb_BacktestReport>;
  /** fetch data from the table: "defaultdb.BacktestReportSummary" */
  defaultdb_BacktestReportSummary: Array<Defaultdb_BacktestReportSummary>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestReportSummary" */
  defaultdb_BacktestReportSummary_aggregate: Defaultdb_BacktestReportSummary_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestReportSummary" using primary key columns */
  defaultdb_BacktestReportSummary_by_pk?: Maybe<Defaultdb_BacktestReportSummary>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestReport" */
  defaultdb_BacktestReport_aggregate: Defaultdb_BacktestReport_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestReport" using primary key columns */
  defaultdb_BacktestReport_by_pk?: Maybe<Defaultdb_BacktestReport>;
  /** fetch data from the table: "defaultdb.BacktestStrategyState" */
  defaultdb_BacktestStrategyState: Array<Defaultdb_BacktestStrategyState>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestStrategyState" */
  defaultdb_BacktestStrategyState_aggregate: Defaultdb_BacktestStrategyState_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestStrategyState" using primary key columns */
  defaultdb_BacktestStrategyState_by_pk?: Maybe<Defaultdb_BacktestStrategyState>;
  /** fetch data from the table: "defaultdb.BacktestTaxPaymentInfo" */
  defaultdb_BacktestTaxPaymentInfo: Array<Defaultdb_BacktestTaxPaymentInfo>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestTaxPaymentInfo" */
  defaultdb_BacktestTaxPaymentInfo_aggregate: Defaultdb_BacktestTaxPaymentInfo_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestTaxPaymentInfo" using primary key columns */
  defaultdb_BacktestTaxPaymentInfo_by_pk?: Maybe<Defaultdb_BacktestTaxPaymentInfo>;
  /** fetch data from the table: "defaultdb.BacktestTradingStrategy" */
  defaultdb_BacktestTradingStrategy: Array<Defaultdb_BacktestTradingStrategy>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestTradingStrategy" */
  defaultdb_BacktestTradingStrategy_aggregate: Defaultdb_BacktestTradingStrategy_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestTradingStrategy" using primary key columns */
  defaultdb_BacktestTradingStrategy_by_pk?: Maybe<Defaultdb_BacktestTradingStrategy>;
  /** fetch data from the table: "defaultdb.BacktestWithdrawalStrategy" */
  defaultdb_BacktestWithdrawalStrategy: Array<Defaultdb_BacktestWithdrawalStrategy>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestWithdrawalStrategy" */
  defaultdb_BacktestWithdrawalStrategy_aggregate: Defaultdb_BacktestWithdrawalStrategy_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestWithdrawalStrategy" using primary key columns */
  defaultdb_BacktestWithdrawalStrategy_by_pk?: Maybe<Defaultdb_BacktestWithdrawalStrategy>;
  /** fetch data from the table: "defaultdb.Candle" */
  defaultdb_Candle: Array<Defaultdb_Candle>;
  /** fetch aggregated fields from the table: "defaultdb.Candle" */
  defaultdb_Candle_aggregate: Defaultdb_Candle_Aggregate;
  /** fetch data from the table: "defaultdb.Candle" using primary key columns */
  defaultdb_Candle_by_pk?: Maybe<Defaultdb_Candle>;
  /** fetch data from the table: "defaultdb.Exchange" */
  defaultdb_Exchange: Array<Defaultdb_Exchange>;
  /** fetch aggregated fields from the table: "defaultdb.Exchange" */
  defaultdb_Exchange_aggregate: Defaultdb_Exchange_Aggregate;
  /** fetch data from the table: "defaultdb.Exchange" using primary key columns */
  defaultdb_Exchange_by_pk?: Maybe<Defaultdb_Exchange>;
  /** fetch data from the table: "defaultdb.Indicator" */
  defaultdb_Indicator: Array<Defaultdb_Indicator>;
  /** fetch aggregated fields from the table: "defaultdb.Indicator" */
  defaultdb_Indicator_aggregate: Defaultdb_Indicator_Aggregate;
  /** fetch data from the table: "defaultdb.Indicator" using primary key columns */
  defaultdb_Indicator_by_pk?: Maybe<Defaultdb_Indicator>;
  /** fetch data from the table: "defaultdb.Order" */
  defaultdb_Order: Array<Defaultdb_Order>;
  /** fetch aggregated fields from the table: "defaultdb.Order" */
  defaultdb_Order_aggregate: Defaultdb_Order_Aggregate;
  /** fetch data from the table: "defaultdb.Order" using primary key columns */
  defaultdb_Order_by_pk?: Maybe<Defaultdb_Order>;
  /** fetch data from the table: "defaultdb.Plan" */
  defaultdb_Plan: Array<Defaultdb_Plan>;
  /** fetch aggregated fields from the table: "defaultdb.Plan" */
  defaultdb_Plan_aggregate: Defaultdb_Plan_Aggregate;
  /** fetch data from the table: "defaultdb.Plan" using primary key columns */
  defaultdb_Plan_by_pk?: Maybe<Defaultdb_Plan>;
  /** fetch data from the table: "defaultdb.Report" */
  defaultdb_Report: Array<Defaultdb_Report>;
  /** fetch aggregated fields from the table: "defaultdb.Report" */
  defaultdb_Report_aggregate: Defaultdb_Report_Aggregate;
  /** fetch data from the table: "defaultdb.Report" using primary key columns */
  defaultdb_Report_by_pk?: Maybe<Defaultdb_Report>;
  /** fetch data from the table: "defaultdb.StrategyState" */
  defaultdb_StrategyState: Array<Defaultdb_StrategyState>;
  /** fetch aggregated fields from the table: "defaultdb.StrategyState" */
  defaultdb_StrategyState_aggregate: Defaultdb_StrategyState_Aggregate;
  /** fetch data from the table: "defaultdb.StrategyState" using primary key columns */
  defaultdb_StrategyState_by_pk?: Maybe<Defaultdb_StrategyState>;
  /** fetch data from the table: "defaultdb.TaxRate" */
  defaultdb_TaxRate: Array<Defaultdb_TaxRate>;
  /** fetch aggregated fields from the table: "defaultdb.TaxRate" */
  defaultdb_TaxRate_aggregate: Defaultdb_TaxRate_Aggregate;
  /** fetch data from the table: "defaultdb.TaxRate" using primary key columns */
  defaultdb_TaxRate_by_pk?: Maybe<Defaultdb_TaxRate>;
  /** fetch data from the table: "defaultdb.User" */
  defaultdb_User: Array<Defaultdb_User>;
  /** fetch data from the table: "defaultdb.UserAccount" */
  defaultdb_UserAccount: Array<Defaultdb_UserAccount>;
  /** fetch aggregated fields from the table: "defaultdb.UserAccount" */
  defaultdb_UserAccount_aggregate: Defaultdb_UserAccount_Aggregate;
  /** fetch data from the table: "defaultdb.UserAccount" using primary key columns */
  defaultdb_UserAccount_by_pk?: Maybe<Defaultdb_UserAccount>;
  /** fetch aggregated fields from the table: "defaultdb.User" */
  defaultdb_User_aggregate: Defaultdb_User_Aggregate;
  /** fetch data from the table: "defaultdb.User" using primary key columns */
  defaultdb_User_by_pk?: Maybe<Defaultdb_User>;
  /** fetch data from the table: "defaultdb._prisma_migrations" */
  defaultdb__prisma_migrations: Array<Defaultdb__Prisma_Migrations>;
  /** fetch aggregated fields from the table: "defaultdb._prisma_migrations" */
  defaultdb__prisma_migrations_aggregate: Defaultdb__Prisma_Migrations_Aggregate;
  /** fetch data from the table: "defaultdb._prisma_migrations" using primary key columns */
  defaultdb__prisma_migrations_by_pk?: Maybe<Defaultdb__Prisma_Migrations>;
};


export type Query_RootDefaultdb_BacktestIndicatorArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestIndicator_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestIndicator_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestIndicator_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestIndicator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestOrderArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestOrder_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestOrder_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestOrder_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestOrder_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestPlanArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestPlanAccountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlanAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlanAccount_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestPlanAccount_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlanAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlanAccount_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestPlanAccount_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestPlan_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestPlan_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestReportArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReport_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestReportSummaryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestReportSummary_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestReportSummary_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestReport_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReport_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestReport_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestStrategyStateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestStrategyState_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestStrategyState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestTaxPaymentInfoArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTaxPaymentInfo_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestTaxPaymentInfo_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTaxPaymentInfo_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestTaxPaymentInfo_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestTradingStrategyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTradingStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestTradingStrategy_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTradingStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestTradingStrategy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_BacktestWithdrawalStrategyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestWithdrawalStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestWithdrawalStrategy_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestWithdrawalStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>;
};


export type Query_RootDefaultdb_BacktestWithdrawalStrategy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_CandleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Candle_Order_By>>;
  where?: InputMaybe<Defaultdb_Candle_Bool_Exp>;
};


export type Query_RootDefaultdb_Candle_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Candle_Order_By>>;
  where?: InputMaybe<Defaultdb_Candle_Bool_Exp>;
};


export type Query_RootDefaultdb_Candle_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_ExchangeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Exchange_Order_By>>;
  where?: InputMaybe<Defaultdb_Exchange_Bool_Exp>;
};


export type Query_RootDefaultdb_Exchange_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Exchange_Order_By>>;
  where?: InputMaybe<Defaultdb_Exchange_Bool_Exp>;
};


export type Query_RootDefaultdb_Exchange_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_IndicatorArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Indicator_Order_By>>;
  where?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
};


export type Query_RootDefaultdb_Indicator_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Indicator_Order_By>>;
  where?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
};


export type Query_RootDefaultdb_Indicator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_OrderArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Order_Order_By>>;
  where?: InputMaybe<Defaultdb_Order_Bool_Exp>;
};


export type Query_RootDefaultdb_Order_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Order_Order_By>>;
  where?: InputMaybe<Defaultdb_Order_Bool_Exp>;
};


export type Query_RootDefaultdb_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_PlanArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Plan_Order_By>>;
  where?: InputMaybe<Defaultdb_Plan_Bool_Exp>;
};


export type Query_RootDefaultdb_Plan_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Plan_Order_By>>;
  where?: InputMaybe<Defaultdb_Plan_Bool_Exp>;
};


export type Query_RootDefaultdb_Plan_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_ReportArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Report_Order_By>>;
  where?: InputMaybe<Defaultdb_Report_Bool_Exp>;
};


export type Query_RootDefaultdb_Report_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Report_Order_By>>;
  where?: InputMaybe<Defaultdb_Report_Bool_Exp>;
};


export type Query_RootDefaultdb_Report_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_StrategyStateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_StrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_StrategyState_Bool_Exp>;
};


export type Query_RootDefaultdb_StrategyState_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_StrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_StrategyState_Bool_Exp>;
};


export type Query_RootDefaultdb_StrategyState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_TaxRateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_TaxRate_Order_By>>;
  where?: InputMaybe<Defaultdb_TaxRate_Bool_Exp>;
};


export type Query_RootDefaultdb_TaxRate_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_TaxRate_Order_By>>;
  where?: InputMaybe<Defaultdb_TaxRate_Bool_Exp>;
};


export type Query_RootDefaultdb_TaxRate_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_UserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_User_Order_By>>;
  where?: InputMaybe<Defaultdb_User_Bool_Exp>;
};


export type Query_RootDefaultdb_UserAccountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_UserAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_UserAccount_Bool_Exp>;
};


export type Query_RootDefaultdb_UserAccount_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_UserAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_UserAccount_Bool_Exp>;
};


export type Query_RootDefaultdb_UserAccount_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb_User_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_User_Order_By>>;
  where?: InputMaybe<Defaultdb_User_Bool_Exp>;
};


export type Query_RootDefaultdb_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDefaultdb__Prisma_MigrationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb__Prisma_Migrations_Order_By>>;
  where?: InputMaybe<Defaultdb__Prisma_Migrations_Bool_Exp>;
};


export type Query_RootDefaultdb__Prisma_Migrations_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb__Prisma_Migrations_Order_By>>;
  where?: InputMaybe<Defaultdb__Prisma_Migrations_Bool_Exp>;
};


export type Query_RootDefaultdb__Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "defaultdb.BacktestIndicator" */
  defaultdb_BacktestIndicator: Array<Defaultdb_BacktestIndicator>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestIndicator" */
  defaultdb_BacktestIndicator_aggregate: Defaultdb_BacktestIndicator_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestIndicator" using primary key columns */
  defaultdb_BacktestIndicator_by_pk?: Maybe<Defaultdb_BacktestIndicator>;
  /** fetch data from the table: "defaultdb.BacktestOrder" */
  defaultdb_BacktestOrder: Array<Defaultdb_BacktestOrder>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestOrder" */
  defaultdb_BacktestOrder_aggregate: Defaultdb_BacktestOrder_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestOrder" using primary key columns */
  defaultdb_BacktestOrder_by_pk?: Maybe<Defaultdb_BacktestOrder>;
  /** fetch data from the table: "defaultdb.BacktestPlan" */
  defaultdb_BacktestPlan: Array<Defaultdb_BacktestPlan>;
  /** fetch data from the table: "defaultdb.BacktestPlanAccount" */
  defaultdb_BacktestPlanAccount: Array<Defaultdb_BacktestPlanAccount>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestPlanAccount" */
  defaultdb_BacktestPlanAccount_aggregate: Defaultdb_BacktestPlanAccount_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestPlanAccount" using primary key columns */
  defaultdb_BacktestPlanAccount_by_pk?: Maybe<Defaultdb_BacktestPlanAccount>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestPlan" */
  defaultdb_BacktestPlan_aggregate: Defaultdb_BacktestPlan_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestPlan" using primary key columns */
  defaultdb_BacktestPlan_by_pk?: Maybe<Defaultdb_BacktestPlan>;
  /** fetch data from the table: "defaultdb.BacktestReport" */
  defaultdb_BacktestReport: Array<Defaultdb_BacktestReport>;
  /** fetch data from the table: "defaultdb.BacktestReportSummary" */
  defaultdb_BacktestReportSummary: Array<Defaultdb_BacktestReportSummary>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestReportSummary" */
  defaultdb_BacktestReportSummary_aggregate: Defaultdb_BacktestReportSummary_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestReportSummary" using primary key columns */
  defaultdb_BacktestReportSummary_by_pk?: Maybe<Defaultdb_BacktestReportSummary>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestReport" */
  defaultdb_BacktestReport_aggregate: Defaultdb_BacktestReport_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestReport" using primary key columns */
  defaultdb_BacktestReport_by_pk?: Maybe<Defaultdb_BacktestReport>;
  /** fetch data from the table: "defaultdb.BacktestStrategyState" */
  defaultdb_BacktestStrategyState: Array<Defaultdb_BacktestStrategyState>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestStrategyState" */
  defaultdb_BacktestStrategyState_aggregate: Defaultdb_BacktestStrategyState_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestStrategyState" using primary key columns */
  defaultdb_BacktestStrategyState_by_pk?: Maybe<Defaultdb_BacktestStrategyState>;
  /** fetch data from the table: "defaultdb.BacktestTaxPaymentInfo" */
  defaultdb_BacktestTaxPaymentInfo: Array<Defaultdb_BacktestTaxPaymentInfo>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestTaxPaymentInfo" */
  defaultdb_BacktestTaxPaymentInfo_aggregate: Defaultdb_BacktestTaxPaymentInfo_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestTaxPaymentInfo" using primary key columns */
  defaultdb_BacktestTaxPaymentInfo_by_pk?: Maybe<Defaultdb_BacktestTaxPaymentInfo>;
  /** fetch data from the table: "defaultdb.BacktestTradingStrategy" */
  defaultdb_BacktestTradingStrategy: Array<Defaultdb_BacktestTradingStrategy>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestTradingStrategy" */
  defaultdb_BacktestTradingStrategy_aggregate: Defaultdb_BacktestTradingStrategy_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestTradingStrategy" using primary key columns */
  defaultdb_BacktestTradingStrategy_by_pk?: Maybe<Defaultdb_BacktestTradingStrategy>;
  /** fetch data from the table: "defaultdb.BacktestWithdrawalStrategy" */
  defaultdb_BacktestWithdrawalStrategy: Array<Defaultdb_BacktestWithdrawalStrategy>;
  /** fetch aggregated fields from the table: "defaultdb.BacktestWithdrawalStrategy" */
  defaultdb_BacktestWithdrawalStrategy_aggregate: Defaultdb_BacktestWithdrawalStrategy_Aggregate;
  /** fetch data from the table: "defaultdb.BacktestWithdrawalStrategy" using primary key columns */
  defaultdb_BacktestWithdrawalStrategy_by_pk?: Maybe<Defaultdb_BacktestWithdrawalStrategy>;
  /** fetch data from the table: "defaultdb.Candle" */
  defaultdb_Candle: Array<Defaultdb_Candle>;
  /** fetch aggregated fields from the table: "defaultdb.Candle" */
  defaultdb_Candle_aggregate: Defaultdb_Candle_Aggregate;
  /** fetch data from the table: "defaultdb.Candle" using primary key columns */
  defaultdb_Candle_by_pk?: Maybe<Defaultdb_Candle>;
  /** fetch data from the table: "defaultdb.Exchange" */
  defaultdb_Exchange: Array<Defaultdb_Exchange>;
  /** fetch aggregated fields from the table: "defaultdb.Exchange" */
  defaultdb_Exchange_aggregate: Defaultdb_Exchange_Aggregate;
  /** fetch data from the table: "defaultdb.Exchange" using primary key columns */
  defaultdb_Exchange_by_pk?: Maybe<Defaultdb_Exchange>;
  /** fetch data from the table: "defaultdb.Indicator" */
  defaultdb_Indicator: Array<Defaultdb_Indicator>;
  /** fetch aggregated fields from the table: "defaultdb.Indicator" */
  defaultdb_Indicator_aggregate: Defaultdb_Indicator_Aggregate;
  /** fetch data from the table: "defaultdb.Indicator" using primary key columns */
  defaultdb_Indicator_by_pk?: Maybe<Defaultdb_Indicator>;
  /** fetch data from the table: "defaultdb.Order" */
  defaultdb_Order: Array<Defaultdb_Order>;
  /** fetch aggregated fields from the table: "defaultdb.Order" */
  defaultdb_Order_aggregate: Defaultdb_Order_Aggregate;
  /** fetch data from the table: "defaultdb.Order" using primary key columns */
  defaultdb_Order_by_pk?: Maybe<Defaultdb_Order>;
  /** fetch data from the table: "defaultdb.Plan" */
  defaultdb_Plan: Array<Defaultdb_Plan>;
  /** fetch aggregated fields from the table: "defaultdb.Plan" */
  defaultdb_Plan_aggregate: Defaultdb_Plan_Aggregate;
  /** fetch data from the table: "defaultdb.Plan" using primary key columns */
  defaultdb_Plan_by_pk?: Maybe<Defaultdb_Plan>;
  /** fetch data from the table: "defaultdb.Report" */
  defaultdb_Report: Array<Defaultdb_Report>;
  /** fetch aggregated fields from the table: "defaultdb.Report" */
  defaultdb_Report_aggregate: Defaultdb_Report_Aggregate;
  /** fetch data from the table: "defaultdb.Report" using primary key columns */
  defaultdb_Report_by_pk?: Maybe<Defaultdb_Report>;
  /** fetch data from the table: "defaultdb.StrategyState" */
  defaultdb_StrategyState: Array<Defaultdb_StrategyState>;
  /** fetch aggregated fields from the table: "defaultdb.StrategyState" */
  defaultdb_StrategyState_aggregate: Defaultdb_StrategyState_Aggregate;
  /** fetch data from the table: "defaultdb.StrategyState" using primary key columns */
  defaultdb_StrategyState_by_pk?: Maybe<Defaultdb_StrategyState>;
  /** fetch data from the table: "defaultdb.TaxRate" */
  defaultdb_TaxRate: Array<Defaultdb_TaxRate>;
  /** fetch aggregated fields from the table: "defaultdb.TaxRate" */
  defaultdb_TaxRate_aggregate: Defaultdb_TaxRate_Aggregate;
  /** fetch data from the table: "defaultdb.TaxRate" using primary key columns */
  defaultdb_TaxRate_by_pk?: Maybe<Defaultdb_TaxRate>;
  /** fetch data from the table: "defaultdb.User" */
  defaultdb_User: Array<Defaultdb_User>;
  /** fetch data from the table: "defaultdb.UserAccount" */
  defaultdb_UserAccount: Array<Defaultdb_UserAccount>;
  /** fetch aggregated fields from the table: "defaultdb.UserAccount" */
  defaultdb_UserAccount_aggregate: Defaultdb_UserAccount_Aggregate;
  /** fetch data from the table: "defaultdb.UserAccount" using primary key columns */
  defaultdb_UserAccount_by_pk?: Maybe<Defaultdb_UserAccount>;
  /** fetch aggregated fields from the table: "defaultdb.User" */
  defaultdb_User_aggregate: Defaultdb_User_Aggregate;
  /** fetch data from the table: "defaultdb.User" using primary key columns */
  defaultdb_User_by_pk?: Maybe<Defaultdb_User>;
  /** fetch data from the table: "defaultdb._prisma_migrations" */
  defaultdb__prisma_migrations: Array<Defaultdb__Prisma_Migrations>;
  /** fetch aggregated fields from the table: "defaultdb._prisma_migrations" */
  defaultdb__prisma_migrations_aggregate: Defaultdb__Prisma_Migrations_Aggregate;
  /** fetch data from the table: "defaultdb._prisma_migrations" using primary key columns */
  defaultdb__prisma_migrations_by_pk?: Maybe<Defaultdb__Prisma_Migrations>;
};


export type Subscription_RootDefaultdb_BacktestIndicatorArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestIndicator_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestIndicator_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestIndicator_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestIndicator_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestIndicator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestOrderArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestOrder_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestOrder_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestOrder_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestOrder_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestOrder_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestPlanArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestPlanAccountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlanAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlanAccount_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestPlanAccount_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlanAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlanAccount_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestPlanAccount_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestPlan_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestPlan_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestPlan_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestPlan_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestReportArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReport_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestReportSummaryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestReportSummary_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReportSummary_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReportSummary_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestReportSummary_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestReport_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestReport_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestReport_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestReport_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestStrategyStateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestStrategyState_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestStrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestStrategyState_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestStrategyState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestTaxPaymentInfoArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTaxPaymentInfo_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestTaxPaymentInfo_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTaxPaymentInfo_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTaxPaymentInfo_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestTaxPaymentInfo_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestTradingStrategyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTradingStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestTradingStrategy_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestTradingStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestTradingStrategy_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestTradingStrategy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_BacktestWithdrawalStrategyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestWithdrawalStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestWithdrawalStrategy_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_BacktestWithdrawalStrategy_Order_By>>;
  where?: InputMaybe<Defaultdb_BacktestWithdrawalStrategy_Bool_Exp>;
};


export type Subscription_RootDefaultdb_BacktestWithdrawalStrategy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_CandleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Candle_Order_By>>;
  where?: InputMaybe<Defaultdb_Candle_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Candle_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Candle_Order_By>>;
  where?: InputMaybe<Defaultdb_Candle_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Candle_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_ExchangeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Exchange_Order_By>>;
  where?: InputMaybe<Defaultdb_Exchange_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Exchange_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Exchange_Order_By>>;
  where?: InputMaybe<Defaultdb_Exchange_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Exchange_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_IndicatorArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Indicator_Order_By>>;
  where?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Indicator_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Indicator_Order_By>>;
  where?: InputMaybe<Defaultdb_Indicator_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Indicator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_OrderArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Order_Order_By>>;
  where?: InputMaybe<Defaultdb_Order_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Order_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Order_Order_By>>;
  where?: InputMaybe<Defaultdb_Order_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_PlanArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Plan_Order_By>>;
  where?: InputMaybe<Defaultdb_Plan_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Plan_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Plan_Order_By>>;
  where?: InputMaybe<Defaultdb_Plan_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Plan_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_ReportArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Report_Order_By>>;
  where?: InputMaybe<Defaultdb_Report_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Report_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_Report_Order_By>>;
  where?: InputMaybe<Defaultdb_Report_Bool_Exp>;
};


export type Subscription_RootDefaultdb_Report_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_StrategyStateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_StrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_StrategyState_Bool_Exp>;
};


export type Subscription_RootDefaultdb_StrategyState_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_StrategyState_Order_By>>;
  where?: InputMaybe<Defaultdb_StrategyState_Bool_Exp>;
};


export type Subscription_RootDefaultdb_StrategyState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_TaxRateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_TaxRate_Order_By>>;
  where?: InputMaybe<Defaultdb_TaxRate_Bool_Exp>;
};


export type Subscription_RootDefaultdb_TaxRate_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_TaxRate_Order_By>>;
  where?: InputMaybe<Defaultdb_TaxRate_Bool_Exp>;
};


export type Subscription_RootDefaultdb_TaxRate_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_UserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_User_Order_By>>;
  where?: InputMaybe<Defaultdb_User_Bool_Exp>;
};


export type Subscription_RootDefaultdb_UserAccountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_UserAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_UserAccount_Bool_Exp>;
};


export type Subscription_RootDefaultdb_UserAccount_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_UserAccount_Order_By>>;
  where?: InputMaybe<Defaultdb_UserAccount_Bool_Exp>;
};


export type Subscription_RootDefaultdb_UserAccount_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb_User_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb_User_Order_By>>;
  where?: InputMaybe<Defaultdb_User_Bool_Exp>;
};


export type Subscription_RootDefaultdb_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDefaultdb__Prisma_MigrationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb__Prisma_Migrations_Order_By>>;
  where?: InputMaybe<Defaultdb__Prisma_Migrations_Bool_Exp>;
};


export type Subscription_RootDefaultdb__Prisma_Migrations_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Defaultdb__Prisma_Migrations_Order_By>>;
  where?: InputMaybe<Defaultdb__Prisma_Migrations_Bool_Exp>;
};


export type Subscription_RootDefaultdb__Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type ListBacktestStrategyStateQueryVariables = Exact<{
  symbol: Scalars['String']['input'];
  interval: Scalars['String']['input'];
  tradingStrategyName: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListBacktestStrategyStateQuery = { __typename?: 'query_root', defaultdb_BacktestStrategyState: Array<{ __typename?: 'defaultdb_BacktestStrategyState', activeOrderId?: number | null, createdAt: any, id: number, interval: string, isOrderActive: number, isPotentialOrderSignaled: number, potentialOrderSide?: string | null, start: string, symbol: string, takeProfit?: number | null, tradingStrategyName: string, updatedAt: any, defaultdb_BacktestIndicators: Array<{ __typename?: 'defaultdb_BacktestIndicator', createdAt: any, id: number, strategyStateId: number, subType?: string | null, type: string, updatedAt: any, value: number }>, defaultdb_BacktestOrder?: { __typename?: 'defaultdb_BacktestOrder', createdAt: any, date: any, exchangeOrderId?: string | null, interval: string, id: number, openPositionPrice?: number | null, orderType: string, price: number, profitRate?: number | null, side: string, stopLoss?: number | null, stopOrderType?: string | null, symbol: string, timestamp: string, tradingStrategyName: string, updatedAt: any } | null }> };


export const ListBacktestStrategyStateDocument = gql`
    query listBacktestStrategyState($symbol: String!, $interval: String!, $tradingStrategyName: String!, $limit: Int!, $offset: Int) {
  defaultdb_BacktestStrategyState(
    where: {symbol: {_eq: $symbol}, interval: {_eq: $interval}, tradingStrategyName: {_eq: $tradingStrategyName}}
    limit: $limit
    offset: $offset
  ) {
    activeOrderId
    createdAt
    defaultdb_BacktestIndicators {
      createdAt
      id
      strategyStateId
      subType
      type
      updatedAt
      value
    }
    defaultdb_BacktestOrder {
      createdAt
      date
      exchangeOrderId
      interval
      id
      openPositionPrice
      orderType
      price
      profitRate
      side
      stopLoss
      stopOrderType
      symbol
      timestamp
      tradingStrategyName
      updatedAt
    }
    id
    interval
    isOrderActive
    isPotentialOrderSignaled
    potentialOrderSide
    start
    symbol
    takeProfit
    tradingStrategyName
    updatedAt
  }
}
    `;

/**
 * __useListBacktestStrategyStateQuery__
 *
 * To run a query within a React component, call `useListBacktestStrategyStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBacktestStrategyStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBacktestStrategyStateQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *      interval: // value for 'interval'
 *      tradingStrategyName: // value for 'tradingStrategyName'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useListBacktestStrategyStateQuery(baseOptions: Apollo.QueryHookOptions<ListBacktestStrategyStateQuery, ListBacktestStrategyStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBacktestStrategyStateQuery, ListBacktestStrategyStateQueryVariables>(ListBacktestStrategyStateDocument, options);
      }
export function useListBacktestStrategyStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBacktestStrategyStateQuery, ListBacktestStrategyStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBacktestStrategyStateQuery, ListBacktestStrategyStateQueryVariables>(ListBacktestStrategyStateDocument, options);
        }
export function useListBacktestStrategyStateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListBacktestStrategyStateQuery, ListBacktestStrategyStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListBacktestStrategyStateQuery, ListBacktestStrategyStateQueryVariables>(ListBacktestStrategyStateDocument, options);
        }
export type ListBacktestStrategyStateQueryHookResult = ReturnType<typeof useListBacktestStrategyStateQuery>;
export type ListBacktestStrategyStateLazyQueryHookResult = ReturnType<typeof useListBacktestStrategyStateLazyQuery>;
export type ListBacktestStrategyStateSuspenseQueryHookResult = ReturnType<typeof useListBacktestStrategyStateSuspenseQuery>;
export type ListBacktestStrategyStateQueryResult = Apollo.QueryResult<ListBacktestStrategyStateQuery, ListBacktestStrategyStateQueryVariables>;