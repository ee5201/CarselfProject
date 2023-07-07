import { useState } from "react";

import MBTItypeContainer from "../../../src/components/units/PlayPage/MBTIType/Type.contatiner";

export default function ETypePage() {
  const [TypeChange, setTypeChange] = useState(false);

  return (
    <div>
      <MBTItypeContainer TypeChange={TypeChange} />
    </div>
  );
}
