import { useThemeMode } from '../../context/ThemeModeContext.jsx'

function SectionHeader({
    title,
    lineWidth="170px" 
}) {
  const { isDark } = useThemeMode()

  return (
    <div className="flex items-center mt-8">

        <h2 className={
                "font-roboto-slab text-[18px] font-bold whitespace-nowrap " +
                (isDark ? "text-white" : "text-[#050A24]")
            }
        >
            
            {title}

        </h2>

        <div 
            className={
                "ml-3 border-t-[6px] " +
                (isDark ? "border-white" : "border-[#050A24]")
            }
            style={{width: lineWidth}} 
        />
    </div>
  );
}

export default SectionHeader;