import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MixButton = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/mix", { scroll: false })}
      className="max-md:w-[327px] md:w-[640px] xl:w-[564px] h-[392px] bg-primary px-[20px] w-full max-xl:rounded-[12px] xl:rounded-[24px] flex gap-4 items-center cursor-pointer"
    >
      <div className="max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]">
        <Image src="/" alt="mixmode" width={40} height={40} />
      </div>

      <Link href="/mix" className="max-md:text-sm text-2xl">
        Mixmode
      </Link>
    </div>
  );
};

export default MixButton;
