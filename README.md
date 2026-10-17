# web_action — GitHub Actions + GitHub Pages Lab

**ชื่อ:** กนกภัทร พุ่มห้วยรอบ | **รหัสนิสิต:** 67160174

เว็บไซต์ Static (HTML/CSS/JavaScript) ที่ Deploy อัตโนมัติไปยัง GitHub Pages ด้วย GitHub Actions

- Website: https://kanopat174.github.io/web_action/
- Workflow: `.github/workflows/deploy.yml`

## Exercise 4: Workflow ทำงานอย่างไร
Workflow จะเริ่มเมื่อมีการ `push` ไปยัง branch `main` หรือกดรันเองจากแท็บ Actions (`workflow_dispatch`)
Job `deploy` จะรันบนเครื่อง `ubuntu-latest` โดย (1) Checkout โค้ด (2) ตรวจว่ามี index.html, style.css, script.js
(3) ตั้งค่า Pages (4) อัปโหลดไฟล์ทั้งโฟลเดอร์เป็น Artifact และ (5) Deploy Artifact นั้นขึ้น GitHub Pages

## คำถามท้ายแลป
1. **GitHub Actions ต่างจาก GitHub Pages อย่างไร?** — Actions คือระบบรันงานอัตโนมัติ (CI/CD) เมื่อเกิดเหตุการณ์ เช่น push ส่วน Pages คือบริการโฮสต์เว็บไซต์ Static ผ่าน URL สาธารณะ ในแลปนี้ Actions เป็นตัวนำไฟล์ไป Deploy บน Pages
2. **ทำไม trigger ด้วย push ที่ main?** — main คือโค้ดเวอร์ชันหลักที่พร้อมใช้งาน การ Deploy เฉพาะเมื่อ push เข้า main ทำให้เว็บจริงอัปเดตเฉพาะโค้ดที่ผ่านการรวมแล้ว ไม่ใช่ branch ทดลอง
3. **แก้ไฟล์ในเครื่องแต่ไม่ push เว็บจะเปลี่ยนไหม?** — ไม่เปลี่ยน เพราะ GitHub ไม่เห็นการแก้ไขในเครื่อง Workflow จะถูกเรียกเมื่อมี push ไปยัง GitHub เท่านั้น
4. **ทำไม PHP + MySQL รันบน GitHub Pages ไม่ได้?** — Pages ให้บริการแค่ไฟล์ Static ไม่มีตัวประมวลผลภาษาฝั่ง Server (PHP) และไม่มีฐานข้อมูล จึงต้องใช้ Hosting ที่รองรับ PHP/MySQL
5. **หาสาเหตุเมื่อ Workflow Failed อย่างไร?** — เปิดแท็บ Actions → เลือก run ที่ล้มเหลว → เปิด Job → ดู Step ที่มีกากบาทแดงและอ่าน Log, ตรวจสอบ YAML (การเยื้อง), ตำแหน่งไฟล์ `.github/workflows`, สิทธิ์ `permissions` และการตั้งค่า Settings → Pages → Source = GitHub Actions แล้วแก้ไข commit และ push ใหม่
