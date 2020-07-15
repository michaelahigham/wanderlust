/* pop up */

function show(id) {
    document.getElementById(id).style.display='flex';
    document.getElementById("main").style.filter='blur(2px)';
}

function hide(id) {
    document.getElementById(id).style.display='none';
    document.getElementById("main").style.filter='none';
}

/* full screen button */
let toggleCount = 1;
function toggleFullScreen() {
    if (document.getElementById("full-screen-button").value=="ON") {
        document.getElementById("world-map-image").style.cssText = "position: inherit; width: 100%; height: 58vh; top: auto; left: auto;";
        document.getElementById("full-screen-button").value="OFF";
        toggleCount = 1;
    }
    else {
        document.getElementById("world-map-image").style.cssText = "position: absolute; width: 102.5vw; height: 98.5vh; top: 0; left: -3vw;";
        document.getElementById("full-screen-button").value="ON";
        toggleCount++;
    }
}

/* country search */

var pair = {"AFGHANISTAN": "AF", "ANGOLA": "AO", "ALBANIA": "AL", "UNITED ARAB EMIRATES": "AE", "ARGENTINA": "AR", "ARMENIA": "AM", "AUSTRALIA": "AU", "AUSTRIA": "AT", "AZERBAIJAN": "AZ", "BURUNDI": "BI", "BELGIUM": "BE", "BENIN": "BJ", "BURKINA FASO": "BF", "BANGLADESH": "BD", "BULGARIA": "BG", "BOSNIA AND HERZ.": "BA", "BELARUS": "BY", "BELIZE": "BZ", "BOLIVIA": "BO", "BRAZIL": "BR", "BRUNEI": "BN", "BHUTAN": "BT", "BOTSWANA": "BW", "CENTRAL AFRICAN REP.": "CF", "CANADA": "CA", "SWITZERLAND": "CH", "CHILE": "CL", "CHINA": "CN", "CÔTE D'IVOIRE": "CI", "CAMEROON": "CM", "DEM. REP. CONGO": "CD", "CONGO": "CG", "COLOMBIA": "CO", "COSTA RICA": "CR", "CUBA": "CU", "CZECH REP.": "CZ", "GERMANY": "DE", "DJIBOUTI": "DJ", "DENMARK": "DK", "DOMINICAN REP.": "DO", "ALGERIA": "DZ", "ECUADOR": "EC", "EGYPT": "EG", "ERITREA": "ER", "ESTONIA": "EE", "ETHIOPIA": "ET", "FINLAND": "FI", "FIJI": "FJ", "GABON": "GA", "UNITED KINGDOM": "GB", "GEORGIA": "GE", "GHANA": "GH", "GUINEA": "GN", "GAMBIA": "GM", "GUINEA-BISSAU": "GW", "EQ. GUINEA": "GQ", "GREECE": "GR", "GREENLAND": "GL", "GUATEMALA": "GT", "GUYANA": "GY", "HONDURAS": "HN", "CROATIA": "HR", "HAITI": "HT", "HUNGARY": "HU", "INDONESIA": "ID", "INDIA": "IN", "IRELAND": "IE", "IRAN": "IR", "IRAQ": "IQ", "ICELAND": "IS", "ISRAEL": "IL", "ITALY": "IT", "JAMAICA": "JM", "JORDAN": "JO", "JAPAN": "JP", "KAZAKHSTAN": "KZ", "KENYA": "KE", "KYRGYZSTAN": "KG", "CAMBODIA": "KH", "KOREA": "KR", "KUWAIT": "KW", "LAO PDR": "LA", "LEBANON": "LB", "LIBERIA": "LR", "LIBYA": "LY", "SRI LANKA": "LK", "LESOTHO": "LS", "LITHUANIA": "LT", "LUXEMBOURG": "LU", "LATVIA": "LV", "MOROCCO": "MA", "MOLDOVA": "MD", "MADAGASCAR": "MG", "MEXICO": "MX", "MACEDONIA": "MK", "MALI": "ML", "MYANMAR": "MM", "MONTENEGRO": "ME", "MONGOLIA": "MN", "MOZAMBIQUE": "MZ", "MAURITANIA": "MR", "MALAWI": "MW", "MALAYSIA": "MY", "NAMIBIA": "NA", "NIGER": "NE", "NIGERIA": "NG", "NICARAGUA": "NI", "NETHERLANDS": "NL", "NORWAY": "NO", "NEPAL": "NP", "NEW ZEALAND": "NZ", "OMAN": "OM", "PAKISTAN": "PK", "PANAMA": "PA", "PERU": "PE", "PHILIPPINES": "PH", "PAPUA NEW GUINEA": "PG", "POLAND": "PL", "DEM. REP. KOREA": "KP", "PORTUGAL": "PT", "PARAGUAY": "PY", "PALESTINE": "PS", "QATAR": "QA", "ROMANIA": "RO", "RUSSIA   ": "RU", "RWANDA": "RW", "W. SAHARA": "EH", "SAUDI ARABIA": "SA", "SUDAN": "SD", "S. SUDAN": "SS", "SENEGAL": "SN", "SIERRA LEONE": "SL", "EL SALVADOR": "SV", "SERBIA": "RS", "SURINAME": "SR", "SLOVAKIA": "SK", "SLOVENIA": "SI", "SWEDEN": "SE", "SWAZILAND": "SZ", "SYRIA": "SY", "CHAD": "TD", "TOGO": "TG", "THAILAND": "TH", "TAJIKISTAN": "TJ", "TURKMENISTAN": "TM", "TIMOR-LESTE": "TL", "TUNISIA": "TN", "TURKEY": "TR", "TAIWAN": "TW", "TANZANIA": "TZ", "UGANDA": "UG", "UKRAINE": "UA", "URUGUAY": "UY", "UNITED STATES": "US", "UZBEKISTAN": "UZ", "VENEZUELA": "VE", "VIETNAM": "VN", "VANUATU": "VU", "YEMEN": "YE", "SOUTH AFRICA": "ZA", "ZAMBIA": "ZM", "ZIMBABWE": "ZW", "SOMALIA": "SO", "FRENCH GUIANA": "GF", "FRANCE": "FR", "SPAIN": "ES", "ARUBA": "AW", "ANGUILLA": "AI", "ANDORRA": "AD", "ANTIGUA AND BARB.": "AG", "BAHAMAS": "BS", "BERMUDA": "BM", "BARBADOS": "BB", "COMOROS": "KM", "CAPE VERDE": "CV", "CAYMAN IS.": "KY", "DOMINICA": "DM", "FALKLAND IS.": "FK", "FAEROE IS.": "FO", "GRENADA": "GD", "HONG KONG": "HK", "ST. KITTS AND NEVIS": "KN", "SAINT LUCIA": "LC", "LIECHTENSTEIN": "LI", "MALDIVES": "MV", "MALTA": "MT", "MONTSERRAT": "MS", "MAURITIUS": "MU", "NEW CALEDONIA": "NC", "NAURU": "NR", "PITCAIRN IS.": "PN", "PUERTO RICO": "PR", "FR. POLYNESIA": "PF", "SINGAPORE": "SG", "SOLOMON IS.": "SB", "SÃO TOMÉ AND PRINCIPE": "ST", "SINT MAARTEN": "SX", "SEYCHELLES": "SC", "TURKS AND CAICOS IS.": "TC", "TONGA": "TO", "TRINIDAD AND TOBAGO": "TT", "ST. VIN. AND GREN.": "VC", "BRITISH VIRGIN IS.": "VG", "U.S. VIRGIN IS.": "VI", "CYPRUS": "CY", "REUNION": "RE", "MAYOTTE": "YT", "MARTINIQUE": "MQ", "GUADELOUPE": "GP", "CURACO": "CW", "CANARY ISLANDS": "IC"
}

