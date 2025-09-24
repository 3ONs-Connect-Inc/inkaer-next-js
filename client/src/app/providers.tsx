"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/Toaster";
import { PersistGate } from "redux-persist/integration/react";

export function AppProviders({ children }: { children: ReactNode }) {
  const [qc] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={qc}>
          <ThemeProvider>
            <Toaster />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
