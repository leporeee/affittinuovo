#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from pathlib import Path
from datetime import date
import re

SITE = "https://affittiagallipoli.com"

OUT_DIR = Path("public")
SEO_DIR = OUT_DIR / "seo"
SITEMAP = OUT_DIR / "sitemap.xml"
ROBOTS = OUT_DIR / "robots.txt"

BASE_KW = [
    "affitti gallipoli",
    "case vacanza gallipoli",
    "case vacanza salento",
    "appartamenti gallipoli",
    "baia verde case vacanza",
    "affitti estivi gallipoli",
]

ZONES = [
    ("gallipoli", "Gallipoli"),
    ("baia-verde", "Baia Verde"),
    ("lido-san-giovanni", "Lido San Giovanni"),
]

MONTHS = [
    ("giugno", "Giugno"),
    ("luglio", "Luglio"),
    ("agosto", "Agosto"),
    ("settembre", "Settembre"),
]

GUEST_RANGES = [
    ("2-4", "2–4 posti"),
    ("4-6", "4–6 posti"),
    ("6-8", "6–8 posti"),
    ("8-12", "8–12 posti (gruppi)"),
]

INTENTS = [
    ("vicino-mare", "vicino al mare"),
    ("famiglie", "ideali per famiglie"),
    ("gruppi", "per gruppi"),
]

def esc(s: str) -> str:
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
              .replace('"', "&quot;").replace("'", "&#39;"))

def minify_ws(s: str) -> str:
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\n{2,}", "\n", s)
    return s.strip()

def mk_page(url: str, title: str, h1: str, desc: str, keywords: list[str]) -> str:
    today = date.today().isoformat()
    kw = ", ".join(dict.fromkeys(keywords))

    html_txt = f"""<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{esc(title)}</title>
  <meta name="description" content="{esc(desc)}" />
  <meta name="keywords" content="{esc(kw)}" />
  <link rel="canonical" href="{esc(url)}" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{esc(title)}" />
  <meta property="og:description" content="{esc(desc)}" />
  <meta property="og:url" content="{esc(url)}" />
  <script type="application/ld+json">{{
    "@context":"https://schema.org",
    "@type":"LodgingBusiness",
    "name":"Salento Stay",
    "url":"{SITE}",
    "areaServed":["Gallipoli","Baia Verde","Salento"]
  }}</script>
  <style>
    :root {{ color-scheme: light dark; }}
    body {{ font-family: system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; margin:0; padding:40px 16px; max-width:920px; }}
    .card {{ border:1px solid rgba(120,120,120,.25); border-radius:14px; padding:18px; }}
    a.btn {{ display:inline-block; padding:12px 14px; border-radius:12px; text-decoration:none; border:1px solid rgba(120,120,120,.35); }}
    .row {{ display:flex; gap:10px; flex-wrap:wrap; margin-top:12px; }}
    small {{ opacity:.75; }}
  </style>
</head>
<body>
  <main class="card">
    <h1>{esc(h1)}</h1>
    <p>{esc(desc)}</p>
    <div class="row">
      <a class="btn" href="{esc(SITE)}">Vai al sito</a>
      <a class="btn" href="{esc(SITE)}/#disponibilita">Verifica disponibilità</a>
    </div>
    <hr style="margin:16px 0; opacity:.25" />
    <p><strong>Come funziona:</strong> scegli una casa → chiedi disponibilità → confermi su WhatsApp.</p>
    <p><small>Aggiornato: {today}</small></p>
  </main>
</body>
</html>"""
    return minify_ws(html_txt)

