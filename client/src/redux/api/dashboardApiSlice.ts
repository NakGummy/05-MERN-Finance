import { DASHBOARD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchData: builder.query<void, void>({
      query: () => `${DASHBOARD_URL}/data`,
    }),
  }),
});

export const { useFetchDataQuery } = dashboardApiSlice;
