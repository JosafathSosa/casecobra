import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      {children}
    </MaxWidthWrapper>
  );
}
