import { describe, it, expect } from "vitest"

describe("Explorer E2E", () => {
  it("open root page", async () => {
    const res = await fetch("http://localhost:5173")
    expect(res.status).toBe(200)
  })

  it("load folders api", async () => {
    const res = await fetch(
      "http://localhost:3000/api/v1/folders"
    )

    const data = await res.json()

    expect(Array.isArray(data)).toBe(true)
  })
})