import { useThemeMode } from '../../context/ThemeModeContext.jsx'

function AccountCard({ children }) {
    const { isDark } = useThemeMode()

    return (
        <div
            className={
                "w-[465px] h-[670px] rounded-[30px] border flex flex-col mb-[120px] transition-colors duration-300 " +
                (isDark
                    ? "bg-[#050A24] border-[#0C8CE9]"
                    : "bg-[#F0F4F8] border-[#E2E8F0] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)]")
            }
        >
            {children}
        </div>
    );
}

export default AccountCard;