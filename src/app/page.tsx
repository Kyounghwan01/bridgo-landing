export default function Home() {
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
        <div style={{ padding: "100px 20px 20px" }}>
          <p
            style={{ fontSize: "32px", marginBottom: "10px", fontWeight: 900 }}
          >
            Need help?
          </p>
          <p
            style={{ fontSize: "24px", marginBottom: "20px", fontWeight: 900 }}
          >
            You&apos;re in the right place!
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
          >
            <span style={{ fontSize: 20, fontWeight: 500, color: "#ffffff" }}>
              Try it for free
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
                fontSize: 16,
                fontWeight: 500,
                marginTop: 20,
                marginBottom: 40,
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
                Tell us your story
              </p>
            </div>
            <p
              style={{
                color: "rgb(98, 98, 98)",
                fontSize: 16,
                fontWeight: 500,
                marginTop: 20,
                marginBottom: 40,
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
                Tell us your story
              </p>
            </div>
            <p
              style={{
                color: "rgb(98, 98, 98)",
                fontSize: 16,
                fontWeight: 500,
                marginTop: 20,
                marginBottom: 40,
              }}
            >
              Whatever your concern, we&apos;ll listen closely and match you
              with the right expert
            </p>
          </div>
        </div>

        {/* real review */}
        <div style={{ padding: "50px 30px" }}>
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
                  Mr. Daniel (University Student)
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
              &quot;I was freaking out about studying abroad. Now I feel
              ready.&quot;
            </p>
            <p
              style={{
                color: "rgb(61, 61, 61)",
                fontSize: 13,
                lineHeight: "20px",
              }}
            >
              I had zero clarity. I didn&apos;t know where to go or even why I
              wanted to. Bridgo helped me focus on what I really care about, not
              just what sounds cool.
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
                  Mrs. Grace(Marketing Associate)
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
              &quot;Was totally lost with work stuff, but bridgo helped me
              figure it out.&quot;
            </p>
            <p
              style={{
                color: "rgb(61, 61, 61)",
                fontSize: 13,
                lineHeight: "20px",
              }}
            >
              I was seriously stuck on whether I should quit or try a new role
              at my company. The expert, Jacob, helped me list out my priorities
              and even suggested how to approach my manager. Long story short —
              I switched teams last month, and I’m finally feeling excited about
              work again.
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
                  Mrs. Hana (Woring Mom)
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
              &quot;Honestly, I just needed someone to listen — and she really
              did.&quot;
            </p>
            <p
              style={{
                color: "rgb(61, 61, 61)",
                fontSize: 13,
                lineHeight: "20px",
              }}
            >
              Balancing my job and kids was crushing me. I didn’t expect much,
              but the expert gave me super practical advice that actually fits
              my life. Nothing fancy, just small, doable things. I’ve been
              sleeping better and feel way less overwhelmed.
            </p>
          </div>
        </div>

        {/* email commit */}
        <div
          style={{
            backgroundColor: "rgb(215, 232, 255)",
            padding: "80px 30px",
          }}
        >
          <h2
            style={{
              color: "rgb(61, 61, 61)",
              fontSize: "25px",
              marginBottom: "20px",
              borderBottom: "1px solid rgb(61, 61, 61)",
              paddingBottom: 20,
            }}
          >
            Please share your concern
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}
            >
              Email <span style={{ color: "#ff4444" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="ex) abade@abc.com"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                boxSizing: "border-box",
                background: "#ffffff",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}
            >
              Concern <span style={{ color: "#ff4444" }}>*</span>
            </label>
            <textarea
              placeholder="Detail your Concern"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                minHeight: "100px",
                boxSizing: "border-box",
                background: "#ffffff",
              }}
            />
          </div>

          <button
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "rgb(13, 110, 253)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
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

          <div>
            <p style={{fontSize: 15, lineHeight: '18px'}}>
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
