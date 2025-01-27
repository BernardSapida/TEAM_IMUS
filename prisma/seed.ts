import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
   const candidates = [
       {
           "LASTNAME":"CABRERA",
           "FIRSTNAME":"PRESCILA",
           "MIDDLENAME":"M",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN",
           "CONTACT":9085622445,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"SABANG ",
           "FIRSTNAME":"DANILO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN",
           "CONTACT":9760163722,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"ROSETE",
           "FIRSTNAME":"ROSE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN",
           "CONTACT":null,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"PABLO",
           "FIRSTNAME":"TESS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN",
           "CONTACT":9065595426,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"SOLIS",
           "FIRSTNAME":"MARICEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN",
           "CONTACT":9756388944,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BARBO",
           "FIRSTNAME":"VANESSA GRACE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9153492198,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TAPIEL",
           "FIRSTNAME":"JUN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9273336732,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PIEDRA",
           "FIRSTNAME":"PASITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9955100478,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAISSI",
           "FIRSTNAME":"LUZ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TANPUA",
           "FIRSTNAME":"ALICE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9086527806,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"VADALLERO",
           "FIRSTNAME":"ANISIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9356413064,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"IONGOL",
           "FIRSTNAME":"BIENVENIDA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TULLAO",
           "FIRSTNAME":"MARIO",
           "MIDDLENAME":"C",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9955342811,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"VALENTINO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MI-OT",
           "FIRSTNAME":"ANTONIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9153719511,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAISA",
           "FIRSTNAME":"ARMANDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9171203955,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BALLER",
           "FIRSTNAME":"ALLAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I",
           "CONTACT":9534358416,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PONGAN",
           "FIRSTNAME":"JOVITA",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-A",
           "CONTACT":9998887605,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"BACTOL",
           "FIRSTNAME":"ROSARIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-A",
           "CONTACT":9611716803,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SAULOG",
           "FIRSTNAME":"CLEM",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9264939298,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAPITANAN",
           "FIRSTNAME":"CAROL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"CAMBALISA",
           "FIRSTNAME":"JOSHUA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9053322556,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"CAMPOSAGRADO",
           "FIRSTNAME":"RICA JOY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9264154043,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"PIOL",
           "FIRSTNAME":"MARK",
           "MIDDLENAME":"BAUTISTA",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9056995416,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"RAMOS",
           "FIRSTNAME":"ANTONIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9757266569,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RAMOS",
           "FIRSTNAME":"LOURDES",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALMONIA",
           "FIRSTNAME":"JADE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9677649568,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LUMAAD",
           "FIRSTNAME":"JENELYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9649873506,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LUMAAD",
           "FIRSTNAME":"SHELA MAE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9753989751,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DIONISO",
           "FIRSTNAME":"HANIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9750436495,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LUIANA",
           "FIRSTNAME":"GIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9948536258,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DIONISO",
           "FIRSTNAME":"ESPERANZA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9975619803,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RAMOS",
           "FIRSTNAME":"JINKY",
           "MIDDLENAME":"A",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9534358517,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALMONIA",
           "FIRSTNAME":"EMILY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9261300825,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SARIA",
           "FIRSTNAME":"CHRISTOPERA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MOLO",
           "FIRSTNAME":"VANESSA ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9776680705,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PANGAN",
           "FIRSTNAME":"TERESITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9305664455,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAYANI",
           "FIRSTNAME":"REMORA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PURA",
           "FIRSTNAME":"JACKYLYN",
           "MIDDLENAME":"D",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9491587763,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"AMAN",
           "FIRSTNAME":"LORENCE",
           "MIDDLENAME":"D",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"PAULLENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9350999447,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"CHASER ANN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"LEINELLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9566704283,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MAGBUHAT",
           "FIRSTNAME":"LOT",
           "MIDDLENAME":"O",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9531641672,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAQUIRAN",
           "FIRSTNAME":"CRISFER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9150880907,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DAMIAN",
           "FIRSTNAME":"ZALDEE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9998447220,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CANO",
           "FIRSTNAME":"ISABEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9150880907,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BASAL",
           "FIRSTNAME":"ARIEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":9273007904,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CAPADISO",
           "FIRSTNAME":"ANABELLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALCARAZ",
           "FIRSTNAME":"IVY",
           "MIDDLENAME":"D",
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"AMAN",
           "FIRSTNAME":"LORNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"AYSON",
           "FIRSTNAME":"GARY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":9300704405,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"EDWIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":9334300930,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"GALICIA",
           "FIRSTNAME":"ROMMEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MALAYAD",
           "FIRSTNAME":"DENNIS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PABLO",
           "FIRSTNAME":"DENNIS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":9668827636,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BERNARDOS",
           "FIRSTNAME":"EMELITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":9534358416,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BERNADES",
           "FIRSTNAME":"EMELITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":9936074413,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"SHERLY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":9757361886,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"GERARDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"COLINA",
           "FIRSTNAME":"JOAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ILAYA",
           "FIRSTNAME":"JULIEBETH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TENGCO",
           "FIRSTNAME":"MARIBEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BASTO",
           "FIRSTNAME":"ETHEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAQUILAYAN",
           "FIRSTNAME":"EMITH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"COMISSION",
           "FIRSTNAME":"IAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GREPO",
           "FIRSTNAME":"MIRELA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-A",
           "CONTACT":9175033917,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LEGASPI",
           "FIRSTNAME":"IRENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-A",
           "CONTACT":9757874017,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"NABO",
           "FIRSTNAME":"FELIX",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"RONQUILLO",
           "FIRSTNAME":"JOJIT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-A",
           "CONTACT":9655568299,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"TARPEL",
           "FIRSTNAME":"HERCULANO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LAGUERRA",
           "FIRSTNAME":"MALOU",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-A",
           "CONTACT":9952401693,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"RONQUILLO",
           "FIRSTNAME":"JHET JOLO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-A",
           "CONTACT":9752657961,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"DELA CRUZ",
           "FIRSTNAME":"MERLINDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9567030379,
           "POSITION":null
       },
       {
           "LASTNAME":"LEGASPI",
           "FIRSTNAME":"MANUEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9550093174,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SARIA",
           "FIRSTNAME":"JAYVEE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9063139015,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CATAPANG",
           "FIRSTNAME":"JEODY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9914291120,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SARIA",
           "FIRSTNAME":"ERNESTO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9567030382,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CRISOSTOMO",
           "FIRSTNAME":"CIELITO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9051155523,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"NAVARETTE",
           "FIRSTNAME":"JOEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9532181954,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PARCO",
           "FIRSTNAME":"JOHN RUSSEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9566515574,
           "POSITION":null
       },
       {
           "LASTNAME":"BENDANA",
           "FIRSTNAME":"ROSE ANN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9267876784,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"BARNIDO",
           "FIRSTNAME":"JOHN CARLO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9972512090,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"MANINGULA",
           "FIRSTNAME":"JOHN CARLOS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"TEREGOSA",
           "FIRSTNAME":"JOVELYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"VILLAFRANCA",
           "FIRSTNAME":"JONNEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9053736807,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"LANDICHO",
           "FIRSTNAME":"MJ MICKO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9515962165,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"TOPACIO",
           "FIRSTNAME":"KURT HAROLD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9777468735,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"ROMEO",
           "FIRSTNAME":"ZENAIDA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9305690331,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DESALESA",
           "FIRSTNAME":"SUSAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9561802426,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LIZARDO",
           "FIRSTNAME":"HERMELINDA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DESALISA",
           "FIRSTNAME":"AARON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ALAPAN II-B",
           "CONTACT":9561802426,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SANTARIN",
           "FIRSTNAME":"NATO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-A",
           "CONTACT":9999037567,
           "POSITION":null
       },
       {
           "LASTNAME":"SARMIENTO",
           "FIRSTNAME":"CHRISTOPER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SARMIENTO",
           "FIRSTNAME":"JOEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"NATO",
           "FIRSTNAME":"JV",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-A",
           "CONTACT":9674020142,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"COSME",
           "FIRSTNAME":"LOREN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-A",
           "CONTACT":9991817504,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ESPARTINEZ",
           "FIRSTNAME":"ZEDRICK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-C",
           "CONTACT":9070630198,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SILLA",
           "FIRSTNAME":"JAIME",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"ANABU I-C",
           "CONTACT":9087930089,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"SILLA",
           "FIRSTNAME":"JAIME",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-C",
           "CONTACT":9087930089,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SILLA",
           "FIRSTNAME":"NESTOR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-C",
           "CONTACT":9776802776,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LUNA",
           "FIRSTNAME":"NICOLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-D",
           "CONTACT":9068836840,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"BORREL",
           "FIRSTNAME":"JERRIME",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-D",
           "CONTACT":9514929105,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"SILLA",
           "FIRSTNAME":"GUILLERMO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-D",
           "CONTACT":9272907885,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TABING",
           "FIRSTNAME":"VERGEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-E",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"TABING",
           "FIRSTNAME":"VERGEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-E",
           "CONTACT":915598058,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"ENCABO",
           "FIRSTNAME":"ROLANDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-E",
           "CONTACT":9668761803,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"SILLA",
           "FIRSTNAME":"DANNY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-G",
           "CONTACT":9476342560,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"RELOJERO",
           "FIRSTNAME":"JAYSON",
           "MIDDLENAME":"A",
           "ADDRESS":null,
           "BARANGAY":"ANABU I-G",
           "CONTACT":9673388755,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RELOJERO",
           "FIRSTNAME":"DONNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-G",
           "CONTACT":9084654517,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PAULME",
           "FIRSTNAME":"DANIEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU I-G",
           "CONTACT":995015471,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RELOJERO",
           "FIRSTNAME":"JAYVEE",
           "MIDDLENAME":"L",
           "ADDRESS":null,
           "BARANGAY":"ANABU I-G",
           "CONTACT":9649679824,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CUNANAN",
           "FIRSTNAME":"PRECIOSA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II",
           "CONTACT":9359404158,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LAGASENO",
           "FIRSTNAME":"MERLA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-A",
           "CONTACT":9158175722,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"AGUILAR",
           "FIRSTNAME":"JUVELYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-A",
           "CONTACT":9282505564,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"OCENAH",
           "FIRSTNAME":"GIRLIE",
           "MIDDLENAME":"F",
           "ADDRESS":null,
           "BARANGAY":"ANABU II-A",
           "CONTACT":9754010218,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DELOS REYES",
           "FIRSTNAME":"ELAINE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-A",
           "CONTACT":9457842227,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LINGAS",
           "FIRSTNAME":"JOANA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-A",
           "CONTACT":9707668528,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MUNOZ",
           "FIRSTNAME":"NEALIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-A",
           "CONTACT":9282495275,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALMONTE",
           "FIRSTNAME":"MA. CHRIZEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-B",
           "CONTACT":9353132238,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"ESGUERRA",
           "FIRSTNAME":"JACQUELINE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-B",
           "CONTACT":9272850123,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"MALIKSI",
           "FIRSTNAME":"RALPH LORENCE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-B",
           "CONTACT":9977615217,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"SALE",
           "FIRSTNAME":"KIM JEREMY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-B",
           "CONTACT":9159070619,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"SATORRE",
           "FIRSTNAME":"JOGH DERRICK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-B",
           "CONTACT":9203408429,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CALDO",
           "FIRSTNAME":"ROWELL CHLZ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-C",
           "CONTACT":9193218257,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CARUPO",
           "FIRSTNAME":"MAXIM",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-C",
           "CONTACT":9924870389,
           "POSITION":"TODA"
       },
       {
           "LASTNAME":"DEL ROSARIO",
           "FIRSTNAME":"JULIET",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-D",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"ROLLY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-D",
           "CONTACT":9473170343,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"HALOG",
           "FIRSTNAME":"OLIVE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"ANABU II-F",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAN MIGUEL",
           "FIRSTNAME":"ANNA LOLLY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA I",
           "CONTACT":9654462229,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GUEVARRA",
           "FIRSTNAME":"BASIL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA II",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"GARCIA",
           "FIRSTNAME":"ROLLY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA II",
           "CONTACT":9175021598,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"GARCIA",
           "FIRSTNAME":"MA. KAYE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA II",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"ALVISO",
           "FIRSTNAME":"AMALIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA II",
           "CONTACT":9629250184,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ESPANTO",
           "FIRSTNAME":"SARAH JOY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA II",
           "CONTACT":9705280498,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DINO ",
           "FIRSTNAME":"MICHAEL",
           "MIDDLENAME":"TARUC",
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IV",
           "CONTACT":9333318847,
           "POSITION":null
       },
       {
           "LASTNAME":"LUCE",
           "FIRSTNAME":"WILFREDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA V",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"POSADAS",
           "FIRSTNAME":"ERIC",
           "MIDDLENAME":"ORCULLO",
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA V",
           "CONTACT":9276595257,
           "POSITION":null
       },
       {
           "LASTNAME":"MATRO",
           "FIRSTNAME":"MARC BIEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA V",
           "CONTACT":9760909716,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BUNDA",
           "FIRSTNAME":"ROUIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA V",
           "CONTACT":9488455980,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"VILLANUEVA",
           "FIRSTNAME":"ARLAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA V",
           "CONTACT":9974266383,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ABAD",
           "FIRSTNAME":"REY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA V",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DE LUNA",
           "FIRSTNAME":"DONDON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA VI",
           "CONTACT":9166915377,
           "POSITION":null
       },
       {
           "LASTNAME":"VILLANO",
           "FIRSTNAME":"REY RODEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA VI",
           "CONTACT":9392272506,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAMSON",
           "FIRSTNAME":"JAYMART",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA VIII",
           "CONTACT":9485127000,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PARIANES",
           "FIRSTNAME":"SOLEDAD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA VIII",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LEGASPI",
           "FIRSTNAME":"VIRGINIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"TRIBIANA",
           "FIRSTNAME":"STEVEN BLAKE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9452744635,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TRIBIANA",
           "FIRSTNAME":"DOROTAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9959717456,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SOQUIAP",
           "FIRSTNAME":"ANGELA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9513397798,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PENAS",
           "FIRSTNAME":"MAILA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9513397798,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CUASAY",
           "FIRSTNAME":"SHARA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9816703839,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALARCON",
           "FIRSTNAME":"PERLITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9933532051,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LLOSA",
           "FIRSTNAME":"AVEGAIL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"VILLANUEVA",
           "FIRSTNAME":"ROSANNA VERONICA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9656152765,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALARCON",
           "FIRSTNAME":"MARICEL",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9156204641,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PAMPANGA",
           "FIRSTNAME":"CONCERDIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9107122062,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MENDEZ",
           "FIRSTNAME":"PRINCESS ANNE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9380431539,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CABINOLA",
           "FIRSTNAME":"GINA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALCALDE",
           "FIRSTNAME":"AIRENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9676602881,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PAJARES",
           "FIRSTNAME":"DAYNALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9855049915,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LACERNA",
           "FIRSTNAME":"REA",
           "MIDDLENAME":"A",
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9064329689,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TORRES",
           "FIRSTNAME":"JOHN REYNALD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"NAVARETTE",
           "FIRSTNAME":"ANDREA NICOLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALLUSO",
           "FIRSTNAME":"REYNALDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9656582290,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PADAYAO",
           "FIRSTNAME":"EMALUN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9485918708,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BATURIANO",
           "FIRSTNAME":"DAIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"EVANGELISTA",
           "FIRSTNAME":"JOANNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9636073371,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"EVANGELISTA",
           "FIRSTNAME":"JC",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9603046539,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"APOLINAR",
           "FIRSTNAME":"BRENDALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BAYAN LUMA IX",
           "CONTACT":9635363741,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GALOS",
           "FIRSTNAME":"JOSE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"LAYANES",
           "FIRSTNAME":"RICO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"TEMPURAL",
           "FIRSTNAME":"CRISTINE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"CUENCA",
           "FIRSTNAME":"HANNAH MARIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":null,
           "FIRSTNAME":"ANJIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"NAVAL",
           "FIRSTNAME":"EDWARD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"OLIVEROS",
           "FIRSTNAME":"JUREN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"BELLN",
           "FIRSTNAME":"MARGIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SIENES",
           "FIRSTNAME":"VICENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"PAALISTRO",
           "FIRSTNAME":"EDISON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"BACATTAN",
           "FIRSTNAME":"ROGER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SINANGO",
           "FIRSTNAME":"ERWIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SANCHEZ",
           "FIRSTNAME":"ANGELU",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"CASALTAY",
           "FIRSTNAME":"ROMEO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SERGUINA",
           "FIRSTNAME":"GILBERT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"GUHIL",
           "FIRSTNAME":"CHARILITO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SINANGOFE",
           "FIRSTNAME":"JUNRIL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"PAJARES",
           "FIRSTNAME":"ALBERT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"HERRERA",
           "FIRSTNAME":"ORLY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"UNO",
           "FIRSTNAME":"JAIME",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"ALCOVINDAS",
           "FIRSTNAME":"ROEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"PAJARES",
           "FIRSTNAME":"VIRGINIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SINANGOFE",
           "FIRSTNAME":"REY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"RUSIANA",
           "FIRSTNAME":"NINA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"DIAZ",
           "FIRSTNAME":"MYCELL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"MOLAVEGA",
           "FIRSTNAME":"ANNALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"BODILES",
           "FIRSTNAME":"JESUS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"MOREAL",
           "FIRSTNAME":"FELIX",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"STA, ANA",
           "FIRSTNAME":"ELPIDIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"FOWLER",
           "FIRSTNAME":"ANTHONY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"DUCAO",
           "FIRSTNAME":"FRENZ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"LEGASPI",
           "FIRSTNAME":"JOVEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"BERGADO",
           "FIRSTNAME":"JESSIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"MACASLAO",
           "FIRSTNAME":"MICHAEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"PIMENTEL",
           "FIRSTNAME":"LENDEZ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"MARINAS",
           "FIRSTNAME":"JIRO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"GUBOS",
           "FIRSTNAME":"RUSSEL ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"MANGANA",
           "FIRSTNAME":"SHERELYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":9917651958,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CO",
           "FIRSTNAME":"SHERMAY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BACATAN",
           "FIRSTNAME":"WILSON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":9958737567,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"BARDELOSA",
           "FIRSTNAME":"PHILBEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA",
           "CONTACT":9498686624,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"DE CASTRO",
           "FIRSTNAME":"IVAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"SANTIAGUEL",
           "FIRSTNAME":"DUDUY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"SINANGGOT",
           "FIRSTNAME":"JUNNIL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":9944667931,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ROSERO",
           "FIRSTNAME":"JENNY JOY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":9669534012,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"HIMUDO",
           "FIRSTNAME":"ALEX",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CORCLETA",
           "FIRSTNAME":"JAYSON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":9054760814,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALEJANDRO",
           "FIRSTNAME":"IRISH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":9953784294,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALCOVINDAS",
           "FIRSTNAME":"RUEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":9535063875,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PAJARES",
           "FIRSTNAME":"VIRGINIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ROSERO",
           "FIRSTNAME":"JERICK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA I",
           "CONTACT":9669534012,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"FERREROS",
           "FIRSTNAME":"MARICEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA II",
           "CONTACT":9455026155,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"FOZ",
           "FIRSTNAME":"KARENN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA III",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":null,
           "FIRSTNAME":"VIRGILIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA III",
           "CONTACT":9498317652,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"VILLANUEVA",
           "FIRSTNAME":"ALFREDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA IV",
           "CONTACT":9454894321,
           "POSITION":null
       },
       {
           "LASTNAME":"VINCENT",
           "FIRSTNAME":"ROJ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA IV",
           "CONTACT":9260259606,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LEGASPI",
           "FIRSTNAME":"NESTLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA IV",
           "CONTACT":9699082209,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PENAS",
           "FIRSTNAME":"MARY GRACE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA IV",
           "CONTACT":9709372054,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAULOG",
           "FIRSTNAME":"TOMAS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA V",
           "CONTACT":9085558081,
           "POSITION":null
       },
       {
           "LASTNAME":"SATSATIN",
           "FIRSTNAME":"JOSE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA V",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"SAMPOT ",
           "FIRSTNAME":"PABLITO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA V",
           "CONTACT":9669104457,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ENCABO",
           "FIRSTNAME":"BOYET",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA V",
           "CONTACT":9567034061,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LEGARDA",
           "FIRSTNAME":"ELNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA V",
           "CONTACT":9356919847,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ILAS",
           "FIRSTNAME":"IAN DAVE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA V",
           "CONTACT":9555629165,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SARIA",
           "FIRSTNAME":"JANINE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUCANDALA V",
           "CONTACT":9301140617,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAUTISTA ",
           "FIRSTNAME":"JASON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9350079496,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DIZON",
           "FIRSTNAME":"AMALIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9163167425,
           "POSITION":"SPTA"
       },
       {
           "LASTNAME":"CASTILLO",
           "FIRSTNAME":"ARLENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9171454976,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"ROSARIO",
           "FIRSTNAME":"HENRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9178054850,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"FLORES",
           "FIRSTNAME":"CARMELA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9975693486,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"VALLE",
           "FIRSTNAME":"LUIS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9557149318,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"NULVO",
           "FIRSTNAME":"EDUARDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9352927332,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BUOT",
           "FIRSTNAME":"LOLITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9267407823,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REXIL",
           "FIRSTNAME":"ARIS ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9994169559,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TAN",
           "FIRSTNAME":"LILY",
           "MIDDLENAME":"D",
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9335193342,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TAN",
           "FIRSTNAME":"DARYL JOHN",
           "MIDDLENAME":"B",
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9915049368,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DAWAL",
           "FIRSTNAME":"MYLA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9171573916,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"CASTILO",
           "FIRSTNAME":"ARLENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9171457976,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"ROSARIO",
           "FIRSTNAME":"HENRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9178058850,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"AGUILAR",
           "FIRSTNAME":"LORELYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9182868862,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"INOLE",
           "FIRSTNAME":"MARITES",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9171208388,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SOLOMON",
           "FIRSTNAME":"VANSON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GABRIEL",
           "FIRSTNAME":"DANILO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9473428317,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"GONZALES",
           "FIRSTNAME":"CYNTHIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9238209471,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"PLEGARIA",
           "FIRSTNAME":"DOMINADOR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9953474028,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"PLEGARIA",
           "FIRSTNAME":"MA. PAZ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":null,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"CASTRO",
           "FIRSTNAME":"CHERRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"BUHAY NA TUBIG",
           "CONTACT":9393973954,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"OSICO",
           "FIRSTNAME":"RICKY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9673613193,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DUMO",
           "FIRSTNAME":"PEPE",
           "MIDDLENAME":"L",
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9209527165,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"AUREGUE",
           "FIRSTNAME":"IAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9770730004,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CUATCHON",
           "FIRSTNAME":"ANALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9277898297,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SICAT",
           "FIRSTNAME":"DONNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9061434611,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CATAYAS",
           "FIRSTNAME":"JOVY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9350079803,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CATAYAS",
           "FIRSTNAME":"DELFIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GARCIA",
           "FIRSTNAME":"ARLENE",
           "MIDDLENAME":"G",
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9556073700,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LUNA",
           "FIRSTNAME":"ARMANDO",
           "MIDDLENAME":"G",
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9367006875,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CASTRO",
           "FIRSTNAME":"FRANCHESKA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ANTONES",
           "FIRSTNAME":"MALOU",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9451705419,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DABU",
           "FIRSTNAME":"LIZA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9212893957,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GALARIDO",
           "FIRSTNAME":"RHEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO",
           "CONTACT":9674072038,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"OCTAVO",
           "FIRSTNAME":"DANILO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO I",
           "CONTACT":9262339707,
           "POSITION":null
       },
       {
           "LASTNAME":"CO",
           "FIRSTNAME":"ANNIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO I",
           "CONTACT":9162802788,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"REMULLA",
           "FIRSTNAME":"MARIA ADELF",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO I",
           "CONTACT":9156003342,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"RAMIREZ",
           "FIRSTNAME":"NELSON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO I",
           "CONTACT":9064583064,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"OCAMPOS",
           "FIRSTNAME":"JOHN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO I",
           "CONTACT":9178049094,
           "POSITION":null
       },
       {
           "LASTNAME":"OSICO",
           "FIRSTNAME":"RICKY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"UY",
           "FIRSTNAME":"MARIA LOTA",
           "MIDDLENAME":"ESTELITA",
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ILAS",
           "FIRSTNAME":"NANDING",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9951656150,
           "POSITION":null
       },
       {
           "LASTNAME":null,
           "FIRSTNAME":"JOEY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":null,
           "FIRSTNAME":"MYLA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"FOZ",
           "FIRSTNAME":"RUBY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MANGYAO",
           "FIRSTNAME":"ROSARIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9928681872,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"AGUILAR",
           "FIRSTNAME":"ERLINDA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9177067294,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PATIBANO",
           "FIRSTNAME":"LUZVIMINDA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9554074888,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GALURA",
           "FIRSTNAME":"IRENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9152146202,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"FRAGAS",
           "FIRSTNAME":"MARISTONA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9953780813,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PONCE",
           "FIRSTNAME":"REN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SANCHEZ",
           "FIRSTNAME":"ANGEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"IMPERIO",
           "FIRSTNAME":"RAINA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TORRE",
           "FIRSTNAME":"SARAH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PRESADO",
           "FIRSTNAME":"CHONA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DE LUNA",
           "FIRSTNAME":"LEIGH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CONDE",
           "FIRSTNAME":"MIRAFLOR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAGOGNAN",
           "FIRSTNAME":"APRIL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAQUITON",
           "FIRSTNAME":"LANIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ANOS",
           "FIRSTNAME":"NECODEMOS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SANTOS",
           "FIRSTNAME":"SHERLITA",
           "MIDDLENAME":"M",
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9511267034,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"LARWA",
           "FIRSTNAME":"AMELIA",
           "MIDDLENAME":"F",
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9669887390,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"LACIBAL",
           "FIRSTNAME":"ELENA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9911445338,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"ERESPE",
           "FIRSTNAME":"ANNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9206155291,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"FERNANDEZ",
           "FIRSTNAME":"NORALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9072732563,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SAGUIN",
           "FIRSTNAME":"CHONA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9663869565,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"GILE",
           "FIRSTNAME":"JENNIFER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9363623632,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"FABIAN",
           "FIRSTNAME":"RENABEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9498988697,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"ALMIRANTE",
           "FIRSTNAME":"CLAIRE",
           "MIDDLENAME":"B",
           "ADDRESS":null,
           "BARANGAY":"CARSADANG BAGO II",
           "CONTACT":9855592747,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CAGUETE",
           "FIRSTNAME":"ARTEMIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":9168611530,
           "POSITION":null
       },
       {
           "LASTNAME":"NAVARRO",
           "FIRSTNAME":"KIT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":9054883577,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"VALDEZ",
           "FIRSTNAME":"RONNIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MARICABAN",
           "FIRSTNAME":"MARIBETH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PARAYNO",
           "FIRSTNAME":"RAFAEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"RAMOS",
           "FIRSTNAME":"ROBERTO CEASAR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SANTARIN",
           "FIRSTNAME":"EMING",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":9420545523,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GALLETO",
           "FIRSTNAME":"AARON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":9675167292,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GARCIA",
           "FIRSTNAME":"EJ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MAHARLIKA",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CAMACHO",
           "FIRSTNAME":"STEVE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG",
           "CONTACT":9563178293,
           "POSITION":"SENIOR"
       },
       {
           "LASTNAME":"BALESTAMON",
           "FIRSTNAME":"ANDREW",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"DONGSO",
           "FIRSTNAME":"IVAN",
           "MIDDLENAME":"G",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"HINO-O",
           "FIRSTNAME":"JANET",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":null,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"VALLE",
           "FIRSTNAME":"LORNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9154711950,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"PABRERO",
           "FIRSTNAME":"ALFREDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9120062995,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"MUNGCAL",
           "FIRSTNAME":"ABELARDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9293313507,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"HECHANOVA",
           "FIRSTNAME":"NORILYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9953157110,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"CONTILLO",
           "FIRSTNAME":"JULIET",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9357118675,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"ORIO",
           "FIRSTNAME":"MELISSA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9354002141,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"PELERE",
           "FIRSTNAME":"NORMA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9253022272,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"DEL MUNDO",
           "FIRSTNAME":"EVELYN",
           "MIDDLENAME":"T",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9538318093,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"QUEROBIN",
           "FIRSTNAME":"AJ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9617206676,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"JERIC",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9285546783,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"PEBRE",
           "FIRSTNAME":"NOLITO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9253022272,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SORIANO",
           "FIRSTNAME":"ROBERT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9104194173,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"ESTACIO",
           "FIRSTNAME":"MARITES",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9366890178,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"GADOK",
           "FIRSTNAME":"MARVIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-A",
           "CONTACT":9666945050,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"DUMAPIAS",
           "FIRSTNAME":"MAR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DELIMA",
           "FIRSTNAME":"MISCHELLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MABORANG",
           "FIRSTNAME":"REMA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9202335014,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MIRABEL",
           "FIRSTNAME":"RENE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9297029361,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"QUIBERIN",
           "FIRSTNAME":"ARNEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9163895914,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TENGKO",
           "FIRSTNAME":"ROLANDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALPASAN",
           "FIRSTNAME":"REYNANTE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"QUIBERIN",
           "FIRSTNAME":"AJ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"QUIBERIN",
           "FIRSTNAME":"JENIFER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SACLUTI",
           "FIRSTNAME":"ALVIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9695197321,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GADON",
           "FIRSTNAME":"MARITES",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9972637507,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GADON",
           "FIRSTNAME":"EDUARDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9300659963,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ZOLETA",
           "FIRSTNAME":"GLAIZA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9997479378,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LORENA",
           "FIRSTNAME":"DIVINO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9493011446,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CASA",
           "FIRSTNAME":"DULCEMIA",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9185631373,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"LAILANIE",
           "MIDDLENAME":"T",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9223824480,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BALLARTA",
           "FIRSTNAME":"MERLITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9185597558,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SORE",
           "FIRSTNAME":"YOSHIELA",
           "MIDDLENAME":"K",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9360582257,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"COMBALICER",
           "FIRSTNAME":"GINA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9193388775,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CRUZ",
           "FIRSTNAME":"PAUL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9478955370,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ALARCON",
           "FIRSTNAME":"LIZANDER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9997646384,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BALLESTAMON",
           "FIRSTNAME":"ALBERT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":927328460,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"QUINTERO",
           "FIRSTNAME":"DARWIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9154404410,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MEJIA",
           "FIRSTNAME":"JON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":9613012699,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ROMAN",
           "FIRSTNAME":"JOSEPHINE",
           "MIDDLENAME":"B",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BONDOC",
           "FIRSTNAME":"JENNY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":9954621343,
           "POSITION":null
       },
       {
           "LASTNAME":"SARANGHILO",
           "FIRSTNAME":"FERDIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":9052584112,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BORJA",
           "FIRSTNAME":"CHRISTOPER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":9058845629,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MARTINEZ",
           "FIRSTNAME":"ERIC",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SANCHEZ",
           "FIRSTNAME":"SONNY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PAGLINANGAN",
           "FIRSTNAME":"EFRAIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ILANO",
           "FIRSTNAME":"MARIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"MA. DANICA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CRISTOBAL",
           "FIRSTNAME":"FRANZ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MURALLA",
           "FIRSTNAME":"JOHN CARL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SEGUNDO",
           "FIRSTNAME":"XRIFLAV",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CONDE",
           "FIRSTNAME":"MARK LOUIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SUMAMPONG",
           "FIRSTNAME":"ADRIAN ALEX",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ALINDOG",
           "FIRSTNAME":"ROLLEN WELL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"AREVALO ARJELITO",
           "FIRSTNAME":null,
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"CASTRO",
           "FIRSTNAME":"SHALANI",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":9941623414,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CORONA ",
           "FIRSTNAME":"MARY ROSE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":9754577142,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BARE",
           "FIRSTNAME":"CRIS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BONDOC",
           "FIRSTNAME":"JENNY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CRISTOBAL",
           "FIRSTNAME":"GERRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MONZON",
           "FIRSTNAME":"ADRIAN ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LAUREL",
           "FIRSTNAME":"ROLLIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAQUILLON",
           "FIRSTNAME":"KHRISTINE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"HIGO",
           "FIRSTNAME":"MILDRED",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ROCHA",
           "FIRSTNAME":"LOU",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MERCOLESIA",
           "FIRSTNAME":"CECILE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"FERNANDO",
           "FIRSTNAME":"DANIEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LAUREL",
           "FIRSTNAME":"DAISY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MORENO",
           "FIRSTNAME":"ALEX",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PEREZ",
           "FIRSTNAME":"JHEDZ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAILIGUMBA",
           "FIRSTNAME":"ALBERT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PUMLAKLAKIN",
           "FIRSTNAME":"NORMAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MONZON ",
           "FIRSTNAME":"HERMAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"JACOBO",
           "FIRSTNAME":"JOEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BAGAYSISO",
           "FIRSTNAME":"ALINA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MANICIO",
           "FIRSTNAME":"ROMEO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LAYBA",
           "FIRSTNAME":"LALANIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"HAYAG ",
           "FIRSTNAME":"KENT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CALASO",
           "FIRSTNAME":"LARRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DELUZ",
           "FIRSTNAME":"MAY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":969220070,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DELUZ",
           "FIRSTNAME":"BERNABE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"RUBY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":9352410906,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"OLIVAREZ",
           "FIRSTNAME":"MICHAEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":9159013739,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"RUBY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-D",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"UNAWA",
           "FIRSTNAME":"NOELITO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-E",
           "CONTACT":9958950262,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BARISO",
           "FIRSTNAME":"MONALISA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-E",
           "CONTACT":9452262455,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MONZON",
           "FIRSTNAME":"RUEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-E",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"HERRERA",
           "FIRSTNAME":"LENG",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-E",
           "CONTACT":9336732512,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MANALO ",
           "FIRSTNAME":"GERRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-E",
           "CONTACT":9162313991,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"MELVIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9502947946,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"VILLANUEVA",
           "FIRSTNAME":"MONETH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MANICIO",
           "FIRSTNAME":"TOTOY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9462398547,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BRINCES",
           "FIRSTNAME":"ALONA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9183659420,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SEVELLIENO",
           "FIRSTNAME":"JOSEPH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9487086835,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DAYRIT",
           "FIRSTNAME":"JINNUEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":null,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"VELUZ",
           "FIRSTNAME":"ALLIAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9081587995,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"TAPUYO",
           "FIRSTNAME":"JASMIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9218859578,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"REGIDOR",
           "FIRSTNAME":"JOHN JOSHUA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":963001839,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"GELLE",
           "FIRSTNAME":"CLYDE DANIEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9397879265,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"GAWONG ",
           "FIRSTNAME":"TRACY SCOTT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9614015280,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"ABUAN",
           "FIRSTNAME":"CHRISTIAN NINO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"INCIONG ",
           "FIRSTNAME":"JULIANE MOIRA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"SAPINOSO",
           "FIRSTNAME":"ARIS LENARD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9178710469,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"INGAL",
           "FIRSTNAME":"DANILO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-F",
           "CONTACT":9395258315,
           "POSITION":"TODA"
       },
       {
           "LASTNAME":"MORALE",
           "FIRSTNAME":"CARLO ANTONIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-G",
           "CONTACT":9074227099,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"NATIVIDAD",
           "FIRSTNAME":"MARK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-G",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SANTIAGO",
           "FIRSTNAME":"EDNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG I-G",
           "CONTACT":9691202815,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LLANERA",
           "FIRSTNAME":"AILEEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9230893619,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"GUTIERREZ",
           "FIRSTNAME":"JAYSON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9107552319,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAMALA",
           "FIRSTNAME":"NICOLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9084694989,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAMALA",
           "FIRSTNAME":"KIM JEREMY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9615201092,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"SARANGHILO",
           "FIRSTNAME":"ERVIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9192077748,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"PROGOSO",
           "FIRSTNAME":"ALDRINO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"CAMARCE",
           "FIRSTNAME":"RONALD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9291962092,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PON",
           "FIRSTNAME":"ROGER",
           "MIDDLENAME":"T",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9760830200,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TAN",
           "FIRSTNAME":"JOEL",
           "MIDDLENAME":"A",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9268700588,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MACENDA",
           "FIRSTNAME":"ROSE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-A",
           "CONTACT":9850476298,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAUNAR",
           "FIRSTNAME":"EDSA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"DELOS SANTOS",
           "FIRSTNAME":"EMERSON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BASILIO",
           "FIRSTNAME":"OMIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"RAMIREZ",
           "FIRSTNAME":"CORA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PACONG",
           "FIRSTNAME":"EMELIE",
           "MIDDLENAME":"B",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9171446774,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MONCADA",
           "FIRSTNAME":"ANALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9568125167,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SALE ",
           "FIRSTNAME":"SAHARA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9077404034,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BENEDICTO",
           "FIRSTNAME":"ANALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9613843470,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BENEDICTO",
           "FIRSTNAME":"JOHN ADRIAN PAUL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9084596215,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SALE",
           "FIRSTNAME":"GENOVA",
           "MIDDLENAME":"M",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9489577044,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SALE",
           "FIRSTNAME":"JEANY ROSE",
           "MIDDLENAME":"M",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9361058186,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DELA TORRE",
           "FIRSTNAME":"CHONA",
           "MIDDLENAME":"C",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9107536689,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MOZOL",
           "FIRSTNAME":"RAQEUL",
           "MIDDLENAME":"L",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9383314624,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RANOLA",
           "FIRSTNAME":"OFELIA",
           "MIDDLENAME":"F",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9171425424,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"OSOYOS",
           "FIRSTNAME":"MA. LUISA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CAYLAN",
           "FIRSTNAME":"JAMIE",
           "MIDDLENAME":"F",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":917145424,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RONDAIS",
           "FIRSTNAME":"JENNIFER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MOZOL",
           "FIRSTNAME":"MARY PEARL",
           "MIDDLENAME":"L",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9383314624,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ARCOS",
           "FIRSTNAME":"MARY LYCA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9717536689,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PACONG",
           "FIRSTNAME":"CAROL MAR MAXILIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9536958354,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PACONG ",
           "FIRSTNAME":"NOEL",
           "MIDDLENAME":"R",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9658431219,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MONCADA",
           "FIRSTNAME":"AL",
           "MIDDLENAME":"E",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9568125167,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BENEDICTO",
           "FIRSTNAME":"JAMES CYRON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9615017485,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ESTAYANE",
           "FIRSTNAME":"CLEOTILDE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9663493570,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MALOPIA",
           "FIRSTNAME":"RAYMOND",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9663493570,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CORPUS",
           "FIRSTNAME":"ANNA MARIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9919721196,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DABLE",
           "FIRSTNAME":"ANNIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9979870460,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TONIO",
           "FIRSTNAME":"CLARK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9566142409,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CAMACHO",
           "FIRSTNAME":"STEVE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-B",
           "CONTACT":9563178293,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SERVIDA",
           "FIRSTNAME":"MANDY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-C",
           "CONTACT":9275428300,
           "POSITION":null
       },
       {
           "LASTNAME":"RAYALA",
           "FIRSTNAME":"RUBY ANNE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-C",
           "CONTACT":9064408945,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"JO",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-C",
           "CONTACT":9367481125,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DE GUZMAN",
           "FIRSTNAME":"PRINCESS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CANTIMBUHAN",
           "FIRSTNAME":"JETHRO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-D",
           "CONTACT":9555628172,
           "POSITION":null
       },
       {
           "LASTNAME":"TOPACIO",
           "FIRSTNAME":"ZANI",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-E",
           "CONTACT":9979769046,
           "POSITION":null
       },
       {
           "LASTNAME":"PABILONIA",
           "FIRSTNAME":"ALLEN CEASAR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-F",
           "CONTACT":9457295443,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAMSON",
           "FIRSTNAME":"ALLAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-F",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"SAPIDA ",
           "FIRSTNAME":"RONALD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-F",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"SAMSON",
           "FIRSTNAME":"ALLAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-F",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"CANADA",
           "FIRSTNAME":"DOMINGO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-G",
           "CONTACT":9568954536,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MEDINA ",
           "FIRSTNAME":"MICHAEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MALAGASANG II-G",
           "CONTACT":9057341945,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DACALLOS",
           "FIRSTNAME":"WILLFREDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION",
           "CONTACT":9398318890,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"IMELDA",
           "FIRSTNAME":"MALUTO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION",
           "CONTACT":9394986537,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ESQUILONA",
           "FIRSTNAME":"BERNARDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION",
           "CONTACT":9568220180,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DECELLA",
           "FIRSTNAME":"RONILITO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION",
           "CONTACT":9658444976,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RAIT",
           "FIRSTNAME":"EDRICK",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"MEDICION",
           "CONTACT":9534970994,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ORDONEZ",
           "FIRSTNAME":"MA. CASSANDRA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-A",
           "CONTACT":9510687156,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MALAZARTE",
           "FIRSTNAME":"JOEY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-C",
           "CONTACT":9279086144,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MALIHAN",
           "FIRSTNAME":"ANDRO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-C",
           "CONTACT":9608669228,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"VILLANUEVA",
           "FIRSTNAME":"FLOCERFIDA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-C",
           "CONTACT":9157547564,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SOOD",
           "FIRSTNAME":"SOWAIB",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-C",
           "CONTACT":9752132263,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MADRID",
           "FIRSTNAME":"MANELY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-C",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAMALA",
           "FIRSTNAME":"RUSSEL JADE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-D",
           "CONTACT":9776323695,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ISANAN",
           "FIRSTNAME":"ALMARIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-D",
           "CONTACT":9661458999,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ISANAN",
           "FIRSTNAME":"JAYSON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION I-D",
           "CONTACT":9555675092,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"PAPA ",
           "FIRSTNAME":"GERARDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-A",
           "CONTACT":9260536988,
           "POSITION":null
       },
       {
           "LASTNAME":"PAPA ",
           "FIRSTNAME":"GERARDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-A",
           "CONTACT":9295480806,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DELA CRUZ",
           "FIRSTNAME":"CRIS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-B",
           "CONTACT":9453436529,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REMIGIO",
           "FIRSTNAME":"ROMMEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-B",
           "CONTACT":9332931296,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"AGUNOS",
           "FIRSTNAME":"ADRIAN ",
           "MIDDLENAME":"G",
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-B",
           "CONTACT":9060079016,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RAMIREZ",
           "FIRSTNAME":"JONA MAY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-B",
           "CONTACT":9298576267,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BELLA",
           "FIRSTNAME":"RICKY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-C",
           "CONTACT":9176242337,
           "POSITION":null
       },
       {
           "LASTNAME":"SARREAL",
           "FIRSTNAME":"RUBYANNA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-C",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"CAMATOG",
           "FIRSTNAME":"RIC",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-D",
           "CONTACT":9072274703,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"ROSE ",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-E",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"TOMAS",
           "FIRSTNAME":"AMY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-F",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MONZON",
           "FIRSTNAME":"ADORA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-F",
           "CONTACT":9155386231,
           "POSITION":null
       },
       {
           "LASTNAME":"MALUTO",
           "FIRSTNAME":"CAEZARION",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-F",
           "CONTACT":9475315315,
           "POSITION":null
       },
       {
           "LASTNAME":"ESPINA",
           "FIRSTNAME":"MARK GUIK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-F",
           "CONTACT":9272012003,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MALUTO",
           "FIRSTNAME":"JARIOUS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"MEDICION II-F",
           "CONTACT":9475315365,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SARINAS",
           "FIRSTNAME":"RANDY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA I",
           "CONTACT":9178197442,
           "POSITION":null
       },
       {
           "LASTNAME":"MEDINA ",
           "FIRSTNAME":"ERNESTO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA II ",
           "CONTACT":9193434307,
           "POSITION":null
       },
       {
           "LASTNAME":"ROBLES",
           "FIRSTNAME":"YOLLY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA II ",
           "CONTACT":9363614860,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"CASTILLO",
           "FIRSTNAME":"VIRGINIA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA II ",
           "CONTACT":9052196946,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RIETA",
           "FIRSTNAME":"MELISSA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":9669879445,
           "POSITION":null
       },
       {
           "LASTNAME":"YAMZON",
           "FIRSTNAME":"JOAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":9202160547,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"EDANO",
           "FIRSTNAME":"BOBBY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LAZONA",
           "FIRSTNAME":"DON",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BAGUNO",
           "FIRSTNAME":"FRANCIS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":9974224256,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"TRONO",
           "FIRSTNAME":"PRECILLA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SARAYBA",
           "FIRSTNAME":"JOWELL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"COCOBA",
           "FIRSTNAME":"JUNIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LUCIO",
           "FIRSTNAME":"FERDINAND",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":9358541855,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PALLESCO",
           "FIRSTNAME":"GINA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":9272238331,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"APOLINARIO",
           "FIRSTNAME":"ROSIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PAGASA III",
           "CONTACT":9687146279,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"BERNARDO",
           "FIRSTNAME":"MARILOU",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"PURING",
           "FIRSTNAME":"CRISTINA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SARANGHILO",
           "FIRSTNAME":"JONARD",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"FAJARDO",
           "FIRSTNAME":"GRACE ANN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MIRANDA",
           "FIRSTNAME":"BENITO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"IBO",
           "FIRSTNAME":"SUSAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CORONEJO",
           "FIRSTNAME":"AR-ES",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"OLORVIDA",
           "FIRSTNAME":"NESTOR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MONZON",
           "FIRSTNAME":"JOHN DERICK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"DULTRA",
           "FIRSTNAME":"KAREN MAY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"LEGASPI",
           "FIRSTNAME":"RICHELLE ANN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"OPERANA",
           "FIRSTNAME":"ELEAZAR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"CARDENO",
           "FIRSTNAME":"JASSLER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"SAGANIO",
           "FIRSTNAME":"ANSLIE KATE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"ZAMORE",
           "FIRSTNAME":"RHOD ANGELO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"ESPINO",
           "FIRSTNAME":"ROSAURO",
           "MIDDLENAME":"O",
           "ADDRESS":null,
           "BARANGAY":"PALICO I",
           "CONTACT":9652819832,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"SAPIDA ",
           "FIRSTNAME":"DARIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO III",
           "CONTACT":9156020490,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DOMIGUEZ",
           "FIRSTNAME":"JERRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO IV",
           "CONTACT":9209818663,
           "POSITION":null
       },
       {
           "LASTNAME":"VASQUEZ",
           "FIRSTNAME":"SONNY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO IV",
           "CONTACT":9948047322,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MOON",
           "FIRSTNAME":"MA. JEAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO IV",
           "CONTACT":9602046244,
           "POSITION":"SPTA"
       },
       {
           "LASTNAME":"SOMEDO",
           "FIRSTNAME":"EMMA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PALICO IV",
           "CONTACT":9811968861,
           "POSITION":"SPTA"
       },
       {
           "LASTNAME":"GAYAMO",
           "FIRSTNAME":"GERRY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA I",
           "CONTACT":9267361842,
           "POSITION":null
       },
       {
           "LASTNAME":"CAMERINO",
           "FIRSTNAME":"ABEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9497380750,
           "POSITION":null
       },
       {
           "LASTNAME":"ARCILLA",
           "FIRSTNAME":"LETH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9561871084,
           "POSITION":null
       },
       {
           "LASTNAME":"GARCIA",
           "FIRSTNAME":"ERWIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9322575028,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"GARCIA ",
           "FIRSTNAME":"SHERWIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":null,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"LARA",
           "FIRSTNAME":"PAULINO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9325558029,
           "POSITION":null
       },
       {
           "LASTNAME":"TAGLE",
           "FIRSTNAME":"ARMANDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9238067786,
           "POSITION":null
       },
       {
           "LASTNAME":"MEJICO",
           "FIRSTNAME":"CHARLOTTE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9361466965,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"VALENCIA",
           "FIRSTNAME":"EVABEST",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9205626000,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CAMERINO",
           "FIRSTNAME":"JOHN MATTHEW",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9482867014,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"CRUZ",
           "FIRSTNAME":"ANDREA",
           "MIDDLENAME":"YRAOLA",
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ASUNCION",
           "FIRSTNAME":"JOHN ROMAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9453297293,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CUEVAS",
           "FIRSTNAME":"ROSEMARIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9366309293,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"NATO",
           "FIRSTNAME":"JANE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9463046440,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"CALDA ",
           "FIRSTNAME":"KYLA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":null,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"TAPANG ",
           "FIRSTNAME":"RODEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9183377220,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SALCEDO",
           "FIRSTNAME":"MARK JOSEPH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"FERREROS",
           "FIRSTNAME":"BENJIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9062886260,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SANTOS",
           "FIRSTNAME":"JOHN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9260986584,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LEGASPI",
           "FIRSTNAME":"EVERA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9354358514,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DEL MONTE",
           "FIRSTNAME":"AVEGAIL",
           "MIDDLENAME":"P",
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9553119686,
           "POSITION":"SPTA"
       },
       {
           "LASTNAME":"RUBIN",
           "FIRSTNAME":"EDITHA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9664775799,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"FUKUDA",
           "FIRSTNAME":"EMILY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9451136536,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"MONALISA",
           "FIRSTNAME":"BERNADETH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9198198029,
           "POSITION":"HOA"
       },
       {
           "LASTNAME":"SARTE",
           "FIRSTNAME":"LEONORA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9557360338,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LOPEZ",
           "FIRSTNAME":"ALITH",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"PASONG BUAYA II",
           "CONTACT":9666903968,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BASILAN",
           "FIRSTNAME":"MARICAR",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"TACUS",
           "FIRSTNAME":"THIGHTS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION I-A",
           "CONTACT":9369504251,
           "POSITION":null
       },
       {
           "LASTNAME":"BANGGAYAN",
           "FIRSTNAME":"EVELYN",
           "MIDDLENAME":"C",
           "ADDRESS":null,
           "BARANGAY":"POBLACION I-A",
           "CONTACT":9814598625,
           "POSITION":"SPTA"
       },
       {
           "LASTNAME":"TOBIAS",
           "FIRSTNAME":"JOMMALYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION I-B",
           "CONTACT":9152381543,
           "POSITION":null
       },
       {
           "LASTNAME":"CAMERINO",
           "FIRSTNAME":"ROMMUEL CLADE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION II-B",
           "CONTACT":null,
           "POSITION":"SK CHAIRMAN"
       },
       {
           "LASTNAME":"TINED",
           "FIRSTNAME":"DICK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION II-B",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"RENO",
           "FIRSTNAME":"SZARINA",
           "MIDDLENAME":"F",
           "ADDRESS":null,
           "BARANGAY":"POBLACION III-1",
           "CONTACT":9435168089,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RENO",
           "FIRSTNAME":"BENEDICT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION III-A",
           "CONTACT":9435168089,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MALUTO",
           "FIRSTNAME":"CARLOS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION III-A",
           "CONTACT":9350389227,
           "POSITION":null
       },
       {
           "LASTNAME":"PORTEM",
           "FIRSTNAME":"MARK ANTHONY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION III-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ECHON",
           "FIRSTNAME":"RYAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION III-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"KENO",
           "FIRSTNAME":"BENEDICT",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"POBLACION III-A",
           "CONTACT":9356094929,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ORTILLANO",
           "FIRSTNAME":"RODELIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION III-B",
           "CONTACT":9317629366,
           "POSITION":null
       },
       {
           "LASTNAME":"CHAVEZ",
           "FIRSTNAME":"LYN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION IV",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MENANCIO",
           "FIRSTNAME":"ERNESTO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION IV-A",
           "CONTACT":9692173718,
           "POSITION":null
       },
       {
           "LASTNAME":"ALDEA",
           "FIRSTNAME":"RONWALD PAUL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION IV-A",
           "CONTACT":9971434348,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DIESTA",
           "FIRSTNAME":"JERWIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION IV-A",
           "CONTACT":9451184175,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"DIESTA",
           "FIRSTNAME":"KIM",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION IV-A",
           "CONTACT":9937110860,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CAIMOL",
           "FIRSTNAME":"JOCK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION IV-B",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"CAIMOL",
           "FIRSTNAME":"OLY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POBLACION IV-B",
           "CONTACT":9675168077,
           "POSITION":null
       },
       {
           "LASTNAME":"DE LARA",
           "FIRSTNAME":"MELODY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"POCLACION I-A",
           "CONTACT":9943563931,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MELO ",
           "FIRSTNAME":"ARNEL",
           "MIDDLENAME":"L",
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RAMIREZ",
           "FIRSTNAME":"NOLVIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA",
           "CONTACT":9052737960,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"BAUTISTA",
           "FIRSTNAME":"ROLLY",
           "MIDDLENAME":"A",
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA",
           "CONTACT":9473720343,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"RAMIREZ",
           "FIRSTNAME":"NOVIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MENDOZA",
           "FIRSTNAME":"LUIS",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CAROLINO",
           "FIRSTNAME":"MARITES",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA I",
           "CONTACT":9156244205,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"DE QUIROZ",
           "FIRSTNAME":"HEDIELYN",
           "MIDDLENAME":"S",
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA II",
           "CONTACT":9399621375,
           "POSITION":"SPTA"
       },
       {
           "LASTNAME":"LACSON",
           "FIRSTNAME":"CALOY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA II",
           "CONTACT":9174738789,
           "POSITION":null
       },
       {
           "LASTNAME":"DEL ROSARIO",
           "FIRSTNAME":"TERESITA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA II",
           "CONTACT":9173632690,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MANELLA",
           "FIRSTNAME":"ALLAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA III",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"PIEDAD",
           "FIRSTNAME":"ARCHIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9534401142,
           "POSITION":null
       },
       {
           "LASTNAME":"NOMBREFIA",
           "FIRSTNAME":"ROSEMARIE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9196909415,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"TARNATE",
           "FIRSTNAME":"KAREN LOISE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"VILLANUEVA",
           "FIRSTNAME":"AUBREY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9674004168,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ICAMEN",
           "FIRSTNAME":"SIEREL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9464034764,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LORIN",
           "FIRSTNAME":"MARGARETTE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9260943724,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ASTILLA",
           "FIRSTNAME":"ALGWUNE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"CORONEL",
           "FIRSTNAME":"CHLOE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9162613272,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"SANCHEZ",
           "FIRSTNAME":"FATIMA ANNE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9670015993,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"PONIENTE",
           "FIRSTNAME":"MARVIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9771900489,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"REOLA",
           "FIRSTNAME":"NORLAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA IV",
           "CONTACT":9691810720,
           "POSITION":"SK KAGAWAD"
       },
       {
           "LASTNAME":"LARA",
           "FIRSTNAME":"ALVIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA V",
           "CONTACT":9154267039,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SARMIENTO",
           "FIRSTNAME":"REY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA V",
           "CONTACT":9053929256,
           "POSITION":null
       },
       {
           "LASTNAME":"ABAD",
           "FIRSTNAME":"JULIO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA V",
           "CONTACT":9959477419,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"PAUS",
           "FIRSTNAME":"MARNOR",
           "MIDDLENAME":"P",
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA V",
           "CONTACT":9275559377,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"FLORES",
           "FIRSTNAME":"HIRALLGEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA V",
           "CONTACT":9655098927,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"CLAVEALLA",
           "FIRSTNAME":"MELCHORA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA V",
           "CONTACT":9627924948,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"HERMITA",
           "FIRSTNAME":"GEMMA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TANZANG LUMA V",
           "CONTACT":92789635030,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"GARCIA",
           "FIRSTNAME":"JEFF",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-A",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"ROY",
           "FIRSTNAME":"MEAN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-A",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"PAPA ",
           "FIRSTNAME":"HERBERT",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAMPILO",
           "FIRSTNAME":"KAYCEELIN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-A",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"BADION",
           "FIRSTNAME":"NERRIE",
           "MIDDLENAME":"SALEM",
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-B",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"SANTOS",
           "FIRSTNAME":"JOEY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-C",
           "CONTACT":null,
           "POSITION":null
       },
       {
           "LASTNAME":"PARCERO",
           "FIRSTNAME":"SAMUEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LACSON ",
           "FIRSTNAME":"LEOUIVER",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"LLANERA",
           "FIRSTNAME":"JOACIM",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG I-C",
           "CONTACT":null,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SAN JUAN",
           "FIRSTNAME":"MIK",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-A",
           "CONTACT":9174540561,
           "POSITION":null
       },
       {
           "LASTNAME":"FONATILLA",
           "FIRSTNAME":"JOJO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-A",
           "CONTACT":9162263615,
           "POSITION":null
       },
       {
           "LASTNAME":"FONTANILLA",
           "FIRSTNAME":"JOJO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-A",
           "CONTACT":9162263615,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":null,
           "FIRSTNAME":"JEREMY",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-A",
           "CONTACT":9530977724,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ARGUELLES",
           "FIRSTNAME":"RA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":9420386194,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"SACRAMENTO",
           "FIRSTNAME":"WILLE",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":9682446076,
           "POSITION":null
       },
       {
           "LASTNAME":"MERCADO",
           "FIRSTNAME":"LIZA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":9760349184,
           "POSITION":null
       },
       {
           "LASTNAME":"AQUINO",
           "FIRSTNAME":"EMILIANO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":9763049184,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"PRISCILLA",
           "FIRSTNAME":"MANUEL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":9152879668,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"ANORE",
           "FIRSTNAME":"ALFREDO",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":9695221606,
           "POSITION":"KAGAWAD"
       },
       {
           "LASTNAME":"MERCADO",
           "FIRSTNAME":"LISA",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"MERCADO",
           "FIRSTNAME":"LISA",
           "MIDDLENAME":"V",
           "ADDRESS":null,
           "BARANGAY":"TOCLONG II-B",
           "CONTACT":9760349184,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"ICANEN",
           "FIRSTNAME":"SIEREL",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":null,
           "CONTACT":null,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"REYES",
           "FIRSTNAME":"JERIC",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":null,
           "CONTACT":9285546783,
           "POSITION":"NGO"
       },
       {
           "LASTNAME":"LLARENA",
           "FIRSTNAME":"AILEEN",
           "MIDDLENAME":null,
           "ADDRESS":null,
           "BARANGAY":null,
           "CONTACT":null,
           "POSITION":"NGO"
       }
   ]
   

   for (const candidate of candidates) {
      const res = await prisma.candidate.create({
         data: {
            firstname: candidate.FIRSTNAME ?? "",
            middlename: candidate.MIDDLENAME ?? "",
            lastname: candidate.LASTNAME ?? "",
            barangay: candidate.BARANGAY ?? "",
            address: candidate.ADDRESS ?? "",
            contact: (candidate.CONTACT)?.toString() ?? "",
            position: candidate.POSITION ?? "",
         }
      })

      console.log(res)
   }
}

main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });
