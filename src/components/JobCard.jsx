import { Ico, badgeCls } from "./Icons";

export function SkelCard() {
  return (
    <div className="jcard" style={{ cursor:"default", pointerEvents:"none" }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:13 }}>
        <div className="skel" style={{ width:40, height:40 }} />
        <div className="skel" style={{ width:58, height:18 }} />
      </div>
      <div className="skel" style={{ height:10, width:"38%", marginBottom:5 }} />
      <div className="skel" style={{ height:18, width:"78%", marginBottom:3 }} />
      <div className="skel" style={{ height:13, width:"48%", marginBottom:11 }} />
      <div style={{ display:"flex", gap:10, marginBottom:11 }}>
        <div className="skel" style={{ height:11, width:65 }} />
        <div className="skel" style={{ height:11, width:50 }} />
      </div>
      <div className="skel" style={{ height:1, marginBottom:12 }} />
      <div style={{ display:"flex", justifyContent:"space-between" }}>
        <div className="skel" style={{ height:13, width:75 }} />
        <div className="skel" style={{ width:28, height:28 }} />
      </div>
    </div>
  );
}

export function JobCard({ job, onClick, style }) {
  return (
    <div className="jcard" onClick={() => onClick(job.id)} style={style}>
      <div className="ct">
        <div className="clogo" style={{ background:job.logoBg, color:job.logoColor }}>{job.logo}</div>
        <div className="brow"><span className={badgeCls(job.type)}>{job.type}</span></div>
      </div>
      <div className="cfield">{job.field} · {job.level}</div>
      <div className="ctitle">{job.title}</div>
      <div className="cco">{job.company}</div>
      <div className="cmeta">
        <span className="mi"><Ico.Pin />{job.location}</span>
        <span className="mi"><Ico.Clock />{job.posted}</span>
      </div>
      <div className="cfoot">
        <span className="csal">{job.salary}</span>
        <div className="carrow"><Ico.ArR /></div>
      </div>
    </div>
  );
}
