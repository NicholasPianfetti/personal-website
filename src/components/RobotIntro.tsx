"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface RobotIntroProps {
  onAnimationComplete?: () => void;
}

export default function RobotIntro({ onAnimationComplete }: RobotIntroProps = {}) {
  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    tl.set("#robot-parts", { opacity: 1 })
      .set("#name-path", { strokeDasharray: 2000, strokeDashoffset: 2000 })
      .set("#drawing-point", { opacity: 0 })

      // Start writing immediately
      .to("#drawing-point", { opacity: 1, duration: 0.2 })

      // Realistic arm movements while writing
      .to("#shoulder", {
        rotation: 15,
        transformOrigin: "center center",
        duration: 1,
        ease: "power2.inOut"
      })
      .to("#upper-arm", {
        rotation: -10,
        transformOrigin: "bottom center",
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.8")
      .to("#forearm", {
        rotation: 20,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.6")

      // Draw the name
      .to("#name-path", {
        strokeDashoffset: 0,
        duration: 8,
        ease: "none"
      }, "-=0.5")

      // Move arm to trace the name
      .to("#wrist", {
        x: 100,
        y: -20,
        duration: 8,
        ease: "none"
      }, "-=8")

      .to("#elbow", {
        rotation: -5,
        transformOrigin: "center center",
        duration: 4,
        ease: "power2.inOut"
      }, "-=6")

      // Complete
      .to("#drawing-point", { opacity: 0, duration: 0.3 })
      .call(() => {
        setTimeout(() => onAnimationComplete?.(), 1000);
      });

  }, [onAnimationComplete]);

  return (
    <section className="relative flex h-screen w-full items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="1000" height="600" viewBox="0 0 1000 600" className="max-w-full max-h-full">
          <g id="robot-parts">
            {/* Robot Base */}
            <g id="base" style={{ transformOrigin: "center center" }}>
              <rect x="80" y="450" width="120" height="100" fill="#2a2a2a" rx="10"/>
              <rect x="90" y="460" width="100" height="80" fill="#FFD700" rx="5"/>
              <circle cx="140" cy="500" r="25" fill="#2a2a2a"/>
              <circle cx="140" cy="500" r="15" fill="#FFD700"/>
            </g>

            {/* Shoulder Joint */}
            <g id="shoulder" style={{ transformOrigin: "140px 450px" }}>
              <rect x="120" y="430" width="40" height="50" fill="#FFD700" rx="5"/>
              <circle cx="140" cy="455" r="20" fill="#2a2a2a"/>
              <circle cx="140" cy="455" r="12" fill="#FFD700"/>

              {/* Upper Arm */}
              <g id="upper-arm" style={{ transformOrigin: "140px 455px" }}>
                <rect x="130" y="320" width="20" height="135" fill="#FFD700" rx="10"/>
                <circle cx="140" cy="330" r="15" fill="#2a2a2a"/>

                {/* Elbow Joint */}
                <g id="elbow" style={{ transformOrigin: "140px 320px" }}>
                  <circle cx="140" cy="320" r="18" fill="#2a2a2a"/>
                  <circle cx="140" cy="320" r="12" fill="#FFD700"/>

                  {/* Forearm */}
                  <g id="forearm" style={{ transformOrigin: "140px 320px" }}>
                    <rect x="132" y="220" width="16" height="100" fill="#FFD700" rx="8"/>

                    {/* Wrist */}
                    <g id="wrist" style={{ transformOrigin: "140px 220px" }}>
                      <circle cx="140" cy="220" r="15" fill="#2a2a2a"/>
                      <circle cx="140" cy="220" r="10" fill="#FFD700"/>

                      {/* End Effector */}
                      <g id="end-effector">
                        <rect x="135" y="200" width="10" height="30" fill="#2a2a2a" rx="5"/>
                        <circle cx="140" cy="195" r="6" fill="#FF4444"/>
                        <circle id="drawing-point" cx="140" cy="190" r="3" fill="#00FF00" opacity="0">
                          <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>

          {/* Name Path - Nicholas Pianfetti in cursive */}
          <path
            id="name-path"
            d="M 300,250
               L 300,180 L 340,220 L 340,180
               M 360,180 L 360,220 L 360,180
               M 380,220 Q 390,180 400,220 Q 410,180 420,220
               M 440,220 L 440,180 L 440,200 L 470,200 L 470,180 L 470,220
               M 490,220 Q 500,180 510,220 Q 520,250 530,220
               M 550,180 L 550,220
               M 570,220 Q 580,180 590,220
               M 610,220 Q 620,180 630,190 Q 630,200 620,210 Q 610,220 620,220

               M 300,320
               L 320,270 L 320,320
               M 340,270 L 340,320
               M 360,320 Q 370,270 380,320 Q 390,350 400,320
               M 420,270 L 420,320 L 450,320
               M 470,270 L 470,320 L 470,295 L 490,295
               M 510,320 Q 520,270 530,320
               M 550,270 L 550,320 L 550,295 L 570,295
               M 590,270 L 590,320 L 590,295 L 610,295
               M 630,270 L 630,320
               "
            stroke="#FFD700"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
