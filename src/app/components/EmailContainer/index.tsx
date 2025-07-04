"use client";
import { supabase } from "@/lib/supabaseClient";
import { RefObject, useState } from "react";

const Index = ({
  emailInputRef,
}: {
  emailInputRef: RefObject<HTMLInputElement | null>;
}) => {
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleConcernChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConcern(e.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const isFormValid = validateEmail(email) && concern.trim().length > 0;

  const submit = async () => {
    const { data } = await supabase
      .from("bridgo-email")
      .insert({ email, concern })
      .select();

    if (data?.length) {
      alert(
        "Thank you for sharing your concern. We will get back to you soon."
      );
      setEmail("");
      setConcern("");
    }
  };

  return (
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
          style={{ display: "block", marginBottom: "5px", fontWeight: 500, fontSize: 18 }}
        >
          Email <span style={{ color: "#ff4444" }}>*</span>
        </label>
        <input
          type="email"
          ref={emailInputRef}
          placeholder="ex) abade@abc.com"
          value={email}
          onChange={handleEmailChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxSizing: "border-box",
            background: "#ffffff",
            color: "#000000",
            fontSize: "16px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: 500, fontSize: 18 }}
        >
          Concern <span style={{ color: "#ff4444" }}>*</span>
        </label>
        <textarea
          value={concern}
          onChange={handleConcernChange}
          placeholder="Detail your Concern"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            minHeight: "150px",
            boxSizing: "border-box",
            background: "#ffffff",
            color: "#000000",
            fontSize: "16px",
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          padding: "15px",
          backgroundColor: isFormValid
            ? "rgb(13, 110, 253)"
            : "rgb(160, 190, 230)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: isFormValid ? "pointer" : "not-allowed",
          fontSize: 18
        }}
        onClick={submit}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </div>
  );
};

export default Index;
