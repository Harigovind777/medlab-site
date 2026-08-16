# Medlab Enterprises — website

Static website for Medlab Enterprises — sole authorised AOSYS distributor for
Thiruvananthapuram, Kollam, Pathanamthitta and Alappuzha.
Plain HTML, CSS and JavaScript. No build step, no dependencies, no server code.

## Run it locally

Double-click `index.html`, or serve the folder:

```bash
cd /Users/harigovind/Desktop/medlab
python3 -m http.server 8000
# then open http://localhost:8000
```

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, what we do, the nine product lines, territory, materials |
| `about.html` | The business, the proprietor, how we work, the AOSYS appointment |
| `products.html` | All nine product lines with implant tables and material grades |
| `coverage.html` | The four-district territory, the authorisation, ordering, district detail |
| `contact.html` | Address, phone numbers, enquiry form, map |

## Assets

```
assets/css/style.css     design system + all page styles
assets/js/main.js        mobile nav, scroll reveal, enquiry form
assets/img/logo.svg      full logo lockup (mark + wordmark)
assets/img/logo-mark.svg square mark only — use for WhatsApp, letterhead, stamps
assets/img/favicon.svg   browser tab icon
```

## The logo

The "M" of Medlab is drawn as an orthopedic locking plate — a contoured bar with screw
holes punched through at each vertex. The centre hole is filled in orange: the fixed
screw. It reads as a monogram at large sizes and as a distinct mark at favicon size.

Colours: navy `#0E2E3A`, deep teal `#164A5B`, signal orange `#F26522`.

The mark is vector, so it scales to any size without loss. For print (visiting cards,
letterheads, banners), give `logo.svg` to the printer directly.

## Design tokens

Defined at the top of `style.css` under `:root`. Change a value there and it updates
site-wide.

- **Navy** `#0E2E3A` — brand, headers, dark sections
- **Signal orange** `#F26522` — calls to action only, never decoration
- **Steel** `#5C7A88` — body text on light backgrounds
- **Type** — Archivo (headings), IBM Plex Sans (body), IBM Plex Mono (spec data and labels)

Fonts load from Google Fonts with a system-font fallback, so the site still reads
correctly if the network is slow or the fonts are blocked.

---

## Confirmed from the AOSYS authorisation letter (05 June 2026)

Extracted from `MEDLAB ENTERPRISES_AL_AREAS.pdf` and now reflected across the site:

| Field | Value |
|-------|-------|
| Principal | AOSYS Private Limited, Village Kuha, Tal. Daskroi, Ahmedabad 382433, Gujarat |
| AOSYS manufacturing licence | `MFG/MD/2022/000248` — **held by AOSYS, not by Medlab** |
| Territory | Thiruvananthapuram (Trivandrum), Kollam, Pathanamthitta, Alappuzha |
| Scope | All types of orthopaedic implants, surgical instruments and external fixators |
| Basis | **Exclusive** — no other company or individual authorised in that territory |
| Valid until | 31 March 2027, or earlier revocation |
| Signed | Ritesh Patel, Director |

### Judgement calls made — review these

1. **The expiry date is deliberately NOT on the website.** Publishing "valid till 31 March
   2027" invites buyers to discount you as the date approaches, and creates a maintenance
   trap. **Diarise the renewal for early 2027** — the site will quietly become inaccurate
   the day it lapses.
2. **The licence number is attributed to AOSYS**, worded as "manufactured by AOSYS under
   drug manufacturing licence MFG/MD/2022/000248". It must never read as Medlab's own
   licence.
3. **The letter is not published as a download.** The site says "Ask for the letter"
   instead. It carries AOSYS letterhead and a director's signature — your call whether to
   host it publicly. Say the word and I will add it as a PDF download.
4. **Kottayam is not in the territory**, though it borders Alappuzha and Pathanamthitta.
   Flagged in case it is an omission in the letter rather than a real boundary.

## Company details now live on the site

