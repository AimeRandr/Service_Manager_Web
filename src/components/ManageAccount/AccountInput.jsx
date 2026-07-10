import { useState } from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useThemeMode } from '../../context/ThemeModeContext.jsx'
import { getTokens } from '../../theme/tokens.js'

function AccountInput({
    label,
    type = "text",
    value,
    onChange,
    placeholder = "...",
    width = "355px",
    rightIcon,
}) {

    const [showPassword, setShowPassword] = useState(false);
    const { mode, isDark } = useThemeMode();
    const t = getTokens(mode)

    const isPassword = type == "password";

    return (
        <div className="w-full" style={{ maxWidth: width }}>

            <label 
                className={
                    "font-roboto-slab text-[12px] font-bold mb-2 block " +
                    (isDark ? "text-white" : "text-[#050A24]")
                }
            >
                {label}
            </label>

            <div className="relative mt-2">

                <input 
                    type={
                        isPassword ? (showPassword ? "text" : "password") : "text"
                    } 
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={
                        "w-full h-12 rounded-[20px] border border-[#0C8CE9] pl-10 pr-12 text-[16px] font-roboto-slab outline-none transition-colors duration-300 " +
                        (isDark ? "text-white" : "text-[#050A24]")
                    }
                    style={{ backgroundColor: t.inputBg }}
                />
                {
                    isPassword ? (
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className={
                                "absolute right-3 top-1/2 -translate-y-1/2 " +
                                (isDark ? "text-white" : "text-[#050A24]")
                            }
                        >
                            {
                                showPassword ? <VisibilityOffOutlinedIcon/> : <VisibilityOutlinedIcon/>
                            }
                        </button>
                    ) : (
                        <div
                            className={
                                "absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer " +
                                (isDark ? "text-white" : "text-[#050A24]")
                            }
                        >
                            {rightIcon}
                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default AccountInput;