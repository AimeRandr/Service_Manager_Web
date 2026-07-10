import Button from "@mui/material/Button";
import { useThemeMode } from '../../context/ThemeModeContext.jsx';
import { getTokens } from "../../theme/tokens.js";

function FormsActions({ onSave, onDiscard }) {
  const { mode } = useThemeMode();
  const t = getTokens(mode);

  return (
    <div className="
        mt-10
        flex
        flex-col
        gap-4
        items-stretch
        sm:flex-row
        sm:justify-end
        sm:items-center
        sm:mr-8
        sm:pr-[18px]
      "
    >

    <Button 
      variant="outlined"
      onClick={onDiscard}
      sx={{
        width: { xs: '100%', sm: 96 },
        height: 40,

        borderRadius: "20px",
        borderColor: t.textPrimary,
        color: t.textPrimary,

        fontFamily: "Roboto Slab",
        fontWeight: 700,
        fontSize: "14px",

        textTransform: "none",

        transition: "all .2s ease",

        "&:hover": {
            borderColor: t.textPrimary,
            backgroundColor: t.discardHoverBg,
            transform: "translateY(-2px)",
        },
      }}
    >
      Discard
    </Button>

    <Button
      variant="contained"
      disableElevation
      onClick={onSave}
      sx={{
          width: { xs: '100%', sm: 92 },
          height: 40,

          borderRadius: "20px",
          border: `1px solid ${t.textPrimary}`,

          color: "#FFFFFF",

          fontFamily: "Roboto Slab",
          fontWeight: 700,
          fontSize: "14px",

          textTransform: "none",

          background:
              "linear-gradient(90deg,#0C8CE9 0%, #074F83 100%)",

          transition: "all .2s ease",

          "&:hover": {
              background:
                  "linear-gradient(90deg,#22A6FF 0%, #0C8CE9 100%)",

              transform: "translateY(-2px)",

              boxShadow:
                  "0 6px 18px rgba(12,140,233,.45)",
          },
      }}
      >
        Save

      </Button>

    </div>
  );
}

export default FormsActions;