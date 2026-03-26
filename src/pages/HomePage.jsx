import { useState, useEffect, useMemo, useRef } from "react";
import { api } from "../data/api";
import { ALL_JOBS, COMPANIES, LOCATIONS } from "../data/constants";
import { Ico } from "../components/Icons";
import { JobCard, SkelCard } from "../components/JobCard";

const PAGE_SIZE = 30;
const TYPES_F  = ["All","Full-Time","Part-Time","Remote","Internship","Contract","Freelance"];
const LEVELS_F = ["All","Intern","Junior","Mid","Senior","Lead","Staff","Principal","Manager","Director","VP","Executive"];
const FIELDS_F = ["All","Engineering","Frontend","Backend","Full-Stack","Mobile","AI/ML","Data Science","Analytics","DevOps","Cloud","Security","Design","Product","Marketing","Sales","Finance","HR","Operations","QA","Content","IT","Research","BioTech","Fintech","Legal"];

export default function HomePage({ navigate }) {
  const [jobs, setJobs]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ]             = useState("");
  const [tf, setTf]           = useState("All");
  const [lf, setLf]           = useState("All");
  const [ff, setFf]           = useState("All");
  const [pg, setPg]           = useState(1);
  const inpRef                = useRef();

  useEffect(() => { api.getJobs().then(d => { setJobs(d); setLoading(false); }); }, []);

  const filtered = useMemo(() => {
    const sq = q.toLowerCase().trim();
    return jobs.filter(j => {
      const mq = !sq || j.title.toLowerCase().includes(sq) || j.company.toLowerCase().includes(sq)
        || j.location.toLowerCase().includes(sq) || j.field.toLowerCase().includes(sq) || j.level.toLowerCase().includes(sq);
      return mq && (tf==="All"||j.type===tf) && (lf==="All"||j.level===lf) && (ff==="All"||j.field===ff);
    });
  }, [jobs, q, tf, lf, ff]);

  useEffect(() => setPg(1), [q, tf, lf, ff]);
  const shown = filtered.slice(0, pg * PAGE_SIZE);

  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="hero">
        <div className="hero-glow" />
        <div className="hero-tag"><div className="ldot" />Live Opportunities</div>
        <h1 className="hero-h1">Your next great role<br/>is <em>waiting</em>.</h1>
        <p className="hero-sub">From internships to C-suite — every field, every level. Real companies hiring right now.</p>
        <div className="hero-stats">
          <div><div className="stat-n">{ALL_JOBS.length.toLocaleString()}+</div><div className="stat-l">Open Roles</div></div>
          <div><div className="stat-n">{COMPANIES.length}</div><div className="stat-l">Companies</div></div>
          <div><div className="stat-n">{FIELDS_F.length - 1}</div><div className="stat-l">Fields</div></div>
          <div><div className="stat-n">{LOCATIONS.length}</div><div className="stat-l">Locations</div></div>
        </div>
      </div>

      {/* Search */}
      <div className="search-sec">
        <div className="sbox">
          <div className="sico"><Ico.Search /></div>
          <input ref={inpRef} className="sinput" placeholder="Search roles, companies, skills, locations…" value={q} onChange={e => setQ(e.target.value)} />
          {q && <button className="sclear" onClick={() => { setQ(""); inpRef.current?.focus(); }}>×</button>}
        </div>
        <div className="frow">
          <span className="fgl">Type</span>
          {TYPES_F.map(f => <button key={f} className={`chip${tf===f?" on":""}`} onClick={() => setTf(f)}>{f}</button>)}
          <div style={{ width:"100%", height:0 }} />
          <span className="fgl">Level</span>
          {LEVELS_F.map(f => <button key={f} className={`chip${lf===f?" on":""}`} onClick={() => setLf(f)}>{f}</button>)}
          <div style={{ width:"100%", height:0 }} />
          <span className="fgl">Field</span>
          {["All","Engineering","Design","Product","AI/ML","Data Science","Marketing","DevOps","Security","Finance","Sales","Mobile"].map(f => (
            <button key={f} className={`chip${ff===f?" on":""}`} onClick={() => setFf(f)}>{f}</button>
          ))}
          <span className="rmeta"><b>{filtered.length.toLocaleString()}</b> results</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid-wrap">
        <div className="jgrid">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <SkelCard key={i} />)
            : shown.map((job, i) => (
                <JobCard key={job.id} job={job} onClick={id => navigate("detail", id)}
                  style={{ animationDelay:`${Math.min(i % PAGE_SIZE, 18) * 0.035}s` }} />
              ))
          }
        </div>
        {!loading && filtered.length === 0 && <div className="empty"><div className="eico">🔍</div><p>No roles match your search.</p></div>}
        {shown.length < filtered.length && (
          <div className="lmore">
            <button className="lbtn" onClick={() => setPg(p => p + 1)}>
              Load more · {filtered.length - shown.length} remaining
            </button>
          </div>
        )}
        {!loading && shown.length >= filtered.length && filtered.length > 0 && (
          <div style={{ textAlign:"center", padding:"32px 0 52px", fontSize:12, color:"var(--muted)" }}>
            All {filtered.length.toLocaleString()} roles shown
          </div>
        )}
      </div>
    </div>
  );
}
