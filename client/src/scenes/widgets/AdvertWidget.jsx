import { Typography, useTheme } from "@mui/material";
import { color } from "@mui/system";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ad.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>BattleGrounds Mobile India</Typography>
        <Typography color={medium}>
          <a
            href="https://www.battlegroundsmobileindia.com/"
            style={{ textDecoration: "none", color: "#c9c6bb" }}
          >
            battlegroundsmobileindia.com
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        BGMI: Where champions rise! Conquer the battleground and showcase your
        gaming prowess in the ultimate battle royale experience!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
