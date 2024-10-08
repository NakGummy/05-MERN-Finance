export interface ExpensesByCategory {
  salaries: number;
  suppulies: number;
  services: string;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  daylyData: Array<Day>;
  createdAt: string;
  uopdatedAt: string;
}
export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expenses: number;
  transactions: Array<String>;
  createdAt: string;
  updatedAt: string;
}
