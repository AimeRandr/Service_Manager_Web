import { useThemeMode } from '../../context/ThemeModeContext.jsx'
import { getTokens } from '../../theme/tokens.js'

function AccountCard({ children }) {
    const { mode, isDark } = useThemeMode()
    const t = getTokens(mode)

    return (
        <div
            className={
                "w-full max-w-[465px] min-h-[670px] rounded-[30px] border flex flex-col mb-[120px] transition-colors duration-300 " +
                (isDark
                    ? "border-[#0C8CE9]"
                    : "shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)]")
            }
            style={{ backgroundColor: t.cardBg, borderColor: t.cardBorder }}
        >
            {children}
        </div>
    );
}

export default AccountCard;