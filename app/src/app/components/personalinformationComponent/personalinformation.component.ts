/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

export interface title{
  name: string;
  value: string;
}
export interface nationality{
  name: string;
  value: string;
}
export interface race{
  name: string;
  value: string;
}
export interface birthCounty{
  name: string;
  value: string;
}
export interface maritalstatus{
  name: string;
  value: string;
}
export interface qualifications{
  name: string;
  value: string;
}
export interface countryresidency{
  name:string;
  value: string;
}
export interface employeestatus{
  name: string;
  value: string;
}
export interface countrycodes{
  name: string;
  value: string;
}
@Component({
    selector: 'bh-personalinformation',
    templateUrl: './personalinformation.template.html'
})

export class personalinformationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    selected='';
    singaporeselected='+65';
    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }
     // MasterDropdownList //
    
     titles: title[] = [
            { name: 'Please select', value: '' },
            { name: 'Mr', value: 'Mr' },
            { name: 'Mrs', value: 'Mrs' },
            { name: 'Mdm', value: 'Mdm' },
            { name: 'Ms', value: 'Ms' },           
            { name: 'Dr', value: 'Dr' }
     ];
     nationality: nationality[] = [
            { name: 'Please select', value: '' },
            { name: 'Singapore', value: 'Singapore' },
            { name: 'Malaysia', value: 'Malaysia' },
            { name: 'India', value: 'India' }
    ];
    race: race[] = [
            { name: 'Please select', value: '' },
            { name: 'Chinese', value: 'CHI' },
            { name: 'Malaysia', value: 'MAl' },
            { name: 'India', value: 'IND' },
            { name: 'Others', value: 'OTH' }
        ];
    qualifications: qualifications[] = [
            { name: 'Please select', value: '' },
            { name: 'Primary', value: 'Primary' },
            { name: 'Secondary', value: 'Secondary' },
            { name: 'N/ O Levels', value: 'N/ O Levels' },
            { name: 'Post Sec/ A Levels/Diploma', value: 'Post Sec/ A Levels/Diploma' },
            { name: 'Degree and Above', value: 'Degree and Above' }
    ];
     birthCounty: birthCounty[] = [
            { name: 'Please select', value: '' },
            { name: 'Austrlia', value: 'AUS' },
            { name: 'Singapore', value: 'Singapore' },
            { name: 'India', value: 'IND' },
            { name: 'Africa', value: 'AFR' }
    ];
    maritalstatus: maritalstatus[] = [
            { name: 'Please select', value: '' },
            { name: 'Married', value: 'Married' },
            { name: 'Single', value: 'Single' },
            { name: 'Divorced', value: 'Divorced' },
            { name: 'Widowed', value: 'Widowed' }
    ];
    
    countryresidency: countryresidency[] = [
            { name: 'Please select', value: '' },
            { name: 'Singapore', value: 'Singapore' },
            { name: 'India', value: 'IND' },
            { name: 'Africa', value: 'AFR' },
            { name: 'Australia', value: 'AUS' }
    ];
    employeestatus: employeestatus[] = [
            { name: 'Please select', value: '' },
            { name: 'Full Time', value: 'Full Time' },
            { name: 'Part Time', value: 'Part Time' },
            { name: 'Self Employed', value: 'Self Employed' },
            { name: 'Retired', value: 'Retired' },
            { name: 'Others', value: 'Others' }
    ];
    countrycodes: countrycodes[] = [
            { "name": 'Please select', "value": '' },
            { "name": "Afghanistan(+93)", "value": "+93" },
            { "name": "Aland Islands(+358)", "value": "+358" },
            { "name": "Albania(+355)", "value": "+355" },
            { "name": "Algeria(+213)", "value": "+213" },
            { "name": "AmericanSamoa(+1684)", "value": "+1684" },
            { "name": "Andorra(+376)", "value": "+376" },
            { "name": "Angola(+244)", "value": "+244" },
            { "name": "Anguilla(+1264)", "value": "+1264" },
            { "name": "Antarctica(+672)", "value": "+672" },
            { "name": "Antigua and Barbuda(+1268)", "value": "+1268" },
            { "name": "Argentina(+54)", "value": "+54" },
            { "name": "Armenia(+374)", "value": "+374" },
            { "name": "Aruba(+297)", "value": "+297" },
            { "name": "Australia(+61)", "value": "+61" },
            { "name": "Austria(+43)", "value": "+43" },
            { "name": "Azerbaijan(+994)", "value": "+994" },
            { "name": "Bahamas(+1242)", "value": "+1242" },
            { "name": "Bahrain(+973)", "value": "+973" },
            { "name": "Bangladesh(+880)", "value": "+880" },
            { "name": "Barbados(+1246)", "value": "+1246" },
            { "name": "Belarus(+375)", "value": "+375" },
            { "name": "Belgium(+32)", "value": "+32" },
            { "name": "Belize(+501)", "value": "+501" },
            { "name": "Benin(+229)", "value": "+229" },
            { "name": "Bermuda(+1441)", "value": "+1441" },
            { "name": "Bhutan(+975)", "value": "+975" },
            { "name": "Bolivia, Plurinational State of(+591)", "value": "+591" },
            { "name": "Bosnia and Herzegovina(+387)", "value": "+387" },
            { "name": "Botswana(+267)", "value": "+267" },
            { "name": "Brazil(+55)", "value": "+55" },
            { "name": "British Indian Ocean Territory(+246)", "value": "+246" },
            { "name": "Brunei Darussalam(+673)", "value": "+673" },
            { "name": "Bulgaria(+359)", "value": "+359" },
            { "name": "Burkina Faso(+226)", "value": "+226" },
            { "name": "Burundi(+257)", "value": "+257" },
            { "name": "Cambodia(+855)", "value": "+855" },
            { "name": "Cameroon(+237)", "value": "+237" },
            { "name": "Canada(+1)", "value": "+1" },
            { "name": "Cape Verde(+238)", "value": "+238" },
            { "name": "Cayman Islands(+345)", "value": "+345" },
            { "name": "Central African Republic(+236)", "value": "+236" },
            { "name": "Chad(+235)", "value": "+235" },
            { "name": "Chile(+56)", "value": "+56" },
            { "name": "China(+86)", "value": "+86" },
            { "name": "Christmas Island(+61)", "value": "+61" },
            { "name": "Cocos (Keeling) Islands(+61)", "value": "+61" },
            { "name": "Colombia(+57)", "value": "+57" },
            { "name": "Comoros(+269)", "value": "+269" },
            { "name": "Congo(+242)", "value": "+242" },
            { "name": "Congo, The Democratic Republic of the Congo(+243)", "value": "+243" },
            { "name": "Cook Islands(+682)", "value": "+682" },
            { "name": "Costa Rica(+506)", "value": "+506" },
            { "name": "Cote d'Ivoire(+225)", "value": "+225" },
            { "name": "Croatia(+385)", "value": "+385" },
            { "name": "Cuba(+53)", "value": "+53" },
            { "name": "Cyprus(+357)", "value": "+357" },
            { "name": "Czech Republic(+420)", "value": "+420" },
            { "name": "Denmark(+45)", "value": "+45" },
            { "name": "Djibouti(+253)", "value": "+253" },
            { "name": "Dominica(+1767)", "value": "+1767" },
            { "name": "Dominican Republic(+1849)", "value": "+1849" },
            { "name": "Ecuador(+593)", "value": "+593" },
            { "name": "Egypt(+20)", "value": "+20" },
            { "name": "El Salvador(+503)", "value": "+503" },
            { "name": "Equatorial Guinea(+240)", "value": "+240" },
            { "name": "Eritrea(+291)", "value": "+291" },
            { "name": "Estonia(+372)", "value": "+372" },
            { "name": "Ethiopia(+251)", "value": "+251" },
            { "name": "Falkland Islands (Malvinas)(+500)", "value": "+500" },
            { "name": "Faroe Islands(+298)", "value": "+298" },
            { "name": "Fiji(+679)", "value": "+679" },
            { "name": "Finland(+358)", "value": "+358" },
            { "name": "France(+33)", "value": "+33" },
            { "name": "French Guiana(+594)", "value": "+594" },
            { "name": "French Polynesia(+689)", "value": "+689" },
            { "name": "Gabon(+241)", "value": "+241" },
            { "name": "Gambia(+220)", "value": "+220" },
            { "name": "Georgia(+995)", "value": "+995" },
            { "name": "Germany(+49)", "value": "+49" },
            { "name": "Ghana(+233)", "value": "+233" },
            { "name": "Gibraltar(+350)", "value": "+350" },
            { "name": "Greece(+30)", "value": "+30" },
            { "name": "Greenland(+299)", "value": "+299" },
            { "name": "Grenada(+1473)", "value": "+1473" },
            { "name": "Guadeloupe(+590)", "value": "+590" },
            { "name": "Guam(+1671)", "value": "+1671" },
            { "name": "Guatemala(+502)", "value": "+502" },
            { "name": "Guernsey(+44)", "value": "+44" },
            { "name": "Guinea(+224)", "value": "+224" },
            { "name": "Guinea-Bissau(+245)", "value": "+245" },
            { "name": "Guyana(+595)", "value": "+595" },
            { "name": "Haiti(+509)", "value": "+509" },
            { "name": "Holy See (Vatican City State)(+379)", "value": "+379" },
            { "name": "Honduras(+504)", "value": "+504" },
            { "name": "Hong Kong(+852)", "value": "+852" },
            { "name": "Hungary(+36)", "value": "+36" },
            { "name": "Iceland(+354)", "value": "+354" },
            { "name": "India(+91)", "value": "+91" },
            { "name": "Indonesia(+62)", "value": "+62" },
            { "name": "Iran, Islamic Republic of Persian Gulf(+98)", "value": "+98" },
            { "name": "Iraq(+964)", "value": "+964" },
            { "name": "Ireland(+353)", "value": "+353" },
            { "name": "Isle of Man(+44)", "value": "+44" },
            { "name": "Israel(+972)", "value": "+972" },
            { "name": "Italy(+39)", "value": "+39" },
            { "name": "Jamaica(+1876)", "value": "+1876" },
            { "name": "Japan(+81)", "value": "+81" },
            { "name": "Jersey(+44)", "value": "+44" },
            { "name": "Jordan(+962)", "value": "+962" },
            { "name": "Kazakhstan(+77)", "value": "+77" },
            { "name": "Kenya(+254)", "value": "+254" },
            { "name": "Kiribati(+686)", "value": "+686" },
            { "name": "Korea, Democratic People's Republic of Korea(+850)", "value": "+850" },
            { "name": "Korea, Republic of South Korea(+82)", "value": "+82" },
            { "name": "Kuwait(+965)", "value": "+965" },
            { "name": "Kyrgyzstan(+996)", "value": "+996" },
            { "name": "Laos(+856)", "value": "+856" },
            { "name": "Latvia(+371)", "value": "+371" },
            { "name": "Lebanon(+961)", "value": "+961" },
            { "name": "Lesotho(+266)", "value": "+266" },
            { "name": "Liberia(+231)", "value": "+231" },
            { "name": "Libyan Arab Jamahiriya(+218)", "value": "+218" },
            { "name": "Liechtenstein(+423)", "value": "+423" },
            { "name": "Lithuania(+370)", "value": "+370" },
            { "name": "Luxembourg(+352)", "value": "+352" },
            { "name": "Macao(+853)", "value": "+853" },
            { "name": "Macedonia(+389)", "value": "+389" },
            { "name": "Madagascar(+261)", "value": "+261" },
            { "name": "Malawi(+265)", "value": "+265" },
            { "name": "Malaysia(+60)", "value": "+60" },
            { "name": "Maldives(+960)", "value": "+960" },
            { "name": "Mali(+223)", "value": "+223" },
            { "name": "Malta(+356)", "value": "+356" },
            { "name": "Marshall Islands(+692)", "value": "+692" },
            { "name": "Martinique(+596)", "value": "+596" },
            { "name": "Mauritania(+222)", "value": "+222" },
            { "name": "Mauritius(+230)", "value": "+230" },
            { "name": "Mayotte(+262)", "value": "+262" },
            { "name": "Mexico(+52)", "value": "+52" },
            { "name": "Micronesia, Federated States of Micronesia(+691)", "value": "+691" },
            { "name": "Moldova(+373)", "value": "+373" },
            { "name": "Monaco(+377)", "value": "+377" },
            { "name": "Mongolia(+976)", "value": "+976" },
            { "name": "Montenegro(+382)", "value": "+382" },
            { "name": "Montserrat(+1664)", "value": "+1664" },
            { "name": "Morocco(+212)", "value": "+212" },
            { "name": "Mozambique(+258)", "value": "+258" },
            { "name": "Myanmar(+95)", "value": "+95" },
            { "name": "Namibia(+264)", "value": "+264" },
            { "name": "Nauru(+674)", "value": "+674" },
            { "name": "Nepal(+977)", "value": "+977" },
            { "name": "Netherlands(+31)", "value": "+31" },
            { "name": "Netherlands Antilles(+599)", "value": "+599" },
            { "name": "New Caledonia(+687)", "value": "+687" },
            { "name": "New Zealand(+64)", "value": "+64" },
            { "name": "Nicaragua(+505)", "value": "+505" },
            { "name": "Niger(+227)", "value": "+227" },
            { "name": "Nigeria(+234)", "value": "+234" },
            { "name": "Niue(+683)", "value": "+683" },
            { "name": "Norfolk Island(+672)", "value": "+672" },
            { "name": "Northern Mariana Islands(+1670)", "value": "+1670" },
            { "name": "Norway(+47)", "value": "+47" },
            { "name": "Oman(+968)", "value": "+968" },
            { "name": "Pakistan(+92)", "value": "+92" },
            { "name": "Palau(+680)", "value": "+680" },
            { "name": "Palestinian Territory, Occupied(+970)", "value": "+970" },
            { "name": "Panama(+507)", "value": "+507" },
            { "name": "Papua New Guinea(+675)", "value": "+675" },
            { "name": "Paraguay(+595)", "value": "+595" },
            { "name": "Peru(+51)", "value": "+51" },
            { "name": "Philippines(+63)", "value": "+63" },
            { "name": "Pitcairn(+872)", "value": "+872" },
            { "name": "Poland(+48)", "value": "+48" },
            { "name": "Portugal(+351)", "value": "+351" },
            { "name": "Puerto Rico(+1939)", "value": "+1939" },
            { "name": "Qatar(+974)", "value": "+974" },
            { "name": "Romania(+40)", "value": "+40" },
            { "name": "Russia(+7)", "value": "+7" },
            { "name": "Rwanda(+250)", "value": "+250" },
            { "name": "Reunion(+262)", "value": "+262" },
            { "name": "Saint Barthelemy(+590)", "value": "+590" },
            { "name": "Saint Helena, Ascension and Tristan Da Cunha(+290)", "value": "+290" },
            { "name": "Saint Kitts and Nevis(+1869)", "value": "+1869" },
            { "name": "Saint Lucia(+1758)", "value": "+1758" },
            { "name": "Saint Martin(+590)", "value": "+590" },
            { "name": "Saint Pierre and Miquelon(+508)", "value": "+508" },
            { "name": "Saint Vincent and the Grenadines(+1784)", "value": "+1784" },
            { "name": "Samoa(+685)", "value": "+685" },
            { "name": "San Marino(+378)", "value": "+378" },
            { "name": "Sao Tome and Principe(+239)", "value": "+239" },
            { "name": "Saudi Arabia(+966)", "value": "+966" },
            { "name": "Senegal(+221)", "value": "+221" },
            { "name": "Serbia(+381)", "value": "+381" },
            { "name": "Seychelles(+248)", "value": "+248" },
            { "name": "Sierra Leone(+232)", "value": "+232" },
            { "name": "Singapore(+65)", "value": "+65" },
            { "name": "Slovakia(+421)", "value": "+421" },
            { "name": "Slovenia(+386)", "value": "+386" },
            { "name": "Solomon Islands(+677)", "value": "+677" },
            { "name": "Somalia(+252)", "value": "+252" },
            { "name": "South Africa(+27)", "value": "+27" },
            { "name": "South Sudan(+211)", "value": "+211" },
            { "name": "South Georgia and the South Sandwich Islands(+500)", "value": "+500" },
            { "name": "Spain(+34)", "value": "+34" },
            { "name": "Sri Lanka(+94)", "value": "+94" },
            { "name": "Sudan(+249)", "value": "+249" },
            { "name": "Suriname(+597)", "value": "+597" },
            { "name": "Svalbard and Jan Mayen(+47)", "value": "+47" },
            { "name": "Swaziland(+268)", "value": "+268" },
            { "name": "Sweden(+46)", "value": "+46" },
            { "name": "Switzerland(+41)", "value": "+41" },
            { "name": "Syrian Arab Republic(+963)", "value": "+963" },
            { "name": "Taiwan(+886)", "value": "+886" },
            { "name": "Tajikistan(+992)", "value": "+992" },
            { "name": "Tanzania, United Republic of Tanzania(+255)", "value": "+255" },
            { "name": "Thailand(+66)", "value": "+66" },
            { "name": "Timor-Leste(+670)", "value": "+670" },
            { "name": "Togo(+228)", "value": "+228" },
            { "name": "Tokelau(+690)", "value": "+690" },
            { "name": "Tonga(+676)", "value": "+676" },
            { "name": "Trinidad and Tobago(+1868)", "value": "+1868" },
            { "name": "Tunisia(+216)", "value": "+216" },
            { "name": "Turkey(+90)", "value": "+90" },
            { "name": "Turkmenistan(+993)", "value": "+993" },
            { "name": "Turks and Caicos Islands(+1649)", "value": "+1649" },
            { "name": "Tuvalu(+688)", "value": "+688" },
            { "name": "Uganda(+256)", "value": "+256" },
            { "name": "Ukraine(+380)", "value": "+380" },
            { "name": "United Arab Emirates(+971)", "value": "+971" },
            { "name": "United Kingdom(+44)", "value": "+44" },
            { "name": "United States(+1)", "value": "+1" },
            { "name": "Uruguay(+598)", "value": "+598" },
            { "name": "Uzbekistan(+998)", "value": "+998" },
            { "name": "Vanuatu(+678)", "value": "+678" },
            { "name": "Venezuela(+58), Bolivarian Republic of Venezuela", "value": "+58" },
            { "name": "Vietnam(+1284)", "value": "+84" },
            { "name": "Virgin Islands(), British", "value": "+1284" },
            { "name": "Virgin Islands(+1340), U.S.", "value": "+1340" },
            { "name": "Wallis and Futuna(+681)", "value": "+681" },
            { "name": "Yemen(+967)", "value": "+967" },
            { "name": "Zambia(+260)", "value": "+260" },
            { "name": "Zimbabwe(+263)", "value": "+263" }
        ];
    

// Toggle buttons //
    buttons = [{"value":"Male"}, {"value":"Female"}];
    buttons1 = [{"value":"Singaporean"}, {"value":"PR"}, {"value":"Others"}];
    smoker = [{"value":"Yes"}, {"value":"No"}];
    EnglishSpoke = [{"value":"Yes"}, {"value":"No"}];
    PolitcalExposedPerson = [{"value":"Yes"}, {"value":"No"}];


    ngOnInit() {

    }

    

}
