import React, { useEffect } from "react"
import Page from "./Page"

function Home() {
  return (
    <Page title="Trang chủ">
      <h2 className="text-center">
        {/* Hello <strong>{localStorage.getItem("complexappUsername")}</strong>, your feed is empty. */}
        Phần mềm học trực tuyến
    </h2>
      <p className="lead text-muted text-justify ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolorum doloribus obcaecati earum quis fugiat modi repudiandae eveniet esse, omnis quod et unde ad necessitatibus ullam repellendus veniam eum pariatur odio beatae. Repellat voluptas nobis maxime! Quaerat, animi dolore expedita, praesentium ullam eius beatae corrupti nisi obcaecati minus necessitatibus aut enim nostrum quibusdam debitis doloribus ut, repudiandae vero cumque voluptates ipsa! Repellendus eaque exercitationem vero veniam qui adipisci, recusandae quo minima laborum velit eveniet illum libero eius iure, asperiores, labore accusantium ipsa placeat voluptates praesentium. Repudiandae illo saepe laboriosam voluptate provident esse architecto distinctio recusandae dolores. Nobis enim error incidunt.
    </p>
    </Page>
  )
}

export default Home