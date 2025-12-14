# DevPortfolio - Osobní prezentace vývojáře

Profesionální portfolio postavené na moderním stacku: **React + TypeScript + Tailwind CSS**.
Projekt obsahuje integrovaného AI asistenta (Google Gemini) pro generování návrhů aplikací.

## 🚀 Jak začít (Lokální vývoj)

1.  **Nainstalujte závislosti:**
    ```bash
    npm install
    ```

2.  **Nastavte API klíč pro AI:**
    Vytvořte soubor `.env` v kořenovém adresáři a přidejte svůj klíč z Google AI Studio:
    ```
    API_KEY=vase_google_gemini_api_key
    ```

3.  **Spusťte vývojový server:**
    ```bash
    npm start
    ```

---

## 📝 Jak upravovat obsah (CMS)

Tento projekt nepoužívá externí databázi pro texty. Veškerý obsah se spravuje v souboru `constants.tsx`. To zaručuje maximální rychlost načítání.

### 1. Změna loga a názvu
Otevřete `constants.tsx` a upravte objekt `BRAND`:
```typescript
export const BRAND = {
  name: 'Vaše Jméno',
  logoUrl: '/logo.png', // Cesta k obrázku ve složce public nebo externí URL
};
```

### 2. Přidání nového projektu
V `constants.tsx` najděte pole `PROJECTS`. Zkopírujte strukturu existujícího projektu a vyplňte své údaje:
```typescript
{
  id: 'novy-projekt',
  title: 'Název Aplikace',
  description: 'Popis toho, co aplikace dělá...',
  tags: ['Technologie 1', 'Technologie 2'],
  imageUrl: 'https://odkaz-na-obrazek.cz/img.jpg',
  features: ['Funkce 1', 'Funkce 2']
},
```

### 3. Úprava služeb
Podobně můžete upravovat sekci `SERVICES` (Služby) a `TECH_STACK` (Používané technologie) ve stejném souboru.

---

## 🌍 Nasazení (Deployment) na Vercel

Jelikož používáte GitHub, nasazení je automatické.

1.  Nahrajte tento kód do repozitáře na **GitHub**.
2.  Přihlaste se do **Vercel** a klikněte na "Add New Project".
3.  Vyberte repozitář s tímto portfoliem.
4.  **Důležité:** V sekci "Environment Variables" přidejte:
    *   Key: `API_KEY`
    *   Value: `vas_google_gemini_api_key`
5.  Klikněte na **Deploy**.

Při každé další úpravě kódu (např. přidání projektu do `constants.tsx`) a následném `git push` se stránka sama aktualizuje.

## 🛠 Technologie

*   **Frontend:** React 18, TypeScript
*   **Styling:** Tailwind CSS
*   **Ikony:** Lucide React
*   **AI:** Google GenAI SDK (Gemini 2.5 Flash)
*   **Font:** Inter (Google Fonts)
