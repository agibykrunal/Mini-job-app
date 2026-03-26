import { useState, useCallback } from "react";
import { STYLES } from "./styles/themes";
import { Ico } from "./components/Icons";
import Toast      from "./components/Toast";
import HomePage   from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ApplyForm  from "./pages/ApplyForm";
import AdminPage  from "./pages/AdminPage";

export default function App() {
  const [page,  setPage]  = useState("home");
  const [jobId, setJobId] = useState(null);
  const [toast, setToast] = useState(null);
  const [dark,  setDark]  = useState(false);

  const nav = useCallback((p, id = null) => {
    setPage(p); setJobId(id);
    window.scrollTo({ top:0, behavior:"smooth" });
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <div className={`app ${dark ? "dark" : "light"}`}>

        <header className="hdr">
          <button className="hdr-logo" onClick={() => nav("home")}>
            <div className="logo-sq">CB</div>
            CareerBoost
          </button>
          <nav className="hdr-r">
            <button className={`nav-btn${page==="home"?" on":""}`}  onClick={() => nav("home")}>Jobs</button>
            <button className={`nav-btn${page==="admin"?" on":""}`} onClick={() => nav("admin")}>Admin</button>
            <div className="hdivider" />
            <button className={`tog${dark?" dk":""}`} onClick={() => setDark(d => !d)} title={dark?"Light mode":"Dark mode"}>
              <div className="tog-k">{dark ? <Ico.Moon /> : <Ico.Sun />}</div>
            </button>
            <div className="hdivider" />
            <button className="nav-cta" onClick={() => nav("home")}>Post a Job</button>
          </nav>
        </header>

        <main style={{ flex:1, width:"100%" }}>
          {page==="home"   && <HomePage   navigate={nav} />}
          {page==="detail" && <DetailPage jobId={jobId} navigate={nav} />}
          {page==="apply"  && <ApplyForm  jobId={jobId} navigate={nav} onToast={m => setToast(m)} />}
          {page==="admin"  && <AdminPage  navigate={nav} />}
        </main>

        {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
      </div>
    </>
  );
}
