// @ts-ignore
import { useEffect, useState } from "react";
import { Api } from "./api/Api";

const BASE_URL = "http://vne.su:8081";
const api = new Api({ baseURL: BASE_URL });
// const authData = {
//   username: 'admin',
//   password: 'admin'
// };
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIzZDAxMDUzOC04MzhkLTRmNzYtOWJmNi0xZTE1NzVmYWU2MzQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZ3JvdXBzaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJleHAiOjE3MDk1ODI4OTYsImlzcyI6Ik15QXV0aFNlcnZlciIsImF1ZCI6Ik15QXV0aENsaWVudCJ9.wCttC-d3u37yfCclCbpgf42ng4ka4YIBLKsVXcukolc";

function App() {
  // const [data, setData] = useState();

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await api.brandsList(
          {
            Name: "qq",
            Description: "ss",
            Page: 1,
            PageSize: 5,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };

    authenticate();
  }, []);

  return (
    <>
      <h1>Hi</h1>
    </>
  );
}

export default App;
