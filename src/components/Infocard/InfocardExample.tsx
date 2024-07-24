import { cn } from "@/utils/cn";
import React from "react";
import { Infocard, InfocardItem } from "./Infocard";
import {
  IconBoxAlignRightFilled,
  IconSettings,
  IconHierarchyOff,
  IconSparkles,
  IconBuilding,
  IconArrowsShuffle,
  IconBuildingBank,
  IconUserCheck,
} from "@tabler/icons-react";
import { MeteorsDemo } from "../Meteors/MeteorsDemo";

export function InfocardDemo() {
  return (
    <Infocard className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <InfocardItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </Infocard>
  );
}
const Skeleton = () => <MeteorsDemo />;
const items = [
  {
    title: "Conventional Lending: Classic DeFi, Simplified",
    description:
      " Embrace the essentials with Conventional Lending, mirroring the best of traditional DeFi platforms. Borrow and lend in a familiar way.",
    header: <Skeleton />,
    icon: <IconBuildingBank stroke={3} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Open Market: Community-Powered, Flexible Lending",
    description:
      "Engage with our Open Market, a community-driven lending system that puts the power of interest rates in your hands. Tailor your borrowing experience with customizable rates.",
    header: <Skeleton />,
    icon: <IconHierarchyOff stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Flash Loan: Quick Borrow, Swift Earnings",
    description:
      "Borrow instantly and earn interest fast with Flash Loans, integrated seamlessly into our pools. Experience speed and efficiency in one powerful feature.",
    header: <Skeleton />,
    icon: <IconSparkles stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UPool: Empowering Financial Unity",
    description:
      "UPool seamlessly connects big companies with small lenders and borrowers in a unified platform. Enhance your financial opportunities through our inclusive network designed for growth and accessibility. Dive into UPool—where finance meets unity.",
    header: <Skeleton />,
    icon: <IconBuilding stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Flexible Lending: Choose Your Terms",
    description:
      "Experience lending with flexibility. Choose from a diverse array of interest models and assets to borrow and lend as you desire. Tailor your financial transactions to fit your needs.",
    header: <Skeleton />,
    icon: <IconArrowsShuffle stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "User-Oriented Tailor Lending: Craft Your Advantage",
    description:
      "Tailor your lending options with our User-Oriented system. Customize to gain a competitive edge and strategically position yourself in the market.",
    header: <Skeleton />,
    icon: <IconSettings stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PoolS: Transparent, Secure, and Unique",
    description:
      " Every transaction in PoolS generates a unique pool, ensuring unparalleled transparency and security. Developed by our expert team, the PoolS security system safeguards every interaction, providing peace of mind with each transaction. Step into a realm of safety where your financial dealings are protected and clear.",
    header: <Skeleton />,
    icon: <IconUserCheck stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
];
