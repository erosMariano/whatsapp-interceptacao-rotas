import React from "react";
import { itemsNavBar } from "@/constants/navbarItems";

import SettingsImage from "@/assets/img/settings.svg";
import Perfil from "@/assets/img/perfil.png";
import ItemNavBar from "@/components/atoms/ItemNavbar";
import PrimaryNavItem from "../atoms/PrimaryNavItem";
import SecondaryNavItem from "../atoms/SecondaryNavItem";

function DefaultSidebar() {
  const styleItemNavBar = `my-0.5 block w-10 h-10 rounded-full transition hover:bg-active-links`;

  return (
    <div className="px-3 py-2.5 bg-black-secondary h-screen max-w-max border-r border-white/10 flex flex-col">
      <div>
        {itemsNavBar.map((item) => {
          const isSmallPadding = item.smallPadding ? "p-1" : "p-2";

          return (
            <React.Fragment key={item.id}>
              <PrimaryNavItem
                className={`${styleItemNavBar} ${isSmallPadding}`}
                item={item}
              />
            </React.Fragment>
          );
        })}
        <span className="my-2 border-t border-t-white/10 w-full block" />
      </div>

      <div className="flex flex-1 items-center flex-col justify-end">
        <ItemNavBar
          secondary={{
            image: SettingsImage,
            alt: "Settings",
            url: "/settings",
          }}
          className={`p-2 ${styleItemNavBar}`}
        />

        <SecondaryNavItem
          alt="Perfil"
          image={Perfil}
          url="/perfil"
          className={`p-1.5 ${styleItemNavBar}`}
        />
      </div>
    </div>
  );
}

export default DefaultSidebar;
