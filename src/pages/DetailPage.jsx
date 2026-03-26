import { useState, useEffect } from "react";
import { api } from "../data/api";
import { Ico, badgeCls } from "../components/Icons";

export default function DetailPage({ jobId, navigate }) {
  const [job, setJob]         = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getJob(jobId).then(d => { setJob(d); setLoading(false); });
  }, [jobId]);

  if (loading) return (
    <div className="dwrap">
      <div>
        <div className="skel" style={{ height:12, width:66, marginBottom:22 }} />
        <div className="dmain">
          <div className="skel" style={{ height:28, marginBottom:12 }} />
          <div className="skel" style={{ height:15, width:"52%", marginBottom:22 }} />
          <div className="skel" style={{ height:160 }} />
        </div>
      </div>
      <div className="skel" style={{ height:260 }} />
    </div>
  );

  if (!job) return <div style={{ padding:40, color:"var(--muted)" }}>Job not found.</div>;

  const fp = Math.min((job.applicants / 200) * 100, 100);
  return (
    <div className="dwrap fade-in">
      <div>
        <button className="bbtn" onClick={() => navigate("home")}><Ico.ArL /> Back to jobs</button>
        <div className="dmain">
          <div style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:26 }}>
            <div className="dlogo" style={{ background:job.logoBg, color:job.logoColor }}>{job.logo}</div>
            <div>
              <div className="dco">{job.company} · {job.field}</div>
              <div className="dtitle">{job.title}</div>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                <span className={badgeCls(job.type)}>{job.type}</span>
                <span className="bdg b-in">{job.level}</span>
              </div>
            </div>
          </div>
          <div style={{ marginBottom:26 }}>
            <div className="slbl">About the Role</div>
            <p className="ddesc">{job.description}</p>
          </div>
          <div>
            <div className="slbl">What We're Looking For</div>
            <ul className="rlist">
              {job.requirements.map((r, i) => <li key={i} className="ritem"><div className="rdot" /><span>{r}</span></li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="sbar">
        <div className="scard">
          <div className="stitle">Position Details</div>
          <div className="irow">
            {[["💼","Type",job.type],["📍","Location",job.location],["💰","Salary",job.salary],["🕐","Posted",job.posted],["🏷️","Level",job.level],["🗂️","Field",job.field]].map(([ic,k,v]) => (
              <div key={k} className="iitem">
                <div className="iico">{ic}</div>
                <div><div className="ikey">{k}</div><div className="ival">{v}</div></div>
              </div>
            ))}
          </div>
          <div className="abar">
            <div className="ablbl"><span>Applicants</span><span style={{ color:"var(--text)", fontWeight:700 }}>{job.applicants}</span></div>
            <div className="atrack"><div className="afill" style={{ width:`${fp}%` }} /></div>
          </div>
        </div>
        <div className="scard" style={{ padding:18 }}>
          <button className="acta" onClick={() => navigate("apply", jobId)}>Apply Now →</button>
          <p style={{ fontSize:11, color:"var(--muted)", textAlign:"center", marginTop:9 }}>Takes less than 5 minutes</p>
        </div>
      </div>
    </div>
  );
}
