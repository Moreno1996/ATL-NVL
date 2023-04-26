import { ATL } from "@/data/ATL";
import Questionaire from "@/components/Questionaire";
import Link from "next/link";

export default function Home() {
  return (
      <Questionaire questionaire={ATL} />
  );
}
