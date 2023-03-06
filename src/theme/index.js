import { createMuiTheme } from "@material-ui/core/styles";

import variants from "./variants";
import typography from "./typography";
import overrides from "./overrides";
import breakpoints from "./breakpoints";
import props from "./props";
import shadows from "./shadows";
import stylebase from "./stylebase";

const theme = variant => {
    return createMuiTheme(
        {
            spacing: 2,
            breakpoints: breakpoints,
            overrides: overrides,
            props: props,
            typography: typography,
            shadows: shadows,
            body: variant.body,
            header: variant.header,
            palette: variant.palette,
            sidebar: variant.sidebar,
            // add stylebase theme
            stylebase: stylebase,
        },
        variant.name
    );
};

const themes = variants.map(variant => theme(variant));

export default themes;