| Field | Value | Shown where |
|-------|-------|-------------|
| GSTIN | `32APLPR1807C1Z8` (State 32 — Kerala) | Footer, contact, about, schema `taxID` |
| Drug licence | `KL-TVM-110347-20B` / `KL-TVM-110348-21B`, dated 25 Feb 2016 | Footer, contact, about |
| Udyam / MSME | `UDYAM-KL-120047219` | Footer, contact, about |
| Email | `cimimedlab@gmail.com` | Footer, contact, enquiry form, schema |
| Primary phone | `+91 99465 09400` | Header, hero, floating call button |
| Secondary phone | `+91 90483 57138` | Topbar, contact, footer |

Forms 20B and 21B are wholesale drug sale licences held by **Medlab Enterprises** — these
are separate from, and should never be confused with, the AOSYS manufacturing licence
`MFG/MD/2022/000248` shown on the products page.

The PAN inside the GSTIN (`APLPR1807C`) carries `P` in the fourth position, which is the
proprietorship/individual marker — consistent with Rajesh Kumar being sole proprietor.

## Still needed

### Additional dealerships — confirmed to exist, details pending

The site is currently written as **AOSYS-only**. That framing has to change. For each
additional manufacturer, send:

1. Manufacturer name and website
2. **Which districts that dealership covers** — see the warning below
3. Whether it is exclusive or non-exclusive
4. Which product categories it covers
5. The authorisation letter (PDF), same as the AOSYS one

> **Important:** the "four districts" currently on the site is an **AOSYS fact, not a
> company fact**. Another principal may grant a different territory — six districts, all
> fourteen, or a different four. Right now the site presents four districts as Medlab's
> overall territory, which will be wrong the moment a second brand with a wider territory
> is added. This needs restructuring, not a find-and-replace.

### Still blocking

| # | Item | Why |
|---|------|-----|
| 1 | **Business hours** | Removed my guess. Site currently says only "call either line". |
| 2 | **Is either number on WhatsApp?** | For this audience a WhatsApp button beats the form. |
| 3 | **Domain name** | `canonical` tags still assume `medlabenterprises.in`. |

### Worth confirming with AOSYS

Their letter authorises *"orthopaedic implants, surgical instruments and external
fixators"*. The products page lists **Arthroscopy System** and **Power Tools** — consoles,
shavers, battery drills. Arguably instruments, but they are equipment rather than implants.
One email settles it; if out of scope, those two sections come off.

### High value

| # | Item | Note |
|---|------|------|
| 4 | **Photos** — shop front, stock shelves, implant trays, Rajesh Kumar | Would outperform the technical drawing in several places |
| 5 | **Year the business started** | The drug licence is dated 25 Feb 2016 — is that the founding year? "Serving southern Kerala since 2016" is worth having, but I will not assert it from a licence date alone |
| 6 | **Catalogue PDFs** from each principal | Enables a proper Catalogue page |

### Optional

Named customer hospitals (with permission) · Malayalam version · JustDial / IndiaMART /
Facebook listings · feedback on the logo.

### Claims removed and not restored

Business hours, WhatsApp availability, same-day dispatch, after-hours reachability.
Confirm any and they go straight back in.

## Hosting

The site is static files, so it can be hosted free:

- **Netlify** — drag this folder onto app.netlify.com/drop, live in seconds
- **GitHub Pages** — push the folder to a repository, enable Pages in settings
- **Cloudflare Pages** — connect a repository or upload directly

All three support a custom domain. Buy `medlabenterprises.in` from any Indian registrar
(around ₹700–1,000 a year) and point it at the host.

## Accessibility and quality

- Responsive from 320px up
- Keyboard navigable with visible focus rings
- `prefers-reduced-motion` respected — all animation disables
- Content stays readable if JavaScript is blocked
- Semantic headings, labelled form fields, alt text on meaningful images
- Structured data (`MedicalBusiness` schema) on the home page for Google
