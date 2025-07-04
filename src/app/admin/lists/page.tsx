"use client";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";

const Index = () => {
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    getLists();
  }, []);

  const getLists = async () => {
    const { data, status } = await supabase.from("bridgo-email").select("*");

    if (data?.length) {
      setLists(data);
    }
  };
  return (
    <div style={{ padding: 30 }}>
      <p style={{ fontSize: 30, fontWeight: 900 }}>submit list</p>

      <div style={{ marginTop: 20 }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
          }}
        >
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "80%" }} />
          </colgroup>

          <thead>
            <tr style={{ backgroundColor: "#d7e8ff" }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Concern</th>
            </tr>
          </thead>

          <tbody>
            {lists.map((item, index) => (
              <tr key={item.id || index}>
                <td style={tdStyle}>{item.id}</td>
                <td style={tdStyle}>{item.email}</td>
                <td style={tdStyle}>{item.concern}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;

const thStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  textAlign: "left" as const,
  fontWeight: "bold",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ccc",
};
