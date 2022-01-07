import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import {view, gLayer} from "../components/Map/map"


export const criConstants = {
    addSketch: new SketchViewModel({
        view: view,
        layer: gLayer,
        polylineSymbol: {
          type: "simple-line",
          color: [204, 0, 0],
          width: 2,
          style: "dash"
        }
    }),

    portalUrl: "https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/cri_dev/FeatureServer/0",
    txCounties: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/Texas_County_Boundaries/FeatureServer/0",
    geomTypeRd: "polyline",
    geomTypeCounty: "polygon",
    basemap: "topo-vector",
    zoomLevel: 9,

    // ,
    
    cntyInfo: {
      "features" : [
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Anderson",
            "County_NBR" : "1",
            "Judge_Name" : "Judge Robert D. Johnston ",
            "Judge_Email" : "rjohnston@co.anderson.tx.us",
            "Total Mileage" : "897"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Andrews",
            "County_NBR" : "2",
            "Judge_Name" : "Judge Charlie Cardenas Falcon ",
            "Judge_Email" : "cfalcon@co.andrews.tx.us",
            "Total Mileage" : "280"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Angelina",
            "County_NBR" : "3",
            "Judge_Name" : "Judge Meydon   P. Lymbery ",
            "Judge_Email" : "dlymbery@angelinacounty.net",
            "Total Mileage" : "718"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Aransas",
            "County_NBR" : "4",
            "Judge_Name" : "Judge C. H.    Mills Jr.",
            "Judge_Email" : "judge@aransascounty.org",
            "Total Mileage" : "166"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Archer",
            "County_NBR" : "5",
            "Judge_Name" : "Judge Randall C. Jackson ",
            "Judge_Email" : "Randall.jackson@co.archer.tx.us",
            "Total Mileage" : "416"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Armstrong",
            "County_NBR" : "6",
            "Judge_Name" : "Judge Hugh  Reed ",
            "Judge_Email" : "countyjudge@co.armstrong.tx.us",
            "Total Mileage" : "424"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Atascosa",
            "County_NBR" : "7",
            "Judge_Name" : "Judge Robert Lee Hurley ",
            "Judge_Email" : "countyjudge@atascosacounty.texas.gov",
            "Total Mileage" : "765"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Austin",
            "County_NBR" : "8",
            "Judge_Name" : "Judge Tim A. Lapham ",
            "Judge_Email" : "tlapham@austincounty.com",
            "Total Mileage" : "599"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bailey",
            "County_NBR" : "9",
            "Judge_Name" : "Judge Sherri L. Harrison ",
            "Judge_Email" : "sharrison@co.bailey.tx.us",
            "Total Mileage" : "785"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bandera",
            "County_NBR" : "10",
            "Judge_Name" : "Judge Richard A. Evans ",
            "Judge_Email" : "countyjudge@banderacounty.org",
            "Total Mileage" : "432"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bastrop",
            "County_NBR" : "11",
            "Judge_Name" : "Judge Paul  Pape ",
            "Judge_Email" : "paul.pape@co.bastrop.tx.us",
            "Total Mileage" : "941"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Baylor",
            "County_NBR" : "12",
            "Judge_Name" : "Judge Rusty A. Stafford ",
            "Judge_Email" : "judge@srcaccess.net",
            "Total Mileage" : "333"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bee",
            "County_NBR" : "13",
            "Judge_Name" : "Judge George P. Morrill ",
            "Judge_Email" : "George.Morrill@beecounty.texas.gov",
            "Total Mileage" : "448"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bell",
            "County_NBR" : "14",
            "Judge_Name" : "Judge David A. Blackburn ",
            "Judge_Email" : "david.blackburn@bellcounty.texas.gov",
            "Total Mileage" : "917"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bexar",
            "County_NBR" : "15",
            "Judge_Name" : "Judge Nelson W. Wolff ",
            "Judge_Email" : "nwolff@bexar.org",
            "Total Mileage" : "1431"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Blanco",
            "County_NBR" : "16",
            "Judge_Name" : "Judge Brett G. Bray ",
            "Judge_Email" : "cojudge@co.blanco.tx.us",
            "Total Mileage" : "211"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Borden",
            "County_NBR" : "17",
            "Judge_Name" : "Judge Ross D. Sharp ",
            "Judge_Email" : "bordencj@poka.com",
            "Total Mileage" : "225"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bosque",
            "County_NBR" : "18",
            "Judge_Name" : "Judge Don L. Pool ",
            "Judge_Email" : "don.pool@bosquecounty.us",
            "Total Mileage" : "666"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Bowie",
            "County_NBR" : "19",
            "Judge_Name" : "Judge Bobby L. Howell ",
            "Judge_Email" : "bobby.howell@txkusa.org",
            "Total Mileage" : "741"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Brazoria",
            "County_NBR" : "20",
            "Judge_Name" : "Judge L. M.   Sebesta Jr.",
            "Judge_Email" : "matts@brazoria-county.com",
            "Total Mileage" : "1182"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Brazos",
            "County_NBR" : "21",
            "Judge_Name" : "Judge Duane  Peters ",
            "Judge_Email" : "countyjudge@brazoscountytx.gov",
            "Total Mileage" : "478"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Brewster",
            "County_NBR" : "22",
            "Judge_Name" : "Judge Eleazar R. Cano ",
            "Judge_Email" : "eleazar.cano@co.brewster.tx.us",
            "Total Mileage" : "172"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Briscoe",
            "County_NBR" : "23",
            "Judge_Name" : "Judge Wayne  Nance ",
            "Judge_Email" : "bcjudge@midplains.coop",
            "Total Mileage" : "381"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Brooks",
            "County_NBR" : "24",
            "Judge_Name" : "Judge Eric  Ramos ",
            "Judge_Email" : "eramos@co.brooks.tx.us",
            "Total Mileage" : "111"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Brown",
            "County_NBR" : "25",
            "Judge_Name" : "Judge Paul D. Lilly ",
            "Judge_Email" : "paul.lilly@browncountytx.org",
            "Total Mileage" : "757"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Burleson",
            "County_NBR" : "26",
            "Judge_Name" : "Judge Keith  Schroeder ",
            "Judge_Email" : "kschroeder@burlesoncounty.org",
            "Total Mileage" : "595"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Burnet",
            "County_NBR" : "27",
            "Judge_Name" : "Judge James  Oakley ",
            "Judge_Email" : "joakley@burnetcountytexas.org",
            "Total Mileage" : "480"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Caldwell",
            "County_NBR" : "28",
            "Judge_Name" : "Judge Hoppy H. Haden ",
            "Judge_Email" : "hoppy.haden@co.caldwell.tx.us",
            "Total Mileage" : "426"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Calhoun",
            "County_NBR" : "29",
            "Judge_Name" : "Judge Richard H. Meyer ",
            "Judge_Email" : "richard.meyer@calhouncotx.org",
            "Total Mileage" : "221"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Callahan",
            "County_NBR" : "30",
            "Judge_Name" : "Judge G. Scott Kniffen ",
            "Judge_Email" : "scott.kniffen@callahancounty.org",
            "Total Mileage" : "484"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Cameron",
            "County_NBR" : "31",
            "Judge_Name" : "Judge Eddie  Trevino Jr.",
            "Judge_Email" : "etrevino@co.cameron.tx.us",
            "Total Mileage" : "717"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Camp",
            "County_NBR" : "32",
            "Judge_Name" : "Judge James   Anthony Mason ",
            "Judge_Email" : "AJ.mason@co.camp.tx.us",
            "Total Mileage" : "243"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Carson",
            "County_NBR" : "33",
            "Judge_Name" : "Judge Dan  Looten ",
            "Judge_Email" : "dan.looten@co.carson.tx.us",
            "Total Mileage" : "608"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Cass",
            "County_NBR" : "34",
            "Judge_Name" : "Judge Becky A. Wilbanks ",
            "Judge_Email" : "casscojudge@gmail.com",
            "Total Mileage" : "953"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Castro",
            "County_NBR" : "35",
            "Judge_Name" : "Judge Carroll U. Gerber ",
            "Judge_Email" : "Cgerber@castrocounty.org",
            "Total Mileage" : "892"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Chambers",
            "County_NBR" : "36",
            "Judge_Name" : "Judge Jimmy  Sylvia ",
            "Judge_Email" : "jsylvia@chamberstx.gov",
            "Total Mileage" : "297"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Cherokee",
            "County_NBR" : "37",
            "Judge_Name" : "Judge Chris  Davis ",
            "Judge_Email" : "cojudge@cocherokee.org",
            "Total Mileage" : "931"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Childress",
            "County_NBR" : "38",
            "Judge_Name" : "Judge Jay  Mayden ",
            "Judge_Email" : "jay.mayden@childresstx.us",
            "Total Mileage" : "426"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Clay",
            "County_NBR" : "39",
            "Judge_Name" : "Judge Mike  Campbell ",
            "Judge_Email" : "Mike.Campbell@co.clay.tx.us",
            "Total Mileage" : "713"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Cochran",
            "County_NBR" : "40",
            "Judge_Name" : "Judge Pat S. Henry ",
            "Judge_Email" : "pshenry@co.cochran.tx.us",
            "Total Mileage" : "506"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Coke",
            "County_NBR" : "41",
            "Judge_Name" : "Judge Hal  Spain ",
            "Judge_Email" : "hal.spain@co.coke.tx.us",
            "Total Mileage" : "264"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Coleman",
            "County_NBR" : "42",
            "Judge_Name" : "Judge Billy D. Bledsoe ",
            "Judge_Email" : "county.judge@yahoo.com",
            "Total Mileage" : "765"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Collin",
            "County_NBR" : "43",
            "Judge_Name" : "Judge Christopher T. Hill ",
            "Judge_Email" : "chill@collincountytx.gov",
            "Total Mileage" : "702"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Collingsworth",
            "County_NBR" : "44",
            "Judge_Name" : "Judge John A. James ",
            "Judge_Email" : "john.james@co.collingsworth.tx.us",
            "Total Mileage" : "550"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Colorado",
            "County_NBR" : "45",
            "Judge_Name" : "Judge Ty  Prause ",
            "Judge_Email" : "ty.prause@co.colorado.tx.us",
            "Total Mileage" : "738"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Comal",
            "County_NBR" : "46",
            "Judge_Name" : "Judge Sherman  Krause ",
            "Judge_Email" : "krause@co.comal.tx.us",
            "Total Mileage" : "855"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Comanche",
            "County_NBR" : "47",
            "Judge_Name" : "Judge Stephanie Lynn Davis ",
            "Judge_Email" : "judgedavis@co.comanche.tx.us",
            "Total Mileage" : "745"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Concho",
            "County_NBR" : "48",
            "Judge_Name" : "Judge David Eugene Dillard ",
            "Judge_Email" : "david.dillard@co.concho.tx.us",
            "Total Mileage" : "382"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Cooke",
            "County_NBR" : "49",
            "Judge_Name" : "Judge Jason  Brinkley ",
            "Judge_Email" : "jason.brinkley@co.cooke.tx.us",
            "Total Mileage" : "791"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Coryell",
            "County_NBR" : "50",
            "Judge_Name" : "Judge Roger  Miller ",
            "Judge_Email" : "countyjudge@coryellcounty.org",
            "Total Mileage" : "628"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Cottle",
            "County_NBR" : "51",
            "Judge_Name" : "Judge Karl R. Holloway ",
            "Judge_Email" : "ccjdge@co.cottle.tx.us",
            "Total Mileage" : "314"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Crane",
            "County_NBR" : "52",
            "Judge_Name" : "Judge Richard    Hodges ",
            "Judge_Email" : "rhodges@co.crane.tx.us",
            "Total Mileage" : "84"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Crockett",
            "County_NBR" : "53",
            "Judge_Name" : "Judge Fred Marshall Deaton ",
            "Judge_Email" : "Fred.deaton@co.crockett.Tx.us",
            "Total Mileage" : "380"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Crosby",
            "County_NBR" : "54",
            "Judge_Name" : "Judge Rusty  Forbes ",
            "Judge_Email" : "judge@crosbycountytx.com",
            "Total Mileage" : "695"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Culberson",
            "County_NBR" : "55",
            "Judge_Name" : "Judge Carlos G. Urias ",
            "Judge_Email" : "carlos.urias@co.culberson.tx.us",
            "Total Mileage" : "516"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Dallam",
            "County_NBR" : "56",
            "Judge_Name" : "Judge Wesley C. Ritchey ",
            "Judge_Email" : "Daljudge@xit.net",
            "Total Mileage" : "496"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Dallas",
            "County_NBR" : "57",
            "Judge_Name" : "Judge Clay Lewis Jenkins ",
            "Judge_Email" : "clay.jenkins@dallascounty.org",
            "Total Mileage" : "97"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Dawson",
            "County_NBR" : "58",
            "Judge_Name" : "Judge Foy  O'Brien ",
            "Judge_Email" : "foyobrien@gmail.com",
            "Total Mileage" : "923"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Deaf Smith",
            "County_NBR" : "59",
            "Judge_Name" : "Judge David   Lynn Wagner Jr.",
            "Judge_Email" : "dwagner@deafsmithcounty.texas.gov",
            "Total Mileage" : "950"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Delta",
            "County_NBR" : "60",
            "Judge_Name" : "Judge Jason H. Murray ",
            "Judge_Email" : "countyjudge@deltacountytx.com",
            "Total Mileage" : "238"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Denton",
            "County_NBR" : "61",
            "Judge_Name" : "Judge Andrew T. Eads ",
            "Judge_Email" : "andy.eads@dentoncounty.com",
            "Total Mileage" : "793"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "De Witt",
            "County_NBR" : "62",
            "Judge_Name" : "Judge Daryl L. Fowler ",
            "Judge_Email" : "daryl.fowler@co.dewitt.tx.us",
            "Total Mileage" : "680"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Dickens",
            "County_NBR" : "63",
            "Judge_Name" : "Judge Kevin L. Brendle ",
            "Judge_Email" : "dcjudge@caprock-spur.com",
            "Total Mileage" : "402"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Dimmit",
            "County_NBR" : "64",
            "Judge_Name" : "Judge Francisco G. Ponce ",
            "Judge_Email" : "countyjudge@dimmitcounty.org",
            "Total Mileage" : "174"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Donley",
            "County_NBR" : "65",
            "Judge_Name" : "Judge John C. Howard M.D.",
            "Judge_Email" : "doncojudge@windstream.net",
            "Total Mileage" : "351"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Duval",
            "County_NBR" : "67",
            "Judge_Name" : "Judge Gilbert  Saenz ",
            "Judge_Email" : "gsaenz@co.duval.tx.us",
            "Total Mileage" : "405"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Eastland",
            "County_NBR" : "68",
            "Judge_Name" : "Judge Rex Louis Fields ",
            "Judge_Email" : "ecjudge@eastlandcountytexas.com",
            "Total Mileage" : "697"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Ector",
            "County_NBR" : "69",
            "Judge_Name" : "Judge Debi  Hays ",
            "Judge_Email" : "debi.hays@ectorcountytx.gov",
            "Total Mileage" : "585"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Edwards",
            "County_NBR" : "70",
            "Judge_Name" : "Judge Souli Asa Shanklin ",
            "Judge_Email" : "countyjudge@swtexas.net",
            "Total Mileage" : "277"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Ellis",
            "County_NBR" : "71",
            "Judge_Name" : "Judge Todd B. Little ",
            "Judge_Email" : "CountyJudge@epcounty.com",
            "Total Mileage" : "909"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "El Paso",
            "County_NBR" : "72",
            "Judge_Name" : "Judge Ricardo A. Samaniego ",
            "Judge_Email" : "countyjudge@co.ellis.tx.us",
            "Total Mileage" : "718"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Erath",
            "County_NBR" : "73",
            "Judge_Name" : "Judge Alfonso  Campos ",
            "Judge_Email" : "countyjudge@co.erath.tx.us",
            "Total Mileage" : "836"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Falls",
            "County_NBR" : "74",
            "Judge_Name" : "Judge Jay T. Elliott ",
            "Judge_Email" : "jay.t.elliott@co.falls.tx.us",
            "Total Mileage" : "756"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Fannin",
            "County_NBR" : "75",
            "Judge_Name" : "Judge Randy  Moore ",
            "Judge_Email" : "countyjudge@fanninco.net",
            "Total Mileage" : "932"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Fayette",
            "County_NBR" : "76",
            "Judge_Name" : "Judge Joseph F. Weber ",
            "Judge_Email" : "Joe.weber@co.fayette.tx.us",
            "Total Mileage" : "864"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Fisher",
            "County_NBR" : "77",
            "Judge_Name" : "Judge Ken B. Holt ",
            "Judge_Email" : "ken.holt@co.fisher.tx.us",
            "Total Mileage" : "637"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Floyd",
            "County_NBR" : "78",
            "Judge_Name" : "Judge Marty C. Lucke ",
            "Judge_Email" : "countyjudge@co.floyd.tx.us",
            "Total Mileage" : "972"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Foard",
            "County_NBR" : "79",
            "Judge_Name" : "Judge Mark A. Christopher ",
            "Judge_Email" : "judge@foardcounty.texas.gov",
            "Total Mileage" : "325"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Fort Bend",
            "County_NBR" : "80",
            "Judge_Name" : "Judge K. P.  George ",
            "Judge_Email" : "kp.george@fortbendcountytx.gov",
            "Total Mileage" : "1915"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Franklin",
            "County_NBR" : "81",
            "Judge_Name" : "Judge Scott  Lee ",
            "Judge_Email" : "slee@co.franklin.tx.us",
            "Total Mileage" : "276"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Freestone",
            "County_NBR" : "82",
            "Judge_Name" : "Judge Linda K. Grant ",
            "Judge_Email" : "linda.grant@co.freestone.tx.us",
            "Total Mileage" : "651"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Frio",
            "County_NBR" : "83",
            "Judge_Name" : "Judge Arnulfo C. Luna ",
            "Judge_Email" : "judge.luna@friocounty.org",
            "Total Mileage" : "380"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Gaines",
            "County_NBR" : "84",
            "Judge_Name" : "Judge Tom N. Keyes ",
            "Judge_Email" : "tom.keyes@co.gaines.tx.us",
            "Total Mileage" : "1056"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Galveston",
            "County_NBR" : "85",
            "Judge_Name" : "Judge Mark  Henry ",
            "Judge_Email" : "Mark.Henry@co.galveston.tx.us",
            "Total Mileage" : "328"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Garza",
            "County_NBR" : "86",
            "Judge_Name" : "Judge John Lee Norman ",
            "Judge_Email" : "lee.norman@co.garza.tx.us",
            "Total Mileage" : "250"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Gillespie",
            "County_NBR" : "87",
            "Judge_Name" : "Judge Mark  Stroeher ",
            "Judge_Email" : "mstroeher@gillespiecounty.org",
            "Total Mileage" : "541"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Glasscock",
            "County_NBR" : "88",
            "Judge_Name" : "Judge Kim  Halfmann ",
            "Judge_Email" : "kim.halfmann@co.glasscock.tx.us",
            "Total Mileage" : "215"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Goliad",
            "County_NBR" : "89",
            "Judge_Name" : "Judge Mike  Bennett II",
            "Judge_Email" : "mbennett@goliadcountytx.gov",
            "Total Mileage" : "317"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Gonzales",
            "County_NBR" : "90",
            "Judge_Name" : "Judge Patrick C. Davis ",
            "Judge_Email" : "countyjudge089@co.gonzales.tx.us",
            "Total Mileage" : "688"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Gray",
            "County_NBR" : "91",
            "Judge_Name" : "Judge Chris  Porter ",
            "Judge_Email" : "chris.porter@graycch.com",
            "Total Mileage" : "601"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Grayson",
            "County_NBR" : "92",
            "Judge_Name" : "Judge William   L. Magers ",
            "Judge_Email" : " bmagers@co.grayson.tx.us",
            "Total Mileage" : "1290"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Gregg",
            "County_NBR" : "93",
            "Judge_Name" : "Judge William   Keith Stoudt ",
            "Judge_Email" : " diane.pearson@co.gregg.tx.us",
            "Total Mileage" : "255"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Grimes",
            "County_NBR" : "94",
            "Judge_Name" : "Judge Joe  Fauth III",
            "Judge_Email" : "Joe.Fauth@grimescountytexas.gov",
            "Total Mileage" : "597"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Guadalupe",
            "County_NBR" : "95",
            "Judge_Name" : "Judge Kyle W. Kutscher ",
            "Judge_Email" : "kyle.kutscher@co.guadalupe.tx.us",
            "Total Mileage" : "641"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hale",
            "County_NBR" : "96",
            "Judge_Name" : "Judge David B. Mull ",
            "Judge_Email" : "dmull@halecounty.org",
            "Total Mileage" : "1325"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hall",
            "County_NBR" : "97",
            "Judge_Name" : "Judge Ray D. Powell ",
            "Judge_Email" : "hallcojudge@dtgoftexas.com",
            "Total Mileage" : "421"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hamilton",
            "County_NBR" : "98",
            "Judge_Name" : "Judge Warren Mark Tynes ",
            "Judge_Email" : "countyjudge@hamiltoncountytx.org",
            "Total Mileage" : "563"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hansford",
            "County_NBR" : "99",
            "Judge_Name" : "Judge Benny D. Wilson ",
            "Judge_Email" : "bwilson@co.hansford.tx.us",
            "Total Mileage" : "467"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hardeman",
            "County_NBR" : "100",
            "Judge_Name" : "Judge Ronald E. Ingram ",
            "Judge_Email" : "judge@co.hardeman.tx.us",
            "Total Mileage" : "488"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hardin",
            "County_NBR" : "101",
            "Judge_Name" : "Judge Wayne  McDaniel ",
            "Judge_Email" : "Wayne.mcdaniel@co.hardin.tx.us",
            "Total Mileage" : "526"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Harris",
            "County_NBR" : "102",
            "Judge_Name" : "Judge Lina Maria Hidalgo ",
            "Judge_Email" : "linahidalgo@linahidalgo.com",
            "Total Mileage" : "5898"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Harrison",
            "County_NBR" : "103",
            "Judge_Name" : "Judge Chad L. Sims ",
            "Judge_Email" : "chads@co.harrison.tx.us",
            "Total Mileage" : "725"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hartley",
            "County_NBR" : "104",
            "Judge_Name" : "Judge Ronnie  Gordon ",
            "Judge_Email" : "ronnie.gordon@co.hartley.tx.us",
            "Total Mileage" : "256"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Haskell",
            "County_NBR" : "105",
            "Judge_Name" : "Judge Kenny  Thompson ",
            "Judge_Email" : "cojudge@co.haskell.tx.us",
            "Total Mileage" : "730"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hays",
            "County_NBR" : "106",
            "Judge_Name" : "Judge Ruben  Becerra ",
            "Judge_Email" : "judge.becerra@co.hays.tx.us",
            "Total Mileage" : "781"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hemphill",
            "County_NBR" : "107",
            "Judge_Name" : "Judge George D. Briant ",
            "Judge_Email" : "cojudge@hemphillco.com",
            "Total Mileage" : "348"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Henderson",
            "County_NBR" : "108",
            "Judge_Name" : "Judge Wade  Mckinney ",
            "Judge_Email" : "wmckinney@henderson-county.com",
            "Total Mileage" : "821"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hidalgo",
            "County_NBR" : "109",
            "Judge_Name" : "Judge Richard F. Cortez ",
            "Judge_Email" : "richard.cortez@co.hidalgo.tx.us",
            "Total Mileage" : "1671"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hill",
            "County_NBR" : "110",
            "Judge_Name" : "Judge Justin W. Lewis ",
            "Judge_Email" : "countyjudge@co.hill.tx.us",
            "Total Mileage" : "1075"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hockley",
            "County_NBR" : "111",
            "Judge_Name" : "Judge Sharla D. Baldridge ",
            "Judge_Email" : "sbaldridge@hockleycounty.org",
            "Total Mileage" : "1134"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hood",
            "County_NBR" : "112",
            "Judge_Name" : "Judge Ron E. Massingill ",
            "Judge_Email" : "rmassingill@co.hood.tx.us",
            "Total Mileage" : "469"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hopkins",
            "County_NBR" : "113",
            "Judge_Name" : "Judge Robert E. Newsom ",
            "Judge_Email" : "rnewsom@hopkinscountytx.org",
            "Total Mileage" : "834"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Houston",
            "County_NBR" : "114",
            "Judge_Name" : "Judge Jim L. Lovell ",
            "Judge_Email" : "jlovell@co.houston.tx.us",
            "Total Mileage" : "725"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Howard",
            "County_NBR" : "115",
            "Judge_Name" : "Judge Kathryn Gay Wiseman ",
            "Judge_Email" : "kathryn.wiseman@howardcountytx.com",
            "Total Mileage" : "512"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hudspeth",
            "County_NBR" : "116",
            "Judge_Name" : "Judge Thomas D. Neely ",
            "Judge_Email" : "tneely@co.hudspeth.tx.us",
            "Total Mileage" : "480"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hunt",
            "County_NBR" : "117",
            "Judge_Name" : "Judge Bobby  Stovall ",
            "Judge_Email" : "bstovall@huntcounty.net",
            "Total Mileage" : "1059"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Hutchinson",
            "County_NBR" : "118",
            "Judge_Name" : "Judge Cindy Gail Irwin ",
            "Judge_Email" : "judgeirwin@hutchinsoncnty.com",
            "Total Mileage" : "340"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Irion",
            "County_NBR" : "119",
            "Judge_Name" : "Judge Molly  Criner ",
            "Judge_Email" : "m.criner@co.irion.tx.us",
            "Total Mileage" : "110"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jack",
            "County_NBR" : "120",
            "Judge_Name" : "Judge Brian Keith Umphress ",
            "Judge_Email" : "judge@jackcounty.org",
            "Total Mileage" : "405"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jackson",
            "County_NBR" : "121",
            "Judge_Name" : "Judge Jill Susan Sklar ",
            "Judge_Email" : "j.sklar@co.jackson.tx.us",
            "Total Mileage" : "487"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jasper",
            "County_NBR" : "122",
            "Judge_Name" : "Judge Mark Wayne Allen ",
            "Judge_Email" : "mark.allen@co.jasper.tx.us",
            "Total Mileage" : "656"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jeff Davis",
            "County_NBR" : "123",
            "Judge_Name" : "Judge Curtis  Evans ",
            "Judge_Email" : "countyjudge@co.jeff-davis.tx.us",
            "Total Mileage" : "45"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jefferson",
            "County_NBR" : "124",
            "Judge_Name" : "Judge Jeff  Branick ",
            "Judge_Email" : "jbranick@co.jefferson.tx.us",
            "Total Mileage" : "368"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jim Hogg",
            "County_NBR" : "125",
            "Judge_Name" : "Judge Juan Carlos Guerra ",
            "Judge_Email" : "jcguerra@co.jim-hogg.tx.us",
            "Total Mileage" : "103"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Johnson",
            "County_NBR" : "127",
            "Judge_Name" : "Judge Roger Owen Harmon ",
            "Judge_Email" : "countyjudge@johnsoncountytx.org",
            "Total Mileage" : "923"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jones",
            "County_NBR" : "128",
            "Judge_Name" : "Judge Dale  Spurgin ",
            "Judge_Email" : "dale.spurgin@co.jones.tx.us",
            "Total Mileage" : "869"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Karnes",
            "County_NBR" : "129",
            "Judge_Name" : "Judge Wade J. Hedtke ",
            "Judge_Email" : "wade.hedtke@co.karnes.tx.us",
            "Total Mileage" : "548"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kaufman",
            "County_NBR" : "130",
            "Judge_Name" : "Judge Hal  Richards ",
            "Judge_Email" : "judgerichards@kaufmancounty.net",
            "Total Mileage" : "867"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kendall",
            "County_NBR" : "131",
            "Judge_Name" : "Judge Darrel L. Lux ",
            "Judge_Email" : "judge@co.kendall.tx.us",
            "Total Mileage" : "412"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kenedy",
            "County_NBR" : "66",
            "Judge_Name" : "Judge Louis E. Turcotte III",
            "Judge_Email" : "budturcotte@yahoo.com",
            "Total Mileage" : "9"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kent",
            "County_NBR" : "132",
            "Judge_Name" : "Judge Jim C. White ",
            "Judge_Email" : "kencojdg@caprock-spur.com",
            "Total Mileage" : "217"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kerr",
            "County_NBR" : "133",
            "Judge_Name" : "Judge Robert Lee Kelly ",
            "Judge_Email" : "rkelly@co.kerr.tx.us",
            "Total Mileage" : "448"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kimble",
            "County_NBR" : "134",
            "Judge_Name" : "Judge Delbert Ray Roberts ",
            "Judge_Email" : "delbert.roberts@co.kimble.tx.us",
            "Total Mileage" : "318"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "King",
            "County_NBR" : "135",
            "Judge_Name" : "Judge Duane Lee Daniel ",
            "Judge_Email" : "kcjudge@caprock-spur.com",
            "Total Mileage" : "199"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kinney",
            "County_NBR" : "136",
            "Judge_Name" : "Judge Tully  Shahan ",
            "Judge_Email" : "county.judge@co.kinney.tx.us",
            "Total Mileage" : "63"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Kleberg",
            "County_NBR" : "137",
            "Judge_Name" : "Judge Rudy  Madrid ",
            "Judge_Email" : "rmadrid@co.kleberg.tx.us",
            "Total Mileage" : "179"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Knox",
            "County_NBR" : "138",
            "Judge_Name" : "Judge Stan  Wojcik ",
            "Judge_Email" : "swojcik@srcaccess.net",
            "Total Mileage" : "401"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lamar",
            "County_NBR" : "139",
            "Judge_Name" : "Judge Brandon  Bell ",
            "Judge_Email" : "judgebell@co.lamar.tx.us",
            "Total Mileage" : "861"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lamb",
            "County_NBR" : "140",
            "Judge_Name" : "Judge James M. DeLoach ",
            "Judge_Email" : "jmdeloach@nts-online.net",
            "Total Mileage" : "1197"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lampasas",
            "County_NBR" : "141",
            "Judge_Name" : "Judge Randall J. Hoyer ",
            "Judge_Email" : "randy.hoyer@co.lampasas.tx.us",
            "Total Mileage" : "449"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "La Salle",
            "County_NBR" : "142",
            "Judge_Name" : "Judge Joel  Rodriguez Jr.",
            "Judge_Email" : "joel.rodriguez@co.la-salle.tx.us",
            "Total Mileage" : "222"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lavaca",
            "County_NBR" : "143",
            "Judge_Name" : "Judge Mark  Myers ",
            "Judge_Email" : "judgemyers@co.lavaca.tx.us",
            "Total Mileage" : "864"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lee",
            "County_NBR" : "144",
            "Judge_Name" : "Judge Paul E. Fischer ",
            "Judge_Email" : "paul.fischer@co.lee.tx.us",
            "Total Mileage" : "485"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Leon",
            "County_NBR" : "145",
            "Judge_Name" : "Judge Byron Michael Ryder ",
            "Judge_Email" : "byron.ryder@co.leon.tx.us",
            "Total Mileage" : "605"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Liberty",
            "County_NBR" : "146",
            "Judge_Name" : "Judge Jay H. Knight ",
            "Judge_Email" : "jay.knight@co.liberty.tx.us",
            "Total Mileage" : "973"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Limestone",
            "County_NBR" : "147",
            "Judge_Name" : "Judge Richard L. Duncan ",
            "Judge_Email" : "Richard.Duncan@co.limestone.tx.us",
            "Total Mileage" : "880"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lipscomb",
            "County_NBR" : "148",
            "Judge_Name" : "Judge Mickey W. Simpson ",
            "Judge_Email" : "mickey.simpson@co.lipscomb.tx.us",
            "Total Mileage" : "421"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Live Oak",
            "County_NBR" : "149",
            "Judge_Name" : "Judge Jim  Huff ",
            "Judge_Email" : "cjudge@co.live-oak.tx.us",
            "Total Mileage" : "502"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Llano",
            "County_NBR" : "150",
            "Judge_Name" : "Judge Ron  Cunningham ",
            "Judge_Email" : "rcunningham@co.llano.tx.us",
            "Total Mileage" : "508"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Loving",
            "County_NBR" : "151",
            "Judge_Name" : "Judge Skeet Lee Jones ",
            "Judge_Email" : "lovingjudge@yahoo.com",
            "Total Mileage" : "43"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lubbock",
            "County_NBR" : "152",
            "Judge_Name" : "Judge Curtis A. Parrish ",
            "Judge_Email" : "cparrish@co.lubbock.tx.us",
            "Total Mileage" : "1184"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Lynn",
            "County_NBR" : "153",
            "Judge_Name" : "Judge Mike  Braddock ",
            "Judge_Email" : "cojudge@co.lynn.tx.us",
            "Total Mileage" : "912"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "McCulloch",
            "County_NBR" : "160",
            "Judge_Name" : "Judge Frank  Trull ",
            "Judge_Email" : "frank.trull@co.mcculloch.tx.us",
            "Total Mileage" : "405"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "McLennan",
            "County_NBR" : "161",
            "Judge_Name" : "Judge Scott M. Felton ",
            "Judge_Email" : "smfelton@co.mclennan.tx.us",
            "Total Mileage" : "1071"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "McMullen",
            "County_NBR" : "162",
            "Judge_Name" : "Judge James E. Teal ",
            "Judge_Email" : "judge.teal@mcmullencounty.org",
            "Total Mileage" : "173"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Madison",
            "County_NBR" : "154",
            "Judge_Name" : "Judge A. J. Tony Leago ",
            "Judge_Email" : "tony.leago@madisoncountytx.org",
            "Total Mileage" : "257"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Marion",
            "County_NBR" : "155",
            "Judge_Name" : "Judge Leward J. LaFleur ",
            "Judge_Email" : "leward.lafleur@co.marion.tx.us",
            "Total Mileage" : "350"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Martin",
            "County_NBR" : "156",
            "Judge_Name" : "Judge Bryan W. Cox ",
            "Judge_Email" : "bcox@co.martin.tx.us",
            "Total Mileage" : "459"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Mason",
            "County_NBR" : "157",
            "Judge_Name" : "Judge Jerry  Bearden ",
            "Judge_Email" : "county.judge@co.mason.tx.us",
            "Total Mileage" : "281"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Matagorda",
            "County_NBR" : "158",
            "Judge_Name" : "Judge Nate N. McDonald ",
            "Judge_Email" : "cojudge@co.matagorda.tx.us",
            "Total Mileage" : "586"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Maverick",
            "County_NBR" : "159",
            "Judge_Name" : "Judge David R. Saucedo ",
            "Judge_Email" : "david.saucedo@co.maverick.tx.us",
            "Total Mileage" : "166"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Medina",
            "County_NBR" : "163",
            "Judge_Name" : "Judge Chris R. Schuchart ",
            "Judge_Email" : "countyjudge@medinatx.org",
            "Total Mileage" : "801"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Menard",
            "County_NBR" : "164",
            "Judge_Name" : "Judge Brandon  Corbin ",
            "Judge_Email" : "countyjudge@co.menard.tx.us",
            "Total Mileage" : "131"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Midland",
            "County_NBR" : "165",
            "Judge_Name" : "Judge Terry  Johnson ",
            "Judge_Email" : "tjohnson@mcounty.com",
            "Total Mileage" : "381"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Milam",
            "County_NBR" : "166",
            "Judge_Name" : "Judge Steve  Young ",
            "Judge_Email" : "syoung@milamcounty.net",
            "Total Mileage" : "792"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Mills",
            "County_NBR" : "167",
            "Judge_Name" : "Judge Ed L. Smith ",
            "Judge_Email" : "countyjudge@co.mills.tx.us",
            "Total Mileage" : "441"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Mitchell",
            "County_NBR" : "168",
            "Judge_Name" : "Judge Mark  Merrell ",
            "Judge_Email" : "mmerrell@co.mitchell.tx.us",
            "Total Mileage" : "454"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Montague",
            "County_NBR" : "169",
            "Judge_Name" : "Judge Rick G, Lewis ",
            "Judge_Email" : "co.judge@co.montague.tx.us",
            "Total Mileage" : "778"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Montgomery",
            "County_NBR" : "170",
            "Judge_Name" : "Judge Mark  Keough ",
            "Judge_Email" : "mark.keough@mctx.org",
            "Total Mileage" : "2802"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Moore",
            "County_NBR" : "171",
            "Judge_Name" : "Judge Rowdy  Rhoades ",
            "Judge_Email" : "judgerhoades@moore-tx.com",
            "Total Mileage" : "337"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Morris",
            "County_NBR" : "172",
            "Judge_Name" : "Judge Douglas Franklin Reeder ",
            "Judge_Email" : "doug.reeder@co.morris.tx.us",
            "Total Mileage" : "258"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Motley",
            "County_NBR" : "173",
            "Judge_Name" : "Judge James B. Meador ",
            "Judge_Email" : "mcjudgemeador@Gmail.com",
            "Total Mileage" : "238"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Nacogdoches",
            "County_NBR" : "174",
            "Judge_Name" : "Judge Greg  Sowell ",
            "Judge_Email" : "gsowell@co.nacogdoches.tx.us",
            "Total Mileage" : "764"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Navarro",
            "County_NBR" : "175",
            "Judge_Name" : "Judge Hershell    Davenport Jr.",
            "Judge_Email" : "hdavenport@navarrocounty.org",
            "Total Mileage" : "912"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Newton",
            "County_NBR" : "176",
            "Judge_Name" : "Judge Kenneth James Weeks ",
            "Judge_Email" : "kenneth.weeks@co.newton.tx.us  /  newtoncountyjudge@co.newton.tx.us ",
            "Total Mileage" : "553"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Nolan",
            "County_NBR" : "177",
            "Judge_Name" : "Judge George Whitley May ",
            "Judge_Email" : "whitley.may@co.nolan.tx.us",
            "Total Mileage" : "477"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Nueces",
            "County_NBR" : "178",
            "Judge_Name" : "Judge Barbara  Canales ",
            "Judge_Email" : "barbara.canales@nuecesco.com",
            "Total Mileage" : "703"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Ochiltree",
            "County_NBR" : "179",
            "Judge_Name" : "Judge Charles Ellis Kelly ",
            "Judge_Email" : "ckelly@ochiltree.net  / dcator@ochiltree.net",
            "Total Mileage" : "668"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Oldham",
            "County_NBR" : "180",
            "Judge_Name" : "Judge Don R. Allred ",
            "Judge_Email" : "don.allred@oldham-county.org",
            "Total Mileage" : "166"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Orange",
            "County_NBR" : "181",
            "Judge_Name" : "Judge John  Gothia ",
            "Judge_Email" : "jgothia@co.orange.tx.us",
            "Total Mileage" : "395"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Palo Pinto",
            "County_NBR" : "182",
            "Judge_Name" : "Judge Kevin Shane Long ",
            "Judge_Email" : "shane.long@co.palo-pinto.tx.us",
            "Total Mileage" : "418"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Panola",
            "County_NBR" : "183",
            "Judge_Name" : "Judge LeeAnn  Jones ",
            "Judge_Email" : "leeann.jones@co.panola.tx.us",
            "Total Mileage" : "604"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Parker",
            "County_NBR" : "184",
            "Judge_Name" : "Judge Gary   Patrick Deen ",
            "Judge_Email" : "pat.deen@parkercountytx.com",
            "Total Mileage" : "1227"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Parmer",
            "County_NBR" : "185",
            "Judge_Name" : "Judge Frank   Harrison Ellis III",
            "Judge_Email" : "pcjudge@parmercounty.net",
            "Total Mileage" : "1064"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Pecos",
            "County_NBR" : "186",
            "Judge_Name" : "Judge Joseph Martin Shuster ",
            "Judge_Email" : "judge@co.pecos.tx.us",
            "Total Mileage" : "521"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Polk",
            "County_NBR" : "187",
            "Judge_Name" : "Judge Sydney  Murphy ",
            "Judge_Email" : "sydney.murphy@co.polk.tx.us / county.judge@co.polk.tx.us",
            "Total Mileage" : "862"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Potter",
            "County_NBR" : "188",
            "Judge_Name" : "Judge Nancy D. Tanner ",
            "Judge_Email" : "nancytanner@mypottercounty.com",
            "Total Mileage" : "293"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Presidio",
            "County_NBR" : "189",
            "Judge_Name" : "Judge Cinderela Rice Guevara ",
            "Judge_Email" : "countyjudge@co.presidio.tx.us",
            "Total Mileage" : "188"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Rains",
            "County_NBR" : "190",
            "Judge_Name" : "Judge Wayne  Wolfe ",
            "Judge_Email" : "wayne.wolfe@co.rains.tx.us",
            "Total Mileage" : "261"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Randall",
            "County_NBR" : "191",
            "Judge_Name" : "Judge Christy  Dyer ",
            "Judge_Email" : "countyjudge@randallcounty.com",
            "Total Mileage" : "799"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Reagan",
            "County_NBR" : "192",
            "Judge_Name" : "Judge Larry  Isom ",
            "Judge_Email" : "judge@reagancounty.org",
            "Total Mileage" : "203"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Real",
            "County_NBR" : "193",
            "Judge_Name" : "Judge Bella  Rubio ",
            "Judge_Email" : "realjudge@hctc.net",
            "Total Mileage" : "150"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Red River",
            "County_NBR" : "194",
            "Judge_Name" : "Judge L. D. Williamson ",
            "Judge_Email" : "ldw@co.red-river.tx.us",
            "Total Mileage" : "605"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Reeves",
            "County_NBR" : "195",
            "Judge_Name" : "Judge Leo  Hung ",
            "Judge_Email" : "leo.hung@co.reeves.tx.us",
            "Total Mileage" : "580"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Refugio",
            "County_NBR" : "196",
            "Judge_Name" : "Judge Robert Edgar Blaschke ",
            "Judge_Email" : "judge.blaschke@gmail.com",
            "Total Mileage" : "178"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Roberts",
            "County_NBR" : "197",
            "Judge_Name" : "Judge Rick L. Tennant ",
            "Judge_Email" : "rick.tennant@co.roberts.tx.us",
            "Total Mileage" : "238"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Robertson",
            "County_NBR" : "198",
            "Judge_Name" : "Judge Charles L. Ellison ",
            "Judge_Email" : "cellison@co.robertson.tx.us",
            "Total Mileage" : "529"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Rockwall",
            "County_NBR" : "199",
            "Judge_Name" : "Judge David  Sweet ",
            "Judge_Email" : "dsweet@rockwallcountytexas.com",
            "Total Mileage" : "111"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Runnels",
            "County_NBR" : "200",
            "Judge_Name" : "Judge Barry Van Hilliard ",
            "Judge_Email" : "rcjudge@co.runnels.tx.us",
            "Total Mileage" : "791"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Rusk",
            "County_NBR" : "201",
            "Judge_Name" : "Judge Joel R. Hale ",
            "Judge_Email" : "jhale@co.rusk.tx.us",
            "Total Mileage" : "960"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Sabine",
            "County_NBR" : "202",
            "Judge_Name" : "Judge Daryl D. Melton ",
            "Judge_Email" : "daryl.melton@co.sabine.tx.us",
            "Total Mileage" : "360"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "San Augustine",
            "County_NBR" : "203",
            "Judge_Name" : "Judge Jeff  Boyd ",
            "Judge_Email" : "jeffboyd@co.san-augustine.tx.us",
            "Total Mileage" : "370"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "San Jacinto",
            "County_NBR" : "204",
            "Judge_Name" : "Judge Fritz  Faulkner ",
            "Judge_Email" : "Judgefaulkner@co.san-jacinto.tx.us",
            "Total Mileage" : "481"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "San Patricio",
            "County_NBR" : "205",
            "Judge_Name" : "Judge David R. Krebs ",
            "Judge_Email" : "david.krebs@co.san-patricio.tx.us",
            "Total Mileage" : "605"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "San Saba",
            "County_NBR" : "206",
            "Judge_Name" : "Judge Byron  Theodosis ",
            "Judge_Email" : "judge@co.san-saba.tx.us",
            "Total Mileage" : "553"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Schleicher",
            "County_NBR" : "207",
            "Judge_Name" : "Judge Charlie  Bradley ",
            "Judge_Email" : "countyjudge@co.schleicher.tx.us  /  cbradley1980@gmail.com",
            "Total Mileage" : "215"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Scurry",
            "County_NBR" : "208",
            "Judge_Name" : "Judge Dan R. Hicks Jr.",
            "Judge_Email" : "scjudge@co.scurry.tx.us",
            "Total Mileage" : "631"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Shackelford",
            "County_NBR" : "209",
            "Judge_Name" : "Judge Robert Milton Skelton ",
            "Judge_Email" : "robert.skelton@shackelfordcounty.org",
            "Total Mileage" : "239"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Shelby",
            "County_NBR" : "210",
            "Judge_Name" : "Judge Allison  Harbison ",
            "Judge_Email" : "allison.harbison@co.shelby.tx.us",
            "Total Mileage" : "740"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Sherman",
            "County_NBR" : "211",
            "Judge_Name" : "Judge Terri Beth Carter ",
            "Judge_Email" : "cojudge@co.sherman.tx.us",
            "Total Mileage" : "433"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Smith",
            "County_NBR" : "212",
            "Judge_Name" : "Judge Nathaniel Quentin Moran ",
            "Judge_Email" : "nmoran@smith-county.com",
            "Total Mileage" : "1153"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Somervell",
            "County_NBR" : "213",
            "Judge_Name" : "Judge Danny L. Chambers ",
            "Judge_Email" : "cojudge@co.somervell.tx.us",
            "Total Mileage" : "152"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Starr",
            "County_NBR" : "214",
            "Judge_Name" : "Judge Eloy  Vera ",
            "Judge_Email" : "eloy.vera@co.starr.tx.us",
            "Total Mileage" : "468"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Stephens",
            "County_NBR" : "215",
            "Judge_Name" : "Judge Michael C. Roach ",
            "Judge_Email" : "mroach@stephenscountytx.gov",
            "Total Mileage" : "350"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Sterling",
            "County_NBR" : "216",
            "Judge_Name" : "Judge Deborah  Horwood ",
            "Judge_Email" : "d.horwood@co.sterling.tx.us",
            "Total Mileage" : "50"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Stonewall",
            "County_NBR" : "217",
            "Judge_Name" : "Judge Ronnie Dean Moorhead ",
            "Judge_Email" : "county.judge@stonewallcountytx.org",
            "Total Mileage" : "330"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Sutton",
            "County_NBR" : "218",
            "Judge_Name" : "Judge Steve H. Smith ",
            "Judge_Email" : "county.judge@co.sutton.tx.us",
            "Total Mileage" : "179"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Swisher",
            "County_NBR" : "219",
            "Judge_Name" : "Judge Harold  Keeter ",
            "Judge_Email" : "h.keeter@swisher-tx.org",
            "Total Mileage" : "940"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Tarrant",
            "County_NBR" : "220",
            "Judge_Name" : "Judge B. Glen Whitley ",
            "Judge_Email" : "gwhitley@tarrantcounty.com",
            "Total Mileage" : "390"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Taylor",
            "County_NBR" : "221",
            "Judge_Name" : "Judge Downing Abbott Bolls Jr.",
            "Judge_Email" : "bollsd@taylorcountytexas.org",
            "Total Mileage" : "684"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Terrell",
            "County_NBR" : "222",
            "Judge_Name" : "Judge Santiago V. Flores ",
            "Judge_Email" : "santiago.flores@co.terrell.tx.us",
            "Total Mileage" : "65"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Terry",
            "County_NBR" : "223",
            "Judge_Name" : "Judge J. D. Wagner ",
            "Judge_Email" : "jdwagner@terrycounty.org",
            "Total Mileage" : "967"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Throckmorton",
            "County_NBR" : "224",
            "Judge_Name" : "Judge Trey  Carrington ",
            "Judge_Email" : "trey.carrington@throckmortoncounty.org",
            "Total Mileage" : "309"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Titus",
            "County_NBR" : "225",
            "Judge_Name" : "Judge Brian P. Lee ",
            "Judge_Email" : "titusjudge@gmail.com",
            "Total Mileage" : "423"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Tom Green",
            "County_NBR" : "226",
            "Judge_Name" : "Judge Stephen C. Floyd ",
            "Judge_Email" : "steve.floyd@co.tom-green.tx.us",
            "Total Mileage" : "636"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Travis",
            "County_NBR" : "227",
            "Judge_Name" : "Judge Andy  Brown ",
            "Judge_Email" : "andy.brown@traviscountytx.gov",
            "Total Mileage" : "1316"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Trinity",
            "County_NBR" : "228",
            "Judge_Name" : "Judge Steven D. Page Sr.",
            "Judge_Email" : "doug.page@co.trinity.tx.us",
            "Total Mileage" : "379"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Tyler",
            "County_NBR" : "229",
            "Judge_Name" : "Judge Jacques L. Blanchette ",
            "Judge_Email" : "judge@co.tyler.tx.us",
            "Total Mileage" : "550"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Upshur",
            "County_NBR" : "230",
            "Judge_Name" : "Judge Todd  Tefteller ",
            "Judge_Email" : "todd.tefteller@countyofupshur.com",
            "Total Mileage" : "665"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Upton",
            "County_NBR" : "231",
            "Judge_Name" : "Judge Dusty W. Kilgore ",
            "Judge_Email" : "dkilgore@co.upton.tx.us",
            "Total Mileage" : "132"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Uvalde",
            "County_NBR" : "232",
            "Judge_Name" : "Judge William R. Mitchell ",
            "Judge_Email" : "wrmcj@uvaldecounty.com",
            "Total Mileage" : "332"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Val Verde",
            "County_NBR" : "233",
            "Judge_Name" : "Judge Lewis G. Owens Jr.",
            "Judge_Email" : "lowens@valverdecounty.texas.gov",
            "Total Mileage" : "325"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Van Zandt",
            "County_NBR" : "234",
            "Judge_Name" : "Judge Don  Kirkpatrick ",
            "Judge_Email" : "judgekirkpatrick@vanzandtcounty.org",
            "Total Mileage" : "1053"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Victoria",
            "County_NBR" : "235",
            "Judge_Name" : "Judge Ben  Zeller ",
            "Judge_Email" : "bzeller@vctx.org",
            "Total Mileage" : "624"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Walker",
            "County_NBR" : "236",
            "Judge_Name" : "Judge Robert D.   Pierce ",
            "Judge_Email" : "dpierce@co.walker.tx.us",
            "Total Mileage" : "552"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Waller",
            "County_NBR" : "237",
            "Judge_Name" : "Judge Carbett   J. Duhon III",
            "Judge_Email" : "t.duhon@wallercounty.us",
            "Total Mileage" : "530"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Ward",
            "County_NBR" : "238",
            "Judge_Name" : "Judge Greg M. Holly ",
            "Judge_Email" : "greg.holly@co.ward.tx.us",
            "Total Mileage" : "236"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Washington",
            "County_NBR" : "239",
            "Judge_Name" : "Judge John Lee Durrenberger ",
            "Judge_Email" : "jdurrenberger@wacounty.com / countyjudge@wacounty.com",
            "Total Mileage" : "625"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Webb",
            "County_NBR" : "240",
            "Judge_Name" : "Judge Tano E. Tijerina ",
            "Judge_Email" : "webbcountyjudge@webbcountytx.gov",
            "Total Mileage" : "361"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Wharton",
            "County_NBR" : "241",
            "Judge_Name" : "Judge Phillip Scott Spenrath ",
            "Judge_Email" : "judge.spenrath@co.wharton.tx.us",
            "Total Mileage" : "909"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Wheeler",
            "County_NBR" : "242",
            "Judge_Name" : "Judge Jerry Dan Hefley ",
            "Judge_Email" : "cojudge@co.wheeler.tx.us",
            "Total Mileage" : "581"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Wichita",
            "County_NBR" : "243",
            "Judge_Name" : "Judge Woodrow W. Gossom Jr.",
            "Judge_Email" : "county.judge@co.wichita.tx.us",
            "Total Mileage" : "385"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Wilbarger",
            "County_NBR" : "244",
            "Judge_Name" : "Judge Greg T. Tyra ",
            "Judge_Email" : "countyjudge@co.wilbarger.tx.us",
            "Total Mileage" : "579"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Willacy",
            "County_NBR" : "245",
            "Judge_Name" : "Judge Aurelio    Guerra Jr.",
            "Judge_Email" : "aurelio.guerra@co.willacy.tx.us",
            "Total Mileage" : "464"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Williamson",
            "County_NBR" : "246",
            "Judge_Name" : "Judge William   W. Gravell Jr.",
            "Judge_Email" : "bgravell@wilco.org  /  ctyjudge@wilco.org",
            "Total Mileage" : "1342"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Wilson",
            "County_NBR" : "247",
            "Judge_Name" : "Judge Richard L. Jackson ",
            "Judge_Email" : "judge@wilsoncountytx.gov",
            "Total Mileage" : "799"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Winkler",
            "County_NBR" : "248",
            "Judge_Name" : "Judge Charles M. Wolf ",
            "Judge_Email" : "charles.wolf@co.winkler.tx.us",
            "Total Mileage" : "138"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Wise",
            "County_NBR" : "249",
            "Judge_Name" : "Judge Judson D. Clark ",
            "Judge_Email" : "jd.clark@co.wise.tx.us  / cojudge@co.wise.tx.us",
            "Total Mileage" : "938"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Wood",
            "County_NBR" : "250",
            "Judge_Name" : "Judge Lucy  Hebron ",
            "Judge_Email" : "countyjudge@mywoodcounty.com",
            "Total Mileage" : "777"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Yoakum",
            "County_NBR" : "251",
            "Judge_Name" : "Judge Jim  Barron ",
            "Judge_Email" : "jbarron@yoakumcounty.org",
            "Total Mileage" : "491"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Young",
            "County_NBR" : "252",
            "Judge_Name" : "Judge John C. Bullock ",
            "Judge_Email" : "j.bullock@youngcounty.org",
            "Total Mileage" : "563"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Zapata",
            "County_NBR" : "253",
            "Judge_Name" : "Judge Joe  Rathmell ",
            "Judge_Email" : "zcjo@zapatacountytx.org",
            "Total Mileage" : "177"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Zavala",
            "County_NBR" : "254",
            "Judge_Name" : "Judge Joe  Luna ",
            "Judge_Email" : "countyjudge@zavalacounty.org",
            "Total Mileage" : "174"
          }
        },
        {
          "type" : "Feature",
          "geometry" : null,
          "properties" : {
            "County_Name" : "Jim Wells",
            "County_NBR" : "126",
            "Judge_Name" : "Judge Juan   Rodriguez, Jr. ",
            "Judge_Email" : "juan.rodriguez@co.jim-wells.tx.us",
            "Total Mileage" : "553"
          }
        }
      ]
    }
}

