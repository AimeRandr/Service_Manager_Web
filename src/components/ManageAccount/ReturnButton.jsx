import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useThemeMode } from '../../context/ThemeModeContext';

function ReturnButton({ onClick }) {
    const { isDark } = useThemeMode();

    return (

        <button
            onClick={onClick}
            className={
                "absolute left-4 top-6 flex items-center gap-2 font-roboto-slab text-[18px] font-normal transition-all duration-200 hover:text-sky-300 hover:-translate-x-1 sm:left-[50px] sm:top-[100px] sm:text-[20px] " +
                (isDark ? "text-white" : "text-[#050A24]")
            }
        >

            <ArrowCircleLeftIcon
                sx={{
                    fontSize: 24,
                }}
            />

            <span>Return</span>

        </button>

    );

}

export default ReturnButton;