function clear() {
    var clear = document.getElementById('world-map-image').getElementsByTagName('path');
    for (var i = 0; i < clear.length; i++) {
        clear[i].style = "none";
    }
    document.getElementById('search-input').style.backgroundColor = 'white';
}

function openSearch() {
    if(document.getElementById('search-button').value=="ON") {
        document.getElementById('search-button').value="OFF";
        clear();
        document.getElementById('search-input').style.display = 'none';
        document.getElementById('search-enter').style.display = 'none';
    }
    else {
        document.getElementById('search-button').value="ON";
        document.getElementById('search-input').style.display = 'block';
        document.getElementById('search-enter').style.display = 'block';
    }
}

function search() {
    clear();
    var inputVal = document.getElementById('search-input').value.toUpperCase();
    if (pair[inputVal] == null) {
        document.getElementById('search-input').style.backgroundColor = '#ffd1d1';
    } else {
        document.getElementById('search-input').style.backgroundColor = 'white';
        document.getElementById(pair[inputVal]).style.fill = '#1ea5f3';
        document.getElementById(pair[inputVal]).style.stroke = 'white';
        document.getElementById(pair[inputVal]).style.strokeWidth = 3;
    }
}

/* slide show */

var slideIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("country-pics");
    if (x.length == 0) {
        return 0;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}
carousel();

/* go to top button */

    // get the button:
mybutton = document.getElementById("myBtn");
fullScreenButton = document.getElementById("full-screen-button");
searchButton = document.getElementById("search-button");
    // when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    fullScreenButton.style.display = "block";
    searchButton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    fullScreenButton.style.display = "none";
    searchButton.style.display = "none";
  }
  if (toggleCount == 2) {
    fullScreenButton.style.display = "block";
    searchButton.style.display = "block";
  }
}

    // when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}