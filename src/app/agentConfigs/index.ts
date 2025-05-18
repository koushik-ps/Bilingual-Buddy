import { AllAgentConfigsType } from "@/app/types";
import hindiEnglish from "./hindiEnglish";
import kannadaEnglish from "./kannadaEnglish";
import malayalamEnglish from "./malayalamEnglish";
import tamilEnglish from "./tamilEnglish";
import teluguEnglish from "./teluguEnglish";

export const allAgentSets: AllAgentConfigsType = {
  hindiEnglish,
  kannadaEnglish,
  malayalamEnglish,
  tamilEnglish,
  teluguEnglish,
};

export const defaultAgentSetKey = "tamilEnglish";