// import { getDesignTokens } from "./themePrimitives";
import { getDesignTokens } from "./themePrimitives";

// import {
//   inputsCustomizations,
//   dataDisplayCustomizations,
//   feedbackCustomizations,
//   navigationCustomizations,
//   surfacesCustomizations,
// } from "./customizations";

import { inputsCustomizations } from "./customizations/inputs";
import { dataDisplayCustomizations } from "./customizations/dataDisplay";
import { feedbackCustomizations } from "./customizations/feedback";
import { navigationCustomizations } from "./customizations/navigation";
import { surfacesCustomizations } from "./customizations/surfaces";

export default function getSignUpTheme(mode) {
  return {
    ...getDesignTokens(mode),
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
    },
  };
}
