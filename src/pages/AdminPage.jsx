import { useState, useEffect } from "react";
import { api } from "../data/api";
import { Ico } from "../components/Icons";

export default function AdminPage({ navigate }) {
  const [apps, setApps]       = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { api.getApplications().then(d => { setApps(d); setLoading(false); }); }, []);

  return (
    <div className="awrap fade-in">
      <button className="bbtn" style={{ marginBottom:18 }} onClick={() => navigate("home")}><Ico.ArL /> Back to jobs</button>
      <div className="atit">Applications</div>
      <p className="asub">{apps.length} application{apps.length !== 1 ? "s" : ""} received</p>
      <div className="tbl">
        <div className="thead"><span>Applicant</span><span>Email</span><span>Role</span><span>Cover Letter</span><span>Status</span></div>
        {loading && <div style={{ padding:28 }}>{[0,1,2].map(i => <div key={i} className="skel" style={{ height:16, marginBottom:9 }} />)}</div>}
        {!loading && apps.length === 0 && <div className="empty"><div className="eico">📭</div><p>No applications yet.</p></div>}
        {!loading && apps.map((a, i) => (
          <div key={a.id} className="trow" style={{ animationDelay:`${i * 0.04}s` }}>
            <span className="tnm">{a.name}</span>
            <span className="tv">{a.email}</span>
            <span className="tv">{a.job_title || `Job #${a.job_id}`}</span>
            <span className="tv">{a.cover_letter}</span>
            <span className="sbdg">Received</span>
          </div>
        ))}
      </div>
    </div>
  );
}
