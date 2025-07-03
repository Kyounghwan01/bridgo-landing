import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>

      {/* 상단 영역 */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>Need help?</h1>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>You&apos;re in the right place!</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Image src="/help.png" alt="help" width={200} height={150} />
        </div>
        <button style={{ padding: '12px 24px', background: '#333', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px' }}>
          Try it for free
        </button>
      </div>

      {/* 파란 영역 */}
      <div style={{ background: '#338af3', padding: '40px 20px' }}>
        <h2 style={{ color: 'white', fontSize: '18px', textAlign: 'center', marginBottom: '24px' }}>
          Describe your problem<br />
          our expert will solve it with you.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '24px', color: '#338af3' }}>✔</span>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px' }}>Tell us your story</h3>
              <p style={{ margin: 0 }}>Whatever your concern, we’ll listen closely and match you with the right expert</p>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '24px', color: '#338af3' }}>✔</span>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px' }}>Meet your Expert</h3>
              <p style={{ margin: 0 }}>Based on your story, our expert will offer a solution via email — and guide you every step of the way.</p>
              <p style={{ marginTop: '8px', color: 'red', fontWeight: 'bold' }}>100% FREE!</p>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '24px', color: '#338af3' }}>✔</span>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px' }}>We protect your story</h3>
              <p style={{ margin: 0 }}>No name, No exposure, No risk. All conversations are private and secure.</p>
            </div>
          </div>

        </div>
      </div>

      {/* 하단 리뷰 및 폼 영역 */}
      <div style={{ background: '#f5f5f5', padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '22px', marginBottom: '24px' }}>Real Review</h2>

        {/* 리뷰 카드 */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ marginRight: '12px' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#ddd' }}></div>
          </div>
          <div>
            <strong>Mr. Daniel (University Student)</strong>
            <div style={{ color: 'red', fontSize: '20px' }}>★★★★★</div>
            <blockquote style={{ fontSize: '16px', marginTop: '8px' }}>
              &quot;I was freaking out about studying abroad. Now I feel ready.&quot;
            </blockquote>
            <p>I had zero clarity. I didn’t know where to go or even why I wanted to. Bridgo helped me focus on what I really care about, not just what sounds cool.</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ marginRight: '12px' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#ddd' }}></div>
          </div>
          <div>
            <strong>Mrs. Grace (Marketing Associate)</strong>
            <div style={{ color: 'red', fontSize: '20px' }}>★★★★★</div>
            <blockquote style={{ fontSize: '16px', marginTop: '8px' }}>
              &quot;Was totally lost with work stuff, but bridgo helped me figure it out.&quot;
            </blockquote>
            <p>I was stuck on whether to quit or try a new role. The expert helped me list priorities and suggested how to approach my manager. I switched teams and feel excited again.</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ marginRight: '12px' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#ddd' }}></div>
          </div>
          <div>
            <strong>Mrs. Hana (Working Mom)</strong>
            <div style={{ color: 'red', fontSize: '20px' }}>★★★★★</div>
            <blockquote style={{ fontSize: '16px', marginTop: '8px' }}>
              &quot;Honestly, I just needed someone to listen — and she really did.&quot;
            </blockquote>
            <p>The expert gave me practical advice that fits my life. Small doable things. I’ve been sleeping better and feel way less overwhelmed.</p>
          </div>
        </div>

        {/* 폼 영역 */}
        <div style={{ background: '#cce4ff', padding: '20px', borderRadius: '12px', marginTop: '40px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Please share your concern</h3>

          <label>Email *</label>
          <input type="email" placeholder="ex) abade@abc.com" style={{ width: '100%', padding: '8px', margin: '8px 0 16px', borderRadius: '6px', border: '1px solid #ccc' }} />

          <label>Concern *</label>
          <textarea placeholder="Detail your Concern" style={{ width: '100%', padding: '8px', height: '100px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '16px' }}></textarea>

          <button style={{ width: '100%', padding: '12px', background: '#007aff', color: 'white', border: 'none', borderRadius: '6px' }}>Submit</button>
        </div>
      </div>

    </div>
  );
}
