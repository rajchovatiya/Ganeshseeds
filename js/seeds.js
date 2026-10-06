/*
  ============================================================
  SEED LIST — edit this file to add / remove / change seeds.
  ============================================================
  Each seed:
    name     : English name
    nameGu   : Gujarati name
    category : must match one of the CATEGORIES keys below
    desc     : short line shown on the card
    pdf      : path to the PDF inside the "pdfs" folder
               OR a full link (e.g. Google Drive share link)

  To update a PDF: just replace the file in the "pdfs" folder
  with a new file using the SAME file name. No code change needed.
*/

const CATEGORIES = {
  all:      { en: "All",       gu: "બધા" },
  oilseed:  { en: "Oilseeds",  gu: "તેલીબિયાં" },
  cash:     { en: "Cash Crops", gu: "રોકડિયા પાક" },
  cereal:   { en: "Cereals",   gu: "ધાન્ય" },
  spice:    { en: "Spices",    gu: "મસાલા" },
  pulse:    { en: "Pulses",    gu: "કઠોળ" }
};

const SEEDS = [
  { name: "Groundnut", nameGu: "મગફળી", category: "oilseed", desc: "High-yield bold & bunch varieties", pdf: "pdfs/groundnut.pdf" },
  { name: "Cotton",    nameGu: "કપાસ",   category: "cash",    desc: "BT & hybrid cotton seeds",          pdf: "pdfs/cotton.pdf" },
  { name: "Wheat",     nameGu: "ઘઉં",     category: "cereal",  desc: "Lokwan, Tukdi & more",              pdf: "pdfs/wheat.pdf" },
  { name: "Cumin",     nameGu: "જીરું",    category: "spice",   desc: "Disease-resistant cumin seeds",    pdf: "pdfs/cumin.pdf" },
  { name: "Sesame",    nameGu: "તલ",      category: "oilseed", desc: "White & black sesame",              pdf: "pdfs/sesame.pdf" },
  { name: "Castor",    nameGu: "એરંડા",   category: "oilseed", desc: "Hybrid castor seeds",               pdf: "pdfs/castor.pdf" },
  { name: "Bajra",     nameGu: "બાજરી",   category: "cereal",  desc: "Hybrid pearl millet",               pdf: "pdfs/bajra.pdf" },
  { name: "Chana",     nameGu: "ચણા",     category: "pulse",   desc: "Gram seeds for rabi season",        pdf: "pdfs/chana.pdf" },
  { name: "Coriander", nameGu: "ધાણા",    category: "spice",   desc: "Aromatic coriander seeds",          pdf: "pdfs/coriander.pdf" }
];
