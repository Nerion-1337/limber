// ICONS
import AccueilIcon from '#assets/accueil.svg?react';
import MursIcon from '#assets/murs.svg?react';
import ContenusIcon from '#assets/contenus.svg?react';
import CampagnesIcon from '#assets/campagnes.svg?react';
import CalendrierIcon from '#assets/calendrier.svg?react';
import ScenariosIcon from '#assets/scenarios.svg?react';
import ConversionIcon from '#assets/conversion.svg?react';
import AnalyticsIcon from '#assets/analytics.svg?react';
// PAGE
import Home from "#pages/home";
import Wall from "#pages/wall";
import Content from "#pages/content";
import Campaigns from "#pages/campaigns";
import Calendar from "#pages/calendar";
import Scenarios from "#pages/scenarios";
import Conversion from "#pages/Conversion";
import Analytics from "#pages/analytics";
//
//
//
//
//
///
const pages = [
  { name: "accueil", component: <Home />, icon: AccueilIcon },
  { name: "murs", component: <Wall />, icon: MursIcon },
  { name: "contenus", component: <Content />, icon: ContenusIcon },
  { name: "campagnes", component: <Campaigns />, icon: CampagnesIcon },
  { name: "calendrier", component: <Calendar />, icon: CalendrierIcon  },
  { name: "scénarios", component: <Scenarios />, icon: ScenariosIcon  },
  { name: "conversion", component: <Conversion />, icon: ConversionIcon  },
  { name: "analytics", component: <Analytics />, icon: AnalyticsIcon  },
];
///
export const Route_Client = pages.map((page, index) => ({
  index,
  label: page.name,
  url: page.name === "home" ? "/limber/" : `/limber/${page.name}`,
  type: "intern",
  page: page.component,
  icon: page.icon,
}));
