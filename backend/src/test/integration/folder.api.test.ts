import { test, expect } from "bun:test"
import { app } from "../../../index"

test("GET folders", async ()=>{
  const res = await app.handle(
    new Request("http://localhost/api/v1/folders")
  )

  expect(res.status).toBe(200)
})