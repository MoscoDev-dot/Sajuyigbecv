import Certification from "@/Components/Certification";
// Force git update
import Nav from "@/Components/Nav";
import Product from "@/Components/Product";
import Socials from "@/Components/Socials";
import WorkExperience from "@/Components/WorkExperience";
import { SmoothCursor } from "@/Components/ui/smooth-cursor";

export default function Home() {
  return (
    <div className="cursor-none !important">
      <Nav />
      <WorkExperience />
      <Product />
      <Certification />
      <Socials />
      <p className="uppercase   text-[10px] text-center mt-5 italic">
        designed by <span className="font-semibold ">Mosco</span> from{" "}
        <span className="font-semibold"> cyclebreeze team lieutenants</span>
      </p>
      <SmoothCursor />
    </div>
  );
}
