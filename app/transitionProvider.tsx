"use client";

import useStore from "@/store";
import { EnterTransition, ExitTransition } from "@/components/LinkTransition";

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const { isLoading } = useStore() as { isLoading: boolean };
  return (
    <>
      {children}
      {isLoading ? <ExitTransition /> : <EnterTransition />}
    </>
  );
}
