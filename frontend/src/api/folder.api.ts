const BASE_URL = "http://localhost:3000/api/v1";

export async function getTree() {
  const res = await fetch(`${BASE_URL}/folders`);
  return res.json();
}

export async function getContent(id:number){
  const res = await fetch(`${BASE_URL}/folders/${id}/content`)
  return res.json()
}

export async function searchFolders(q:string){
  const res = await fetch(`${BASE_URL}/folders/search/${q}`)
  return res.json()
}

export async function getChildren(id:number){
  const res = await fetch(`${BASE_URL}/folders/children/${id}`)
  return res.json()
}