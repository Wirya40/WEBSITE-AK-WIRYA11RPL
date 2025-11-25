import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
