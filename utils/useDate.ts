import useSWR from "swr";
import { IDate } from "utils/types";
export default function useDate(date: IDate) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `/api/booking?date=${date ? date instanceof Date && (date as Date).toDateString() : ""}`,
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
}
