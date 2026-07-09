import React, { useEffect, useState } from "react";
import TypewriterTitle from "../components/TypewriterTitle";
import { useThemeMode } from "../context/ThemeModeContext.jsx";

const tracker_team = [
  {
    nom: "RANDRIAMBOAVONJY",
    prenom: "Jean Aimé",
    im: "3561",
    email: "aimerandr16@gmail.com",
    numero_telephone: "+261 38 72 350 55",
    signature: "Jean Aimé RANDRIAMBOAVONJY",
    photo: "src/images/Aime.jpeg",
  },
  {
    nom: "LAHATRINIAVO",
    prenom: "Fy Mijoro",
    im: "3447",
    email: "fymijoro@gmail.com",
    numero_telephone: "+261 38 32 141 34",
    signature: "Fy Mijoro",
    photo: "src/images/Lahatra.jpeg",
  },
  {
    nom: "MAHERINANDRASANA",
    prenom: "Arotiana Brad Florentin",
    im: "3495",
    email: "maherinandrasanarotiana@gmail.com",
    numero_telephone: "+261 38 89 271 95",
    signature: "Arotiana Florentin",
    photo: "src/images/Arotiana.jpeg",
  },
  {
    nom: "RATSIMBAZAFY",
    prenom: "Maminiony Fitiavana",
    im: "3532",
    email: "ratsimbazafymaminionyfitiavana@gmail.com",
    numero_telephone: "+261 32 16 970 36",
    signature: "Fitiavana Ratsimbazafy",
    photo: "src/images/Fitiavana.png",
  },
];

function Icon_gmail() {
  return (
    <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.229,8,7.3,8h0 C4.925,8,3,9.925,3,12.298z" />
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.771,8,40.7,8h0 C43.075,8,45,9.925,45,12.298z" />
    </svg>
  );
}

function Icon_whatsapp() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M12 5.5a6.5 6.5 0 0 0-5.6 9.8l-.9 3.2 3.3-.9A6.5 6.5 0 1 0 12 5.5zm0 11.8a5.2 5.2 0 0 1-2.7-.7l-.2-.1-2 .5.5-1.9-.1-.2a5.2 5.2 0 1 1 4.5 2.4zm2.9-3.9c-.2-.1-1.2-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.7-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-1-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.2-.6.6-.6 1.5s.6 1.7.7 1.9c.1.1 1.2 1.9 3 2.6.4.2.7.3 1 .4.4.1.8.1 1.1.1.3-.1 1-.4 1.2-.9.1-.4.1-.7.1-.8-.1-.1-.2-.1-.4-.2z"
      />
    </svg>
  );
}

function Icon_linkdin() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.12 19.45H3.56V8h3.56v11.45zM5.34 6.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM20.45 19.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.49V8h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27z"
      />
    </svg>
  );
}

function Photo_profil() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="w-10 h-10 text-gray-500"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
    </svg>
  );
}

