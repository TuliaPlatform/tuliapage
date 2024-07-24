import React from "react";
import NavButton from "../NavButton/NavButton";
import { IconNotebook, IconGift, IconRocket } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex justify-start ">
        <NavButton
          id="https://airdrop.tulia.finance/"
          text="Airdrop"
          icon={<IconGift stroke={2} />}
        />{" "}
        <NavButton
          id="https://app.tulia.finance/"
          text="App"
          icon={<IconRocket stroke={2} />}
        />
        <NavButton
          id="https://docs.tulia.finance/"
          text="Docs"
          icon={<IconNotebook stroke={2} />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
