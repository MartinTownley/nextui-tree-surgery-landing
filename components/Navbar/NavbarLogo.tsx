import { Link } from "@heroui/link";
import CustomLogo from "@/components/CustomLogo";

type NavbarLogoProps = {
  shortLogo: string;
  longLogo: string;
};

const NavbarLogo = ({ shortLogo, longLogo }: NavbarLogoProps) => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <CustomLogo
          src={shortLogo}
          alt={"Custom Logo Short"}
          width={200}
          height={64}
          className="lg-custom:hidden "
        />
        <CustomLogo
          src={longLogo}
          alt={"Custom Logo Long"}
          width={300}
          height={80}
          className="hidden lg-custom:block"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
