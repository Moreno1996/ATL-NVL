import Questionaire from "@/components/Questionaire";
import { NVL } from "@/data/NVL";

export default function Home() {
  return (
    <>
     
      <div className="container p-4 mx-auto">
        <Questionaire questionaire={NVL} />
      </div>
    </>
  );
}
