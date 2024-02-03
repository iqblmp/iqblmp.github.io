import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image src="/logo.png" width={36} height={36} priority alt="" style={{ width: 36, height: 36 }} />
        </Link>
    );
};

export default Logo;
