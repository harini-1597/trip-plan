import { LandingFooter } from "@/components/landing-footer";
import { LandingMain } from "@/components/landing-main";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingMain />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;