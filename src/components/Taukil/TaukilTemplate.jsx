import { useMemo, useState } from "react"
import "./TaukilTemplate.css"

// ====== UI helpers ======
const CopyBtn = ({ text }) => {
  const [ok, setOk] = useState(false)
  return (
    <button
      className="copy-btn"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text || "")
          setOk(true)
          setTimeout(() => setOk(false), 1200)
        } catch {}
      }}
      aria-label="Salin teks"
    >
      {ok ? "Tersalin ✓" : "Salin"}
    </button>
  )
}

const ParamInput = ({ label, value, onChange, dir = "rtl" }) => (
  <label className="param">
    <span>{label}</span>
    <input value={value} onChange={(e) => onChange(e.target.value)} dir={dir} />
  </label>
)

// ====== Templates ======
const templates = [
  // --- Hajat Buruk / تصريف ---
  {
    id: "tfrq-2names",
    category: "buruk",
    title: "تفريق بين شخصين (Contoh)",
    params: [
      { key: "female", label: "اسم المرأة" },
      { key: "motherFemale", label: "اسم أمّها" },
      { key: "male", label: "اسم الرجل" },
      { key: "motherMale", label: "اسم أمّه" },
    ],
    defaults: {
      female: "فَانْيَا مَهْدَا حَنِيفَة",
      motherFemale: "إِلْفِيرَا رَاتْنَا بُوتْرِي",
      male: "نُغْرُوهُو دُوِي هَارِيَانْتُو",
      motherMale: "حَوَّاء",
    },
    build: (
      v
    ) => `توَكَّلُوا يَا خُدَّامَ هَذِهِ الأَسْمَاءِ الشَّرِيفَةِ، وَخُدَّامَ الحُرُوفِ،
فَرِّقُوا بَيْنَ ${v.female} بِنْتِ ${v.motherFemale}،
وَبَيْنَ ${v.male} بْنِ ${v.motherMale}،
كَمَا فَرَّقَ رَبُّنَا بَيْنَ السَّمَاءِ وَالأَرْضِ،
الوَاحَا الوَاحَا ، العَجَلَ العَجَلَ، السَّاعَةَ السَّاعَةَ،
بَارَكَ اللهُ فِيكُمْ.`,
  },
  {
    id: "cloud-divert",
    category: "buruk",
    title: "تصريف السحب عن منطقة (Contoh)",
    params: [
      { key: "region", label: "المنطقة" },
      { key: "days", label: "عدد الأيام", dir: "ltr" },
    ],
    defaults: { region: "[اذكر المنطقة]", days: "[عدد الأيام]" },
    build: (
      v
    ) => `يَا خُدَّامُ هَذِهِ الأَسْمَاءِ الشَّرِيفَة، وَخُدَّامُ الحُرُوفِ وَالطَّلَاسِمِ، بِسِرِّ: يَا جَبَّار، يَا قَاهِر، يَا رَافِع، يَا مُصَرِّف، يَا رَبَّ السَّمَاءِ وَالأَرْضِ،
وَبِحُرْمَةِ: أَلِف، دَال، مِيم، رَاء، غَيْن، شِين، قَاف،
وَبِرَمْزِ: طه، يس، كهيعص، قسورة، حم عسق،
أَنْ تُصَرِّفُوا غُيُومَ السَّمَاءِ عَنْ مَنَاطِقِ ${v.region}
وَلَا تَجْعَلُوا فِيهَا وَابِلًا وَلا رَذَاذًا، إِلَى أَمَدٍ ${v.days}،
وَأَنْ تَجْعَلُوا السَّحَابَ نَحْوَ الأَرْضِ الَّتِي فِيهَا خَيْرٌ وَمَنْفَعَةٌ، وَذٰلِكَ بِقُدْرَةِ ٱللّٰهِ وَبِٱسْمِهِ أُجْرِيكُمْ وَعَلَيْهِ أَتَوَكَّلُ.
الوَاحَا الوَاحَا ، العَجَلَ العَجَلَ، السَّاعَةَ السَّاعَةَ،
بَارَكَ اللهُ فِيكُمْ.`,
  },
  {
    id: "radd-kayd",
    category: "buruk",
    title: "رَدُّ الكَيْدِ وَصَرْفُ الأَذَى",
    params: [{ key: "source", label: "مصدر الأذى (اختياري)" }],
    defaults: { source: "[—]" },
    build: (
      v
    ) => `يَا خُدَّامَ هَذِهِ الأَسْمَاءِ وَالحُرُوفِ، رُدُّوا كَيْدَ مَنْ كَادَنَا إِلَيْهِ، وَاصْرِفُوا أَذَاهُ عَنَّا،
بِسِرِّ: يَا قَوِيُّ يَا مَتِينُ يَا قَهَّارُ، وَٱللّٰهُ حَسْبُنَا وَنِعْمَ الوَكِيلُ.
(المصدر: ${v.source})
الوَاحَا الوَاحَا ، العَجَلَ العَجَلَ، السَّاعَةَ السَّاعَةَ،
بَارَكَ اللهُ فِيكُمْ.`,
  },

  // --- Hajat Baik ---
  {
    id: "jam-u-qulub",
    category: "baik",
    title: "تأليف القلوب بالمعروف",
    params: [
      { key: "nameA", label: "الاسم الأوّل" },
      { key: "motherA", label: "اسم أمّه/أمّها" },
      { key: "nameB", label: "الاسم الثاني" },
      { key: "motherB", label: "اسم أمّه/أمّها" },
    ],
    defaults: {
      nameA: "فُلَان",
      motherA: "فُلَانَة",
      nameB: "فُلَان",
      motherB: "فُلَانَة",
    },
    build: (
      v
    ) => `يَا خُدَّامَ هَذِهِ الأَسْمَاءِ الشَّرِيفَةِ وَخُدَّامَ الحُرُوفِ،
أَلِّفُوا بَيْنَ قَلْبِ ${v.nameA} بْنِ/بِنْتِ ${v.motherA}
وَقَلْبِ ${v.nameB} بْنِ/بِنْتِ ${v.motherB} بِالْمَعْرُوفِ وَالرِّضَا،
وَاصْرِفُوا مَا فِيهِ مِنْ شِقَاقٍ وَعِتَابٍ وَسُوءِ فَهْمٍ،
بِسِرِّ: يَا لَطِيفُ يَا جَامِعُ يَا مَأْلُوفُ، وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُتَوَكِّلُونَ.
الوَاحَا الوَاحَا ، العَجَلَ العَجَلَ، السَّاعَةَ السَّاعَةَ،
بَارَكَ اللهُ فِيكُمْ.`,
  },
  {
    id: "taysir-umur",
    category: "baik",
    title: "تيسير الأمور وفتح الأبواب",
    params: [{ key: "matter", label: "وصف الأمر/الحاجة" }],
    defaults: { matter: "[الأمر المطلوب]" },
    build: (
      v
    ) => `يَا خُدَّامَ هَذِهِ الأَسْمَاءِ وَالحُرُوفِ، تَوَسَّطُوا لَنَا فِي ${v.matter}،
وَيَسِّرُوا الأَسْبَابَ وَافْتَحُوا الأَبْوَابَ بِسِرِّ يَا فَتَّاحُ يَا مُيَسِّرُ،
ثُمَّ عَلَى اللّٰهِ نَتَوَكَّلُ وَهُوَ حَسْبُنَا وَنِعْمَ الوَكِيلُ.
الوَاحَا الوَاحَا ، العَجَلَ العَجَلَ، السَّاعَةَ السَّاعَةَ،
بَارَكَ اللهُ فِيكُمْ.`,
  },
  {
    id: "rifq-hifzh",
    category: "baik",
    title: "الحِفْظُ وَالرِّفْقُ",
    params: [{ key: "person", label: "اسم الشخص" }],
    defaults: { person: "فُلَان/فُلَانَة" },
    build: (
      v
    ) => `يَا خُدَّامَ الأَسْمَاءِ وَالحُرُوفِ، احْفَظُوا ${v.person} فِي دِينِهِ وَنَفْسِهِ وَأَهْلِهِ وَمَالِهِ،
وَالْطُفُوا بِهِ فِي كُلِّ طَرِيقٍ، بِسِرِّ يَا حَفِيظُ يَا لَطِيفُ، وَعَلَى اللّٰهِ نَتَوَكَّلُ.
الوَاحَا الوَاحَا ، العَجَلَ العَجَلَ، السَّاعَةَ السَّاعَةَ،
بَارَكَ اللهُ فِيكُمْ.`,
  },
]

