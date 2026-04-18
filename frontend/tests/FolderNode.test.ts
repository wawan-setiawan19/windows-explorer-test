import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import FolderNode from "../src/components/FolderNode.vue"

describe("FolderNode", () => {
  it("render folder name", () => {
    const wrapper = mount(FolderNode, {
      props: {
        folder: { id: 1, name: "Documents" },
        selectedId: null
      }
    })

    expect(wrapper.text()).toContain("Documents")
  })
})