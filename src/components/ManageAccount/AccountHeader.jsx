import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useThemeMode } from '../../context/ThemeModeContext.jsx'

function AccountHeader() {
  const { isDark } = useThemeMode()

  return (
    <div className="flex items-center gap-2">
      <ManageAccountsIcon
        sx={{
          fontSize: 47,
          color: isDark ? "#FFFFFF" : "#050A24",
        }}
      />

      <h1 className={
          "font-roboto-slab text-[28px] font-bold " +
          (isDark ? "text-white" : "text-[#050A24]")
        }
      >
        Manage account
      </h1>
    </div>
  );
}

export default AccountHeader;