

import CertificationAnime from "./CertificationAnime";
import CertificationText from "./CertificationText";
import LeftLine from "./LeftLine";
import { Container } from "@mui/material";


export default function Certification() {
  return (
    <div>
      <Container maxWidth={false} className="w-full  relative">
      <LeftLine />
    <div className="grid grid-cols-2 pb-20 ps-10 md:ps-0 gap-4">
      
      <CertificationText/>
      <CertificationAnime/>
      
      
      
    </div>
    </Container>
    <hr />
    
    </div>
  );
}


