// export interface ExpensesByCategory {
//   salaries: number;
//   supplies: number;
//   services: number;
// }

// export interface Month {
//   _id: string;
//   month: string;
//   revenue: number;
//   expenses: number;
//   nonOperationalExpenses: number;
//   operationalExpenses: number;
// }

// export interface Day {
//   id: string;
//   date: string;
//   revenue: number;
//   expenses: number;
// }

// export interface GetKpisResponse {
//   id: string;
//   _id: string;
//   __v: number;
//   totalProfit: number;
//   totalRevenue: number;
//   totalExpenses: number;
//   expensesByCategory: ExpensesByCategory;
//   monthlyData: Array<Month>;
//   dailyData: Array<Day>;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface GetProductsResponse {
//   id: string;
//   _id: string;
//   __v: number;
//   price: number;
//   expense: number;
//   transactions: Array<string>;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface GetTransactionsResponse {
//   id: string;
//   _id: string;
//   __v: number;
//   buyer: string;
//   amount: number;
//   productIds: Array<string>;
//   createdAt: string;
//   updatedAt: string;
// }

export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  _id: string; // Corrected from id to _id
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  _id: string;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string; // You have both id and _id here. Ensure this is intentional
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string; // Again, both id and _id
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
