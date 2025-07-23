
import Certification from "@/Components/Certification";
import Nav from "@/Components/Nav";
import Product from "@/Components/Product";
import Socials from "@/Components/Socials";
import WorkExperience from "@/Components/WorkExperience";


export default function Home() {
  return(
    <div>
      <Nav />
      <WorkExperience />
      <Product/>
      <Certification />
      <Socials/>
      <p className="uppercase mt-5 italic">designed by <span className="font-bold ">Mosco</span> from <span className="font-bold"> cyclebreeze team lieutenants</span></p>
      
    </div>

  );
};
