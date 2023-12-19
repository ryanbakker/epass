import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={100}
            height={38}
          />
        </Link>

        <p className="text-sm text-gray-500">
          2023 ePass. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
