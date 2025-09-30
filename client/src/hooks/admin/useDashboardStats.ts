import { useEffect, useRef } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useQueryClient, useQuery } from "@tanstack/react-query";

interface DashboardStats {
  totalContactedCustomers: number;
  totalSubscribers: number;
  contactedChange: number; // percentage
  subscribersChange: number; // percentage
}

const initialStats: DashboardStats = {
  totalContactedCustomers: 0,
  totalSubscribers: 0,
  contactedChange: 0,
  subscribersChange: 0,
};

export const useDashboardStats = () => {
  const queryClient = useQueryClient();
  const prevStatsRef = useRef<{ contacted: number; subscribers: number }>({
    contacted: 0,
    subscribers: 0,
  });

  const query = useQuery<DashboardStats>({
    queryKey: ["dashboardStats"],
    queryFn: () => Promise.resolve(initialStats), // placeholder, snapshot will update
    initialData: initialStats,
  });

  useEffect(() => {
    const unsubContacted = onSnapshot(
      collection(db, "contactMessages"),
      (snap) => {
        const currentCount = snap.size;
        const prev = prevStatsRef.current.contacted;
        const change =
          prev > 0 ? (((currentCount - prev) / prev) * 100).toFixed(0) : "0";

        queryClient.setQueryData<DashboardStats>(["dashboardStats"], (old) => ({
          ...(old || initialStats),
          totalContactedCustomers: currentCount,
          contactedChange: Number(change),
        }));

        prevStatsRef.current.contacted = currentCount;
      }
    );

    const unsubSubscribers = onSnapshot(
      collection(db, "shortlistRequests"),
      (snap) => {
        const currentCount = snap.size;
        const prev = prevStatsRef.current.subscribers;
        const change =
          prev > 0 ? (((currentCount - prev) / prev) * 100).toFixed(0) : "0";

        queryClient.setQueryData<DashboardStats>(["dashboardStats"], (old) => ({
          ...(old || initialStats),
          totalSubscribers: currentCount,
          subscribersChange: Number(change),
        }));

        prevStatsRef.current.subscribers = currentCount;
      }
    );

    return () => {
      unsubContacted();
      unsubSubscribers();
    };
  }, [queryClient]);

  return query;
};
