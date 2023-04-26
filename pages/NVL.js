import Questionaire from "@/components/Questionaire";
import { NVL } from "@/data/NVL";

export default function Home() {
  return (
    <>
             <Questionaire questionaire={NVL} />
    </>
  );
}
