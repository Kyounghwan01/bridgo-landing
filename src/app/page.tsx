"use client";
import { useRef } from "react";
import EmailContainer from "@/app/components/EmailContainer";

export default function Home() {
  const emailSectionRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleTryClick = () => {
    // 부드럽게 스크롤 이동
    emailSectionRef.current?.scrollIntoView({ behavior: "smooth" });

    // 스크롤 애니메이션 끝난 후 포커스 주기 위해 잠시 딜레이
    setTimeout(() => {
      emailInputRef.current?.focus();
    }, 500);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        fontFamily: "sans-serif",
        background: "white",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ padding: "60px 20px 20px" }}>
          <p
            style={{ fontSize: "22px", marginBottom: "10px", fontWeight: 700 }}
          >
            Build your Deram Team
            <br /> Without Breaking the Bank
          </p>
          <p
            style={{ fontSize: "16px", marginBottom: "25px", fontWeight: 500 }}
          >
            Get access to top global freelancers in development, design, and
            more - at a fraction of local costs.
          </p>

          <p
            style={{ fontSize: "22px", marginBottom: "10px", fontWeight: 700 }}
          >
            Smart outsourcing starts here.
          </p>
          <p
            style={{ fontSize: "16px", marginBottom: "20px", fontWeight: 500 }}
          >
            Hire English-speaking professionals from Indea, Southeash Aisa, and
            beyond - fully vetted, ready to deliver.
          </p>

          <div style={{ position: "relative", height: "220px" }}>
            <div style={{ position: "absolute", right: 0 }}>
              <img src={"/Illustration.png"} style={{ width: 280 }} alt="awd" />
            </div>
          </div>

          <button
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "8px",
              marginBottom: "10px",
              cursor: "pointer",
              position: "relative",
              bottom: 35,
              height: 60,
            }}
            onClick={handleTryClick}
          >
            <span style={{ fontSize: 20, fontWeight: 500, color: "#ffffff" }}>
              Start Hiring Today
            </span>
          </button>
        </div>

        <div
          style={{
            backgroundColor: "#4285f4",
            padding: "50px 20px",
            color: "white",
          }}
        >
          <div>
            <p
              style={{
                marginBottom: "20px",
                textAlign: "center",
                fontSize: 20,
                lineHeight: "30px",
                fontWeight: 900,
              }}
            >
              Describe your problem <br />
              our expert will solve it with you.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              color: "black",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src={"/icon.png"}
                style={{ width: 45, height: 45 }}
                alt="awd"
              />
              <p
                style={{
                  fontSize: 18,
                  color: "rgb(61, 61, 61)",
                  fontWeight: 700,
                }}
              >
                Tell us your story
              </p>
            </div>
            <p
              style={{
                color: "rgb(98, 98, 98)",
                fontSize: 15,
                fontWeight: 500,
                marginTop: 15,
                marginBottom: 20,
              }}
            >
              Whatever your concern, we&apos;ll listen closely and match you
              with the right expert
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              color: "black",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src={"/icon.png"}
                style={{ width: 45, height: 45 }}
                alt="awd"
              />
              <p
                style={{
                  fontSize: 18,
                  color: "rgb(61, 61, 61)",
                  fontWeight: 700,
                }}
              >
                Meet yout Expert
              </p>
            </div>
            <p
              style={{
                color: "rgb(98, 98, 98)",
                fontSize: 15,
                fontWeight: 500,
                marginTop: 15,
                marginBottom: 20,
              }}
            >
              Based on your story, our expert will offer a solution via email —
              and guide you every step of the way.
            </p>

            <p
              style={{ textAlign: "center", color: "#ff0004ff", fontSize: 14 }}
            >
              100% FREE!
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              color: "black",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src={"/icon.png"}
                style={{ width: 45, height: 45 }}
                alt="awd"
              />
              <p
                style={{
                  fontSize: 18,
                  color: "rgb(61, 61, 61)",
                  fontWeight: 700,
                }}
              >
                We protect your story
              </p>
            </div>
            <p
              style={{
                color: "rgb(98, 98, 98)",
                fontSize: 15,
                fontWeight: 500,
                marginTop: 15,
                marginBottom: 20,
              }}
            >
              No name, No exposure, No risk. All conversations are private and
              secure.
            </p>
          </div>
        </div>

        {/* real review */}
        <div style={{ padding: "50px 30px 20px" }}>
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "25px",
              textAlign: "center",
              color: "#rgb(61, 61, 61)",
              fontWeight: 900,
            }}
          >
            Real Review
          </h2>

          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "10px",
              }}
            >
              <img
                src={"/man.png"}
                style={{ width: 52, height: 52 }}
                alt="awd"
              />
              <div>
                <div style={{ fontSize: 12, marginBottom: 2 }}>
                  Alex J. Startup Founder in New York
                </div>
                <div style={{ position: "relative", right: 4 }}>
                  <img src={"/star.png"} style={{ width: 150 }} />
                </div>
              </div>
            </div>
            <p
              style={{
                marginBottom: "5px",
                fontSize: 15,
                padding: 5,
                fontWeight: 600,
              }}
            >
              "I built an entire app with $3,000 - it would've cost $15K here.
              Thie platform changed the game for out startup."
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "10px",
              }}
            >
              <img
                src={"/woman.png"}
                style={{ width: 52, height: 52 }}
                alt="awd"
              />
              <div>
                <div style={{ fontSize: 12, marginBottom: 2 }}>
                  Rachel T. Marketing Director in Sydney
                </div>
                <div style={{ position: "relative", right: 4 }}>
                  <img src={"/star.png"} style={{ width: 150 }} />
                </div>
              </div>
            </div>
            <p
              style={{
                marginBottom: "5px",
                fontSize: 15,
                padding: 5,
                fontWeight: 600,
              }}
            >
              "We've scaled faster, cut costs, and found amazing talent in
              unexpected places."
            </p>
          </div>
        </div>

        {/* email commit */}
        <div ref={emailSectionRef}>
          <EmailContainer emailInputRef={emailInputRef} />
        </div>

        {/* 마지막 footer */}
        <div
          style={{
            backgroundColor: "#002B7F",
            color: "white",
            padding: "80px 10px",
          }}
        >
          <div style={{ padding: "0 20px 30px" }}>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "40px",
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              Examples of Concerns
            </h2>

            <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
              <p style={{ marginBottom: "15px" }}>
                I&apos;m too busy to make travel plans.
              </p>
              <p style={{ marginBottom: "15px" }}>
                I want to get a girlfriend/boyfriend, but how do I do that?
              </p>
              <p style={{ marginBottom: "15px" }}>
                I want to lose weight, but what should I do for my diet and
                exercise?
              </p>
              <p style={{ marginBottom: "15px" }}>
                What&apos;s the right personal color for me?
              </p>
              <p style={{ marginBottom: "15px" }}>
                What should I eat for lunch today?
              </p>
              <p style={{ marginBottom: "15px" }}>
                How can I improve my relationship with my partner?
              </p>
            </div>
          </div>

          <div style={{ paddingLeft: 10 }}>
            <p style={{ fontSize: 15, lineHeight: "18px" }}>
              Who we are?
              <br />
              Bridgo : The bridge connecting you to the world.
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="mailto:projectein00@gmail.com"
              >
                projectein00@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
