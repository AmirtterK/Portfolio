from pathlib import Path
from xml.etree import ElementTree as ET

from pypdf import PdfReader
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen.canvas import Canvas

OUT = Path("public/Amir_Hattab_Resume.pdf")
RESUME_XML = Path("tmp/pdfs/Amir_Hattab_Resume_unpacked.xml")
W, H = letter
MARGIN = 40
INK, MUTED, ACCENT = HexColor("#171717"), HexColor("#505050"), HexColor("#1f4b7a")

def wrap(value, font, size, width):
    lines, current = [], ""
    for word in value.split():
        proposed = f"{current} {word}".strip()
        if current and stringWidth(proposed, font, size) > width:
            lines.append(current); current = word
        else:
            current = proposed
    return lines + ([current] if current else [])

def paragraph(c, value, x, y, width, font="Helvetica", size=8.5, leading=10, color=INK):
    c.setFillColor(color); c.setFont(font, size)
    for line in wrap(value, font, size, width):
        c.drawString(x, y, line); y -= leading
    return y

def section(c, title, y):
    y -= 11; c.setFillColor(ACCENT); c.setFont("Helvetica-Bold", 9.6); c.drawString(MARGIN, y, title.upper())
    c.setStrokeColor(HexColor("#b7c9d9")); c.setLineWidth(.65); c.line(MARGIN, y - 3, W - MARGIN, y - 3)
    return y - 14

def heading(c, left, right, y):
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 9.1); c.drawString(MARGIN, y, left)
    if right:
        c.setFillColor(MUTED); c.setFont("Helvetica-Oblique", 8.4); c.drawRightString(W - MARGIN, y, right)
    return y - 11

def bullet(c, value, y):
    c.setFillColor(ACCENT); c.circle(MARGIN + 3, y + 2.4, 1.25, stroke=0, fill=1)
    return paragraph(c, value, MARGIN + 11, y, W - 2 * MARGIN - 11, size=8.35, leading=10) - 1

def project(c, name, description, details, y):
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 8.9); c.drawString(MARGIN, y, name); y -= 10
    y = paragraph(c, description, MARGIN, y, W - 2 * MARGIN, size=8.25, leading=9.7)
    c.setFillColor(MUTED); c.setFont("Helvetica-Oblique", 7.95); c.drawString(MARGIN, y, details)
    return y - 11

def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    xml_root = ET.parse(RESUME_XML).getroot()
    xml_lines = ["".join(node.text or "" for node in line.findall("text")) for line in xml_root.findall(".//textline")]
    bachelor_achievements = [line for line in xml_lines if line.startswith("Ranked 2nd") or line.startswith("Graduation project recognized")]
    assert len(bachelor_achievements) == 2
    c = Canvas(str(OUT), pagesize=letter, pageCompression=1)
    c.setTitle("Amir Hattab Resume"); c.setAuthor("Amir Hattab")
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 19); c.drawCentredString(W / 2, H - 43, "Amir Hattab")
    c.setFillColor(MUTED); c.setFont("Helvetica", 8.7)
    c.drawCentredString(W / 2, H - 58, "Mostaganem, Algeria  |  amirhattab2018@gmail.com  |  0655206259  |  amirhattab.vercel.app  |  github.com/AmirtterK")
    y = H - 76
    y = section(c, "Summary", y)
    y = paragraph(c, "Full-stack developer building mobile and web applications. Founder of Krii, a peer-to-peer rental marketplace for Algeria, and an AI-focused Master's student with a strong foundation in software architecture and real-time systems.", MARGIN, y, W - 2 * MARGIN, size=8.65, leading=10.4)
    y = section(c, "Experience", y)
    y = heading(c, "Founder & Full-Stack Developer, Krii", "Nov 2025 - Present", y)
    for value in ["Built and deployed a production peer-to-peer rental marketplace with mobile, web, and backend infrastructure.", "Led end-to-end product development across the customer app, admin moderation dashboard, and backend systems.", "Implemented payment processing, real-time notifications, and a multi-tenant database architecture."]:
        y = bullet(c, value, y)
    y = heading(c, "Flutter Workshop Instructor, Mobile App Development Workshop", "", y)
    y = bullet(c, "Taught practical Flutter mobile app development, guiding participants through app structure and implementation.", y)
    y = section(c, "Projects", y)
    for item in [("Krii", "Peer-to-peer rental marketplace for the Algerian market.", "Mobile app, admin dashboard, and backend platform with payments and real-time notifications."), ("Chat App", "Cross-platform messaging application with real-time synchronization, push notifications, and a custom backend.", "Flutter, Express, Firebase | github.com/AmirtterK/Chat-App"), ("E-commerce Platform", "Full-stack e-commerce system with cart, order management, and OAuth authentication.", "Next.js, TypeScript, MongoDB, Clerk | github.com/AmirtterK/e-commerce"), ("Chess Game", "Two-player chess game with AI opponent and move validation.", "Flutter | github.com/AmirtterK/Chess"), ("Ferrari Website", "Interactive 3D showcase website with animations and immersive design.", "JavaScript, Three.js | github.com/AmirtterK/Ferrari-website")]:
        y = project(c, *item, y)
    y = section(c, "Education", y)
    y = heading(c, "University of Mostaganem, Faculty of Exact Sciences and Computer Science", "", y)
    y = heading(c, "Bachelor in Computer Science - Mostaganem, Algeria", "Sep 2023 - Jun 2026", y)
    for achievement in bachelor_achievements:
        y = bullet(c, achievement, y)
    y = heading(c, "University of Mostaganem, Master's in Artificial Intelligence - Mostaganem, Algeria", "Sep 2026 - Present", y)
    y = section(c, "Skills", y)
    for label, values in [("Languages", "JavaScript, TypeScript, Python, Java, C, PHP, Dart"), ("Frameworks", "Next.js, React, Flutter, Express, Vite, TailwindCSS, Shadcn, Three.js"), ("Databases", "PostgreSQL, MySQL, SQLite, Firebase, MongoDB"), ("Platform", "Git, Arduino, Clerk")]:
        c.setFillColor(INK); c.setFont("Helvetica-Bold", 8.3); c.drawString(MARGIN, y, f"{label}:"); c.setFont("Helvetica", 8.3); c.drawString(MARGIN + 67, y, values); y -= 10
    y = section(c, "Languages", y)
    c.setFillColor(INK); c.setFont("Helvetica", 8.35); c.drawString(MARGIN, y, "English: Fluent  |  Arabic: Fluent  |  German: Beginner  |  French: Beginner")
    c.save()
    reader = PdfReader(str(OUT)); extracted = reader.pages[0].extract_text()
    assert len(reader.pages) == 1
    assert "Ranked 2nd in my Bachelor's graduating class." in extracted
    assert "Best Startup Graduation Project, awarded 19.75/20." in extracted
    assert "Ranked 1st" not in extracted and "top 3" not in extracted.lower()
    print("Resume PDF generated and content verified.")

if __name__ == "__main__":
    main()