def build_pages():
    pages = []

    # Zone base
    for zslug, zname in ZONES:
        pages.append({
            "slug": f"case-vacanza-{zslug}",
            "title": f"Case vacanza {zname} | Appartamenti e ville selezionate",
            "h1": f"Case vacanza a {zname}",
            "desc": f"Case vacanza a {zname}: soluzioni selezionate per coppie, famiglie e gruppi. Contatto rapido su WhatsApp.",
            "kw": BASE_KW + [f"case vacanza {zname.lower()}", f"affitti {zname.lower()}"],
        })

    # Zone x mese
    for zslug, zname in ZONES:
        for mslug, mname in MONTHS:
            pages.append({
                "slug": f"affitti-{zslug}-{mslug}",
                "title": f"Affitti {zname} {mname} | Case vacanza e appartamenti",
                "h1": f"Affitti a {zname} a {mname}",
                "desc": f"Affitti a {zname} per {mname}: chiedi disponibilità e preventivo su WhatsApp indicando periodo e ospiti.",
                "kw": BASE_KW + [f"affitti {zname.lower()} {mslug}", f"case vacanza {zname.lower()} {mslug}"],
            })

    # Zone x posti letto
    for zslug, zname in ZONES:
        for gslug, gname in GUEST_RANGES:
            pages.append({
                "slug": f"appartamenti-{zslug}-{gslug}-posti",
                "title": f"Appartamenti {zname} {gname} | Case vacanza",
                "h1": f"Appartamenti a {zname} {gname}",
                "desc": f"Appartamenti a {zname} per {gname}: opzioni selezionate, contatto rapido e risposta veloce su WhatsApp.",
                "kw": BASE_KW + [f"appartamenti {zname.lower()} {gslug} posti", f"case vacanza {zname.lower()} {gslug} posti"],
            })

    # Intent (vicino mare/famiglie/gruppi) x zone
    for islug, iname in INTENTS:
        for zslug, zname in ZONES:
            pages.append({
                "slug": f"{islug}-{zslug}",
                "title": f"Case vacanza {iname} a {zname} | Affitti estivi",
                "h1": f"Case vacanza {iname} a {zname}",
                "desc": f"Se cerchi case vacanza {iname} a {zname}, scrivici su WhatsApp: ti mandiamo disponibilità e opzioni adatte.",
                "kw": BASE_KW + [f"case vacanza {iname} {zname.lower()}", f"affitti {iname} {zname.lower()}"],
            })

    # Intent x mese (generiche)
    for islug, iname in INTENTS:
        for mslug, mname in MONTHS:
            pages.append({
                "slug": f"{islug}-{mslug}-gallipoli",
                "title": f"Case vacanza {iname} a Gallipoli a {mname} | Affitti",
                "h1": f"Case vacanza {iname} a Gallipoli a {mname}",
                "desc": f"Vuoi case vacanza {iname} a Gallipoli per {mname}? Scrivici su WhatsApp con ospiti e periodo.",
                "kw": BASE_KW + [f"gallipoli {mslug} {iname}", f"affitti gallipoli {mslug}"],
            })

    # Dedup per slug
    seen = set()
    out = []
    for p in pages:
        if p["slug"] in seen:
            continue
        seen.add(p["slug"])
        out.append(p)
    return out

def write_robots():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    ROBOTS.write_text(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n", encoding="utf-8")

def write_sitemap(urls):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    today = date.today().isoformat()
    # unique stable
    urls = list(dict.fromkeys(urls))
    entries = "\n".join([f"  <url><loc>{esc(u)}</loc><lastmod>{today}</lastmod></url>" for u in urls])
    xml = f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{entries}\n</urlset>\n'
    SITEMAP.write_text(xml, encoding="utf-8")

def main():
    if not Path("index.html").exists():
        raise SystemExit("❌ Esegui dalla cartella app/ (dove c'è index.html).")

    SEO_DIR.mkdir(parents=True, exist_ok=True)

    pages = build_pages()
    created = 0
    skipped = 0

    # Home sempre in sitemap
    urls = [f"{SITE}/"]

    for p in pages:
        slug = p["slug"].strip("/")
        out = SEO_DIR / f"{slug}.html"
        url = f"{SITE}/seo/{slug}.html"

        if out.exists():
            skipped += 1
        else:
            out.write_text(mk_page(url, p["title"], p["h1"], p["desc"], p["kw"]), encoding="utf-8")
            created += 1

        urls.append(url)

    write_robots()
    write_sitemap(urls)

    print(f"✅ SEO BOOST OK: create {created} nuove pagine, saltate {skipped} (già esistenti).")
    print(f"➡️ Dopo deploy prova: {SITE}/seo/{pages[0]['slug']}.html")
    print(f"➡️ Sitemap: {SITE}/sitemap.xml")

if __name__ == "__main__":
    main()
