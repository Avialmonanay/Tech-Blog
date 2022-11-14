const { Users } = require('../models');

const userdata = [
    {
        "email": "atryme0@yellowpages.com",
        "name": "hperris0",
        "password": "YcSwMdrXqK"
    },
    {
        "email": "dneilly1@shareasale.com",
        "name": "gmcnevin1",
        "password": "1kEyyNxi"
    },
    {
        "email": "ksolon2@sbwire.com",
        "name": "bbyham2",
        "password": "0rMvPgU0sh"
    },
    {
        "email": "apeacocke3@blogtalkradio.com",
        "name": "jcoysh3",
        "password": "RLtDPytXSMc"
    },
    {
        "email": "gambler4@hubpages.com",
        "name": "bhandlin4",
        "password": "6xV7qfnRFR9"
    },
    {
        "email": "vmcrory5@tiny.cc",
        "name": "emelia5",
        "password": "eJjnVp"
    },
    {
        "email": "jbridgnell6@aol.com",
        "name": "filieve6",
        "password": "Xv75kpEwW0Gi"
    },
    {
        "email": "scollinwood7@privacy.gov.au",
        "name": "cwhitefoot7",
        "password": "D8dtAMzWaOuD"
    },
    {
        "email": "agookey8@indiatimes.com",
        "name": "emallabar8",
        "password": "aN8B9HSwAZ"
    },
    {
        "email": "jslane9@t.co",
        "name": "gbillsberry9",
        "password": "pxMJj1gsX"
    },
    {
        "email": "hlongeaa@engadget.com",
        "name": "kkindreada",
        "password": "4FcWUkJYfqj"
    },
    {
        "email": "abakesb@sfgate.com",
        "name": "cpetersb",
        "password": "XtJE0SpXnr"
    },
    {
        "email": "cmapstonc@hibu.com",
        "name": "uknottec",
        "password": "zFqasxkVydaz"
    },
    {
        "email": "gdaughtond@barnesandnoble.com",
        "name": "shumd",
        "password": "9MPM3IDayphl"
    },
    {
        "email": "sapperleye@businessinsider.com",
        "name": "gbeardone",
        "password": "3CFKCYi"
    },
    {
        "email": "zrichtenf@lulu.com",
        "name": "dtweedlief",
        "password": "fMrmYc62gg"
    },
    {
        "email": "mmunktong@yahoo.com",
        "name": "dbaleg",
        "password": "jcn7esAF"
    },
    {
        "email": "ikenninghamh@example.com",
        "name": "mpebworthh",
        "password": "EkXOb92"
    },
    {
        "email": "elefeveri@skyrock.com",
        "name": "sreaveyi",
        "password": "2QFvHMo"
    },
    {
        "email": "kdorricottj@cdc.gov",
        "name": "soxbej",
        "password": "fXQ9XucU"
    },
    {
        "email": "mdrejerk@huffingtonpost.com",
        "name": "nkynank",
        "password": "FcmoTEpboVgy"
    },
    {
        "email": "acutcheyl@de.vu",
        "name": "speronel",
        "password": "LM2rJfqdD"
    },
    {
        "email": "dkopelmanm@pagesperso-orange.fr",
        "name": "rlangm",
        "password": "QarBs5pqte"
    },
    {
        "email": "ndefewn@jalbum.net",
        "name": "tcodn",
        "password": "Mk9yXIxVt"
    },
    {
        "email": "mmaccaghano@newyorker.com",
        "name": "lnegrio",
        "password": "uvVq1H"
    },
    {
        "email": "dlummp@wired.com",
        "name": "bwhitneyp",
        "password": "RNzZtaNyvOi"
    },
    {
        "email": "gwigfallq@cmu.edu",
        "name": "emcgaughieq",
        "password": "3vZfCrW2vZKw"
    },
    {
        "email": "corfordr@europa.eu",
        "name": "bcaraherr",
        "password": "vpVJwZGHL3Y4"
    },
    {
        "email": "uboddys@macromedia.com",
        "name": "dtrewhitts",
        "password": "BraHEPiVvbVs"
    },
    {
        "email": "rdyshartt@tripadvisor.com",
        "name": "gpaulet",
        "password": "YHr0l1"
    },
    {
        "email": "myushkovu@cyberchimps.com",
        "name": "vcashmanu",
        "password": "JtnZP4ptsZPC"
    },
    {
        "email": "dgirodiasv@phpbb.com",
        "name": "jsandersonv",
        "password": "RNGwIm4k"
    },
    {
        "email": "rmcsharryw@nymag.com",
        "name": "bdurbridgew",
        "password": "sS2yDl"
    },
    {
        "email": "sbrammarx@privacy.gov.au",
        "name": "csoggeex",
        "password": "xq5VDD"
    },
    {
        "email": "pfabryy@craigslist.org",
        "name": "kparnabyy",
        "password": "ByssqA0"
    },
    {
        "email": "fsantoroz@google.fr",
        "name": "sstoppardz",
        "password": "eKwmmD6X1"
    },
    {
        "email": "cnekrews10@diigo.com",
        "name": "smorican10",
        "password": "NFZfkQI6wI"
    },
    {
        "email": "wcussins11@tmall.com",
        "name": "zceaser11",
        "password": "TtF2GZiHL7E"
    },
    {
        "email": "tbees12@google.es",
        "name": "atring12",
        "password": "OuImr893rK"
    },
    {
        "email": "hwickersley13@salon.com",
        "name": "taffleck13",
        "password": "GgHifTGmz"
    },
    {
        "email": "nvodden14@wordpress.com",
        "name": "kredgewell14",
        "password": "Q0YxbqDkYI"
    },
    {
        "email": "tvaadeland15@ocn.ne.jp",
        "name": "rkarleman15",
        "password": "svNIEX6"
    },
    {
        "email": "cede16@stanford.edu",
        "name": "mjosselsohn16",
        "password": "O1V1SE"
    },
    {
        "email": "jgerretsen17@cafepress.com",
        "name": "rsantello17",
        "password": "mvHugU2"
    },
    {
        "email": "mboscott18@tuttocitta.it",
        "name": "msparrow18",
        "password": "o7WlmjkS"
    },
    {
        "email": "fswindley19@mail.ru",
        "name": "wfarragher19",
        "password": "KND9MR"
    },
    {
        "email": "dambrogi1a@paypal.com",
        "name": "cscuse1a",
        "password": "fcpndZ9"
    },
    {
        "email": "sdobeson1b@typepad.com",
        "name": "eharbison1b",
        "password": "SIG6V2fgqEKJ"
    },
    {
        "email": "apettit1c@sun.com",
        "name": "hrosenboim1c",
        "password": "PyfQ43U"
    },
    {
        "email": "gpickett1d@cbc.ca",
        "name": "pphillpot1d",
        "password": "Ae5DCbkZHbh"
    },
    {
        "email": "nkale1e@issuu.com",
        "name": "dtortoise1e",
        "password": "tsHfQTSZ"
    },
    {
        "email": "dmerington1f@cdc.gov",
        "name": "adenington1f",
        "password": "KqKbbDi6"
    },
    {
        "email": "kpettegree1g@macromedia.com",
        "name": "aadderson1g",
        "password": "60D4pVZ6Cukv"
    },
    {
        "email": "trowney1h@csmonitor.com",
        "name": "vtout1h",
        "password": "erPRKYv"
    },
    {
        "email": "etrodler1i@amazon.de",
        "name": "rvalenti1i",
        "password": "LmJcIeC"
    },
    {
        "email": "vescott1j@godaddy.com",
        "name": "sruck1j",
        "password": "nonbPZnXy"
    },
    {
        "email": "mmordin1k@shinystat.com",
        "name": "pgowen1k",
        "password": "6jBd16iaOy"
    },
    {
        "email": "dcain1l@rediff.com",
        "name": "mmercer1l",
        "password": "MZt9pjRizeXE"
    },
    {
        "email": "obitterton1m@goo.ne.jp",
        "name": "alitton1m",
        "password": "VI5hQGa8C"
    },
    {
        "email": "rhourahan1n@engadget.com",
        "name": "vniemetz1n",
        "password": "S7Rd0W"
    },
    {
        "email": "rsouthway1o@theatlantic.com",
        "name": "cbartod1o",
        "password": "WGntBqqD7LU"
    },
    {
        "email": "bbrowse1p@163.com",
        "name": "qaisthorpe1p",
        "password": "fFS7vsTWVx"
    },
    {
        "email": "ogors1q@networksolutions.com",
        "name": "odobbs1q",
        "password": "loP84Dhgi"
    },
    {
        "email": "cstanyforth1r@pcworld.com",
        "name": "fbrouwer1r",
        "password": "4gPb32d"
    },
    {
        "email": "jfrancisco1s@icio.us",
        "name": "rgoldster1s",
        "password": "lftrQgunfuP"
    },
    {
        "email": "islyme1t@rakuten.co.jp",
        "name": "rshirland1t",
        "password": "JaopCEl8"
    },
    {
        "email": "pashbolt1u@deviantart.com",
        "name": "nsutcliffe1u",
        "password": "khBsi1iZiA8"
    },
    {
        "email": "stemby1v@netscape.com",
        "name": "kmccarver1v",
        "password": "rO2ShdJDDwrz"
    },
    {
        "email": "lbernucci1w@ft.com",
        "name": "khindshaw1w",
        "password": "qZiQOX9f0pM"
    },
    {
        "email": "jtwelftree1x@google.com",
        "name": "oskally1x",
        "password": "SXBzUae6y"
    },
    {
        "email": "crookesby1y@skype.com",
        "name": "cglencrosche1y",
        "password": "bwlcxyw"
    },
    {
        "email": "krubinsky1z@tuttocitta.it",
        "name": "dvannoort1z",
        "password": "XCQRoe9iooU"
    },
    {
        "email": "snewbatt20@zdnet.com",
        "name": "bsaintepaul20",
        "password": "9tN60121c"
    },
    {
        "email": "lpirelli21@weebly.com",
        "name": "gschmuhl21",
        "password": "OVf4su"
    },
    {
        "email": "tiron22@google.nl",
        "name": "elorenzetti22",
        "password": "8dHUijYzx"
    },
    {
        "email": "walenikov23@ameblo.jp",
        "name": "hgreenhead23",
        "password": "Sbf7wBaYgF"
    },
    {
        "email": "htooting24@squidoo.com",
        "name": "kspoors24",
        "password": "VBQzm8dArJ"
    },
    {
        "email": "gmajury25@mysql.com",
        "name": "moteague25",
        "password": "kD4Wec6RM"
    },
    {
        "email": "kclohisey26@discuz.net",
        "name": "gsivior26",
        "password": "BW5YIHA8PW"
    },
    {
        "email": "mredwall27@wix.com",
        "name": "jpayle27",
        "password": "5iWAxoUucS"
    },
    {
        "email": "jrosendale28@mail.ru",
        "name": "hgretton28",
        "password": "q3cmqcRXf"
    },
    {
        "email": "lrudyard29@blinklist.com",
        "name": "oarchley29",
        "password": "ifZKQ24b7Vr"
    },
    {
        "email": "vfiveash2a@joomla.org",
        "name": "srosenwasser2a",
        "password": "doca7CDyW"
    },
    {
        "email": "gcasotti2b@skyrock.com",
        "name": "bdemorena2b",
        "password": "A9yyHGVw"
    },
    {
        "email": "cjeandeau2c@washington.edu",
        "name": "amcnulty2c",
        "password": "qpMrJ3b"
    },
    {
        "email": "jgamlyn2d@hatena.ne.jp",
        "name": "phurtic2d",
        "password": "t6jqZ8JSDf"
    },
    {
        "email": "vmallinson2e@epa.gov",
        "name": "lsans2e",
        "password": "XIP79Ny14o"
    },
    {
        "email": "iclowney2f@unesco.org",
        "name": "mmcphaden2f",
        "password": "m4xMGHt0Dzd"
    },
    {
        "email": "hscamwell2g@homestead.com",
        "name": "dcejka2g",
        "password": "eLRhbitPWt"
    },
    {
        "email": "fstidever2h@huffingtonpost.com",
        "name": "rgainor2h",
        "password": "xQ6fDJ7Kd"
    },
    {
        "email": "acastellet2i@slate.com",
        "name": "fthickpenny2i",
        "password": "hr9EssAy6W"
    },
    {
        "email": "ccomolli2j@bandcamp.com",
        "name": "amccusker2j",
        "password": "j6rCgTzr6IX"
    },
    {
        "email": "mhancock2k@chicagotribune.com",
        "name": "skibby2k",
        "password": "5T5IIy2AYPx"
    },
    {
        "email": "skidney2l@dedecms.com",
        "name": "ygaraghan2l",
        "password": "eBIEbN"
    },
    {
        "email": "wmankor2m@gov.uk",
        "name": "kphilipson2m",
        "password": "eVnytEUWv1"
    },
    {
        "email": "aartus2n@bbb.org",
        "name": "celis2n",
        "password": "VIXL66DE"
    },
    {
        "email": "hurien2o@tinypic.com",
        "name": "hpemberton2o",
        "password": "JvTvPtn"
    },
    {
        "email": "kbazek2p@nytimes.com",
        "name": "jneely2p",
        "password": "dMJsITqsVMF7"
    },
    {
        "email": "ggoldes2q@tinyurl.com",
        "name": "afindon2q",
        "password": "rbKTyB"
    },
    {
        "email": "pdrillingcourt2r@geocities.jp",
        "name": "jdabrowski2r",
        "password": "0nHNth3hHa"
    }
]




const seedUsers = () => Users.bulkCreate(userdata);

module.exports = seedUsers;