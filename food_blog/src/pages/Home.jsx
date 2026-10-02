import React from 'react'

export default function Home() {
  return (
    <>
      <section className="home">
        <div cklassName="left">
          <h1>Food Recipe</h1>
          <h5>In this video, I have build food recipes app in Node.js. You will
            learn how to create an Express.js server, set up MongoDB, use JWT
            tokens for authentication, hash passwords and build user interfere
            using react js. </h5>
            <button>Share your Recipe</button>
        </div>
        <div className="right">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHJlY2lwZXN8ZW58MHx8MHx8&w=1000&q=80" alt="" />
        </div>
      </section>
    </>
  );
}