// ====== Components ======
const TemplateCard = ({ tpl }) => {
  const [vars, setVars] = useState(() => ({ ...(tpl.defaults || {}) }))
  const finalText = useMemo(
    () => (tpl.build ? tpl.build(vars) : ""),
    [tpl, vars]
  )

  return (
    <div
      className={`taukil-card ${tpl.category === "baik" ? "baik" : "buruk"}`}
    >
      <div className="taukil-card-head">
        <div>
          <div className="taukil-card-title">{tpl.title}</div>
          <div className="taukil-card-kategori">
            Kategori:{" "}
            {tpl.category === "baik" ? "Hajat Baik" : "Hajat Buruk/تصريف"}
          </div>
        </div>
        <CopyBtn text={finalText} />
      </div>

      {tpl.params && tpl.params.length > 0 && (
        <div className="taukil-inputs" style={{ marginTop: 12 }}>
          {tpl.params.map((p) => (
            <ParamInput
              key={p.key}
              label={p.label}
              dir={p.dir || "rtl"}
              value={vars[p.key] ?? ""}
              onChange={(val) => setVars((s) => ({ ...s, [p.key]: val }))}
            />
          ))}
        </div>
      )}

      <div className="section-title">النص</div>
      <div className="text-arabic">{finalText}</div>
    </div>
  )
}

const TaukilSamples = () => {
  const [tab, setTab] = useState("baik")
  const list = useMemo(() => templates.filter((t) => t.category === tab), [tab])

  return (
    <div className="taukil-container">
      <h1 className="taukil-title">قوالب تَوْكِيل (أمثلة)</h1>
      <p className="taukil-desc">Contoh teks taukil</p>

      <div className="taukil-tabs">
        <button
          className={`taukil-tab ${
            tab === "baik" ? "taukil-tab--active baik" : ""
          }`}
          onClick={() => setTab("baik")}
        >
          حاجات حسنة
        </button>
        <button
          className={`taukil-tab ${
            tab === "buruk" ? "taukil-tab--active buruk" : ""
          }`}
          onClick={() => setTab("buruk")}
        >
          حاجات ضارّة / تصريف
        </button>
      </div>

      <div className="taukil-grid">
        {list.map((t) => (
          <TemplateCard key={t.id} tpl={t} />
        ))}
      </div>

      <div className="taukil-foot">
        Catatan:Gunakan dengan adab, hindari mudarat, dan sesuaikan dengan
        kebutuhan
      </div>
    </div>
  )
}

export default TaukilSamples
