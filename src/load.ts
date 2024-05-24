import path from "path";
export default function loadFnStore() {
  return async (_: any) => {
    const _module = await import(path.join(process.cwd(), "src/fnStore/packages.json"), {
      assert: { type: "json" },
    });
    // console.log("loadFnMeta", _module.default);
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("https://function-store.zeabur.app/api/meta", {
      method: "POST",
      headers,
      body: JSON.stringify(_module.default),
    });
    const result = await response.json();
    if (result.errorCode === 0) {
      return result.data;
    }
    return [];
  };
}
