import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";
import { Steps } from "../../components/Steps";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}