function Information({ person, theme }) {
  const estSombre = theme === "dark";
  return (
    <div
      className={
        "w-full md:h-full mx-auto min-h-[30] border rounded-4xl overflow-hidden font-sans flex [clip-path:inset(0_round_1.5rem)] " +
        (estSombre
          ? "bg-[#050A24] border-[#ACACAC]"
          : "bg-white border-gray-300")
      }
    >
      <div
        className={
          "w-[40%] shrink-0 rounded-4xl flex items-center justify-center " +
          (estSombre ? "bg-[#1a2338]" : "bg-gray-100")
        }
      >
        {person.photo ? (
          <img
            src={person.photo}
            alt={`${person.nom} ${person.prenom}`}
            className="w-full h-full object-cover "
          />
        ) : (
          <Photo_profil />
        )}
      </div>

      <div className="px-5 py-10 flex flex-col items-start justify-center text-left">
        <h3
          className={
            "text-[3svh] leading-none whitespace- " +
            (estSombre ? "text-white" : "text-[#050A24]")
          }
        >
          {person.nom}
        </h3>
        <h3
          className={
            "font-sans text-[3svh] leading-none mt-[1.5svh] mb-[2svh] whitespace-nowrap " +
            (estSombre ? "text-white" : "text-[#050A24]")
          }
        >
          {person.prenom}
        </h3>

        <p
          className={
            "mb-[3svh] text-base whitespace-nowrap " +
            (estSombre ? "text-white" : "text-[#050A24]")
          }
        >
          IM&nbsp;: {person.im}
        </p>

        <div className="grid grid-cols-[auto_auto] gap-x-3 gap-y-2 pl-3 text-center items-center w-fit max-w-full">
          <Icon_gmail />
          <div
            className={
              "border rounded-full px-3 py-1 text-[1.8svh] whitespace-nowrap " +
              (estSombre
                ? "bg-[#050A24] border-[#ACACAC] text-gray-200"
                : "bg-white border-gray-300 text-gray-700")
            }
          >
            {person.email}
          </div>

          <Icon_whatsapp />
          <div
            className={
              "border rounded-full px-3 py-1 text-[1.8svh] tracking-wider whitespace-nowrap " +
              (estSombre
                ? "bg-[#050A24] border-[#ACACAC] text-gray-200"
                : "bg-white border-gray-300 text-gray-700")
            }
          >
            {person.numero_telephone}
          </div>

          <Icon_linkdin />
          <div
            className={
              "border rounded-full px-3 py-1 text-[1.8svh] whitespace-nowrap " +
              (estSombre
                ? "bg-[#050A24] border-[#ACACAC] text-gray-200"
                : "bg-white border-gray-300 text-gray-700")
            }
          >
            {person.signature}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmpilementCarte({ personne, theme }) {
  const total = personne.length;
  const [index_actif, setActiveIndex] = useState(0);
  const [index_sortant, setLeavingIndex] = useState(null);
  const [en_pause, setIsPaused] = useState(false);

  useEffect(() => {
    if (en_pause || total <= 1) return undefined;
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        setLeavingIndex(prev);
        return (prev + 1) % total;
      });
    }, 3200);
    return () => clearInterval(id);
  }, [en_pause, total]);

  useEffect(() => {
    if (index_sortant === null) return undefined;
    const t = setTimeout(() => setLeavingIndex(null), 2500);
    return () => clearTimeout(t);
  }, [index_sortant]);

  return (
    <div
      className="relative mx-auto w-full"
      style={{ perspective: "2200px", minHeight: "340px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {personne.map((person, index) => {
        const devant = index === index_actif;
        const sortant = index === index_sortant;

        let style = {
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          transformOrigin: "0% 100%",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          borderRadius: "1.5rem",
          clipPath: "inset(0 round 1.5rem)",
          transition:
            "transform 3.0s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 1.2s, box-shadow 1.2s ease",
        };

        if (sortant) {
          style.transform = "rotateX(40deg) rotateY(-240deg) rotateZ(-20deg) scale(0.9) translateY(40px)";
          style.zIndex = total + 2;
          style.opacity = 0;
          style.boxShadow = "0 30px 70px rgba(0,0,0,0.55)";
        } else if (devant) {
          style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
          style.zIndex = total + 1;
          style.opacity = 1;
          style.boxShadow = "0 20px 40px rgba(0,0,0,0.45)";
        } else {
          style.transform = "rotateY(0deg)";
          style.zIndex = 0;
          style.opacity = 0;
          style.pointerEvents = "none";
        }
        return (
          <div key={person.nom} style={style}>
            <Information person={person} theme={theme} />
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const { mode } = useThemeMode();
  const estSombre = mode === "dark";

  return (
    <div
      className={
        "min-h-screen flex flex-col transition-colors duration-300 " +
        (estSombre ? "bg-[#050A24] text-white" : "text-[#050A24]")
      }
      style={
        !estSombre
          ? { backgroundColor: "white" }
          : {}
      }
    >
      <div className="flex-1 w-full">
        <main className="max-w-5xl mx-auto px-10 py-14">
          <div className="mt-10 w-full max-w-[1200px]">
            <TypewriterTitle />
          </div>

          <section className="mb-8">
            <h2 className="font-semibold text-[3.5svh] mb-3">
              What is SERVICE MANAGER?
            </h2>
            <p
              className={
                "text-[2.2svh] leading-relaxed mb-4 " +
                (estSombre ? "text-gray-300" : "text-gray-600")
              }
            >
              Service Manager is a web interface that simplifies the
              supervision and control of system services (systemd) on your
              servers. No more juggling command lines: see at a glance the
              total number of services, which ones are active, and which are
              stopped, then start, stop, or restart each service directly
              from the dashboard. Filter by status, view the details of each
              daemon (description, load path, preset state), and keep a
              clear, centralized view of the infrastructure you manage.
            </p>
            <p
              className={
                "text-[2.2svh] leading-relaxed " +
                (estSombre ? "text-gray-300" : "text-gray-600")
              }
            >
              This project is currently in active development. The version
              presented here is a static mockup intended to illustrate the
              user experience and intended features; integration of a
              backend and database for real-time service management is in
              progress.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold text-[3.5svh] mb-3">Who are us?</h2>
            <p
              className={
                "text-[2.2svh] leading-relaxed " +
                (estSombre ? "text-gray-300" : "text-gray-600")
              }
            >
              We are the Tracker Team, a team of IT students at ENI
              passionate about system administration tools that save time
              for IT professionals. As part of our training, we design
              concrete solutions to better understand the real-world
              challenges of infrastructure management. Our goal: to turn
              repetitive technical tasks into a simple, visual, and reliable
              experience, accessible to both experienced administrators and
              teams in training.
            </p>
          </section>

          <EmpilementCarte personne={tracker_team} theme={mode} />
        </main>
      </div>
    </div>
  );
}