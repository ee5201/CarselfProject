import { useState } from "react";
import MBTItypeContainer from "../../../src/components/units/PlayPage/MBTIType/Type.contatiner";

export default function ITypePage() {
  const [TypeChange, setTypeChange] = useState(true);

  return (
    <div>
      <MBTItypeContainer TypeChange={TypeChange} />
    </div>
  );
}
