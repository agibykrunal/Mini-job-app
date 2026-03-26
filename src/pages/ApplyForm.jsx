import { useState, useEffect, useRef } from "react";
import { api } from "../data/api";
import { Ico } from "../components/Icons";

export default function ApplyForm({ jobId, navigate, onToast }) {
  const [job,  setJob]  = useState(null);
  const [form, setForm] = useState({ name:"", email:"", resume_link:"", cover_letter:"" });
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);
  const [errs, setErrs] = useState({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const fRef = useRef();

  useEffect(() => { if (jobId) api.getJob(jobId).then(setJob); }, [jobId]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!file && !form.resume_link.trim()) e.resume = "Upload your resume or provide a URL";
    else if (!file && form.resume_link && !/^https?:\/\//.test(form.resume_link)) e.resume_link = "URL must start with http:// or https://";
    if (!form.cover_letter.trim()) e.cover_letter = "Cover letter is required";
    else if (form.cover_letter.trim().length < 50) e.cover_letter = "Write at least 50 characters";
    return e;
  };

  const submit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrs(e); return; }
    setBusy(true);
    const r = await api.submitApplication({ job_id:jobId, job_title:job?.title, ...form, resume_file:file?.name||null });
    const prev = JSON.parse(localStorage.getItem("cb_apps") || "[]");
    localStorage.setItem("cb_apps", JSON.stringify([...prev, r]));
    setBusy(false); setDone(true);
    onToast("Application submitted!");
  };

  const upd = k => e => { setForm(p => ({ ...p, [k]:e.target.value })); if (errs[k]) setErrs(p => ({ ...p, [k]:undefined })); };
  const handleFile = e => {
    const f = e.dataTransfer?.files[0] || e.target?.files?.[0];
    if (f) { setFile(f); setErrs(p => ({ ...p, resume:undefined })); }
    setDrag(false);
  };

  if (done) return (
    <div className="fwrap fade-in">
      <div className="fcard">
        <div className="sw">
          <div className="sico">✓</div>
          <div className="stit">Application Received</div>
          <p className="ssub">Your application for <strong style={{ color:"var(--text)" }}>{job?.title}</strong> at {job?.company} is in. We'll be in touch soon.</p>
          <button className="acta" onClick={() => navigate("home")}>Browse More Roles</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fwrap fade-in">
      <button className="bbtn" style={{ marginBottom:20 }} onClick={() => navigate("detail", jobId)}><Ico.ArL /> Back to job</button>
      <div className="fcard">
        <div className="fey">Apply Now</div>
        <h2 className="fhead">{job ? job.title : "Application"}</h2>
        <p className="fsub">{job ? `${job.company} · ${job.location} · ${job.type}` : "Fill in your details below."}</p>

        <div className="fld">
          <label className="flbl">Full Name <span className="req">*</span></label>
          <input type="text" placeholder="Jane Smith" className={`finput${errs.name?" err":""}`} value={form.name} onChange={upd("name")} />
          {errs.name && <div className="ferr">{errs.name}</div>}
        </div>

        <div className="fld">
          <label className="flbl">Email Address <span className="req">*</span></label>
          <input type="email" placeholder="jane@example.com" className={`finput${errs.email?" err":""}`} value={form.email} onChange={upd("email")} />
          {errs.email && <div className="ferr">{errs.email}</div>}
        </div>

        <div className="fld">
          <label className="flbl">Resume / CV <span className="req">*</span></label>
          <div className={`rzne${drag?" dg":""}${file?" hf":""}`}
            onDragOver={e => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleFile}
            onClick={() => !file && fRef.current?.click()}
          >
            {!file && <input ref={fRef} type="file" className="rinput" accept=".pdf,.doc,.docx" onChange={handleFile} />}
            <div className="rico">{file ? "📄" : <Ico.Up />}</div>
            {file ? (
              <>
                <div className="rtitle" style={{ color:"var(--green)" }}>Resume attached</div>
                <div className="rfn">{file.name}</div>
                <button onClick={e => { e.stopPropagation(); setFile(null); }}
                  style={{ marginTop:7, background:"none", border:"none", color:"var(--red)", fontSize:11, cursor:"pointer", fontWeight:700 }}>
                  Remove ×
                </button>
              </>
            ) : (
              <>
                <div className="rtitle">Drop your resume here</div>
                <div className="rsub">PDF, DOC, DOCX · or click to browse</div>
              </>
            )}
          </div>
          {!file && (
            <div style={{ marginTop:10 }}>
              <label className="flbl" style={{ fontSize:10, color:"var(--muted)" }}>Or paste a link</label>
              <input type="url" placeholder="https://linkedin.com/in/yourname" className={`finput${errs.resume_link?" err":""}`} value={form.resume_link} onChange={upd("resume_link")} />
              {errs.resume_link && <div className="ferr">{errs.resume_link}</div>}
            </div>
          )}
          {errs.resume && <div className="ferr">{errs.resume}</div>}
        </div>

        <div className="fld">
          <label className="flbl">Cover Letter <span className="req">*</span></label>
          <textarea placeholder="Tell us why you're a great fit for this role…" className={`finput${errs.cover_letter?" err":""}`} value={form.cover_letter} onChange={upd("cover_letter")} rows={6} />
          <div className="cct">{form.cover_letter.length} chars</div>
          {errs.cover_letter && <div className="ferr">{errs.cover_letter}</div>}
        </div>

        <button className="subbtn" onClick={submit} disabled={busy}>
          {busy ? <><div className="spin" />Submitting…</> : "Submit Application →"}
        </button>
      </div>
    </div>
  );
}
