#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from __future__ import annotations
from pathlib import Path
from datetime import date
import re

SITE = "https://affittiagallipoli.com"
OUT_DIR = Path("public")
SEO_DIR = OUT_DIR / "seo"

KEYWORDS_BASE = [
    "affitti gallipoli",
    "case vacanza gallipoli",
    "case vacanza salento",
    "appartamenti gallipoli",
    "baia verde case vacanza",
    "affitti estivi gallipoli",
]

PAGES = [
    {
        "slug": "case-vacanza-gallipoli",
        "title": "Case vacanza a Gallipoli | Affitti estivi e appartamenti selezionati",
        "h1": "Case vacanza a Gallipoli",
        "desc": "Selezione di appartamenti e case vacanza a Gallipoli e nel Salento. Contatto rapido su WhatsApp per disponibilità e preventivo.",
        "keywords": KEYWORDS_BASE + ["affitti gallipoli luglio", "affitti gallipoli agosto"],
    },
    {
        "slug": "case-vacanza-baia-verde",
        "title": "Case vacanza Baia Verde | Appartamenti vicino al mare",
        "h1": "Case vacanza a Baia Verde",
        "desc": "Appartamenti e case vacanza a Baia Verde, Gallipoli. Soluzioni per coppie, famiglie e gruppi. Richiedi disponibilità su WhatsApp.",
        "keywords": KEYWORDS_BASE + ["baia verde gallipoli", "appartamenti baia verde"],
    },
    {
        "slug": "affitti-estivi-salento",
        "title": "Affitti estivi nel Salento | Case e ville selezionate",
        "h1": "Affitti estivi nel Salento",
        "desc": "Case vacanza nel Salento: soluzioni selezionate, contatto diretto e risposta rapida. Preventivo su WhatsApp.",
        "keywords": KEYWORDS_BASE + ["affitti salento", "case vacanza salento agosto"],
    },
]

def esc(s: str) -> str:
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
              .replace('"', "&quot;").replace("'", "&#39;"))

def minify_ws(s: str) -> str:
    return re.sub(r"[ \t]+", " ", s).strip()

def html_page(url: str, title: str, h1: str, desc: str, keywords: list[str]) -> str:
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
    body {{ font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 0; padding: 40px 16px; max-width: 920px; }}
    .card {{ border: 1px solid rgba(120,120,120,.25); border-radius: 14px; padding: 18px; }}
    a.btn {{ display: inline-block; padding: 12px 14px; border-radius: 12px; text-decoration: none; border: 1px solid rgba(120,120,120,.35); }}
    .row {{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }}
    small {{ opacity: .75; }}
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
</html>
"""
    return minify_ws(html_txt)

def write_robots_and_sitemap(urls: list[str]) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    SEO_DIR.mkdir(parents=True, exist_ok=True)

    robots = f"""User-agent: *
Allow: /

Sitemap: {SITE}/sitemap.xml
"""
    (OUT_DIR / "robots.txt").write_text(robots, encoding="utf-8")

    today = date.today().isoformat()
    urls_xml = "\n".join(
        f"""  <url><loc>{esc(u)}</loc><lastmod>{today}</lastmod></url>"""
        for u in urls
    )
    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls_xml}
</urlset>
"""
    (OUT_DIR / "sitemap.xml").write_text(sitemap, encoding="utf-8")

def main() -> None:
    if not Path("index.html").exists():
        raise SystemExit("❌ Esegui dalla cartella app/ (dove c'è index.html).")

    created = [f"{SITE}/"]

    for p in PAGES:
        slug = p["slug"].strip("/")
        url = f"{SITE}/seo/{slug}.html"
        out = SEO_DIR / f"{slug}.html"
        out.write_text(html_page(url, p["title"], p["h1"], p["desc"], p["keywords"]), encoding="utf-8")
        created.append(url)

    write_robots_and_sitemap(created)

    print("✅ OK: pagine SEO + robots.txt + sitemap.xml creati (design NON toccato).")
    print(f"➡️ Dopo deploy: {SITE}/seo/{PAGES[0]['slug']}.html")

if __name__ == "__main__":
    main()
